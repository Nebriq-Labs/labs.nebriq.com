import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Project } from "@/types";

export const ProjectCard = ({
  name,
  description,
  techStack,
  link,
}: Project) => {
  return (
    <Card className="border border-border p-6 rounded-sm group hover:border-primary transition-colors duration-300 bg-card/30">
      <CardHeader>
        <CardTitle className="font-mono text-lg font-semibold">
          Project_{name}
        </CardTitle>

        <CardDescription className="text-sm text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex gap-2 flex-wrap">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 bg-muted text-muted-foreground rounded-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <Link
            href={link}
            className="text-xs font-mono text-primary group-hover:underline"
          >
            explore →
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
