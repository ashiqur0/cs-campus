import { getQuizzes } from '@/actions/server/quiz';
import QuizPage from './QuizPlayer';


const Quiz = async () => {

    const quiz = await getQuizzes();
    console.log(quiz);

    return (
        <div>
            <div>Quiz Page({quiz.length})</div>
            <QuizPage quiz={quiz}></QuizPage>
        </div>
    );
}
export default Quiz;