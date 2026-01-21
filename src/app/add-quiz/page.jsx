'use client';

import { postQuiz } from '@/actions/server/quiz';
import { useState, useMemo } from 'react';
import { FaTrashCan } from "react-icons/fa6";
import Swal from 'sweetalert2';

// pore eta data source theke ana hobe
const coursesData = {
    'C Programming': ['Basics', 'Loops', 'Functions'],
    'C++': ['OOP', 'STL'],
    'JavaScript': ['ES6', 'DOM'],
};

export default function AddQuiz() {

    const [course, setCourse] = useState('');
    const [topic, setTopic] = useState('');

    const [questions, setQuestions] = useState([
        {
            question: '',
            options: ['', '', '', ''],
            correctAnswer: '',
        },
    ]);

    // ✅ Derive topics from selected course
    const topics = useMemo(() => {
        return course ? coursesData[course] || [] : [];
    }, [course]);

    /* ---------------- Question Handlers ---------------- */
    const handleQuestionChange = (qIndex, value) => {
        const updated = [...questions];
        updated[qIndex].question = value;
        setQuestions(updated);
    };

    const handleOptionChange = (qIndex, oIndex, value) => {
        const updated = [...questions];
        updated[qIndex].options[oIndex] = value;
        setQuestions(updated);
    };

    const handleCorrectAnswerChange = (qIndex, value) => {
        const updated = [...questions];
        updated[qIndex].correctAnswer = value;
        setQuestions(updated);
    };

    const addNewQuestion = () => {
        setQuestions([
            ...questions,
            {
                question: 'q',
                options: ['', '', '', ''],
                correctAnswer: '',
            },
        ]);
    };

    const handleDeleteQuestions = (qIndex) => {
        const updated = questions.filter((_, index) => index !== qIndex);
        setQuestions(updated);
    }

    /* ---------------- Store Quiz To Database ---------------- */
    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            course,
            topic,
            questions,
        };

        const result = await postQuiz(payload);
        if (result.insertedId) {
            new Swal('success', "Quiz added successfully!", 'success');    
        } else {
            new Swal('error', "Failed to add quiz. Please try again.", 'error');
        }
    
        // Reset form After Submission
        e.target.reset();
        setCourse('');
        setTopic('');
        setQuestions([
            {
                question: '',
                options: ['', '', '', ''],
                correctAnswer: '',
            },
        ]);
    };

    return (
        <div className="max-w-7xl mx-auto p-6 space-y-6">
            <h2 className="text-2xl font-semibold">Add Quiz</h2>

            {/* ================= Select Course and Topic ================= */}
            <div className='w-full flex md:flex-row flex-col gap-6 mb-6 items-center'>
                {/* ================= Course ================= */}

                <div className="w-full">
                    <label className="block mb-1">Course</label>
                    <select
                        value={course}
                        onChange={(e) => {
                            setCourse(e.target.value);
                            setTopic(''); // ✅ reset topic on course change
                        }}
                        className="w-full border p-2 rounded"
                        required
                    >
                        <option value="" className='text-black'>Select Course</option>
                        {Object.keys(coursesData).map((c) => (
                            <option key={c} value={c} className='text-black'>
                                {c}
                            </option>
                        ))}
                    </select>
                </div>

                {/* ================= Topic ================= */}
                <div className="w-full">
                    <label className="block mb-1">Topic</label>
                    <select
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full border p-2 rounded"
                        required
                    >
                        <option value="" className='text-black'>Select Topic</option>
                        {topics.map((t) => (
                            <option className='text-black' key={t} value={t}>
                                {t}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* ================= Questions ================= */}
            <form onSubmit={handleSubmit} className="space-y-8">
                {questions.map((q, qIndex) => (
                    <div
                        key={qIndex}
                        className="space-y-4"
                    >
                        <div className='flex justify-between items-center'>
                            <h3 className="font-semibold">Question {qIndex + 1}</h3>
                            <div onClick={() => handleDeleteQuestions(qIndex)} className='btn btn-sm btn-soft btn-primary border border-purple-900' title='delete question'><FaTrashCan size={16} /></div>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter question"
                            value={q.question}
                            onChange={(e) =>
                                handleQuestionChange(qIndex, e.target.value)
                            }
                            className="w-full border p-2 rounded"
                            required
                        />

                        {q.options.map((opt, oIndex) => (
                            <input
                                key={oIndex}
                                type="text"
                                placeholder={`Option ${oIndex + 1}`}
                                value={opt}
                                onChange={(e) =>
                                    handleOptionChange(qIndex, oIndex, e.target.value)
                                }
                                className="w-8/9 border p-2 rounded"
                                required
                            />
                        ))}

                        <select
                            value={q.correctAnswer}
                            onChange={(e) =>
                                handleCorrectAnswerChange(qIndex, e.target.value)
                            }
                            className="w-full border p-2 rounded"
                            required
                        >
                            <option value="" className='text-black'>Select Correct Answer</option>
                            {q.options.map((_, index) => (
                                <option key={index} value={q.options[index]} className='text-black'>
                                    Option {index + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}

                <div className="flex gap-4 items-center">
                    <button
                    type="button"
                    onClick={addNewQuestion}
                    className="btn btn-soft border px-4 py-2 rounded"
                >
                    + Add Another Question
                </button>

                <button
                    type="submit"
                    className="btn btn-primary btn-soft border border-purple-900 text-white px-6 py-2 rounded"
                >
                    Submit Quiz
                </button>
                </div>
            </form>
        </div>
    );
}