import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DramaGallery from "../DramaGallery";
import ListingDate from "../ListingDate";

export default function ListingPage() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  useEffect(() => {
    if (id) {
      axios.get("/listings").then((response) => {
        const foundListing = response.data.find(({ _id }) => _id === id);
        if (foundListing) {
          setListing(foundListing);
        }
      });
    }
  }, [id]);

  if (!listing) {
    return "";
  }

  return (
    <div className="my-8">
      <h1 className="text-3xl">{listing.drama.title}</h1>
      <div className="my-2 block">
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
          {listing.drama.country}
        </p>
      </div>
      <div className="bg-gray-200 p-6 my-6 rounded-2xl">
        <h2 className="text-xl">Your listing information</h2>
        <ListingDate listing={listing} />
      </div>
      <DramaGallery drama={listing.drama} />
    </div>
  );
}
