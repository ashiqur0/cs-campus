'use client';

import { useState } from 'react';

const QuizPage = ({ quiz }) => {

    const [questions, setQuestions] = useState(quiz || []);
    const [answers, setAnswers] = useState(quiz || []);

    const handleChange = (questionId, option) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: option,
        }));
    };

    const handleSubmit = async () => {
        const payload = {
            responses: answers,
            submittedAt: new Date(),
        };

        console.log('Submitting quiz:', payload);
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">C Programming Quiz</h1>

            {questions.map((q, index) => (
                <div key={q._id} className="card bg-base-100 shadow mb-6">
                    <div className="card-body">
                        <h2 className="font-semibold">
                            {index + 1}. {q.question}
                        </h2>

                        <div className="space-y-2 mt-4">
                            {q.options.map(option => (
                                <label key={option} className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name={q._id}
                                        className="radio radio-primary"
                                        onChange={() => handleChange(q._id, option)}
                                        checked={answers[q._id] === option}
                                    />
                                    <span>{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            ))}

            <button
                className="btn btn-primary w-full"
                onClick={handleSubmit}
                disabled={Object.keys(answers).length !== questions.length}
            >
                Submit Quiz
            </button>
        </div>
    );
}

export default QuizPage;