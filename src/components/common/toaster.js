import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const successToaster = () => {
    toast.success("successful")

    return (
        <div>
            <>
            <ToastContainer/>
            </>
        </div>
    )
}

export const failureToaster = () => {
    toast.error("There was an error")

    return(
        <div>
            <>
            <ToastContainer/>
            </>
        </div>
    )
}
