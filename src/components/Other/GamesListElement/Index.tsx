import { Link } from "react-router-dom"
import { GameType } from "../../../types/Types"
import './GamesListElement.css'
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
    
    return (
        <div className="div-games-list-element">
            <div className="div-games-list-element-img" style={ {backgroundImage: `url(${gameImg})`} }>
                {isNew ?
                    <p className="p-new">NEW!</p> : null 
                }
            </div>
            <h2>{ title }</h2>
            {isSale ?
                <h2 className="h2-price">
                    <p>{(price * (1 - isSale)).toFixed(2)}$</p>
                    <p style={{textDecoration: "line-through"}}>{price.toFixed(2)}$</p>
                    <p className="h2-price-percent">{`-${isSale * 100}%`}</p>
                </h2> :
                <h2>{price.toFixed(2)}$</h2>
            } 
            <div className="div-games-list-element-info">
                <p>Rate: { rate }</p>
            </div>
            <div className="div-games-list-element-buttons">
                <Link to={ `/game/${code}` }>View More</Link>
                <button id={isWishlist ? "button-wishlist-add-active" : ""} onClick={handleButtonAddWishlist}><img src={isWishlist ? wishlistActiveImg : wishlistImg} alt="wishlist add button"></img></button>
                <button onClick={handleButtonAddShoppingCart}><img src={shoppingCartImg} alt="shopping cart add button"></img></button>
            </div>
        </div>
    )
}