import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ProjectCard } from "../components/project-card";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl space-y-24">
      {/* Hero Section */}
      <section className="flex flex-col items-center space-y-6 pt-12">
        <div className="inline-block relative mb-4">
          <div className="absolute inset-0 bg-primary/20 blur-xl"></div>
          <h1 className="text-6xl font-bold relative z-10">NEBRIQ LABS</h1>
        </div>
        <p className="text-xl text-muted-foreground text-center max-w-2xl font-mono">
          We build innovative AI and neurotech tools to unlock the future of
          human potential.
        </p>
      </section>

      {/* About Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-mono font-bold border-l-4 border-primary pl-4">
          00 :: ABOUT
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              At Nebriq Labs, we focus on creating innovative AI and neurotech
              tools that empower individuals and organizations. Our solutions
              aim to bridge the gap between technology and human potential.
            </p>
            <p className="text-muted-foreground">
              We believe in open collaboration and continuous exploration. By
              blending research with real-world applications, we strive to shape
              a future where advanced technologies enhance everyday life.
            </p>
          </div>

          <div className="space-y-4">
            <div className="border border-border p-4 rounded-sm bg-card/50">
              <h3 className="font-mono mb-2 text-primary">OUR APPROACH</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-primary">→</span> We prioritize your
                  data protection at every step.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">→</span>
                  Clean, intuitive design for seamless interaction.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">→</span>
                  Pushing the boundaries of AI and neurotech.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">→</span> Flexible systems that
                  grow with your needs.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-mono font-bold border-l-4 border-primary pl-4">
          01 :: STUFF WE BUILT
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-mono font-bold border-l-4 border-primary pl-4">
          02 :: CONNECT
        </h2>
        <div className="border border-border rounded-sm p-6 bg-card/50">
          <p className="text-muted-foreground mb-6">
            Interested in working with us? Need a custom solution for your
            business?
          </p>
          <Link
            href="mailto:info@nebriq.com"
            className={buttonVariants({ variant: "outline" })}
          >
            <span className="font-mono">INITIATE_CONTACT</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-12 pb-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-border pt-8">
          <div className="font-mono text-sm text-muted-foreground">
            NEBRIQ LABS © {new Date().getFullYear()}
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href="https://github.com/nebriq-labs"
              className="text-muted-foreground hover:text-primary"
            >
              github
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
