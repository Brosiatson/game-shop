export const GamesList: React.FC<{games: (JSX.Element | null)[], text: string}> = ({games, text}) => {
    return(
        <div className="games-list">
            {games.some(game => game) ? games : <p className='games-list__not-found'>{text}</p>}
        </div>
    )
}