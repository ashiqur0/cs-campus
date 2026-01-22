import { getQuizzes } from '@/actions/server/quiz';
import QuizPage from './QuizPlayer';


const Quiz = async () => {

    const quiz = await getQuizzes();

    return (
        <div>
            <QuizPage quiz={quiz}></QuizPage>
        </div>
    );
}
export default Quiz;