import '../season.scss'

const SeasonDetails = ({show, season}) => {

    return (
        <div className="SeasonDetails">
            <p>{season?.Season ? `Season ${season.Season}` : null}</p>
            <h1>{show?.Title ?? null }</h1>
            <p>{show?.Plot ?? null }</p>
        </div>
    )
}

export default SeasonDetails