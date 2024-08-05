"use client";

import Image from "next/image";
import { Button } from "~/components/ui/button";
import { AspectRatio } from "./ui/aspect-ratio";

interface QuestionProps {
  question: {
    image: string;
    options: string[];
    answer: string;
  };
  handleAnswer: (option: string) => void;
  isAnswered: boolean;
  selectedOption: string;
}

const Question = ({
  question,
  handleAnswer,
  isAnswered,
  selectedOption,
}: QuestionProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center">
        <div className="w-[400px]">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={question.image}
              alt="logo"
              fill={true}
              className="rounded-md"
            />
          </AspectRatio>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <Button
            key={index}
            onClick={() => handleAnswer(option)}
            className={`w-full p-4 text-center ${
              isAnswered
                ? option === question.answer
                  ? "bg-green-500 text-white"
                  : option === selectedOption
                    ? "bg-red-500 text-white"
                    : ""
                : ""
            }`}
            disabled={isAnswered}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Question;
