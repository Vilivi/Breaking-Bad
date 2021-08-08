import {Route, Switch} from 'react-router-dom';
import Accueil from './View/Accueil';
import Characters from './View/Characters';
import Episodes from './View/Episodes';
import Quotes from './View/Quotes';
import Detail from './View/Detail';

import "../css/ViewContainer.css"; 

const ViewContainer = () => {
    return (
        <div className="ViewContainer">
            <Switch>
                <Route exact path="/" component={Accueil} />
                <Route path="/characters" component={Characters}/>
                <Route path="/episodes" component={Episodes}/>
                <Route path="/quotes" component={Quotes}/>
                <Route path="/:name" component={Detail} />
            </Switch>
        </div>
    );
};

export default ViewContainer;