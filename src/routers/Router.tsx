import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import { HomeLayout } from "../components/Layouts/HomeLayout/Index"
import { GameLayout } from "../components/Layouts/GameLayout/Index"
import { WishlistLayout } from "../components/Layouts/WishlistLayout/Index"
import { GamesLayout } from "../components/Layouts/GamesLayout/Index"
import games from '../games.json'
import { ShoppingCartLayout } from "../components/Layouts/ShoppingCartLayout"

const routeListMap = games.map(game => <Route key={game.title} path={`${game.code}`} element={<GameLayout game={game}/>} />)

export const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={ <HomeLayout /> } />
        <Route path="games" element={ <GamesLayout /> } />
        <Route path="game">{routeListMap}</Route>
        <Route path="wishlist" element={<WishlistLayout />} />
        <Route path="shopping-cart" element={<ShoppingCartLayout />}></Route>
    </>
))