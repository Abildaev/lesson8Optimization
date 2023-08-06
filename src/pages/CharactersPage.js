import React from 'react';
import {useFetch} from "../components/hooks/useFetch";

import {useLocation} from "react-router-dom";
import Filter from "../components/filter/Filter";

import {apis} from "../utils/apis";
import {ListElements} from "../components/listElements/ListElements";



function CharactersPage() {
    const {pathname} = useLocation();
    const {isLoading, data, error, lastNodeRef} = useFetch(apis.character);

    return (
        <div>
            <h1>Characters</h1>
            <Filter/>
            {isLoading && 'Загрузка...'}
            {error && error}
            <ListElements data={data} lastNodeRef={lastNodeRef} pathname={pathname} isLoading={isLoading}/>
        </div>
    );
}

export default CharactersPage;