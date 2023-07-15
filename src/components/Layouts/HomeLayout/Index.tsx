import { useContextIsNull } from "../../../contexts/context"
import { GamesListElement } from "../../Other/GamesListElement/Index"
import { GamesSectionHomepage } from "../../Other/GamesSectionHomepage/Index"
import { Header } from '../../Other/Header/Index'

export const HomeLayout: React.FC = () => {
    const context = useContextIsNull()

    const {games: {games}} = context

    const gamesNewMap = games.filter(game => game.isNew).map((game, index) => index < 3 ? <GamesListElement key={game.code} game={game}/> : null)
    const gamesSaleMap = games.filter(game => game.isSale).map((game, index) => index < 3 ? <GamesListElement key={game.code} game={game}/> : null)
    const gamesOtherMap = games.filter(game => !game.isSale && !game.isNew).map((game, index) => index < 3 ? <GamesListElement key={game.code} game={game}/> : null)

    return(
        <> 
            <Header />
            <main>
                <GamesSectionHomepage gamesMap={gamesNewMap} text="New stuff!!!"/>
                <GamesSectionHomepage gamesMap={gamesSaleMap} text="Sale!!!"/>
                <GamesSectionHomepage gamesMap={gamesOtherMap} text="Other Games"/>
            </main>
        </>
    )
}


