import { useMemo } from "react"
import { cocktails } from "../data/cocktails"
import type { Cocktail } from "../data/cocktails"
import CocktailCard from "./CocktailCard"
import "./CocktailList.css"
import { SearchType } from "../data/search"

interface CocktailListProps {
    search: string
    searchType: SearchType
    random: boolean
}

const CocktailList: React.FC<CocktailListProps> = ({search, searchType, random}) => {

    const renderCocktails = useMemo(() => {
        if (random) {
            const randomIndex = Math.floor(Math.random() * cocktails.length);
            return [cocktails[randomIndex]];
        }
        switch (searchType) {
            case SearchType.Name:
                return cocktails.filter((cocktail) => {
                    return cocktail.name.toLowerCase().includes(search)
                });

            case SearchType.Ingredient:
                return cocktails.filter((cocktail) => {
                    return cocktail.ingredients.some((ingredient) => {
                        return ingredient.includes(search)
                    })
                });
        }
    }, [search, searchType, random])

    return (
        <div className="cocktail-list">
            {renderCocktails.map((c: Cocktail) => <CocktailCard cocktail={c}/>)}
        </div>
    )
}

export default CocktailList