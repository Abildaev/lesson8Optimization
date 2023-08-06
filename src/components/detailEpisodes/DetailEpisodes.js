import React from 'react';
import {useParams} from "react-router-dom";
import {useFetchDetail} from "../hooks/useFetch";
import {apis} from "../../utils/apis";

export function DetailEpisodes() {
    const {id} = useParams();
    const {error, data, isLoading} = useFetchDetail(`${apis.episode}${id}`)

    return (
        <div>

            {isLoading && 'Загрузка...'}
            {error && error}
            {data && !isLoading &&
                <>
                    <h1>{data.name}</h1>

                    <ul>
                        <li>air date: {data.air_date}</li>
                        <li>episode: {data.episode}</li>
                        <li>created: {data.created}</li>
                    </ul>
                </>
            }
        </div>
    );
}

