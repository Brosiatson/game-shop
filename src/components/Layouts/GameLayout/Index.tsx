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
    const steamLogoImg = require(`../../../img/steam-logo.png`)
    const keyImg = require(`../../../img/key.png`)
    const globalImg = require(`../../../img/global.png`)

    const someGamesMap = games.map((game, i) => i < 3 ? <GamesListElement key={game.title} game={game}/> : null)

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
                <div className="div-game">
                    <img className="div-game-img" src={ importedImg } alt={title}></img>
                    <div className="div-game-info">
                        <h2 className="p-game-title">{ title }</h2>
                        <div className="div-game-accessibility">
                            <div>
                                <img src={steamLogoImg} alt="steam"></img>
                                <p>GAME ON STEAM</p>
                            </div>
                            <div>
                                <img src={globalImg} alt="global"></img>
                                <p>GLOBAL ACCESS</p>
                            </div>
                            <div>
                                <img src={keyImg} alt="key"></img>
                                <p>DIGITAL KEY</p>
                            </div>
                        </div>
                    </div>
                    <div className="div-game-price">
                        <p>Price: { price }$</p>
                        <button className={isWishlist ? "wishlist-active" : ""} onClick={handleButtonAddWishlist}><img src={isWishlist ? wishlistActiveImg : wishlistImg} alt="wishlist"></img></button>
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