'use server'

import { collections, dbConnect } from "@/lib/dbConnect";

// post quiz to database | used in add-quiz page
export const postQuiz = async (payload) => {
    const { course, topic, questions } = payload;

    // 1. check payload
    if (!course || !topic || !questions || questions.length === 0) return null;

    // 2. create quiz
    const newQuiz = {
        course,
        topic,
        questions,
        createdAt: new Date().toISOString()
    };

    // 3. insert quiz
    const result = await dbConnect(collections.QUIZZES).insertOne(newQuiz);
    if (result.acknowledged) {
        return {
            ...result,
            insertedId: result.insertedId.toString()
        }
    }
}