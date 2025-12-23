// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/portfolio/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "a collection of projects i&#39;ve worked on ⋆˙⟡",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Last updated 12/20/2025",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/cv/";
          },
        },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/blog/2015/code/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/portfolio/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/portfolio/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-group-bot-signature",
          title: 'Group Bot Signature',
          description: "Prototype implementation of HTTP Message Signatures using BBS group signatures for privacy-preserving bot authentication and accountability.",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/1_project/";
            },},{id: "projects-adversarial-robustness-testing-of-cnns-with-fgsm",
          title: 'Adversarial Robustness Testing of CNNs with FGSM',
          description: "Implemented a Fast Gradient Sign Method (FGSM) adversarial attack in PyTorch by training a convolutional neural network (CNN) and generating imperceptibly perturbed inputs that caused controlled misclassification, strengthening understanding of ML model vulnerabilities and adversarial-robust defense.",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/3_project/";
            },},{id: "projects-acm-teachla-ucla-cookie-jar",
          title: 'ACM TeachLA @ UCLA: Cookie Jar',
          description: "An educational web app that teaches kids about website cookies and internet privacy through interactive games.",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/4_project/";
            },},{id: "projects-creativelabs-ucla-bruin-watch",
          title: 'CreativeLabs @ UCLA: Bruin Watch',
          description: "A collaborative lecture streaming platform with smart transcript search and real-time study tools.",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/5_project/";
            },},{id: "projects-com-sci-35l-recipe-app",
          title: 'COM SCI 35L: Recipe App',
          description: "Web application for users to upload and share recipes.",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/6_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%76%75%6F%6E%67%32%30@%67.%75%63%6C%61.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/miravuong", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/miravuong", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
