export const GameTags = ({ game }) => {
    return <div className="tags">
        <div className="genres">
            {game.genres.map((tag) => {
                return <p className="genre tag">{tag.name}</p>
            })}
        </div>
        <div className="platforms">
            {game.platforms.map((platform) => {
                return <p className="platform tag">{platform.platform.name}</p>
            })}
        </div>
    </div>
}