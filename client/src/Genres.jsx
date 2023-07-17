export default function Genres({selected, onChange}) {
    return (
        <>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox'/>
                <span>Action</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox'/>
                <span>Comedy</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox'/>
                <span>Drama</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox'/>
                <span>Thriller</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox'/>
                <span>Sci-Fi</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox'/>
                <span>Fantasy</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox'/>
                <span>Horror</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox'/>
                <span>Mystery</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox'/>
                <span>Historical</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox'/>
                <span>Romance</span>
            </label>
        </>
    )
}