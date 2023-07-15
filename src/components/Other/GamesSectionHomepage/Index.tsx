export const GamesSectionHomepage: React.FC<{gamesMap: (JSX.Element | null)[], text: string}> = ({gamesMap, text}) => {
    return(
        <section className="section-homepage">
            <h2 className="section-homepage__title">{text}</h2>
            <div className="section-homepage__games-list">
                {gamesMap}
            </div>
        </section>
    )
}