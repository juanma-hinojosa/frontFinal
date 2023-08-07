// import React, { useState, useEffect } from "react";
// import axios from "axios";
import "../../src/styles/highlights.css";
import Banner from "../img/bannerHigh.jpg";
import datos from "../json/datos.json";
import VideoComponent from "../components/videoComponent";

const Highlights = () => {
    // const [datos, setDatos] = useState([]);

    //Variable LOCAL de MONGO DB
    // const URL = "http://localhost:3001/lista";  

    // Variable Global
    // const URL = "https://backfinal-production-03d9.up.railway.app/lista";

    //Variable Global BACK RENDER
    // const URL = "https://back-fifa-db.onrender.com/lista";

    // const getVideos = async () => {
    //     try {
    //         const { data } = await axios.get(URL);
    //         setDatos(data.datos)
    //         console.log(data.datos);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // useEffect(() => {
    //     getVideos()
    // }, []);
    return (
        <main className="highlights-content" >
            <figure className="banner-wrapper">
                <div className="banner-title">
                    <h4>La casa de los mejores momentos de Catar 2022™</h4>
                    <p>FIFA+ es el sitio donde encontrarás lo más destacado de cada partido en la Copa Mundial de la FIFA, minutos después del pitido final. No te pierdas lo mejor de Catar 22™. Todos los goles, toda la acción, en un solo lugar. También disponible con lenguaje de señas para personas con discapacidad auditiva.</p>
                </div>
                <div className="banner-img">
                    <img src={Banner} alt="" />
                </div>
            </figure>

            <div className="video-title">
                <h4>El Camino del Campeon</h4>
            </div>

            <figure className="videos-content">
                {datos.map(dato =>
                    <VideoComponent
                        key={dato._id}
                        video={dato.video}
                        fecha={dato.fecha}
                        review={dato.review}
                    />
                )}
            </figure>


            <figure className="video-final">
                <h4>Argentina vs Francia | Final | Copa Mundial de la FIFA Catar 2022</h4>
                <div className="video-final-content">
                    <div className="video-final-parrafo">
                        <h2>18 dic 2022</h2>
                        <p>
                            La selección albiceleste derrotó por penales al elenco galo luego de igualar 3 a 3 en un encuentro para el infarto y, de esta manera, se consagró campeona del mundo por tercera vez
                        </p>
                    </div>
                    <div className="video">
                        <iframe src="https://www.youtube.com/embed/UFxfqk-hWcU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </figure>

        </main>
    )
}

export default Highlights;