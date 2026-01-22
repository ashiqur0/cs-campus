'use client';

import { useState } from 'react';
import SingleQuiz from './SingleQuiz';
import { fireConfettiWithDuration } from '@/utils/confetti';

const QuizPage = ({ quiz }) => {
    const [questions] = useState(quiz || []);
    const [answers, setAnswers] = useState({});
    const [count, setCount] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const currentQuestion = questions[count];

    const handleChange = (questionId, option) => {        
        setAnswers(prev => ({
            ...prev,
            [questionId]: option,
        }));
    };

    const handleSubmit = () => {
        setSubmitted(true);
        fireConfettiWithDuration();
        console.log({ questions, answers });
    };

    // ✅ check if current question is answered
    const isAnswered = currentQuestion && answers[currentQuestion._id];

    if (submitted) {
        const totalQuestions = questions.length;
        const score = questions.reduce((acc, question) => {
            const userAnswer = answers[question._id];
            if (userAnswer === question.correctAnswer) {
                return acc + 1;
            }
            return acc;
        }, 0);
        
        return (
            <div className="flex flex-col items-center justify-center h-[60vh]">
                <h1 className="text-3xl font-bold mb-4">🎉 Congratulations!</h1>
                <p className="text-4xl font-bold">
                    You got <span className="text-green-500 text-5xl">{score} / {totalQuestions}</span> 🚀
                </p>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">C Programming Quiz</h1>

            {currentQuestion && (
                <SingleQuiz
                    currentQuestion={currentQuestion}
                    index={count}
                    answer={handleChange}
                    answers={answers}
                />
            )}

            <div className="flex items-center gap-4 mt-6">
                <button
                    disabled={count === 0}
                    onClick={() => setCount(count - 1)}
                    className="btn btn-soft btn-primary"
                >
                    Prev
                </button>

                {count === questions.length - 1 ? (
                    <button
                        disabled={!isAnswered}   // ✅ disabled if not answered
                        onClick={handleSubmit}
                        className="btn btn-soft btn-success disabled:opacity-50"
                    >
                        Submit
                    </button>
                ) : (
                    <button
                        disabled={!isAnswered}   // ✅ disabled if not answered
                        onClick={() => setCount(count + 1)}
                        className="btn btn-soft btn-primary disabled:opacity-50"
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
};

export default QuizPage;