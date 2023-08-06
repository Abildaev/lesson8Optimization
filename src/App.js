import './App.css';
import React, {lazy, Suspense} from "react";

import {Route, Routes} from "react-router-dom";
import PrivateRoute from "./components/hoc/PrivateRoute";




import LayoutDetail from "./components/hoc/LayoutDetail";
import {AuthProvider} from "./context/AuthProvider";


const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const MainPage = lazy(() => import('./pages/MainPage'))

const CharactersPage = lazy(() => import('./pages/CharactersPage'))
const EpisodePage = lazy(() => import('./pages/EpisodePage'))
const LocationPage = lazy(() => import('./pages/LocationPage'))

const DetailCharacters = lazy(() => import('./components/detailCharacters/DetailCharacters').then(module => ({
    default: module.DetailCharacters
})))

const DetailLocation = lazy(() => import('./components/detailLocation/DetailLocation').then(module => ({
    default: module.DetailLocation
})))

const DetailEpisodes = lazy(() => import('./components/detailEpisodes/DetailEpisodes').then(module => ({
    default: module.DetailEpisodes
})))





function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<PrivateRoute/>}>
                    <Route index element={<Suspense fallback={<div>loading ...</div>}><MainPage/></Suspense>}/>
                    <Route path="characters"
                           element={<Suspense fallback={<div>loading ...</div>}><CharactersPage/></Suspense>}/>
                    <Route path="episodes"
                           element={<Suspense fallback={<div>loading ...</div>}><EpisodePage/></Suspense>}/>
                    <Route path="locations"
                           element={<Suspense fallback={<div>loading ...</div>}><LocationPage/></Suspense>}/>
                    <Route path="/" element={<LayoutDetail/>}>
                        <Route path="characters/:id"
                               element={<Suspense fallback={<div>loading ...</div>}><DetailCharacters/></Suspense>}/>
                        <Route path="episodes/:id"
                               element={<Suspense fallback={<div>loading ...</div>}><DetailEpisodes/></Suspense>}/>
                        <Route path="locations/:id"
                               element={<Suspense fallback={<div>loading ...</div>}><DetailLocation/></Suspense>}/>
                    </Route>

                </Route>


                <Route path="login" element={<Suspense fallback={<div>loading..</div>}><LoginPage/></Suspense>}/>
                <Route path="*" element={<Suspense fallback={<div>loading..</div>}><NotFoundPage/></Suspense>}/>
            </Routes>
        </AuthProvider>

    );
}

export default App;
