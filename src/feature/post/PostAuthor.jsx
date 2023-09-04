import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";


const PostAuthor = ({ userId }) => {

    const users = useSelector(selectAllUsers);

    const author = users.find((user) =>
        user.id == userId
    );

    return (
        <span className="text-[14px] text-indigo-700 font-bold bg-white rounded-sm p-1">{author ? author.name : "Unknown Author"}</span>
    )
}

export default PostAuthor;