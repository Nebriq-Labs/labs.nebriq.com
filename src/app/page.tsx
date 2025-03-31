"use client";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ProjectCard } from "../components/project-card";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl space-y-24">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center space-y-6 pt-12"
      >
        <div className="inline-block relative mb-4">
          <div className="absolute inset-0 bg-primary/20 blur-xl"></div>
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-6xl font-bold relative z-10"
          >
            NEBRIQ LABS
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-xl text-muted-foreground text-center max-w-2xl font-mono"
        >
          We build innovative AI and neurotech tools to unlock the future of
          human potential.
        </motion.p>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <motion.h2
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-mono font-bold border-l-4 border-primary pl-4"
        >
          00 :: ABOUT
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
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
          </motion.div>

          <motion.div
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="border border-border p-4 rounded-sm bg-card/50">
              <h3 className="font-mono mb-2 text-primary">OUR APPROACH</h3>
              <ul className="space-y-2 text-sm">
                <motion.li
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-primary">→</span> We prioritize your
                  data protection at every step.
                </motion.li>
                <motion.li
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-primary">→</span>
                  Clean, intuitive design for seamless interaction.
                </motion.li>
                <motion.li
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-primary">→</span>
                  Pushing the boundaries of AI and neurotech.
                </motion.li>
                <motion.li
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-primary">→</span> Flexible systems that
                  grow with your needs.
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <motion.h2
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-mono font-bold border-l-4 border-primary pl-4"
        >
          01 :: STUFF WE BUILT
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <motion.h2
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-mono font-bold border-l-4 border-primary pl-4"
        >
          02 :: CONNECT
        </motion.h2>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border border-border rounded-sm p-6 bg-card/50"
        >
          <p className="text-muted-foreground mb-6">
            Interested in working with us? Need a custom solution for your
            business?
          </p>
          <Link
            href="mailto:hi@nebriq.com"
            className={buttonVariants({ variant: "outline" })}
          >
            <span className="font-mono">INITIATE_CONTACT</span>
          </Link>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pt-12 pb-8"
      >
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-border pt-8">
          <div className="font-mono text-sm text-muted-foreground">
            NEBRIQ LABS © {new Date().getFullYear()}
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <motion.div
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href="https://github.com/nebriq-labs"
                className="text-muted-foreground hover:text-primary"
              >
                github
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.footer>
    </main>
  );
}
