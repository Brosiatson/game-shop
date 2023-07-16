import { Link } from "react-router-dom";
import { useContextIsNull } from "../../../contexts/context";

export const HamburgerScreen: React.FC<{setShowMenu: React.Dispatch<React.SetStateAction<boolean>>, }> = ({setShowMenu}) => {
    const {searchedGames: {setSearchedGames}, games: {games}, inputText: {inputText, setInputText}} = useContextIsNull()

    const handleButtonMenu = () => {
        document.querySelector("body")?.classList.toggle("menu-displayed")
        setShowMenu(value => !value)
    }

    const handleInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.currentTarget.value)
    }

    const handleButtonSearch = () => {
        setSearchedGames(games.filter(game => game.title.toUpperCase().includes(inputText.toUpperCase())))
    }

    return(
        <div className='hamburger-screen'>
            <button className="hamburger-screen__button" onClick={handleButtonMenu}>X</button>
            <div className='hamburger-screen__search'>
                <input
                    className="hamburger-screen__search--input" 
                    type="search" 
                    placeholder='Search Game...' 
                    value={inputText} 
                    onChange={(e) => handleInputText(e)}
                >
                </input>

                <Link
                    className="hamburger-screen__search--link" 
                    onClick={() => {handleButtonMenu(); handleButtonSearch()}} 
                    to={inputText ? "/game-shop/games" : ""}
                >
                Search
                </Link>
            </div>
            <Link className="hamburger-screen__link" onClick={handleButtonMenu} to="/game-shop/games">Store</Link>
            <Link className="hamburger-screen__link" onClick={handleButtonMenu} to="/game-shop/wishlist">Wishlist</Link>
            <Link className="hamburger-screen__link" onClick={handleButtonMenu} to="/game-shop/shopping-cart">Shopping Cart</Link>
        </div>
    )
}