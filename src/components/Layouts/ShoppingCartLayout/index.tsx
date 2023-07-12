import { useEffect, useState } from 'react'
import { useContextIsNull } from "../../../contexts/context"
import { GamesListElementLite } from "../../Other/GamesListElementLite/Index"
import { Header } from "../../Other/Header/Index"
import "./ShoppingCartLayout.css"
import { GamesListElement } from '../../Other/GamesListElement/Index'
import { Link } from 'react-router-dom'

export const ShoppingCartLayout: React.FC = () => {
    const [total, setTotal] = useState<number>(0)
    const {games: {games}} = useContextIsNull()

    const shoppingCartMap = games.map(game => game.isShoppingCart ? <GamesListElementLite game={game}/> : null)

    useEffect(() => {
        let x: number = 0
        for(let i = 0; i < games.length; i++) {
            setTotal(x = x + (games[i].isShoppingCart * games[i].price))
        }
    }, [games])

    const someGamesMap = games.map((game, i) => i < 3 ? <GamesListElement key={game.title} game={game}/> : null)

    return(
        <>
            <Header />
            <main>
                <h2 className="h2-shopping-cart">Shopping Cart</h2>
                <div className='div-shopping-state'>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
                <div className="div-shopping-cart-games">
                    <div className="div-shopping-cart-games-list">
                        <h3>Cart</h3>
                        {shoppingCartMap}
                    </div>
                    <div className="div-shopping-cart-games-price">
                        <p>Total: {total.toFixed(2)}$</p>
                        <button>Confirm Cart</button>
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