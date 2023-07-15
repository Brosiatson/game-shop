import { useContextIsNull } from "../../../contexts/context"
import { GamesListElementLite } from "../../Other/GamesListElementLite/Index"
import { Header } from "../../Other/Header/Index"
import { GamesListElement } from '../../Other/GamesListElement/Index'
import { ShoppingCartState } from '../../Other/ShoppingCartState/Index'
import { ShoppingCartPrice } from '../../Other/ShoppingCartPrice/Index'
import { GamesSectionHomepage } from "../../Other/GamesSectionHomepage/Index"
import { ShoppingCartWindow } from "../../Other/ShoppingCartWindow/Index"

export const ShoppingCartLayout: React.FC = () => {
    const {games: {games}} = useContextIsNull()

    const shoppingCartMap = games.map(game => game.isShoppingCart ? <GamesListElementLite game={game}/> : null)

    const someGamesMap = games.map((game, i) => i < 3 ? <GamesListElement key={game.title} game={game}/> : null)

    const shoppingCartList = shoppingCartMap.some(game => game) ? shoppingCartMap : <p className="shopping-cart__cart--empty">There are no games in cart!!!</p>

    return(
        <>
            <Header />
            <main>
                <h2 className="title">Shopping Cart</h2>
                <ShoppingCartState number={1}/>
                <div className="shopping-cart">
                    <div className="shopping-cart__cart">
                        <h3 className="shopping-cart__cart--title">Cart</h3>
                        {shoppingCartList}
                    </div>
                    <ShoppingCartPrice link="form" text="Confirm Cart"/>
                </div>
                <GamesSectionHomepage gamesMap={someGamesMap} text="Other Games"/>
            </main>
        </>
    )
}