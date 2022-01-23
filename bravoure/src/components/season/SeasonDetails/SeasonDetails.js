const SeasonDetails = ({show, season}) => {

    return (
        <div>
            <h2>{season?.Season ? `Season ${season.Season}` : null}</h2>
            <h1>{show?.Title ?? null }</h1>
            <p>{show?.Plot ?? null }</p>
        </div>
    )
}

export default SeasonDetails