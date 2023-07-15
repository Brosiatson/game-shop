import { useEffect, useState } from 'react'
import { useContextIsNull } from '../../../contexts/context'
import { Link } from 'react-router-dom'

export const ShoppingCartPrice: React.FC<{link: string, text: string}> = ({link, text}) => {
    const [total, setTotal] = useState<number>(0)
    const {games: {games}} = useContextIsNull()

    useEffect(() => {
        let x: number = 0
        for(let i = 0; i < games.length; i++) {
            setTotal(x = x + (games[i].isShoppingCart * (games[i].price * (1 - games[i].isSale))))
        }
    }, [games])

    return(
        <div className='shopping-cart-price'>
            <p className='shopping-cart-price__text'>Total: {total.toFixed(2)}$</p>
            <Link className='shopping-cart-price__link' to={games.some(game => game.isShoppingCart) ? link : ""}>{text}</Link>
        </div>
    )
}