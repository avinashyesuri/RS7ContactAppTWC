import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { IoSearch } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import { db } from './config/firebase'
import { collection, getDocs } from 'firebase/firestore'
// import { FaUserPlus } from "react-icons/fa";
// import { MdOutlineDeleteSweep } from "react-icons/md";
// import { FaEdit } from "react-icons/fa";
import ContactCard from './components/ContactCard';

import AddUpdateCard from './components/AddUpdateCard';




const App = () => {
  const [contactTW, setcontactTW] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const onOpen = () => [
    setIsOpen(true)
  ]
  const onClose = () => [
    setIsOpen(false)
  ]


  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contactTW")   //firestore, path
        const contactSnapshot = await getDocs(contactRef)
        const contactList = contactSnapshot.docs.map(doc =>
          doc.data());
        setcontactTW(contactList)

        console.log(contactSnapshot)

      } catch (error) {
        console.log(error)
      }
    }
    getContacts()
  }, [])
  return (
    <>
 <div className='mx-auto max-w-[370px] px-4'>
      <Navbar />
      <div className='flex relative pl-5'>
        <IoSearch className='absolute text-3xl pt-2 text-white' />
        <input className='border max-w-[280px] text-white pl-10 border-white h-10 flex-grow rounded-md bg-transparent' type='text' />
        <FaPlusCircle onClick={onOpen} className=' text-6xl px-2 pb-5 text-white' />
      </div>
      <div className='mt-4 flex flex-col gap-3 '>
        {contactTW.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
      <div>
      </div>
    </div>

<AddUpdateCard isOpen={isOpen} onClose={onClose}/>
{/* <Modal  isOpen={isOpen} onClose={onClose}>
  Hi how are u
</Modal> */}


    </>
   
  )
}

export default App