import { Link } from "react-router-dom"
import { useContextIsNull } from "../../../contexts/context"
import { GameType } from "../../../types/Types"
import { GamesListElement } from "../../Other/GamesListElement/Index"
import { Header } from "../../Other/Header/Index"
import './GameLayout.css'

export const GameLayout: React.FC<{game: GameType}> = ({ game: { title, img, price, code, isWishlist } }) => {
    const context = useContextIsNull()
    const {games: {games, setGames}} = context

    const importedImg = require(`../../../img/${img}`) 
    const shoppingCartImg = require(`../../../img/shoppingcart.png`)
    const wishlistImg = require(`../../../img/wishlist.png`)
    const wishlistActiveImg = require(`../../../img/wishlist-active.png`)

    const someGamesMap = games.map((game, i) => i < 3 ? <GamesListElement game={game}/> : null)

    const handleButtonAddWishlist = () => {
        setGames(games.map(game => game.code === code ? {...game, isWishlist: !game.isWishlist} : game))
    }

    const handleButtonAddShoppingCart = () => {
        setGames(games.map(game => game.code === code ? {...game, isShoppingCart: game.isShoppingCart + 1} : game))
    }

    return (
        <>
            <Header />
            <main>
                <div className="div-game-info">
                    <img src={ importedImg } alt={title}></img>
                    <p className="p-game-title">{ title }</p>
                    <div className="div-game-price">
                        <p>Price: { price }</p>
                        <button onClick={handleButtonAddWishlist}><img src={isWishlist ? wishlistActiveImg : wishlistImg} alt="wishlist"></img></button>
                        <button onClick={handleButtonAddShoppingCart}><img src={shoppingCartImg} alt="shopping cart"></img></button>
                    </div>
                </div>
                <div className="div-game-other-games">
                    <h2 className="h2-other-games">Other Games</h2>
                    <div className="div-game-other-games-list">
                        {someGamesMap}
                    </div>
                    <Link className="a-all-games" to="/games">All Games</Link>
                </div>
            </main>
        </>
    )
}