import { useState } from "react"
import { useContextIsNull } from "../../../contexts/context"
import { GamesList } from "../../Other/GamesList/Index"
import { GamesListElement } from "../../Other/GamesListElement/Index"
import { Header } from "../../Other/Header/Index"
import './GamesLayout.css'

export const GamesLayout: React.FC = () => {
    const [selectValue, setSelectValue] = useState<string>("hp")
    const [isNewCheckbox, setIsNewCheckbox] = useState<boolean>(true)
    const [isSaleCheckbox, setIsSaleCheckbox] = useState<boolean>(true)
    const [isOtherCheckbox, setIsOtherCheckbox] = useState<boolean>(true)

    const context = useContextIsNull()
    const {games: {games}, searchedGames: {searchedGames, setSearchedGames}, inputText: {inputText, setInputText}} = context

    const handleSelect = (value: string) => {
        setSelectValue(value)
    }

    const handleInputText = (value: string) => {
        setInputText(value)
    }

    const handleIsNewCheckbox = () => {
        setIsNewCheckbox(!isNewCheckbox)
    }

    const handleIsSaleCheckbox = () => {
        setIsSaleCheckbox(!isSaleCheckbox)
    }

    const handleIsOtherCheckbox = () => {
        setIsOtherCheckbox(!isOtherCheckbox)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const newGames = isNewCheckbox ? games.filter(game => game.isNew) : []
        const saleGames = isSaleCheckbox ? games.filter(game => game.isSale) : []
        const otherGames = isOtherCheckbox ? games.filter(game => !game.isNew && !game.isSale) : []
        const sortedTable = [...newGames, ...saleGames, ...otherGames]

        switch(selectValue) {
            case "hp": sortedTable.sort((a, b) => b.price - a.price); break;
            case "lp": sortedTable.sort((a, b) => a.price - b.price); break;
            case "hr": sortedTable.sort((a, b) => Number(b.rate) - Number(a.rate)); break;
            case "lr": sortedTable.sort((a, b) => Number(a.rate) - Number(b.rate)); break;
            case "az": sortedTable.sort((a, b) => b.title > a.title ? -1 : 1); break;
            case "za": sortedTable.sort((a, b) => a.title > b.title ? -1 : 1); break;
        }
        
        setSearchedGames(
            sortedTable.filter(game => 
                game.title.toUpperCase().includes(inputText.toUpperCase())
            )
        )
    }

    const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setSearchedGames(games)
        setInputText("")
        setSelectValue("hp")
        setIsNewCheckbox(true)
        setIsSaleCheckbox(true)
        setIsOtherCheckbox(true)
    }

    const searchedGamesElements = searchedGames.map(game => <GamesListElement game={game}/>)

    return (
        <>
            <Header />
            <main>
                <h2 className="h2-all-games">Store</h2>
                <div className="div-search">
                    <h3 className="h3-all-games">Search for "{inputText}"</h3>
                    <form onSubmit={(e) => handleSubmit(e)} onReset={(e) => handleReset(e)}>
                        <input type="search" value={inputText} placeholder="Search Game..." onChange={(e) => handleInputText(e.currentTarget.value)}></input>
                        <label>
                            New:
                            <input type="checkbox" onChange={handleIsNewCheckbox} checked={isNewCheckbox}></input>
                        </label>
                        <label>
                            Sale:
                            <input type="checkbox" onChange={handleIsSaleCheckbox} checked={isSaleCheckbox}></input>
                        </label>
                        <label>
                            Other:
                            <input type="checkbox" onChange={handleIsOtherCheckbox} checked={isOtherCheckbox}></input>
                        </label>
                        <select onChange={(e) => handleSelect(e.currentTarget.value)}>
                            <option value={"hp"}>From The Highest Price</option>
                            <option value={"lp"}>From The Lowest Price</option>
                            <option value={"hr"}>From The Highest Rating</option>
                            <option value={"lr"}>From The Lowest Rating</option>
                            <option value={"az"}>A-Z</option>
                            <option value={"za"}>Z-A</option>
                        </select>
                        <button type="submit">Submit</button>
                        <button type="reset">Reset</button>
                    </form>
                </div>
                <GamesList games={searchedGamesElements} text="No game found!!!"/>
            </main>
        </>
    )
}