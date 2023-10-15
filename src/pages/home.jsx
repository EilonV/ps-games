import { useEffect, useState } from "react";
import "../services/games-api.service";
import { getGames } from "../services/games-api.service";
import { Boot } from "../components/boot";
// PS5 PLATFORM CODE ID : 187

export const Home = () => {
    const [games, setGames] = useState([])
    const [isBooted, setIsBooted] = useState(false);

    useEffect(() => {
        getGames()
            .then(res => {
                setGames(res)
            })
    }, [])

    return <main className="games">
        {!isBooted ?
            <Boot setIsBooted={setIsBooted}/>
            :
            <div className="games-grid">
                {games.map((game) => {
                    return <div className="game" key={game.id}>
                        <h2>{game.name}</h2>
                        <div className="game-img-wrapper">
                            <img src={game.background_image} alt={game.name.concat('poster')} loading="lazy" />
                        </div>
                    </div>
                })}
            </div>
        }
    </main>
}