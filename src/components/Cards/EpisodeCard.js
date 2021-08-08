const EpisodeCard = ({key, title, season, episode, characters}) => {

    const character = characters.join(", ");

    return (
        <div id={key}>
            <h5>Breaking Bad S{season}/E{episode} => {title}</h5>
            <p>CharacterList: <br/>
            {character}
            </p>
        </div>
    );
};

export default EpisodeCard;