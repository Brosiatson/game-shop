export const ShoppingCartState: React.FC<{number: number}> = ({number}) => {
    return(
        <div className='shopping-state'>
            <div className={number === 1 ? "shopping-state__element shopping-state__element--current" : "shopping-state__element"}>1</div>
            <div className={number === 2 ? "shopping-state__element shopping-state__element--current" : "shopping-state__element"}>2</div>
            <div className={number === 3 ? "shopping-state__element shopping-state__element--current" : "shopping-state__element"}>3</div>
        </div>
    )
}