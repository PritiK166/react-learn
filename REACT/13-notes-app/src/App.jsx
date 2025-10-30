import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]

    copyTask.push({ title, details })
    
    setTask(copyTask)

    setTitle('')
    setDetails('')
  } 

  const deleteNote = (idx) => {
    
    const copyTask = [...task]

    copyTask.splice(idx, 1)
    
    setTask(copyTask)    
    
  }


  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form
        onSubmit={(e) => {
        submitHandler(e)
        }}
        className='flex lg:w-1/2 items-start flex-col gap-4 p-10'
      >
        <h1 className='text-4xl font-bold'>Add Notes</h1>
       
        {/* First Input for Heading */}
        <input
        type="text"
        placeholder='Enter notes heading'
        className='px-5 py-2 w-full font-medium border-2 outline-none rounded'
        value={title}  
        onChange={(e) => {
          setTitle(e.target.value)  
        }}
        />

        {/* Textarea for details */}
        <textarea
          type='text'
          placeholder='Write details'
          className='px-5 py-2 h-32 font-medium w-full border-2 outline-none rounded'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />

        <button className='bg-white active:scale-95 text-black font-medium w-full px-5 py-2 outline-none rounded'>Add Notes</button>

      </form>

      <div className='p-8 lg:w-1/2 lg:border-l-2'>
        
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
          {task.map(function (elem, idx) {
            
            return <div key={idx} className='flex flex-col justify-between items-start relative h-56 w-44 bg-cover rounded-2xl text-black pt-10 pb-4 px-4 bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-5 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>  
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete </button>
            </div>
            
          })}
            
        </div>
      </div>
    </div>
  )
}

export default App