import {
  bobaquiz11,
  bobaquiz12,
  bobaquiz13,
  bobaquiz14,
  bobaquiz21,
  bobaquiz22,
  bobaquiz23,
  bobaquiz24,
  bobaquiz31,
  bobaquiz32,
  bobaquiz33,
  bobaquiz34,
  bobaquiz41,
  bobaquiz42,
  bobaquiz43,
  bobaquiz44,
  bobaquiz51,
} from "../assets";

export const preferenceQuiz = {
  questions: [
    {
      question: "What are you feeling today?",
      choices: [
        { choice: "Happy", image: bobaquiz11 },
        { choice: "Sad", image: bobaquiz12 },
        { choice: "Sick", image: bobaquiz13 },
        { choice: "Stressed", image: bobaquiz14 },
      ],
      type: "MCQs",
    },
    {
      question: "What type of drink do you usually get?",
      choices: [
        { choice: "Fruity", image: bobaquiz22 },
        { choice: "New", image: bobaquiz23 },
        { choice: "Milk Tea", image: bobaquiz21 },
        { choice: "Something Warm", image: bobaquiz24 },
      ],
      type: "MCQs",
    },
    {
      question: "What toppings do you tend to get?",
      choices: [
        { choice: "Classic Tapioca", image: bobaquiz44 },
        { choice: "Fruit Jellies", image: bobaquiz43 },
        { choice: "Grass Jelly", image: bobaquiz31 },
        { choice: "None", image: bobaquiz41 },
      ],
      type: "MCQs",
    },
  ],
};
