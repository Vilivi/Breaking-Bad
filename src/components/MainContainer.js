import MoonLoader from 'react-spinners/MoonLoader';
import React, {useState} from 'react';
import ViewContainer from './ViewContainer';

const MainContainer = () => {

    // charge spinner / ViewContainer selon chargement
    const[loading, setLoading] = useState(false);
    let child = (loading) ? <MoonLoader/> : <ViewContainer/>;

    return (
        <div>{child}</div>
    );
};

export default MainContainer;