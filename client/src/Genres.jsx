// eslint-disable-next-line react/prop-types
export default function Genres({selected, onChange}) {
    function handleCbClick(e){
        const {checked, name} = e.target;
        if (checked){
            onChange([...selected, name]);
        }else{
            // eslint-disable-next-line react/prop-types
            onChange([...selected.filter(selectedName => selectedName !== name)]);
        }
    }
    return (
        <>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox' name="action" onChange={handleCbClick}/>
                <span>Action</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox' name="comedy" onChange={handleCbClick}/>
                <span>Comedy</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox' name="drama" onChange={handleCbClick}/>
                <span>Drama</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox' name="thriller" onChange={handleCbClick}/>
                <span>Thriller</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox' name="sci-fi" onChange={handleCbClick}/>
                <span>Sci-Fi</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox' name="fantasy" onChange={handleCbClick}/>
                <span>Fantasy</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox' name="horror" onChange={handleCbClick}/>
                <span>Horror</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox' name="mystery" onChange={handleCbClick}/>
                <span>Mystery</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox' name="historical" onChange={handleCbClick}/>
                <span>Historical</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox' name="romance" onChange={handleCbClick}/>
                <span>Romance</span>
            </label>
        </>
    )
}