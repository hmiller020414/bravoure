import '../episode.scss'

const EpisodeRating = ({rating}) => {

    return (
        <div className="EpisodeRating">
            <p>{rating}/10</p>
        </div>
    )
}

export default EpisodeRating