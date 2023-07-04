export interface GameType {
    title: string;
    code: string;
    rate: string;
    img: string;
    price: number;
    isNew: boolean;
    isWishlist: boolean;
    isShoppingCart: number;
    isSale: number;
}

export interface ContextType {
    games: {
        games: GameType[]
        setGames: React.Dispatch<React.SetStateAction<GameType[]>>
    }
    searchedGames: {
        searchedGames: GameType[]
        setSearchedGames: React.Dispatch<React.SetStateAction<GameType[]>>
    }
    inputText: {
        inputText: string
        setInputText: React.Dispatch<React.SetStateAction<string>>
    }
}