import './GamesList.css'

export const GamesList: React.FC<{games: (JSX.Element | null)[], text: string}> = ({games, text}) => {
    return(
        <div className="div-games-list">
            {games.some(game => game) ? games : <p className='p-not-found'>{text}</p>}
        </div>
    )
}