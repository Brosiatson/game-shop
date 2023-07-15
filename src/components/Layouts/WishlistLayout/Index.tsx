import { useContextIsNull } from "../../../contexts/context"
import { GamesList } from "../../Other/GamesList/Index"
import { GamesListElement } from "../../Other/GamesListElement/Index"
import { Header } from "../../Other/Header/Index"

export const WishlistLayout: React.FC = () => {
    const context = useContextIsNull()
    const {games: {games}} = context

    const gamesWishlistMap = games.map(game => game.isWishlist ? <GamesListElement game={game} /> : null)

    return (
        <>
            <Header />
            <main>
                <h2 className="title">Wishlist</h2>
                <GamesList games={gamesWishlistMap} text={"There are no games in your wishlist!!!"}/>
            </main>
        </>
    )
}