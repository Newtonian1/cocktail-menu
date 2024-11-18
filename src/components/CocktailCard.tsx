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
            const imgUrl = "/images/" + cocktail.image + ".JPEG"
            return (
                <div>
                    <img src={imgUrl} alt={cocktail.name} />
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