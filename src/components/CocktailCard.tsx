import { useMemo, useState } from "react";
import type { Cocktail } from "../data/cocktails";
import "./CocktailCard.css"
import { ArrowDropDown } from '@mui/icons-material';

interface CocktailCardProps {
    cocktail: Cocktail
}

const CocktailCard: React.FC<CocktailCardProps> = ({cocktail}) => {
    const [showImage, setShowImage] = useState<boolean>(false);

    const renderCardDetails = useMemo(() => {
        return (
            <div>
                <h3 className="cocktail-name">{cocktail.name}</h3>
                <ul>
                    {cocktail.ingredients.map(i => <li>{i}</li>)}
                </ul>
                {showImage ? <img src={"./images/" + cocktail.image + ".JPEG"} alt={cocktail.name} /> : <ArrowDropDown/>}
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