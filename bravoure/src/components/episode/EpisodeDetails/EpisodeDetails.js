import EpisodeRating from "../EpisodeRating/EpisodeRating"
import '../episode.scss'

const EpisodeDetails = ({episode}) => {

    return (
        <div className="EpisodeDetails">
            <p>{episode?.Episode ? `Episode ${episode.Episode}` : null}</p>
            <EpisodeRating rating={episode?.imdbRating} />
            <h2>{episode?.Title}</h2>
            <p>{episode?.Plot}</p>
        </div>
    )
}

export default EpisodeDetails