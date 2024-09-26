export const mockQuizQuestions: MockQuizQuestion[] = [
    {
        question: "What is the output of `typeof NaN` in JavaScript?",
        options: ["number", "undefined", "NaN", "object"],
        correctAnswer: 0,
    },
    {
        question: "Which of the following methods is used to convert a JSON object into a string?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.toString()", "JSON.convert()"],
        correctAnswer: 1,
    },
    {
        question: "Which keyword is used to declare a constant variable in JavaScript?",
        options: ["const", "var", "let", "static"],
        correctAnswer: 0,
    },
    {
        question: "Which of the following is not a JavaScript data type?",
        options: ["String", "Number", "Boolean", "Float"],
        correctAnswer: 3,
    },
    {
        question: "What will `console.log(0.1 + 0.2 === 0.3)` print in JavaScript?",
        options: ["true", "undefined", "false", "NaN"],
        correctAnswer: 2,
    },
];

interface MockQuizQuestion {
    question: string;
    options: string[];
    correctAnswer: number;
}

