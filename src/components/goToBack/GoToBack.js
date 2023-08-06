import React from 'react';
import {useNavigate} from "react-router-dom";



function GoToBack() {
    const navigate = useNavigate()
    return (
        <div>
            <button
                style={{padding: "8px 16px", textTransform: 'uppercase', cursor: 'pointer'}}
                onClick={() => navigate(-1)}>
                go to back
            </button>
        </div>
    );
}

export default GoToBack;