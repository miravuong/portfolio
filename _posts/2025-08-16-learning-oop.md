---
layout: post
title: sekai - pwn/learning-oop
date: 2025-08-16 07:34:00-0400
description: my first ever ctf attempt
tags: pwn
categories: ctf-writeups
related_posts: false
featured: true
---

# SekaiCTF — pwn/learning-oop

## Overview

This writeup is a postmortem of my attempt at the **SekaiCTF `pwn/learning-oop`** challenge, which I did with [Psi Beta Rho](https://pbr.acmcyber.com/) on August 16, 2025. The challenge centered on exploiting a C++-style object with a classic memory safety bug hidden behind an “OOP” façade. I initially fixated on a straightforward buffer overflow into adjacent fields, but the real win condition likely required abusing **object layout and virtual dispatch**.

The goal here isn’t to present a perfect solve, but to document my reasoning, where it went wrong, and how I *should* have approached it.

---

## Initial Recon

Here's what the class layout looked roughly like:

```
protected:
    char name[0x100];
    int age;
    int fullness;
    int status;
```

Key observations I made early:

* `name` is **256 bytes (0x100)**
* `int` fields are **4 bytes** each
* The fields are laid out contiguously in memory

At some point, I identified a concrete address where an object instance lived (e.g. `0x563c24b0c2d0`) and assumed `age` would sit at `base + 0x100`.

This led me to the obvious idea.

---

## My Initial Hypothesis: Simple Overflow

I assumed the vulnerability was a **linear overflow**:

* Overwrite `name`
* Spill into `age`, `fullness`, or `status`
* Manipulate game logic ("kills the pet", etc.)

This line of thinking:

* Counting bytes manually
* Talking about `256 char + 1 char` landing inside `age`
* Treating the object like a flat C struct

Although there was some flaws with my line of reasoning that I only realized afterwards:

* Overwriting ints rarely yields immediate control-flow
* Even if logic corruption occurs, it doesn’t naturally lead to RIP control
* The challenge name (`learning-oop`) was a huge hint I underweighted

---

## Flawed Reasoning

What I failed to fully internalize at the time:

### 1. The vtable exists

If this class had *any* virtual methods, then the real memory layout is:

```
[vptr]
[name (0x100 bytes)]
[age]
[fullness]
[status]
```

That means:

* The **first 8 bytes** (on x64) are a pointer to the vtable
* The vtable controls **which functions get called**

Which my teammate correctly noted to me that:

> "pretty sure you jus forge the vtable"

That was the correct direction.

---

### 2. Overflows don’t need to go *forward*

At the time, I was only considering overflowing from `name` **forward** into integers.

But most likely the target is often:

* Overwriting the **vptr** itself
* Or overwriting data that later influences virtual calls

If there was:

* A heap-allocated object
* A `delete` or virtual method call later

Then controlling the vtable pointer gives **direct control-flow hijacking**.

---

## The Likely Intended Solution and What I Should Have Done Differently

While I didn’t finish the challenge, I should've taken this likely intended path:

1. **Heap-allocated C++ object** with virtual methods
2. Input allows writing into `name` unsafely
3. Overflow enables corruption of:

   * the vtable pointer, or
   * a pointer later used as a vtable
4. Craft a **fake vtable** in controlled memory
5. Trigger a virtual call or destructor
6. Gain RIP control without a libc leak

This aligns perfectly with:

* Challenge title (`learning-oop`)
* Peer hints about forging vtables
* Absence of easy libc references

---

## Takeaways

Although I didn't solve it, I learned quite a lot with this being my first ctf attempt. Nonetheless, I had a good time playing with Psi Beta Rho and flirting with my discord kitten. Here's to better success with pwn challenges.

Finally, a cute message from my 🐱:
> "you are so smarrt mod"