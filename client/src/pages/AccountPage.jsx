import {useContext, useState} from "react";
import {UserContext} from "../UserContext";
import {Link, Navigate, useParams} from "react-router-dom";
import axios from "axios";
import DramasPage from "./DramasPage.jsx";
import AccountNav from "../AccountNav.jsx";

export default function AccountPage() {
    const [redirect, setRedirect] = useState(null);
    const {ready, user, setUser} = useContext(UserContext);

    let {subpage} = useParams();
    if (subpage === undefined) {
        subpage = "profile";
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

    function linkClasses(type = null) {
        let classes = "inline-flex gap-1 py-2 px-6 rounded-full";
        if (type === subpage) {
            classes += " bg-primary text-white rounded-full";
        } else {
            classes += ' bg-gray-200';
        }
        return classes;
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
