import {useState} from "react";
import QuizQuestion from "./QuizQuestion.tsx";
import {mockQuizQuestions} from "../data/mockQuizQuestions.ts";
import QuizButton from "./QuizButton.tsx";
import QuizResult from "./QuizResult.tsx";

const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState<number[]>([]);
    const [isDone, setIsDone] = useState(false);
    const [userName, setUserName] = useState("");
    const [isQuizStarted, setIsQuizStarted] = useState(false);

    const handleAnswer = (index: number) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[currentQuestion] = index;
        setUserAnswers(updatedAnswers);
    };

    const handlePreviousClick = () => {
        setCurrentQuestion(currentQuestion - 1);
    };

    const handleNextClick = () => {
        setCurrentQuestion(currentQuestion + 1);
    };

    const handleDoneClick = () => {
        let newScore = 0;
        userAnswers.forEach((answer, index) => {
            if (answer === mockQuizQuestions[index].correctAnswer) {
                newScore++;
            }
        });
        setScore(newScore);
        setIsDone(true);
    };

    const handleStartQuiz = () => {
        setIsQuizStarted(true);
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setUserAnswers([]);
        setIsDone(false);
        setUserName("");
        setIsQuizStarted(false);
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
            {!isQuizStarted ? (
                <div className="start-screen text-center">
                    <h2 className="text-2xl font-bold mb-4">Welcome to the Quiz!</h2>
                    <form onSubmit={handleStartQuiz}>
                        <input
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="Enter your name"
                            className="border p-2 rounded mb-4 w-full"
                        />
                        <QuizButton label="Start Quiz"/>
                    </form>
                </div>
            ) : !isDone ? (
                <>
                    <p className="text-center text-lg font-semibold mb-4">
                        Hello, {userName || "Guest"}!
                    </p>
                    <QuizQuestion
                        question={mockQuizQuestions[currentQuestion].question}
                        options={mockQuizQuestions[currentQuestion].options}
                        handleAnswer={handleAnswer}
                        selectedAnswer={userAnswers[currentQuestion]}
                    />
                    <div className="flex justify-between mt-4">
                        <QuizButton
                            label="Previous"
                            onClick={handlePreviousClick}
                            disabled={currentQuestion === 0}
                        />
                        {currentQuestion < mockQuizQuestions.length - 1 ? (
                            <QuizButton
                                label="Next"
                                onClick={handleNextClick}
                            />
                        ) : (
                            <QuizButton
                                label="Done"
                                onClick={handleDoneClick}
                            />
                        )}
                    </div>
                </>
            ) : (
                <QuizResult
                    userName={userName}
                    totalQuestions={mockQuizQuestions.length}
                    correctAnswers={score}
                    restartQuiz={restartQuiz}
                />
            )}
        </div>
    );
};

export default Quiz;
