import React, {useEffect} from 'react';
import {useFetch} from "../components/hooks/useFetch";
import {useLocation} from "react-router-dom";
import Filter from "../components/filter/Filter";
import {ListElements} from "../components/listElements/ListElements";
import {apis} from "../utils/apis";

function LocationPage() {

    const {pathname} = useLocation();
    const {isLoading, data, error, lastNodeRef} = useFetch(apis.location);


    return (
        <div>
            <h1>Locations</h1>
            <Filter/>
            {isLoading && 'Загрузка...'}
            {error && error}
            <ListElements data={data} lastNodeRef={lastNodeRef} pathname={pathname} isLoading={isLoading}/>

        </div>
    );
}

export default LocationPage;