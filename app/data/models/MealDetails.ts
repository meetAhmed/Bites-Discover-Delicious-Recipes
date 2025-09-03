import { Meal } from "./Meal"

// MealDetails model extending Meal with additional info
export interface MealDetails extends Meal {
    strMealAlternate?: string;
    strCategory: string;
    strArea?: string;
    strInstructions?: string;
    strTags?: string;
    strYoutube?: string;
    strSource?: string;
    strImageSource?: string;
    strCreativeCommonsConfirmed?: string;
    dateModified?: string;

    // Dynamic ingredient/measure fields
    [key: `strIngredient${number}` | `strMeasure${number}`]: string | null;
}

// Helper type for paired ingredients
export type Ingredient = {
    name: string;
    measure: string
};

// Helper function to convert DetailMeal to array of ingredients
export const getIngredients = (meal: MealDetails): Ingredient[] => {
    const ingredients: Ingredient[] = [];

    // loop through 1-20 to extract ingredient/measure pairs
    for (let i = 1; i <= 20; i++) {
        const name = meal[`strIngredient${i}`]; // ingredient name
        const measure = meal[`strMeasure${i}`]; // ingredient measure
        if (name && name.trim() !== "") {
            ingredients.push({ name, measure: measure || "" });
        }
    }

    return ingredients;
};