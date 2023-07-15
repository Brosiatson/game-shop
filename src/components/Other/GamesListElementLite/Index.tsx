import { GameType } from "../../../types/Types"
import { useContextIsNull } from "../../../contexts/context"

export const GamesListElementLite: React.FC<{game: GameType}> = ({game: {title, code, img, isShoppingCart, price, isSale}}) => {
    const context = useContextIsNull()
    const {games: {games, setGames}} = context

    const importedImg = require(`../../../img/${img}`)

    const handleButton = (number: number) => {
        setGames(games.map(game => game.code === code ? {...game, isShoppingCart: game.isShoppingCart + number} : game))
    }

    return (
        <div className="games-list-element-lite">
            <img className="games-list-element-lite__img" src={importedImg} alt={title}></img>
            <p className="games-list-element-lite__title">{title}</p>
            <div className="games-list-element-lite__amount">
                <button className="games-list-element-lite__amount--button" onClick={() => handleButton(-1)}>-</button>
                <p className="games-list-element-lite__amount--text">{isShoppingCart}</p>
                <button className="games-list-element-lite__amount--button" onClick={() => handleButton(1)}>+</button>
            </div>
            <p className="games-list-element-lite__price">{((price * (1 - isSale)) * isShoppingCart).toFixed(2)}$</p>
        </div>
    )
}