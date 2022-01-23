import EpisodeImg from "../EpisodeImg/EpisodeImg"
import EpisodeDetails from "../EpisodeDetails/EpisodeDetails"
import '../episode.scss'

const EpisodeOverview = ({episode}) => {

    return (
        <div className="EpisodeOverview">
            <EpisodeImg image={episode?.Poster} altText={episode?.Title} />
            <EpisodeDetails episode={episode} />
        </div>
    )
}

export default EpisodeOverview