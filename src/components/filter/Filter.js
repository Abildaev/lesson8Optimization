import React from 'react';
import {useSearchParams} from "react-router-dom";


function Filter() {

    let [searchParams, setSearchParams] = useSearchParams();

    const reset = () => {
        for (let entry of searchParams.entries()) {
            const [param] = entry;
            setSearchParams(searchParams => {
                searchParams.delete(param)
            })
        }
    }

    const onChange = (e) => {
        if(e.target.value.trim()) {
            setSearchParams(searchParams => {
                searchParams.set(e.target.name, (() => {
                    if(e.target.name === "created") {
                        const date = new Date(e.target.value)
                        return date.toISOString()
                    }
                    return e.target.value
                })())
                return searchParams
            })
        }
        else {
            setSearchParams(searchParams => {
                searchParams.delete(e.target.name)
            })
        }

    }

    return (
        <form onChange={onChange} onReset={reset}>
            <input
                type="datetime-local"
                name="created"
            />
            <input
                type="text"
                name="name"
                placeholder="name"
            />
            <button type="reset">cancel</button>
        </form>
    );
}

export default Filter;