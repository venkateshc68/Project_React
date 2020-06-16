import React from 'react'
import {Link} from 'react-router-dom';

export default function Get() {
    return (
        <div>
            <footer className="footer bg-dark mt-auto py-10">
    <div className="container-fluid bg-info text-white text-center py-3">
        <h4>Any Questions...?</h4>
        <Link to ='/Contactus'>
        <button className="btn btn-warning btn-lg">Talk to Us </button>
        </Link>
    </div>
    </footer>

        </div>
    )
}
