export const KeysListElement: React.FC<{code: string}> = ({code}) => {
    const keyGenerator = `${code}-
        ${Math.floor(Math.random() * 8999 + 1000)}-
        ${Math.floor(Math.random() * 8999 + 1000)}-
        ${Math.floor(Math.random() * 8999 + 1000)}
    ` 

    return(
        <div className="key">
            <p className="key__text">{keyGenerator}</p>
        </div>
    )
} 