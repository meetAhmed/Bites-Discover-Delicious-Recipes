// Enum `QueryKey` defines constant keys for caching or querying data in a type-safe way.
export enum QueryKey {
    Categories = 'Categories',
    MealsByCategories = 'MealsByCategories',
    MealDetails = 'MealDetails'
}

export const BASE_URL = 'https://www.themealdb.com/api/json/v1/1'