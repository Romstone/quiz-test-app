import {FC} from "react";
import QuizButton from "./QuizButton.tsx";

const QuizResult: FC<QuizResultProps> = ({ userName, totalQuestions, correctAnswers, restartQuiz }) => {

    const percentage = Math.round((correctAnswers / totalQuestions) * 100);

    return (
        <div className="result-container text-center">
            <h2 className="text-3xl font-bold mb-4">Quiz Results</h2>
            <p className="text-xl mb-4">Congrats, {userName || "Guest"}, your score is: {percentage} / 100!</p>
            <QuizButton
                label="Start Again!"
                onClick={restartQuiz}
            />
        </div>
    );
};

export default QuizResult;

interface QuizResultProps {
    userName: string;
    totalQuestions: number;
    correctAnswers: number;
    restartQuiz: () => void;
}
