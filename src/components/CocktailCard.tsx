import type { Cocktail } from "../data/cocktails";
import "./CocktailCard.css"

interface CocktailCardProps {
    cocktail: Cocktail
}

const CocktailCard: React.FC<CocktailCardProps> = ({cocktail}) => {
    return (
        <div className="cocktail-card">
            <h2>{cocktail.name}</h2>
            <ul>
                {cocktail.ingredients.map(i => <li>{i}</li>)}
            </ul>
        </div>
    )
}

export default CocktailCard;