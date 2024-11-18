export interface Cocktail {
    name: string;
    ingredients: string[];
    image: string;
}

export const cocktails: Cocktail[] = [
    {
        name: "Old Fashioned",
        ingredients: ["bourbon", "angostura", "simple"],
        image: "old_fashioned"
    },
    {
        name: "Boulevardier",
        ingredients: ["bourbon", "campari", "sweet vermouth"],
        image: "boulevardier"
    },
    {
        name: "Whiskey Sour",
        ingredients: ["bourbon", "lemon", "simple", "egg white"],
        image: "whiskey_sour"
    },
    {
        name: "Manhattan",
        ingredients: ["rye", "sweet vermouth", "angostura", "regans"],
        image: "manhattan"
    },
    {
        name: "Sazerac",
        ingredients: ["absinthe", "rye", "cognac", "angostura", "peychauds" ,"simple"],
        image: "sazerac"
    },
    {
        name: "Old Pal",
        ingredients: ["rye", "campari", "dry vermouth"],
        image: "old_pal"
    },
    {
        name: "Ward Eight",
        ingredients: ["rye", "lemon", "orange", "grenadine"],
        image: "ward_eight"
    },
    {
        name: "Daiquiri",
        ingredients: ["rum", "lime", "simple"],
        image: "daiquiri"
    }, 
    {
        name: "Dark 'N Stormy",
        ingredients: ["rum", "lime", "ginger beer"],
        image: "dark_n_stormy"
    }, 
    {
        name: "Jungle Bird",
        ingredients: ["rum", "campari", "pineapple", "lime", "simple"],
        image: "jungle_bird"
    }, 
    {
        name: "Negroni",
        ingredients: ["gin", "campari", "sweet vermouth"],
        image: "negroni"
    }, 
    {
        name: "Martini",
        ingredients: ["gin", "dry vermouth"],
        image: "martini"
    },
    {
        name: "Tom Collins",
        ingredients: ["gin", "lemon", "simple", "club soda"],
        image: "tom_collins"
    },
    {
        name: "Aviation",
        ingredients: ["gin", "lemon", "luxardo", "creme de violette"],
        image: "aviation"
    },
    {
        name: "Gimlet",
        ingredients: ["gin", "lime", "simple"],
        image: "gimlet"
    },
    {
        name: "Margarita",
        ingredients: ["tequila", "lime", "orange liqueur", "agave"],
        image: "margarita"
    },
    {
        name: "Paloma",
        ingredients: ["tequila", "lime", "grapefruit", "campari"],
        image: "paloma"
    },
    {
        name: "Tequila Sunrise",
        ingredients: ["tequila", "orange", "grenadine"],
        image: "tequila_sunrise"
    },
    {
        name: "Division Bell",
        ingredients: ["mezcal", "lime", "aperol", "luxardo"],
        image: "division_bell"
    },
    {
        name: "Moscow Mule",
        ingredients: ["vodka", "lime", "ginger beer"],
        image: "moscow_mule"
    },
    {
        name: "Cosmopolitan",
        ingredients: ["vodka", "lime", "cranberry", "orange liqueur"],
        image: "cosmopolitan"
    },
    {
        name: "Espresso Martini",
        ingredients: ["vodka", "coffee liqueur", "coffee", "simple"],
        image: "espresso_martini"
    },
    {
        name: "Lemon Drop",
        ingredients: ["vodka", "lemon", "orange liqueur", "simple"],
        image: "lemon_drop"
    },
    {
        name: "Bay Breeze",
        ingredients: ["vodka", "cranberry", "pineapple"],
        image: "bay_breeze"
    },
    {
        name: "Sidecar",
        ingredients: ["cognac", "lemon", "orange liqueur"],
        image: "sidecar"
    },
    {
        name: "Between the Sheets",
        ingredients: ["cognac", "rum", "orange liqueur", "lemon"],
        image: "between_the_sheets"
    },
    {
        name: "Americano",
        ingredients: ["campari", "sweet vermouth", "club soda"],
        image: "americano"
    },
    {
        name: "Vermouth Cocktail",
        ingredients: ["sweet vermouth", "luxardo", "angostura"],
        image: "vermouth_cocktail"
    },
]