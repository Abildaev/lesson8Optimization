import React from 'react';
import {useParams} from "react-router-dom";
import {useFetchDetail} from "../hooks/useFetch";
import {apis} from "../../utils/apis";

export function DetailLocation() {
    const {id} = useParams();
    const {error, data, isLoading} = useFetchDetail(`${apis.location}${id}`)
    return (
        <div>

            {isLoading && 'Загрузка...'}
            {error && error}
            {data && !isLoading &&
                <>
                    <h1>{data.name}</h1>

                    <ul>
                        <li>dimension: {data.dimension}</li>
                        <li>type: {data.type}</li>
                        <li>created: {data.created}</li>
                    </ul>
                </>
            }
        </div>
    );
}

