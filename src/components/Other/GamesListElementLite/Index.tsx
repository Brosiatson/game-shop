import { GameType } from "../../../types/Types"
import './GamesListElementLite.css'
import { useContextIsNull } from "../../../contexts/context"

export const GamesListElementLite: React.FC<{game: GameType}> = ({game: {title, code, img, isShoppingCart, price}}) => {
    const context = useContextIsNull()
    const {games: {games, setGames}} = context

    const importedImg = require(`../../../img/${img}`)

    const handleButton = (number: number) => {
        setGames(games.map(game => game.code === code ? {...game, isShoppingCart: game.isShoppingCart + number} : game))
    }

    return (
        <div className="div-games-list-element-lite">
            <img src={importedImg} alt={title}></img>
            <p>{title}</p>
            <div className="div-game-cart-amount">
                <button onClick={() => handleButton(-1)}>-</button>
                <p>{isShoppingCart}</p>
                <button onClick={() => handleButton(1)}>+</button>
            </div>
            <div className="div-game-cart-price">
                <p>{(price * isShoppingCart).toFixed(2)}$</p>
            </div>
        </div>
    )
}