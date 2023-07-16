import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartWindow } from '../ShoppingCartWindow/Index'
import { useContextIsNull } from '../../../contexts/context'
import { HamburgerScreen } from '../HamburgerScreen/Index'

export const Header: React.FC = () => {
    const [showShoppingCart, setShowShoppingCart] = useState<boolean>(false)
    const [showMenu, setShowMenu] = useState<boolean>(false)

    const {searchedGames: {setSearchedGames}, games: {games}, inputText: {inputText, setInputText}} = useContextIsNull()

    const handleInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.currentTarget.value)
    }

    const handleButtonShoppingCart = () => {
        setShowShoppingCart(!showShoppingCart)
    }

    const handleButtonMenu = () => {
        document.querySelector("body")?.classList.toggle("menu-displayed")
        setShowMenu(value => !value)
    }

    const handleButtonSearch = () => {
        setSearchedGames(games.filter(game => game.title.toUpperCase().includes(inputText.toUpperCase())))
    }

    const hamburgerImg = require("../../../img/menu.png")

    return (
        <header className='header'>
            <h1 className='header__title'><Link className='header__title--link' to="/game-shop/">Games Paradise</Link></h1>
            <div className='header__searching'>
                <input className='header__searching--input' type="search" placeholder='Search Game...' value={inputText} onChange={(e) => handleInputText(e)}></input>
                <Link className="header__searching--link" to={inputText ? "/game-shop/games" : ""} onClick={handleButtonSearch}>Search</Link>
            </div>
            <nav className='header__nav'>
                <div className='header__nav--container'>
                    <Link className='header__nav--link' to="/game-shop/games">Store</Link>
                    <Link className='header__nav--link' to="/game-shop/wishlist">Wishlist</Link>
                    <div className='header__nav--cart'>
                        <button className='header__nav--link' onClick={handleButtonShoppingCart}>Shopping Cart</button>
                        {showShoppingCart ? <ShoppingCartWindow /> : null}
                    </div>
                </div>
                <div className='header__hamburger'>
                    {
                        showMenu ?
                        <HamburgerScreen setShowMenu={setShowMenu}/> : 
                        <button className='header__hamburger--button' onClick={handleButtonMenu}><img src={ hamburgerImg } alt='hamburger'></img></button>
                    }
                </div>
            </nav>
        </header>
    )
}