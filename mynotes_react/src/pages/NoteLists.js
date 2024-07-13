import React, { useState, useEffect } from 'react'
import LIstItem from '../components/LIstItem'
import AddComponent from '../components/AddComponent'





const NoteLists = () => {
    let [notes, setNote] = useState([])

    useEffect(()=>{
        getNote()

    },[])

    const getNote =async () => {
        let response= await fetch('/api/notes/')
        let data = await response.json()
        setNote(data)

    }

  return (
    <div className='notes'>
        <div className='notes-header'> 
        <h2 className='notes-title'>&#9782; Notes</h2>
        <p className='notes-count'>{notes.length}</p>

        </div>
        <div className='notes-list'>
        {
            notes.map((note, index) => (
                <LIstItem key={index} note={note} />
            ))
        }
            
            <AddComponent/>

        </div>

    </div>








  )
}

export default NoteLists
