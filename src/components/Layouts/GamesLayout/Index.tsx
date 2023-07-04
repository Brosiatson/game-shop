import { useEffect, useState } from "react"
import { useContextIsNull } from "../../../contexts/context"
import { GamesList } from "../../Other/GamesList/Index"
import { GamesListElement } from "../../Other/GamesListElement/Index"
import { Header } from "../../Other/Header/Index"
import './GamesLayout.css'

export const GamesLayout: React.FC = () => {
    const [selectValue, setSelectValue] = useState<string>("none")
    const [gamesMap, setGamesMap] = useState<JSX.Element[]>([])

    const context = useContextIsNull()
    const {searchedGames: {searchedGames}, inputText: {inputText}} = context

    useEffect(() => {
        switch(selectValue) {
            case "none": setGamesMap(searchedGames.map(game => <GamesListElement key={game.title} game={game} />)); break
            case "hp": setGamesMap(searchedGames
                .sort((a, b) => b.price - a.price)
                .map(game => <GamesListElement key={game.title} game={game} />)); break
            case "lp": setGamesMap(searchedGames
                .sort((a, b) => a.price - b.price)
                .map(game => <GamesListElement key={game.title} game={game} />)); break
            case "hr": setGamesMap(searchedGames
                .sort((a, b) => Number(b.rate) - Number(a.rate))
                .map(game => <GamesListElement key={game.title} game={game} />)); break
            case "lr": setGamesMap(searchedGames
                .sort((a, b) => Number(a.rate) - Number(b.rate))
                .map(game => <GamesListElement key={game.title} game={game} />)); break
            case "az": setGamesMap(searchedGames
                .sort((a, b) => a.title > b.title ? 1 : -1)
                .map(game => <GamesListElement key={game.title} game={game} />)); break
            case "za": setGamesMap(searchedGames
                .sort((a, b) => b.title > a.title ? 1 : -1)
                .map(game => <GamesListElement key={game.title} game={game} />)); break
        }
    }, [selectValue, searchedGames])

    const handleSelect = (value: string) => {
        setSelectValue(value)
    }

    return (
        <>
            <Header />
            <main>
                <h2 className="h2-all-games">Store</h2>
                <div className="div-search">
                    <h3 className="h3-all-games">Search for "{inputText}"</h3>
                    <select onChange={(e) => handleSelect(e.currentTarget.value)}>
                        <option value={"none"}>None</option>
                        <option value={"hp"}>From The Highest Price</option>
                        <option value={"lp"}>From The Lowest Price</option>
                        <option value={"hr"}>From The Highest Rating</option>
                        <option value={"lr"}>From The Lowest Rating</option>
                        <option value={"az"}>A-Z</option>
                        <option value={"za"}>Z-A</option>
                    </select>
                </div>
                <GamesList games={gamesMap} text="No game found!!!"/>
            </main>
        </>
    )
}