import { RouterProvider } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import { router } from './routers/Router'
import { Context } from './contexts/context'
import gamesJson from './games.json'
import { ContextType, GameType } from './types/Types'

function App() {
  const [games, setGames] = useState<GameType[]>(gamesJson)
  const [searchedGames, setSearchedGames] = useState<GameType[]>(gamesJson)
  const [inputText, setInputText] = useState<string>("")

  const value: ContextType = {
    games: {
      games: games,
      setGames: setGames
    },
    searchedGames: {
      searchedGames: searchedGames,
      setSearchedGames: setSearchedGames
    },
    inputText: {
      inputText: inputText,
      setInputText: setInputText
    }
  }

  return (
    <Context.Provider value={value}>
      <RouterProvider router={router}/>
    </Context.Provider>
  )
}

export default App
