export interface Cocktail {
    name: string;
    ingredients: string[];
    image: string;
}

export const cocktails: Cocktail[] = [
    {
        name: "Old Fashioned",
        ingredients: ["bourbon", "angostura", "simple"],
        image: "../images/react.svg"
    },
    {
        name: "Boulevardier",
        ingredients: ["bourbon", "campari", "sweet vermouth"],
        image: ""
    },
    {
        name: "Whiskey Sour",
        ingredients: ["bourbon", "lemon", "simple", "egg white"],
        image: ""
    }
]