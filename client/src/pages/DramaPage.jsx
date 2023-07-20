import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingWidget from "../BookingWidget";
import { format } from "date-fns";
import DramaGallery from "../DramaGallery";

export default function DramaPage() {
  const { id } = useParams();
  const [drama, setDrama] = useState(null);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/dramas/${id}`).then((response) => {
      setDrama(response.data);
    });
  }, [id]);

  if (!drama) return;

  return (
    <div className="mt-4 bg-gray-100 -mx-8 px-8 pt-8">
      <h1 className="text-3xl">
        {drama.title} ( {format(new Date(drama.year), "yyyy")})
      </h1>
      <p className="flex gap-1 my-3 font-semibold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
        {drama.country}
      </p>
      <DramaGallery drama={drama} />

      <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          <div>
            <h2 className="semi-bold text-2xl">Plot</h2>
            {drama.plot}
          </div>
          {drama.airingStarted && drama.airingEnded && (
            <>
              Airing Started:{" "}
              {format(new Date(drama.airingStarted), "dd MMM, yyyy")}
              <br />
              Airing Ended:{" "}
              {format(new Date(drama.airingEnded), "dd MMM, yyyy")}
            </>
          )}
          {!drama.airingEnded && (
            <>
              Aired On: {format(new Date(drama.airingStarted), "dd MMM, yyyy")}
            </>
          )}
          <br />
          Episodes: {drama.episodes}
          <br />
          Duration: {drama.duration} min
        </div>
        <div>
          <BookingWidget drama={drama} />
        </div>
      </div>
      <div className="bg-white -mx-8 px-8 py-8 border-t">
        <div className="mt-4">
          <h2 className="semi-bold text-2xl">Extra info</h2>
        </div>
        <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">
          {drama.extraInfo}
        </div>
      </div>
    </div>
  );
}
