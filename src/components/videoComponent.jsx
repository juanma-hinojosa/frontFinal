const VideoComponent = (props) => {
    return (
        <div className="video">
            <iframe width="" height="205" src={props.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h2>
                {props.fecha}
            </h2>
            <p>
                {props.review}
            </p>

        </div>
    )
}

export default VideoComponent;