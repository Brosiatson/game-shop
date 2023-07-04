import { useContextIsNull } from "../../../contexts/context"
import { GamesListElement } from "../../Other/GamesListElement/Index"
import { GamesSectionHomepage } from "../../Other/GamesSectionHomepage/Index"
import { Header } from '../../Other/Header/Index'
import './HomeLayout.css'

export const HomeLayout: React.FC = () => {
    const context = useContextIsNull()

    const {games: {games}} = context

    const gamesNewMap = games.map(game => game.isNew ? <GamesListElement key={game.code} game={game}/> : null)
    const gamesSaleMap = games.map(game => game.isSale ? <GamesListElement key={game.code} game={game}/> : null)
    const gamesOtherMap = games.map(game => !game.isSale && !game.isNew ? <GamesListElement key={game.code} game={game}/> : null)

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


