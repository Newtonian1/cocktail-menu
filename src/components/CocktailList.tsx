import { useMemo } from "react"
import { cocktails } from "../data/cocktails"
import type { Cocktail } from "../data/cocktails"
import CocktailCard from "./CocktailCard"
import "./CocktailList.css"
import { SearchType } from "../data/search"

interface CocktailListProps {
    search: string
    searchType: SearchType
}

const CocktailList: React.FC<CocktailListProps> = ({search, searchType}) => {
    
    const filteredCocktails = useMemo(() => {
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
    }, [search, searchType])

    return (
        <div className="cocktail-list">
            {filteredCocktails.map((c: Cocktail) => <CocktailCard cocktail={c}/>)}
        </div>
    )
}

export default CocktailList