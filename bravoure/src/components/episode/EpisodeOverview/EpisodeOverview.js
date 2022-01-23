import EpisodeImg from "../EpisodeImg/EpisodeImg"
import EpisodeDetails from "../EpisodeDetails/EpisodeDetails"

const EpisodeOverview = ({episode}) => {

    return (
        <div>
            <h2>Season 3, Episode 2</h2>
            <EpisodeImg />
            <EpisodeDetails />
        </div>
    )
}

export default EpisodeOverview