import {Link} from "react-router-dom";
import React from "react";


export function ListElements({data, pathname, lastNodeRef, isLoading}) {
    return (
        <ul>
            {data && data.length > 0
                ?
                data.map((item, index) => {

                    if (data.length === index + 1) {

                        return (
                            <li key={index} className="item" ref={lastNodeRef}>
                                <Link to={`${pathname}/${item.id}`}>{item.name}</Link>
                            </li>
                        )
                    }

                    return (
                        <li key={index} className="item">
                            <Link to={`${pathname}/${item.id}`}>{item.name}</Link>
                        </li>
                    )
                })
                :
                !isLoading && <li>data empty</li>
            }
        </ul>
    );
}

