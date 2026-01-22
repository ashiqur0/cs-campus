'use client';

const SingleQuiz = ({ currentQuestion, index, answer, answers }) => {
    const { _id, question, options } = currentQuestion;

    return (
        <div>
            <h1 className="text-xl font-semibold">
                Question {index + 1}: {question}
            </h1>

            <div className="grid grid-cols-2 gap-4 mt-4">
                {options.map((opt, i) => (
                    <button
                        key={i}
                        onClick={() => answer(_id, opt)}
                        className={`btn btn-soft p-5 ${
                            answers[_id] === opt ? 'btn-secondary' : ''
                        }`}
                    >
                        {opt}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SingleQuiz;