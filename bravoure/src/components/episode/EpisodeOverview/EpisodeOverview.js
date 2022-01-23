import EpisodeImg from "../EpisodeImg/EpisodeImg"
import EpisodeDetails from "../EpisodeDetails/EpisodeDetails"

const EpisodeOverview = ({episode}) => {

    return (
        <div>
            <EpisodeImg image={episode?.Poster} altText={episode?.Title} />
            <EpisodeDetails episode={episode} />
        </div>
    )
}

export default EpisodeOverview