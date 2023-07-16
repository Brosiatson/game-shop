import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomeLayout } from "../components/Layouts/HomeLayout/Index"
import { GameLayout } from "../components/Layouts/GameLayout/Index"
import { WishlistLayout } from "../components/Layouts/WishlistLayout/Index"
import { GamesLayout } from "../components/Layouts/GamesLayout/Index"
import { ShoppingCartLayout } from "../components/Layouts/ShoppingCartLayout/Index"
import { useContextIsNull } from "../contexts/context"
import { FormLayout } from "../components/Layouts/FormLayout/Index"
import { KeysLayout } from "../components/Layouts/KeysLayout/Index"

export const RoutesComp = () => {
    const context = useContextIsNull()
    const {games: {games}} = context

    const routeListMap = games.map(game => <Route key={game.title} path={`${game.code}`} element={<GameLayout game={game}/>} />)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/game-shop">
                    <Route path="" element={ <HomeLayout /> } />
                    <Route path="games" element={ <GamesLayout /> } />
                    <Route path="game">{routeListMap}</Route>
                    <Route path="wishlist" element={<WishlistLayout />} />
                    <Route path="shopping-cart">
                        <Route path="" element={<ShoppingCartLayout />} />
                        <Route path="form" element={<FormLayout />} />
                        <Route path="keys" element={<KeysLayout />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}