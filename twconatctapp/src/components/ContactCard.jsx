import React from 'react'
import { FaUserPlus } from "react-icons/fa";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { FaEdit } from "react-icons/fa"; 

const ContactCard = ({contact}) => {
    return (
    
            <div key={contact.id} className='flex flex-row items-center justify-evenly rounded-lg bg-blue-500 p-2'>
                <div className='flex gap-10'>
                    <FaUserPlus className='flex items-center text-3xl text-orange mt-2' />
                    <div>
                        <h1 className='font-bold text-xl'>{contact.name}</h1>
                        <h4 className='text-md'>{contact.email}</h4>
                    </div>
                    <div className='flex-column'>
                        <FaEdit className='text-2xl	' />
                        <MdOutlineDeleteSweep className='text-2xl	' />
                    </div>
                </div>
            </div>
   
    )
}

export default ContactCard