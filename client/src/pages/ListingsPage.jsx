import { useEffect, useState } from "react";
import AccountNav from "../AccountNav";
import axios from "axios";
import DramaImg from "../DramaImg";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import ListingDate from "../ListingDate";

export default function ListingsPage() {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    axios.get("/listings").then((response) => {
      setListings(response.data);
    });
  }, []);
  return (
    <div>
      <AccountNav />
      <div>
        {listings?.length > 0 &&
          listings.map((listing) => (
            <Link
              to={`/account/listings/${listing._id}`}
              className="flex mt-4 gap-4 bg-gray-200 rounded-2xl overflow-hidden"
              key={listing}
            >
              <div className="w-48">
                <DramaImg drama={listing.drama} />
              </div>
              <div className="py-3 pr-3 grow">
                <h2 className="text-xl">{listing.drama.title}</h2>
                <div className="mt-2">
                  {listing.drama.country} -{" "}
                  {format(new Date(listing.drama.year), "yyyy")},{" "}
                  {listing.drama.episodes} episodes
                </div>
                <ListingDate listing={listing} />
                <div className="mt-2">
                  <p className="max-w-2xl max-h-max line-clamp-4">
                    {listing.drama.plot}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
