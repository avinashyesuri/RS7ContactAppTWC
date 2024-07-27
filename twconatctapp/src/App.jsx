import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { IoSearch } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import {db} from './config/firebase'
import {collection,getDocs} from 'firebase/firestore'
import { FaUserPlus } from "react-icons/fa";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { FaEdit } from "react-icons/fa";




const App = () => {
  const [contactTW,setcontactTW] =useState([])
  useEffect(()=>{
    const getContacts = async()=>{
      try{
        const contactRef = collection(db,"contactTW")   //firestore, path
        const contactSnapshot = await getDocs(contactRef)
        const contactList  = contactSnapshot.docs.map(doc =>
           doc.data());
        setcontactTW(contactList)

        console.log(contactSnapshot)

      }catch(error){
        console.log(error)
      }
    }
    getContacts()
  },[])
  return (
    <div className='mx-auto max-w-[370px] px-4'>
      <Navbar />
      <div className='flex relative pl-5'>
      <IoSearch className='absolute text-3xl pt-2 text-white'/>
        <input className='border max-w-[280px] text-white pl-10 border-white h-10 flex-grow rounded-md bg-transparent' type='text' />
       
        <FaPlusCircle className=' text-6xl px-2 pb-5 text-white'/>
      </div>
      <div>
          {contactTW.map((contact)=>(
            <div key={contact.id} className='flex items-center justify-around rounded-lg bg-yellow-400 p-2'>
            <div className='flex gap-1'></div>
            <FaUserPlus className=' text-3xl text-orange' />
            <div>
              <h1>{contact.name}</h1>
              <h4>{contact.email}</h4>
            </div>
            <div className='flex'>
            <FaEdit />
            <MdOutlineDeleteSweep />
            </div>
      
            </div>
          ))}
      </div>
    </div>
  )
}

export default App