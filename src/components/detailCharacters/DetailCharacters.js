import React from 'react';
import {useParams} from "react-router-dom";
import { useFetchDetail} from "../hooks/useFetch";
import {apis} from "../../utils/apis";

export function DetailCharacters() {
    const {id} = useParams();
    const {error, data, isLoading} = useFetchDetail(`${apis.character}${id}`)



    return (
        <div>

            {isLoading && 'Загрузка...'}
            {error && error}
            {data && !isLoading &&
                <>
                    <h1>{data.name}</h1>
                    <img src={data.image} alt=""/>
                    <ul>
                        <li>species: {data.species}</li>
                        <li>gender: {data.gender}</li>
                        <li>status: {data.species}</li>
                        <li>type: {data.type}</li>
                        <li>created: {data.created}</li>

                    </ul>
                </>


            }


        </div>
    );
}

