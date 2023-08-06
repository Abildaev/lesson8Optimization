import {useState, useRef, useEffect, useCallback} from 'react'
import {useSearchParams} from "react-router-dom";
import axios from "axios";


export function useFetch(url) {
    let [searchParams] = useSearchParams();
    const searchParamsRef = useRef({})
    const observer = useRef()

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1)
    const [hasMore, setHasMore] = useState(false)


    const lastNodeRef = useCallback((nodeLast) => {
        if (isLoading) return;

        if (observer.current) {
            observer.current.disconnect()
        }

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prev => prev + 1)
            }
        })

        if (nodeLast) {
            observer.current.observe(nodeLast)
        }

    }, [hasMore])


    useEffect(() => {
        setData([])
    }, [searchParams])

    useEffect(() => {
        setIsLoading(true)
        let cancel;
        setError('')
        if (searchParams.size > 0) {
            for (let entry of searchParams.entries()) {
                const [param, value] = entry;
                searchParamsRef.current = {...searchParamsRef.current, [param]: value}
            }
        } else {
            searchParamsRef.current = {}
        }

        axios({
            method: 'GET',
            url,
            params: {...searchParamsRef.current, page: pageNumber},
            cancelToken: new axios.CancelToken(c => cancel = c)

        }).then(res => {
            setData(prev => [...new Set( [...prev, ...res.data.results])])
            if(pageNumber >= res.data.info.pages) {
                setHasMore(false)
            }else  {
                setHasMore(true)
            }
            setIsLoading(false)
        })
            .catch(err => {

                if(axios.isCancel(err)) {
                    return;
                }
                setError(err.message)
                setIsLoading(false)
            })
        return () => cancel()
    },[searchParams, pageNumber])

    return {isLoading, error, data,lastNodeRef}
}


export function useFetchDetail(url) {

    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState({})


    useEffect(() => {
        setIsLoading(true)
        setError('')
        axios.get(url)
            .then(res => setData(res.data))
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false))
    }, [url])

    return {error, isLoading, data}

}


