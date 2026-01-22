import { useRouter } from "next/navigation";

const SidebarContent = ({ onItemClick }) => {
    const router = useRouter();

    const handleNavigation = (path) => {
        router.push(path);
        if (onItemClick) onItemClick();
    }

    return (
        <div className="space-y-1 mt-8">
            <p
                onClick={() => handleNavigation('/leaderboard/last-contest')}
                className="hover:bg-gray-500 p-2 rounded cursor-pointer"
            >
                Last Contest
            </p>
            <p
                onClick={() => handleNavigation('/leaderboard/average-score')}
                className="hover:bg-gray-500 p-2 rounded cursor-pointer"
            >
                Average Score
            </p>
            <p
                onClick={() => handleNavigation('/leaderboard/all-time-best')}
                className="hover:bg-gray-500 p-2 rounded cursor-pointer"
            >
                All Time Best
            </p>
        </div>
    );
};
export default SidebarContent;