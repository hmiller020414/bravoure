const SeasonDetails = ({show}) => {

    return (
        <div>
            <h2>Season 3</h2>
            <h1>{show?.Title ?? null }</h1>
            <p>{show?.Plot ?? null }</p>
        </div>
    )
}

export default SeasonDetails