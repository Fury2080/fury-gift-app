import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Quiz from "~/components/quiz";
import { ThemeToggle } from "~/components/theme-toggle";
import { buttonVariants } from "~/components/ui/button";

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <div className="space-y-2 border-b-[1px] p-4">
        <h1 className="text-center text-3xl font-bold">
          Happy Birthday Surbhi 🎉
        </h1>
        <div className="text-center">
          <p className="text-muted-foreground">
            Finish this short quiz for a surprise at the end 👀
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-1 items-center justify-center">
        <Quiz />
      </div>

      {/* FOOTER */}
      <div className="border-t-[1px] p-4">
        <div className="flex items-center justify-between">
          <Link
            href={"https://github.com/aryanprince/fury-gift-app"}
            className={buttonVariants({ variant: "link" })}
          >
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              <p>View Source</p>
              <ExternalLink className="h-4 w-4" />
            </div>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
