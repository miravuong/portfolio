const projects = [
  {
    title: "Tripwire",
    description:
      "A multi-layered secrets detection pipeline in Golang with pre-commit hooks (Gitleaks + TruffleHog), GitHub Actions CI scanning with SARIF output, and HashiCorp Vault credential management. Deployed as a containerized Kubernetes workload via Docker.",
    tech: "Go, Docker, Kubernetes, GitHub Actions, HashiCorp Vault, Gitleaks, TruffleHog",
    link: "https://github.com/miravuong/tripwire",
  },
  {
    title: "chug-track",
    description: "drink-tracker app. i love heytea!",
    tech: "TypeScript, MongoDB",
  },
  {
    title: "Group Bot Signature",
    description:
      "Prototype implementation of HTTP Message Signatures using BBS group signatures for privacy-preserving bot authentication and accountability.",
    tech: "Python, SageMath",
    link: "https://github.com/pbrucla/group-bot-signatures",
  },
  {
    title: "Adversarial Robustness Testing of CNNs with FGSM",
    description:
      "Implemented a Fast Gradient Sign Method (FGSM) adversarial attack in PyTorch by training a CNN and generating perturbed inputs that caused controlled misclassification.",
    tech: "Python (PyTorch), Google Colab",
    link: "https://github.com/miravuong/aml-cnn",
  },
  {
    title: "ACM TeachLA: Cookie Jar",
    description:
      "An educational web app that teaches kids about website cookies and internet privacy through interactive games.",
    tech: "React, TypeScript, Express, Node.js, MongoDB",
    link: "https://github.com/uclaacm/cookie-jar",
  },
  {
    title: "CreativeLabs: Bruin Watch",
    description:
      "A collaborative lecture streaming platform with smart transcript search and real-time study tools.",
    tech: "React, Node.js, MongoDB, Amazon S3, Google Cloud, Gemini API",
    link: "https://github.com/miravuong/BruinWatch",
  },
  {
    title: "Recipe App",
    description: "Web application for users to upload and share recipes.",
    tech: "React, Node.js, Express, MongoDB",
    link: "https://youtu.be/oNB__gjI_bA?si=mhTSe4RIq9xdWDwi",
  },
];

import Image from "next/image";

const basePath = process.env.__NEXT_ROUTER_BASEPATH || "/portfolio";

export default function ProjectsPage() {
  return (
    <div>
      <Image
        src={`${basePath}/pheader.png`}
        alt="Projects"
        width={300}
        height={150}
        className="title-img mb-8"
        priority
      />
      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.title} className="border-b border-foreground/10 pb-6">
            <h2 className="text-lg font-semibold">
              {project.link ? (
                <a
                  href={project.link}
                  className="underline hover:opacity-60"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h2>
            <p className="text-sm text-foreground/50 mt-1">{project.tech}</p>
            <p className="mt-2">{project.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-12">
        <Image
          src={`${basePath}/eegg.png`}
          alt=""
          width={120}
          height={200}
          className="title-img"
        />
      </div>
    </div>
  );
}
