import { Link } from "react-router-dom"
import { GameType } from "../../../types/Types"
import { useContextIsNull } from "../../../contexts/context"

export const GamesListElement: React.FC<{game: GameType}> = ({game: {title, code, rate, img, price, isWishlist, isSale, isNew}}) => {
    const gameImg = require(`../../../img/${ img }`)
    const shoppingCartImg = require(`../../../img/shoppingcart.png`)
    const wishlistImg = require(`../../../img/wishlist.png`)
    const wishlistActiveImg = require(`../../../img/wishlist-active.png`)

    const context = useContextIsNull()
    const {games: {games, setGames}, searchedGames: {searchedGames, setSearchedGames}} = context

    const handleButtonAddWishlist = () => {
        setGames(games.map(game => game.code === code ? {...game, isWishlist: !game.isWishlist} : game))
        setSearchedGames(searchedGames.map(game => game.code === code ? {...game, isWishlist: !game.isWishlist} : game))
    }

    const handleButtonAddShoppingCart = () => {
        setGames(games.map(game => game.code === code ? {...game, isShoppingCart: game.isShoppingCart + 1} : game))
    }

    const isNewElement = isNew ? <p className="games-list-element__img--new">NEW!</p> : null 

    const priceElement = isSale ? 
    <h2 className="games-list-element__price">
        <p>{(price * (1 - isSale)).toFixed(2)}$</p>
        <p style={{textDecoration: "line-through"}}>{price.toFixed(2)}$</p>
        <p className="games-list-element_price--sale">{`-${isSale * 100}%`}</p>
    </h2> : 
    <h2 className="games-list-element__price">{price.toFixed(2)}$</h2>
    
    return (
        <div className="games-list-element">
            <div className="games-list-element__img" style={ {backgroundImage: `url(${gameImg})`} }>
                {isNewElement}
            </div>

            <h2 className="games-list-element__title">{ title }</h2>

            {priceElement} 

            <div className="games-list-element__info">
                <p className="games-list-element__info--rate">Rate: { rate }</p>
            </div>

            <div className="games-list-element__buttons">
                <Link className="games-list-element__buttons--link" to={ `/game/${code}` }>View More</Link>

                <button
                    className={isWishlist ? "games-list-element__buttons--enabled" : "games-list-element__buttons--disabled"}
                    onClick={handleButtonAddWishlist}
                >
                    <img
                        className="games-list-element__buttons--img"
                        src={isWishlist ? wishlistActiveImg : wishlistImg} alt="wishlist add button"
                    >
                    </img>
                </button>

                <button
                    className="games-list-element__buttons--disabled"
                    onClick={handleButtonAddShoppingCart}
                >
                    <img
                        className="games-list-element__buttons--img"
                        src={shoppingCartImg} alt="shopping cart add button"
                    >
                    </img>
                </button>
            </div>
        </div>
    )
}