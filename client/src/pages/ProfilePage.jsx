import {useContext, useState} from "react";
import {UserContext} from "../UserContext";
import {Navigate, useParams} from "react-router-dom";
import axios from "axios";
import DramasPage from "./DramasPage.jsx";
import AccountNav from "../AccountNav.jsx";

export default function ProfilePage() {
    const [redirect, setRedirect] = useState(null);
    const {ready, user, setUser} = useContext(UserContext);
    let {subpage} = useParams();
    if (subpage === undefined) {
        subpage = 'profile';
    }

    async function logout() {
        await axios.post("/logout");
        setRedirect("/");
        setUser(null);
    }

    if (!ready) {
        return "loading...";
    }

    if (ready && !user && !redirect) {
        return <Navigate to={"/login"}/>;
    }

    if (redirect) {
        return <Navigate to={redirect}/>;
    }

    return (
        <div>
            <AccountNav/>
            {subpage === "profile" && (
                <div className="text-center max-w-lg mx-auto">
                    Logged in as {user.name} ({user.email})<br/>
                    <button className="primary max-w-sm mt-2" onClick={logout}>
                        Logout
                    </button>
                </div>
            )}
            {subpage === "dramas" && <DramasPage/>}
        </div>
    );
}
