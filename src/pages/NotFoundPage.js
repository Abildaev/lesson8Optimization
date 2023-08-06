import React from 'react';
import {Link} from "react-router-dom";

function NotFoundPage(props) {
    return (
        <div>
            <h1>404 not found</h1>
            <Link to="/">go to home</Link>
        </div>
    );
}

export default NotFoundPage;