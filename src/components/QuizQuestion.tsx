import {FC, useEffect, useState} from "react";

const QuizQuestion: FC<QuizQuestionProps> = ({ question, options, handleAnswer, selectedAnswer }) => {

    const [selectedOption, setSelectedOption] = useState<number | null>(selectedAnswer);

    useEffect(() => {
        setSelectedOption(selectedAnswer);
    }, [selectedAnswer]);

    const handleCheckboxChange = (index: number) => {
        setSelectedOption(index);
        handleAnswer(index);
    }

    return (
        <>
            <h2 className="text-2xl font-semibold mb-4">{question}</h2>
            <div className="options-container">
                {options.map((option, index) => (
                    <div key={index} className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            checked={selectedOption === index}
                            onChange={() => handleCheckboxChange(index)}
                            className="mr-3 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label className="text-lg">{option}</label>
                    </div>
                ))}
            </div>
        </>
    );
};

export default QuizQuestion;

interface QuizQuestionProps {
    question: string;
    options: string[];
    handleAnswer: (index: number) => void;
    selectedAnswer: number | null;
}
