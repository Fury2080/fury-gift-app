"use client";

import { useState } from "react";
import { questions } from "../data/questions";
import { GiftDialog } from "./gift-dialog";
import Question from "./question";
import { Card } from "./ui/card";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);

  const handleAnswer = (option: string) => {
    setSelectedOption(option);
    setIsAnswered(true);
    if (
      questions[currentQuestionIndex] &&
      option === questions[currentQuestionIndex].answer
    ) {
      setScore(score + 1);
    }
    setTimeout(() => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsAnswered(false);
      setSelectedOption("");
    }, 1000);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Card className="mx-auto mt-10 w-full max-w-md p-4">
      {currentQuestionIndex < questions.length && currentQuestion ? (
        <Question
          question={currentQuestion}
          handleAnswer={handleAnswer}
          isAnswered={isAnswered}
          selectedOption={selectedOption}
        />
      ) : (
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-2xl font-bold">Yayyy, Quiz Completed! 🎉</h2>
          <div>
            <p>
              You scored {score} out of {questions.length}! 💫
            </p>
            <p>You just won a special gift code! Check it out! 👇</p>
          </div>
          <div>
            <GiftDialog />
          </div>
        </div>
      )}
    </Card>
  );
};

export default Quiz;
