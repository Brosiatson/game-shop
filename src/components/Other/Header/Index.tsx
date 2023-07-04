import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartWindow } from '../ShoppingCartWindow/Index'
import './Header.css'
import { useContextIsNull } from '../../../contexts/context'

export const Header: React.FC = () => {
    const [inputTextValue, setInputTextValue] = useState<string>("")
    const [showShoppingCart, setShowShoppingCart] = useState<boolean>(false)
    const [showMenu, setShowMenu] = useState<boolean>(false)

    const context = useContextIsNull()
    const {searchedGames: {setSearchedGames}, games: {games}, inputText: {setInputText}} = context

    const handleInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTextValue(e.currentTarget.value)
    }

    const handleButtonShoppingCart = () => {
        setShowShoppingCart(!showShoppingCart)
    }

    const handleButtonMenu = () => {
        document.querySelector("body")?.classList.toggle("menu-displayed")
        setShowMenu(!showMenu)
    }

    const handleButtonSearch = () => {
        setInputText(inputTextValue)
        setSearchedGames(games.filter(game => game.title.toUpperCase().includes(inputTextValue.toUpperCase())))
    }

    const hamburgerImg = require("../../../img/menu.png")

    return (
        <header>
            <h1><Link to="/">Games Paradise</Link></h1>
            <div className='div-searching'>
                <input type="text" placeholder='Search Game...' value={inputTextValue} onChange={(e) => handleInputText(e)}></input>
                <Link to={inputTextValue ? "/games" : ""} className='button-submit-search' onClick={handleButtonSearch}>Search</Link>
            </div>
            <div className='div-nav'>
                <div className="div-nav-list">
                    <Link to="/games">All Games</Link>
                    <Link to="/wishlist">Wishlist</Link>
                    <div className='div-button-shopping-cart'>
                        <button className='button-shopping-cart' onClick={handleButtonShoppingCart}>Shopping Cart</button>
                        {showShoppingCart ? <ShoppingCartWindow /> : null}
                    </div>
                </div>
                <div className='div-hamburger'>
                    {showMenu ? 
                        <div className='div-hamburger-opened'>
                            <button onClick={handleButtonMenu}>X</button>
                            <div className='div-hamburger-input'>
                                <input type="text" placeholder='Search Game...' value={inputTextValue} onChange={(e) => handleInputText(e)}></input>
                                <Link onClick={handleButtonMenu} to={inputTextValue ? "/games" : ""} className='button-submit-search'>Search</Link>
                            </div>
                                <Link onClick={handleButtonMenu} to="/games">Store</Link>
                                <Link onClick={handleButtonMenu} to="/wishlist">Wishlist</Link>
                                <Link onClick={handleButtonMenu} to="/shopping-cart">Shopping Cart</Link>
                        </div> : 
                        <button onClick={handleButtonMenu}><img src={ hamburgerImg } alt='hamburger'></img></button>
                    }
                </div>
            </div>
        </header>
    )
}