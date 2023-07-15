import { useContextIsNull } from "../../../contexts/context"
import { GameType } from "../../../types/Types"
import { GamesListElement } from "../../Other/GamesListElement/Index"
import { Header } from "../../Other/Header/Index"
import { GamesSectionHomepage } from "../../Other/GamesSectionHomepage/Index"
import { GameAccessibilityElement } from "../../Other/GameAccessibilityElement/Index"

export const GameLayout: React.FC<{game: GameType}> = ({ game: { title, img, price, code, isWishlist } }) => {
    const {games: {games, setGames}} = useContextIsNull()

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
                <div className="game">
                    <img className="game__img" src={ importedImg } alt={title}></img>
                    <div className="game__info">
                        <h2 className="game__title">{ title }</h2>
                        <div className="game__accessibility">
                            <GameAccessibilityElement img={steamLogoImg} alt="steam" text="GAME ON STEAM"/>
                            <GameAccessibilityElement img={globalImg} alt="global" text="GLOBAL ACCESS"/>
                            <GameAccessibilityElement img={keyImg} alt="key" text="DIGITAL KEY"/>
                        </div>
                    </div>
                    <div className="game__price">
                        <p className="game__price--text">Price: { price }$</p>

                        <button
                            className={isWishlist ? "game__price--button game__price--button-active" : "game__price--button"} 
                            onClick={handleButtonAddWishlist}
                        >
                            <img className="game__price--img" src={isWishlist ? wishlistActiveImg : wishlistImg} alt="wishlist"></img>
                        </button>

                        <button
                            className="game__price--button" 
                            onClick={handleButtonAddShoppingCart}
                        >
                            <img className="game__price--img" src={shoppingCartImg} alt="shopping cart"></img>
                        </button>
                    </div>
                </div>
                <GamesSectionHomepage gamesMap={someGamesMap} text="Other Games"/>
            </main>
        </>
    )
}