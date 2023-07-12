import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomeLayout } from "../components/Layouts/HomeLayout/Index"
import { GameLayout } from "../components/Layouts/GameLayout/Index"
import { WishlistLayout } from "../components/Layouts/WishlistLayout/Index"
import { GamesLayout } from "../components/Layouts/GamesLayout/Index"
import { ShoppingCartLayout } from "../components/Layouts/ShoppingCartLayout/Index"
import { useContextIsNull } from "../contexts/context"

export const RoutesComp = () => {
    const context = useContextIsNull()
    const {games: {games}} = context

    const routeListMap = games.map(game => <Route key={game.title} path={`${game.code}`} element={<GameLayout game={game}/>} />)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <HomeLayout /> } />
                <Route path="games" element={ <GamesLayout /> } />
                <Route path="game">{routeListMap}</Route>
                <Route path="wishlist" element={<WishlistLayout />} />
                <Route path="shopping-cart" element={<ShoppingCartLayout />} />
            </Routes>
        </BrowserRouter>
    )
}