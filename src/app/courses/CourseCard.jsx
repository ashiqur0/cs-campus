import Image from 'next/image';
import { GiTeacher } from "react-icons/gi";
import { IoIosTime } from "react-icons/io";

const CourseCard = ({ course }) => {
    return (
        <div key={course.id}
            className="border border-gray-600 rounded-lg p-4 mb-10 hover:shadow-md shadow-white transition-shadow duration-300">
            <Image
                src={course.img}
                className="w-full h-50 object-cover mb-4 rounded"
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
                <span>Level:</span>
                <span>{course.level}</span>
            </div>
        </div>
    );
};

export default CourseCard;