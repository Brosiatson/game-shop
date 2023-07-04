import './GamesSectionHomepage.css'

export const GamesSectionHomepage: React.FC<{gamesMap: (JSX.Element | null)[], text: string}> = ({gamesMap, text}) => {
    return(
        <section className="section-homepage">
            <h2 className="h2-homepage-part">{text}</h2>
            <div className="div-games-list-homepage">
                {gamesMap}
            </div>
        </section>
    )
}