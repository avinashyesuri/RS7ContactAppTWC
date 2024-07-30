import React from 'react'
import { MdOutlineCancel } from "react-icons/md";
import {createPortal} from 'react-dom'
const Modal = ({ isOpen, onClose, children }) => {

    return createPortal(
        <>
            {isOpen && (
                <>
                    <div className='fixed inset-0 flex items-center justify-center z-40'>
                        <div className='relative z-50 min-h-[60%] w-[60%] bg-white p-4 rounded shadow-lg'>
                            <div className='flex justify-end'>
                                <MdOutlineCancel onClick={onClose} className='text-2xl cursor-pointer' />
                            </div>
                            {children}
                        </div>
                    </div>
                    <div onClick={onClose} className='absolute inset-0 z-30 h-screen w-screen backdrop-blur bg-black/50'></div>
                </>
            )}
        </>,
        document.getElementById("modal-root")
    )
}

export default Modal;
