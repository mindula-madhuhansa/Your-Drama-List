import {Link} from "react-router-dom";
import AccountNav from "../AccountNav.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

export default function DramasPage() {
    const [dramas, setDramas] = useState([]);
    useEffect(() => {
        axios.get('/dramas').then(({data}) => {
            setDramas(data);
        });
    }, []);
    return (
        <div>
            <AccountNav/>
                <div className="text-center">
                    list of all added dramas<br/>
                    <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
                          to={'/account/dramas/new'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="w-6 h-6">
                            <path fillRule="evenodd"
                                  d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                                  clipRule="evenodd"/>
                        </svg>
                        Add new drama
                    </Link>
                </div>
            <div className="mt-4">
                {dramas.length > 0 && dramas.map(drama => (
                    <Link to={'/account/dramas/'+drama._id} className="flex cursor-pointer gap-4 bg-gray-200 p-4 rounded-2xl">
                        <div className="w-48 h-72 bg-gray-300 grow shrink-0">
                            {drama.photos.length > 0 && (
                            <img src={drama.photos[0]} alt=""/>
                            )}
                        </div>
                        <div className="grow-0 shrink">
                            <h2 className="text-xl">{drama.title} ({drama.year})</h2>
                            <p className="text-sm mt-2">{drama.plot}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
