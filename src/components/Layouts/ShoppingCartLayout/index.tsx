import { useContextIsNull } from "../../../contexts/context"
import { GamesListElementLite } from "../../Other/GamesListElementLite/Index"
import { Header } from "../../Other/Header/Index"
import "./ShoppingCartLayout.css"
import { GamesListElement } from '../../Other/GamesListElement/Index'
import { Link } from 'react-router-dom'
import { ShoppingCartState } from '../../Other/ShoppingCartState/Index'
import { ShoppingCartPrice } from '../../Other/ShoppingCartPrice/Index'

export const ShoppingCartLayout: React.FC = () => {
    const {games: {games}} = useContextIsNull()

    const shoppingCartMap = games.map(game => game.isShoppingCart ? <GamesListElementLite game={game}/> : null)

    const someGamesMap = games.map((game, i) => i < 3 ? <GamesListElement key={game.title} game={game}/> : null)

    return(
        <>
            <Header />
            <main>
                <h2 className="h2-shopping-cart">Shopping Cart</h2>
                <ShoppingCartState number={1}/>
                <div className="div-shopping-cart-games">
                    <div className="div-shopping-cart-games-list">
                        <h3>Cart</h3>
                        {shoppingCartMap.some(game => game) ? shoppingCartMap : <p>There are no games in your cart!!!</p>}
                    </div>
                    <ShoppingCartPrice link="form" text="Confirm Cart"/>
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