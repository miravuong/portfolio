import Image from "next/image";

const basePath = process.env.__NEXT_ROUTER_BASEPATH || "/portfolio";

export default function AboutPage() {
  return (
    <article className="space-y-5 leading-relaxed">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
        <div className="space-y-5">
          <Image
            src={`${basePath}/title.png`}
            alt="Mirabel Vuong"
            width={300}
            height={150}
            className="title-img"
            priority
          />

          <p>
            Hello! I&apos;m a Computer Science and Linguistics undergraduate at
            the University of California, Los Angeles.
          </p>
        </div>

        <div className="relative shrink-0 w-[200px] h-[200px] self-center sm:self-start">
          <Image
            src={`${basePath}/notetab.png`}
            alt=""
            fill
            className="object-contain title-img"
          />
          <div className="absolute inset-[12%] top-[14%]">
            <Image
              src={`${basePath}/headshot.jpg`}
              alt="Mirabel Vuong"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <p>
        I have a strong interest in <strong>security engineering</strong>,
        cloud computing, and scripting/automation. Some specific topics I&apos;ve done
        technical research on include BLS12-381 for efficient digital signatures
        and Fast Gradient Sign Method (FGSM) for convolutional neural networks.
        I also volunteer and teach free computer science classes at elementary
        schools in Los Angeles with{" "}
        <a
          href="https://teachla.uclaacm.com/"
          className="underline hover:opacity-60"
          target="_blank"
          rel="noopener noreferrer"
        >
          ACM TeachLA
        </a>
        .
      </p>

      <p>
        I enjoy playing <strong>classical piano</strong> competitively and in my
        leisure time. I hold two Piano Diplomas from the National Guild of Piano
        Teachers (NGPT) and have previously won 2x State Honors for Music
        Teachers Association of California (MTAC) Certificate of Merit.
      </p>

      <p>
        Reach out to me on{" "}
        <a
          href="https://www.linkedin.com/in/miravuong/"
          className="underline hover:opacity-60"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        or check out my projects on{" "}
        <a
          href="https://github.com/miravuong"
          className="underline hover:opacity-60"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>

      <div className="pt-12 flex flex-col sm:flex-row sm:justify-between gap-6">
        <div>
          <Image
            src={`${basePath}/ffheader.png`}
            alt="Fun Facts"
            width={150}
            height={75}
            className="title-img"
          />
        </div>

        <ul className="space-y-3">
          {[
            "I\u2019ve played the piano for 15 years.",
            "I love psychological thriller films.",
            "I eat kimchi and d\u01B0a chua almost every day (for gut health).",
          ].map((fact) => (
            <li key={fact} className="flex items-start gap-2">
              <Image
                src={`${basePath}/checkmark.png`}
                alt=""
                width={24}
                height={24}
                className="shrink-0 mt-0.5 title-img"
              />
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
