import { useMemo, useState } from "react";
import type { Cocktail } from "../data/cocktails";
import "./CocktailCard.css"

interface CocktailCardProps {
    cocktail: Cocktail
}

const CocktailCard: React.FC<CocktailCardProps> = ({cocktail}) => {
    const [showImage, setShowImage] = useState<boolean>(false);

    const renderCardDetails = useMemo(() => {
        if (showImage) {
            return (
                <div>
                    <img src={cocktail.image} alt={cocktail.name}/>
                </div>
            )
        }

        return (
            <div>
                <h3 className="cocktail-name">{cocktail.name}</h3>
                <ul>
                    {cocktail.ingredients.map(i => <li>{i}</li>)}
                </ul>
            </div>
        )
    }, [showImage, cocktail]);

    return (
        <div 
            className="cocktail-card"
            onClick={() => setShowImage(!showImage)}
        >
            {renderCardDetails}
        </div>
    )
}

export default CocktailCard;