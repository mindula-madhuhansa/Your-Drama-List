import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function IndexPage() {
  const [dramas, setDramas] = useState([]);
  useEffect(() => {
    axios.get("/dramas").then((response) => {
      setDramas(response.data);
    });
  }, []);

  return (
    <div className="mt-8 h-full w-auto grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {dramas.length > 0 &&
        dramas.map((drama) => (
          <Link to={"/drama/" + drama._id} key={drama}>
            <div className="bg-gray-500 mb-2 rounded-2xl flex">
              {drama.photos?.[0] && (
                <img
                  className="rounded-2xl object-cover aspect-square"
                  src={"http://localhost:4000/uploads/" + drama.photos?.[0]}
                />
              )}
            </div>
            <h2 className="font-bold">{drama.title}</h2>
            <h3 className="text-sm text-gray-500">{drama.country}</h3>
            <div className="mt-1">
              <span className="font-bold">{drama.episodes}</span> episodes
            </div>
          </Link>
        ))}
    </div>
  );
}
