'use client';

import { useState } from 'react';
import SingleQuiz from './SingleQuiz';

const QuizPage = ({ quiz }) => {
    const [questions] = useState(quiz || []);
    const [answers, setAnswers] = useState({});
    const [count, setCount] = useState(0);

    const currentQuestion = questions[count];

    // handle answer selection
    const handleChange = (questionId, option) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: option,
        }));
    };

    // handle quiz submission
    const handleSubmit = () => {
        const payload = {
            responses: answers,
            submittedAt: new Date(),
        };

        console.log('Submitting quiz:', payload);
    };

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
                        onClick={handleSubmit}
                        className="btn btn-soft btn-success"
                    >
                        Submit
                    </button>
                ) : (
                    <button
                        onClick={() => setCount(count + 1)}
                        className="btn btn-soft btn-primary"
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
};

export default QuizPage;