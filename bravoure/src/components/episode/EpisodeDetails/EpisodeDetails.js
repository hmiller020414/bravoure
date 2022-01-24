import EpisodeRating from "../EpisodeRating/EpisodeRating"
import '../episode.scss'

const EpisodeDetails = ({episode}) => {

    return (
        <div className="EpisodeDetails">
            <div className="EpisodeDetails-Nums">
                <p>{episode?.Episode ? `Episode ${episode.Episode}` : null} – {episode?.Released ?? null}</p>
                <EpisodeRating rating={episode?.imdbRating} />
            </div>
            <div className="EpisodeDetails-Plot">
                <h2>{episode?.Title}</h2>
                <p>{episode?.Plot}</p>
            </div>
        </div>
    )
}

export default EpisodeDetails