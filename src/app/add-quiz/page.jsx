'use client';

import { useState } from 'react';

const coursesData = {
    'C Programming': ['Introduction', 'Loops', 'Functions', 'Pointers'],
    'C++': ['OOP', 'STL', 'Inheritance'],
    'JavaScript': ['Basics', 'DOM', 'ES6'],
};

export default function AddQuiz() {
    const [course, setCourse] = useState('');
    const [topic, setTopic] = useState('');
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [correctAnswer, setCorrectAnswer] = useState('');

    const handleOptionChange = (index, value) => {
        const updatedOptions = [...options];
        updatedOptions[index] = value;
        setOptions(updatedOptions);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const quizData = {
            course,
            topic,
            question,
            options,
            correctAnswer,
        };

        console.log('Quiz Payload:', quizData);

        // Example API call
        /*
        await fetch('/api/quizzes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(quizData),
        });
        */

        // Reset form
        setQuestion('');
        setOptions(['', '', '', '']);
        setCorrectAnswer('');
    };

    return (
        <div className="max-w-2xl mx-auto p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Add Quiz</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Course Selection */}
                <div>
                    <label className="block mb-1">Course</label>
                    <select
                        value={course}
                        onChange={(e) => {
                            setCourse(e.target.value);
                            setTopic('');
                        }}
                        required
                        className="w-full border p-2 rounded"
                    >
                        <option className='text-black' value="">Select Course</option>
                        {Object.keys(coursesData).map((c) => (
                            <option className='text-black' key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Topic Selection */}
                <div>
                    <label className="block mb-1">Topic</label>
                    <select
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        required
                        className="w-full border p-2 rounded"
                        disabled={!course}
                    >
                        <option value="">Select Topic</option>
                        {course &&
                            coursesData[course].map((t) => (
                                <option key={t} value={t}>
                                    {t}
                                </option>
                            ))}
                    </select>
                </div>

                {/* Question */}
                <div>
                    <label className="block mb-1">Question</label>
                    <input
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        required
                        className="w-full border p-2 rounded"
                    />
                </div>

                {/* Options */}
                {options.map((opt, index) => (
                    <div key={index}>
                        <label className="block mb-1">Option {index + 1}</label>
                        <input
                            type="text"
                            value={opt}
                            onChange={(e) => handleOptionChange(index, e.target.value)}
                            required
                            className="w-full border p-2 rounded"
                        />
                    </div>
                ))}

                {/* Correct Answer */}
                <div>
                    <label className="block mb-1">Correct Answer</label>
                    <select
                        value={correctAnswer}
                        onChange={(e) => setCorrectAnswer(e.target.value)}
                        required
                        className="w-full border p-2 rounded"
                    >
                        <option value="">Select Correct Option</option>
                        {options.map((opt, index) => (
                            <option key={index} value={opt}>
                                Option {index + 1}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="bg-black text-white px-4 py-2 rounded"
                >
                    Add Quiz
                </button>
            </form>
        </div>
    );
}