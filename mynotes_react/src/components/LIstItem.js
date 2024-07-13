import React from 'react'
import {  Link } from 'react-router-dom';

const LIstItem = ({note}) => {
  let getDate = (note) =>{
    return new Date(note.updated).toLocaleDateString()

  }
  let getContent = (note) =>{
    let title = getTitle(note)
    let content = note.body.replaceAll('\n', ' ')
    content = content.replaceAll(title, '')
    if (content.length > 45){
      content = content.slice(0,45)
    }
    return content



  }
  let getTitle = (note) =>{
    let title = note.body.split('\n')[0]
    if (title.length > 45){
      title = title.slice(0,45)
    }
    return title


  }

  return (
    <Link to = {`/note/${note.id}`}>
        <div className='notes-list-item'>

        
        <h3>{getTitle(note)}</h3>
        <p><span>{getDate(note)}</span>{getContent(note)}</p>
        </div>
      
    </Link>
  )
}

export default LIstItem
