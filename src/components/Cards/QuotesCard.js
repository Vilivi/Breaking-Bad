import {useHistory} from 'react-router-dom';

const QuoteCard = ({text, author}) => {

    const history = useHistory();

    return (
        <div className="CardQuotes">
            <h5>{text}</h5>
            <p>Author: <br/>
                <a onClick={() => {
                    history.push(`/${author}`)
                }}>
                    {author}
                    </a> 
            </p>
        </div>
    );
};

export default QuoteCard;