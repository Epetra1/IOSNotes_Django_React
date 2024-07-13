import React from 'react'
import { ReactComponent as Add } from '../assets/add.svg'
import NoteItem from '../pages/NoteItem'
import { Link } from 'react-router-dom'
const AddComponent = () => {
  return (
    <Link to={'/note/create/'} className='floating-button'>
      <Add/>
    </Link>
    
  )
}

export default AddComponent
