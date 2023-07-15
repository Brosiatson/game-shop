import { Link } from "react-router-dom"
import { useContextIsNull } from "../../../contexts/context"
import { Header } from "../../Other/Header/Index"
import { KeysListElement } from "../../Other/KeysListElement/Index"
import { ShoppingCartState } from "../../Other/ShoppingCartState/Index"

export const KeysLayout: React.FC = () => {
    const {games: {games, setGames}} = useContextIsNull()

    const boughtGames: string[] = []
    games.forEach(game => {
        for(let i = 0; i < game.isShoppingCart; i++) {
            boughtGames.push(game.code)
        }
    })
    const keysList = boughtGames.map(gameCode => <KeysListElement code={gameCode} />)

    const handleLink = () => {
        setGames(games.map(game => {return {...game, isShoppingCart: 0}}))
    }

    return(
        <>
            <Header />
            <main>
                <h2 className="title">Keys</h2>
                <ShoppingCartState number={3} />
                <div className="keys">
                    <h3 className="keys__title">Thanks for shopping!!!</h3>
                    {keysList}
                </div>
                <Link className="keys__link" onClick={handleLink} to="/">Back to Home</Link>
            </main>
        </>
    )
}