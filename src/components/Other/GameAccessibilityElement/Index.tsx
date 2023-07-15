export const GameAccessibilityElement: React.FC<{img: any, alt: string, text: string}> = ({img, alt, text}) => {
    return(
        <div className="game-accessibility-element">
            <img className="game-accessibility-element__img" src={img} alt={alt}></img>
            <p className="game-accessibility-element__text">{text}</p>
        </div>
    )
}