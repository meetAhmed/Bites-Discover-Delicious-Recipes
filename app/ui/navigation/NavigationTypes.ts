// app/ui/navigation/NavigationTypes.ts
import { Category } from "../../data/models/Category";
import { Meal } from "../../data/models/Meal";

// Define constant route names to prevent typos and improve maintainability
export const LocalRoute = {
    categoryList: 'categoryList',
    mealsList: 'mealsList',
    mealDetails: 'mealDetails'
} as const;

// Define the type for the navigation stack parameters
// This allows TypeScript to enforce correct params when navigating
export type RootStackParamList = {
    [LocalRoute.categoryList]: undefined;
    [LocalRoute.mealsList]: { category: Category };
    [LocalRoute.mealDetails]: { meal: Meal };
};