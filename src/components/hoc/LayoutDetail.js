import React from 'react';
import {Outlet} from "react-router-dom";
import GoToBack from "../goToBack/GoToBack";

function LayoutDetail(props) {
    return (

        <div className="App">
            <GoToBack/>
            <Outlet/>
        </div>


    );
}

export default LayoutDetail;