import React from 'react';
import Header from "../../tasks/header";
import notFoundImage from "./notfound-img.webp"
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
        <Header/>
        <div>
            <center><img className='notFoundimage' src={notFoundImage} alt="404" /></center>  
            <br />
            <center><Link className="nav-link active btn btn-success backToHome" to="/">Back To Home</Link></center>
        </div>
        </>
    )
}
