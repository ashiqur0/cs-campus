import React from 'react';

const course = [
    {
        id: 1,
        title: 'Fundamental of C Programming',
        img: 'https://i.ibb.co.com/7dzwthjw/C-tutorial-Thumbnail.png',
        description: 'Learn the basics of C programming language.',
        instructor: 'Ashiqur Rahman',
        duration: '4 months',
        level: 'Beginner',
    },
    {
        id: 2,
        title: 'Object Oriented Programming with Java',
        img: 'https://i.ibb.co.com/7dzwthjw/C-tutorial-Thumbnail.png',
        description: 'Master the concepts of OOP using Java.',
        instructor: 'Samiul Islam',
        duration: '4 months',
        level: 'Beginner',
    },
    {
        id: 3,
        title: 'C++ for Competitive Programming',
        img: 'https://i.ibb.co.com/7dzwthjw/C-tutorial-Thumbnail.png',
        description: 'Enhance your problem-solving skills with C++.',
        instructor: 'Mushfique Anam',
        duration: '4 months',
        level: 'Beginner',
    },
    {
        id: 4,
        title: 'Data Structures in Java',
        img: 'https://i.ibb.co.com/7dzwthjw/C-tutorial-Thumbnail.png',
        description: 'Learn essential data structures using Java.',
        instructor: 'Ashiqur Rahman',
        duration: '4 months',
        level: 'Beginner',
    },
    {
        id: 5,
        title: 'Algorithms in Java',
        img: 'https://i.ibb.co.com/7dzwthjw/C-tutorial-Thumbnail.png',
        description: 'Learn essential algorithms using Java.',
        instructor: 'Ashiqur Rahman',
        duration: '4 months',
        level: 'Beginner',
    },
];

const Courses = () => {
    return (
        <div className="md:max-w-7xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Total Courses: {course.length}</h1>
        </div>
    );
};

export default Courses;