import { useParams, Link, useNavigate, json } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {ReactComponent as ArrowBack} from '../assets/arrow-left.svg'


const NoteItem = ({isNew}) => {
    const navigate = useNavigate()
    const { id }= useParams();
    let [note,setNote] = useState([null])
    useEffect(()=>{
        getNote()

    },[])
    let getNote = async ()=> {
        if (isNew) return
      
        let response = await fetch(`/api/notes/${id}/`)
        let data = await response.json()
        setNote(data)
    }
    let updateNote = async () =>{
        fetch(`/api/notes/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'

            },
            body : JSON.stringify(note)
        })
        navigate('/');
            
        }
    let createNote= async()=>{
        fetch(`/api/notes/`, 
        {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'

            },
            body : JSON.stringify(note)

        })
        navigate('/');


    }
    let deleteNote = async ()=>
    {
        fetch(`/api/notes/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'

            },
            body : JSON.stringify(note)
        })
        navigate('/');
    }

    let handleClick = () => {
        if (isNew) {
            // Logic for creating a new note
            if (note.body) {
                createNote();
                console.log('hey created is called here ')
            }
        } else {
            // Logic for updating or deleting an existing note
            if (!note.body) {
                deleteNote();
                console.log('delete is called ')
            } else {
                
                updateNote();
            }
        }
        navigate('/');
    };




  return (
    <div className='note'>
        <div className='note-header'>
            <h3 onClick={handleClick}><ArrowBack /></h3>
            {isNew?(
                <button onClick={handleClick}>Done</button>

            ): (
                <button onClick={deleteNote}>Delete</button>

            )}
          
        </div>
        
        <textarea onChange={(e) => {setNote({...note, 'body':e.target.value})}} value={note?.body || ''}></textarea>
        
    </div>
  )
}

export default NoteItem
