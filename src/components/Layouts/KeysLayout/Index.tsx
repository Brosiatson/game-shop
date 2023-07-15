import { Link } from "react-router-dom"
import { useContextIsNull } from "../../../contexts/context"
import { Header } from "../../Other/Header/Index"
import { KeysListElement } from "../../Other/KeysListElement/Index"
import { ShoppingCartState } from "../../Other/ShoppingCartState/Index"
import "./KeysLayout.css"

export const KeysLayout: React.FC = () => {
    const {games: {games, setGames}} = useContextIsNull()

    const boughtGames: string[] = []
    games.map(game => {
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
                <h2 className="h2-keys">Keys</h2>
                <ShoppingCartState number={3} />
                <div className="keys-container">
                    <h3>Thanks for shopping!!!</h3>
                    {keysList}
                </div>
                <Link className="keys-link" onClick={handleLink} to="/">Back to Home</Link>
            </main>
        </>
    )
}