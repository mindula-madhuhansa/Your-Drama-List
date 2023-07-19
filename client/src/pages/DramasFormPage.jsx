import PhotosUploader from "../PhotosUploader.jsx";
import Genres from "../Genres.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import AccountNav from "../AccountNav.jsx";
import { Navigate, useParams } from "react-router-dom";

export default function DramasFormPage() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(2023);
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [plot, setPlot] = useState("");
  const [genres, setGenres] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [episodes, setEpisodes] = useState(1);
  const [airingStarted, setAiringStarted] = useState("");
  const [airingEnded, setAiringEnded] = useState("");
  const [duration, setDuration] = useState(60);
  const [country, setCountry] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/dramas/" + id).then((response) => {
      const { data } = response;
      setTitle(data.title);
      setYear(data.year);
      setAddedPhotos(data.photos);
      setPlot(data.plot);
      setGenres(data.genres);
      setExtraInfo(data.extraInfo);
      setEpisodes(data.episodes);
      setAiringStarted(data.airingStarted);
      setAiringEnded(data.airingEnded);
      setDuration(data.duration);
      setCountry(data.country);
    });
  }, [id]);

  function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>;
  }

  function inputParagraph(text) {
    return <p className="text-sm text-gray-500">{text}</p>;
  }

  function preInput(header, paragraph) {
    return (
      <>
        {inputHeader(header)}
        {inputParagraph(paragraph)}
      </>
    );
  }

  async function saveDrama(e) {
    e.preventDefault();
    const dramaData = {
      title,
      year,
      addedPhotos,
      plot,
      genres,
      extraInfo,
      episodes,
      airingStarted,
      airingEnded,
      duration,
      country,
    };

    if (id) {
      //update
      await axios.put("/dramas", {
        id,
        ...dramaData,
      });
      setRedirect(true);
    } else {
      //new place
      await axios.post("/dramas", dramaData);
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/account/dramas"} />;
  }

  return (
    <div>
      <AccountNav />
      <form onSubmit={saveDrama}>
        {preInput("Title", "Add the drama or movie title.")}
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {preInput("Year", "Select the drama or movie released year.")}
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        {preInput("Photos", "Don't spoil for others.")}
        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

        {preInput(
          "Plot",
          "Add plot of the drama or movie but don't add spoilers."
        )}
        <textarea value={plot} onChange={(e) => setPlot(e.target.value)} />

        {preInput("Genres", "Select all the genres of the drama or movie")}
        <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <Genres selected={genres} onChange={setGenres} />
        </div>

        {preInput("Extra info", "Add source, and other information.")}
        <textarea
          value={extraInfo}
          onChange={(e) => setExtraInfo(e.target.value)}
        />

        {preInput("Episodes", "Enter the number of episodes.")}
        <input
          type="number"
          value={episodes}
          onChange={(e) => setEpisodes(e.target.value)}
        />

        {preInput(
          "Aired date and duration",
          "Select the aired dates and enter duration per episode."
        )}
        <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mt-2">Airing started</h3>
            <input
              type="text"
              placeholder="mm dd, yyyy"
              value={airingStarted}
              onChange={(e) => setAiringStarted(e.target.value)}
            />
          </div>
          <div>
            <h3 className="mt-2">Airing ended</h3>
            <input
              type="text"
              placeholder="mm dd, yyyy"
              value={airingEnded}
              onChange={(e) => setAiringEnded(e.target.value)}
            />
          </div>
          <div>
            <h3 className="mt-2">Duration (min)</h3>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div>
            <h3 className="mt-2">Country</h3>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button className="primary my-4">Save</button>
        </div>
      </form>
    </div>
  );
}
