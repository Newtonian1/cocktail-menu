import { useMemo } from "react"
import { cocktails } from "../data/cocktails"
import type { Cocktail } from "../data/cocktails"
import CocktailCard from "./CocktailCard"
import "./CocktailList.css"

interface CocktailListProps {
    search: string
}

const CocktailList: React.FC<CocktailListProps> = ({search}) => {
    
    const filteredCocktails = useMemo(() => {
        if (search === "")
            return cocktails;

        return cocktails.filter((cocktail) => {
            return cocktail.ingredients.some((ingredient) => {
                return ingredient.includes(search)
            })
        })
    }, [search])

    return (
        <div className="cocktail-list">
            {filteredCocktails.map((c: Cocktail) => <CocktailCard cocktail={c}/>)}
        </div>
    )
}

export default CocktailList