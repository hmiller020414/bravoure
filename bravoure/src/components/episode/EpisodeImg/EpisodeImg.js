import '../episode.scss'

const EpisodeImg = ({image, altText}) => {

    return (
        <div className="EpisodeImg">
            <img src={image} alt={altText} />
        </div>
    )
}

export default EpisodeImg