import '../episode.scss'

const EpisodeRating = ({rating}) => {

    return (
        <div className="EpisodeRating">
            <p><b>{rating}</b>/10</p>
        </div>
    )
}

export default EpisodeRating