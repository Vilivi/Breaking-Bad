import React from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import ViewContainer from './ViewContainer';
import { useMyContext } from '../tools/LoadingContext';

const MainContainer = () => {

    // charge spinner / ViewContainer selon chargement
    const [{load}] = useMyContext();
    let child = (load) ? <MoonLoader/> : <ViewContainer/>;

    return (
        <div>{child}</div>
    );
};

export default MainContainer;