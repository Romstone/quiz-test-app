import {FC} from "react";

const QuizButton: FC<QuizButtonProps> = ({ label, onClick, disabled = false}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`py-2 px-4 rounded-md text-white transition-all 
                ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'}`}
        >
            {label}
        </button>
    );
};

export default QuizButton;

interface QuizButtonProps {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
}
