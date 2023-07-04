import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useContextIsNull } from '../../../contexts/context'
import './ShoppingCartWindow.css'
import { GamesListElementLite } from '../GamesListElementLite/Index'

export const ShoppingCartWindow: React.FC = () => {
    const [total, setTotal] = useState<number>(0)

    const context = useContextIsNull()
    const {games: {games}} = context

    useEffect(() => {
        let x: number = 0
        for(let i = 0; i < games.length; i++) {
            setTotal(x = x + (games[i].isShoppingCart * games[i].price))
        }
    }, [games])
    
    const gamesShoppingCartMap = games.map(game => game.isShoppingCart ? <GamesListElementLite key={game.title} game={game}/> : null)

    return (
        <div className="div-shopping-cart-window">
            {gamesShoppingCartMap.some(game => game) ? gamesShoppingCartMap : <p className='p-shopping-cart-empty'>Your Shopping Cart is empty!!!</p>}
            <p>Total: {total.toFixed(2)}$</p>
            <Link to="/shopping-cart">View Cart</Link>
        </div>
    )
}