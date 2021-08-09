import React from 'react';
import { useMyContext } from '../../tools/LoadingContext';

const Accueil = () => {

    const [, dispatch] = useMyContext();
    
    dispatch({type: 'reset'});

    return (
        <div>Please click on menu item</div>
    );
}

export default Accueil;