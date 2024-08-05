import Quiz from "~/components/quiz";
import { ThemeToggle } from "~/components/theme-toggle";

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <div className="flex flex-1 items-center justify-center">
        <Quiz />
      </div>
      <div className="border-t-[1px] p-4">
        <div className="flex justify-end">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
