'use server'

import { collections, dbConnect } from "@/lib/dbConnect";

// post quiz to database | used in add-quiz page
export const postQuiz = async (payload) => {

    // 1. check payload
    if (payload.length === 0) return null;

    // 2. create quiz
    const newQuiz = payload.map((q) => ({...q, createdAt: new Date().toISOString()}));

    // 3. insert quiz
    const result = await dbConnect(collections.QUIZZES).insertMany(newQuiz);
    
    if (result.acknowledged) {
        return {
            ...result,
            insertedIds: Object.values(result.insertedIds).map(id => id.toString())
        }
    }
}

// fetch quizzes by course and topic | used in quiz page
export const getQuizzes = async () => {
    const quizzes = await dbConnect(collections.QUIZZES).find().toArray();
    return quizzes.map(quiz => ({
        ...quiz,
        _id: quiz._id.toString()
    }));
}