import { useEffect, useState } from "react";
import "../services/games-api.service";
import { getGames } from "../services/games-api.service";
import { Boot } from "../components/boot";
import Spline from "@splinetool/react-spline"
import { Hero } from "../components/hero";
import { GameTags } from "../components/game-tags";

// PS5 PLATFORM CODE ID : 187

export const Home = () => {
    const [games, setGames] = useState([])
    const [isBooted, setIsBooted] = useState(false);
    const [bootAnimation, setBootAnimation] = useState(false);

    useEffect(() => {
        getGames()
            .then(res => {
                setGames(res)
            })
    }, [])

    return <main className="games">
        {!isBooted ?
            <Boot bootAnimation={bootAnimation} setIsBooted={setIsBooted} setBootAnimation={setBootAnimation} />
            :
            <div>
                <Hero />
                <div className="games-grid">
                    {games.map((game) => {
                        return <div className="game" key={game.id}>
                            <h2>{game.name}</h2>
                            {game.background_image ?
                                <div className="game-img-wrapper">
                                    <img src={game.background_image} alt={game.name.concat('poster')} loading="lazy" />
                                    <GameTags game={game} />
                                </div>
                                :
                                <div className="game-img-wrapper no-img">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                                        <linearGradient id="uxa4XkH_z1TbAZXuLncXka_fCXY5oGwdlIv_gr1" x1="24.054" x2="24.054" y1="5.264" y2="42.241" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4a4a4a"></stop><stop offset=".659" stop-color="#323232"></stop><stop offset="1" stop-color="#232323"></stop></linearGradient><path fill="url(#uxa4XkH_z1TbAZXuLncXka_fCXY5oGwdlIv_gr1)" d="M18.011,22.515l0.007,17.254l3.894,1.236l3.894,1.236l0.012-14.685	c0.015-13.865,0.017-14.697,0.056-14.891c0.058-0.283,0.109-0.445,0.186-0.622c0.268-0.595,0.731-0.842,1.294-0.685	c0.825,0.227,1.299,0.827,1.473,1.863c0.08,0.481,0.087,0.972,0.087,6.828v5.825l0.23,0.109c0.501,0.232,1.166,0.467,1.688,0.59	c3.256,0.767,5.675-0.789,6.487-4.17c0.227-0.948,0.322-1.969,0.293-3.215c-0.039-1.749-0.232-3.089-0.617-4.262	c-0.607-1.865-1.705-3.299-3.413-4.46C32.13,9.48,30.449,8.73,27.73,7.857c-3.413-1.096-6.751-2.008-9.09-2.484	c-0.298-0.06-0.564-0.109-0.588-0.109C18.006,5.264,18.006,5.578,18.011,22.515z M12.322,27.583	c-2.296,0.815-4.804,1.708-5.576,1.981c-2.029,0.721-2.228,0.793-2.709,0.989c-1.376,0.559-2.554,1.193-3.186,1.715	c-0.23,0.191-0.438,0.45-0.564,0.704c-0.157,0.314-0.189,0.467-0.177,0.835c0.01,0.259,0.022,0.331,0.085,0.501	c0.138,0.38,0.423,0.772,0.801,1.103c0.522,0.457,1.454,0.934,2.363,1.214c0.16,0.048,0.46,0.143,0.665,0.206	c3.894,1.224,7.898,1.502,11.925,0.827l0.544-0.092l0.007-2.037c0.002-1.139-0.005-2.037-0.017-2.037	c-0.01,0-0.411,0.143-0.888,0.317c-3.362,1.224-3.478,1.26-4.182,1.386c-1.434,0.259-2.956,0.184-3.701-0.179	c-0.44-0.213-0.566-0.45-0.399-0.74c0.123-0.218,0.438-0.447,0.847-0.619c0.099-0.041,2.015-0.731,4.252-1.534	c2.24-0.801,4.078-1.461,4.083-1.468c0.005-0.005,0.007-1.033,0.005-2.283l-0.007-2.274L12.322,27.583z M34.938,28.088	c-2.291,0.126-4.896,0.61-7.068,1.309l-0.576,0.186v2.354c0,1.507,0.007,2.354,0.024,2.354c0.022,0,0.847-0.29,5.757-2.02	c2.714-0.958,2.833-0.999,3.181-1.088c1.771-0.464,3.984-0.353,4.62,0.232c0.184,0.169,0.225,0.324,0.133,0.506	c-0.114,0.223-0.351,0.411-0.752,0.602c-0.138,0.065-1.258,0.479-2.489,0.917c-1.231,0.44-3.205,1.142-4.39,1.565	c-3.592,1.28-5.996,2.136-6.04,2.153c-0.041,0.017-0.044,0.148-0.044,2.291c0,2.155,0.002,2.274,0.044,2.257	c0.048-0.019,6.705-2.409,14.673-5.271c1.355-0.489,2.617-0.953,2.806-1.033c1.035-0.445,1.986-1.035,2.504-1.548	C47.799,33.378,48,32.957,48,32.44c0-0.552-0.206-0.972-0.716-1.461c-0.435-0.421-1.212-0.88-2.017-1.195	c-0.416-0.162-1.773-0.626-2.201-0.752c-1.599-0.469-3.227-0.75-5.273-0.912C37.478,28.095,35.262,28.071,34.938,28.088z"></path>
                                    </svg>
                                    <GameTags game={game} />
                                </div>
                            }
                        </div>
                    })}
                </div>
            </div>
        }
        <div className="canvas-wrapper">
            <Spline scene="https://prod.spline.design/92yuWmkvRednLVW5/scene.splinecode" />
        </div>
    </main>
}