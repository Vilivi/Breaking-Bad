import '../../css/Character.css';

const CharacterCard = ({src, name, key}) => {
    return (
        <div className="CharacterCard" id={key}>
            <div className="container">
                <img src={src}/>
                <h5>{name}</h5>
            </div>
        </div>
    );
};

export default CharacterCard;