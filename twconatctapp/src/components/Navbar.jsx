import React from 'react'

const Navbar = () => {
  return (
    <div className='flex h-[60px] text-xl text-red-400 font-medium bg-white m-4 rounded-lg items-center justify-center'>
        <div>
            <img src='/firebase.svg'/>
            <h1>FireBase Contact App</h1>
        </div>
    </div>
  )
}

export default Navbar