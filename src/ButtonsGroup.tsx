function ButtonsGroup({setFilter}:any){
    return <div className="flex space-x-4 justify-between flex-row">
        <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setFilter('all')}>All</button>
        <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setFilter('active')}>Active</button>
        <button 
        className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setFilter('completed')}>Completed</button>
    </div>
}

export default ButtonsGroup