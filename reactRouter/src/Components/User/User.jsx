import {useParams} from "react-router-dom";

export default function User() {
    const {userId, UserName} = useParams();
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-10">User Page</h1>
            <h2 className="text-4xl font-bold text-center mt-10">User: {userId} </h2>
            <h2 className="text-4xl font-bold text-center mt-10">UserName: {UserName} </h2>

            <p className="text-center mt-4 text-lg">Welcome to the User Page!</p>
        </div>
    );
}