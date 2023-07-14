import './ShoppingCartState.css'

export const ShoppingCartState: React.FC<{number: number}> = ({number}) => {
    return(
        <div className='div-shopping-state'>
            <div className={number === 1 ? "shopping-state-current" : ""}>1</div>
            <div className={number === 2 ? "shopping-state-current" : ""}>2</div>
            <div className={number === 3 ? "shopping-state-current" : ""}>3</div>
        </div>
    )
}