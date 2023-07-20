import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function BookingWidget({ drama }) {
  const [watchingDate, setWatchingDate] = useState("");
  const [redirect, setRedirect] = useState("");

  async function addToList() {
    const response = await axios.post("/listings", {
      watchingDate,
      drama: drama._id,
    });
    const listingId = response.data._id;
    setRedirect(`/account/listings/${listingId}`);
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div>
      <div className="bg-white shadow p-4 rounded-2xl">
        <div className="text-2xl text-center">Didn&apos;t watch this yet?</div>
        <div className="border rounded-2xl mt-4">
          <div className="mt-4 py-3 px-4 ">
            <label>Add to calender</label>
            <input
              type="date"
              value={watchingDate}
              onChange={(e) => setWatchingDate(e.target.value)}
            />
          </div>
        </div>

        <button onClick={addToList} className="mt-4 primary">
          Add to list
        </button>
      </div>
    </div>
  );
}
