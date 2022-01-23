import EpisodeRating from "../EpisodeRating/EpisodeRating"

const EpisodeDetails = ({episode}) => {

    return (
        <div>
            <p>{episode.Episode ? `Episode ${episode.Episode}` : null}</p>
            <EpisodeRating rating={episode?.imdbRating} />
            <h2>{episode?.Title}</h2>
            <p>{episode?.Plot}</p>
        </div>
    )
}

export default EpisodeDetails