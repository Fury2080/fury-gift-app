"use client";

import Image from "next/image";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { Button } from "~/components/ui/button";

export default function QuestionCard() {
  return (
    <div className="flex h-fit flex-col items-center justify-center gap-8 rounded-lg border border-border p-8">
      {/* HEADING */}
      <div className="flex flex-col gap-2">
        <p className="text-4xl font-semibold">Question 1</p>
        <p className="text-center text-neutral-500">Choose a game</p>
      </div>
      {/* IMAGE */}
      <div className="w-[400px]">
        <AspectRatio ratio={16 / 9}>
          <Image
            src="/days-gone.jpg"
            alt="logo"
            fill={true}
            className="rounded-md"
          />
        </AspectRatio>
      </div>
      {/* OPTIONS */}
      <div className="grid grid-cols-2 gap-4">
        <Button variant={"outline"}>Until Dawn</Button>
        <Button variant={"outline"}>Days Gone</Button>
        <Button variant={"outline"}>Phasmaphobia</Button>
        <Button variant={"outline"}>Detroit Become Human</Button>
      </div>
      <Button variant={"secondary"} className="w-full">
        Continue
      </Button>
    </div>
  );
}
