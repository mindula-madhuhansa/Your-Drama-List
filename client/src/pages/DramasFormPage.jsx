import PhotosUploader from "../PhotosUploader.jsx";
import Genres from "../Genres.jsx";
import {useState} from "react";
import axios from "axios";

export default function DramasFormPage(){
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('2023-01');
    const [addedPhotos, setAddedPhotos] = useState('');
    const [plot, setPlot] = useState('');
    const [genres, setGenres] = useState([]);
    const [extraInfo, setExtraInfo] = useState('');
    const [episodes, setEpisodes] = useState('1');
    const [airingStarted, setAiringStarted] = useState('2023-01-31')
    const [airingEnded, setAiringEnded] = useState('2023-12-31')
    const [duration, setDuration] = useState('60')

    function inputHeader(text) {
        return (
            <h2 className="text-2xl mt-4">{text}</h2>
        );
    }

    function inputParagraph(text) {
        return (
            <p className='text-sm text-gray-500'>{text}</p>
        );
    }

    function preInput(header, paragraph) {
        return (
            <>
                {inputHeader(header)}
                {inputParagraph(paragraph)}
            </>
        )
    }

    async function addNewDrama(e) {
        e.preventDefault();
        await axios.post('/dramas', {
            title, year, addedPhotos,
            plot, genres, extraInfo, episodes,
            airingStarted, airingEnded, duration
        });
    }

    return(
        <div>
            <form onSubmit={addNewDrama}>
                {preInput('Title', 'Add the drama or movie title.')}
                <input type='text'
                       placeholder="title"
                       value={title}
                       onChange={e => setTitle(e.target.value)}/>

                {preInput('Year', 'Select the drama or movie released year.')}
                <input type='month'
                       placeholder="year"
                       min="1900-01"
                       value={year}
                       onChange={e => setYear(e.target.value)}/>

                {preInput('Photos', 'Don\'t spoil for others.')}
                <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos}/>

                {preInput('Plot', 'Add plot of the drama or movie but don\'t add spoilers.')}
                <textarea value={plot}
                          onChange={e => setPlot(e.target.value)}/>

                {preInput('Genres', 'Select all the genres of the drama or movie')}
                <div className='grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
                    <Genres selected={genres}
                            onChange={setGenres}/>
                </div>

                {preInput('Extra info', 'Add source, and other information.')}
                <textarea value={extraInfo}
                          onChange={e => setExtraInfo(e.target.value)}/>

                {preInput('Episodes', 'Enter the number of episodes.')}
                <input type='number'
                       min='1'
                       value={episodes}
                       onChange={e => setEpisodes(e.target.value)}/>

                {preInput('Aired date and duration', 'Select the aired dates and enter duration per episode.')}
                <div className='grid gap-2 sm:grid-cols-3'>
                    <div>
                        <h3 className='mt-2'>Airing started</h3>
                        <input type='date'
                               value={airingStarted}
                               onChange={e => setAiringStarted(e.target.value)}/>
                    </div>
                    <div>
                        <h3 className='mt-2'>Airing ended</h3>
                        <input type='date'
                               value={airingEnded}
                               onChange={e => setAiringEnded(e.target.value)}/>
                    </div>
                    <div>
                        <h3 className='mt-2'>Duration (min)</h3>
                        <input type='number'
                               value={duration}
                               onChange={e => setDuration(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <button className='primary my-4'>Save</button>
                </div>

            </form>
        </div>
    );
}