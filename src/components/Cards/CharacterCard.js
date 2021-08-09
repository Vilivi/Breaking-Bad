import '../../css/Character.css';

const CharacterCard = ({src, name}) => {

    return (
        <div className="CharacterCard">
            <div className="container">
                <img src={src}/>
                <h5><a href={name}>{name}</a></h5>
            </div>
        </div>
    );
};

export default CharacterCard;