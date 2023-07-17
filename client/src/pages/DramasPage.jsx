import {Link, useParams} from "react-router-dom";
import {useState} from "react";
import Genres from "../Genres.jsx";
import axios from "axios";

export default function DramasPage() {
    const {action} = useParams();
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('2023-01');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [photoLink, setPhotoLink] = useState('');
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

    async function addPhotoByLink(e){
        e.preventDefault()
        await axios.post('/upload-by-link', {link: photoLink});
    }
    return (
        <div>
            {action !== 'new' && (
                <div className="text-center">
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
            )}
            {action === 'new' && (
                <div>
                    <form>
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
                        <div className='flex gap-2'>
                            <input type='text'
                                   placeholder={'add using a link https://example.com/photo.jpg'}
                                   value={photoLink}
                                   onChange={e => setPhotoLink(e.target.value)}/>
                            <button className='bg-gray-200 px-4 rounded-2xl'
                                    onClick={addPhotoByLink}>
                                Add&nbsp;photo
                            </button>
                        </div>
                        <div className='mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                            <button
                                className='flex gap-1 justify-center border bg-transparent rounded-2xl p-8 text-2xl text-gray-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"/>
                                </svg>
                                Upload
                            </button>
                        </div>

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
            )}
        </div>
    );
}
