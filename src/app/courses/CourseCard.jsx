import Image from 'next/image';
import Link from 'next/link';
import { GiTeacher } from "react-icons/gi";
import { IoIosTime } from "react-icons/io";
import { SiLevelsdotfyi } from "react-icons/si";

const CourseCard = ({ course }) => {
    return (
        <div key={course.id}
            className="border border-primary rounded-lg p-4 mb-10 hover:shadow-md shadow-white transition-shadow duration-300">
            <Image
                src={course.img}
                className="w-full h-50 objeclogo-cs-campus.pngt-cover mb-4 rounded"
                alt={course.title}
                width={500}
                height={500}
            />

            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="mb-2">{course.description}</p>

            <div className="flex items-center gap-2">
                <span><GiTeacher /></span>
                <span>{course.instructor}</span>
            </div>

            <div className="flex items-center gap-2">
                <span><IoIosTime /></span>
                <span>{course.duration}</span>
            </div>

            <div className="flex items-center gap-2">
                <span><SiLevelsdotfyi /></span>
                <span>{course.level}</span>
            </div>

            <div className='flex justify-between mt-4'>
                <button className='btn btn-soft btn-primary border border-primary p-4 w-4/9'>Enroll Now</button>

                <Link
                    href={`/courses/${course.id}`}
                    className='btn btn-soft btn-primary border border-primary p-4 w-4/9'
                >See Details
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;