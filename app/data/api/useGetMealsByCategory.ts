import { useQuery } from '@tanstack/react-query';

// local
import { Meal } from '../models/Meal';
import { Network } from '../network/BitesNetworkService';
import { APIRoute, HttpMethods } from '../network/APIConstructor';
import { QueryKey } from '../../shared/Constants';
import { Category } from '../models/Category';

// fetch meals by a given category
export const useGetMealsByCategory = (category: Category) => {
    // async function to fetch meals from API for the selected category
    const getMeals = async (): Promise<Meal[]> => {
        // GET request to MEALS_BY_CATEGORY endpoint with category name
        const response = await Network.request<{ meals: Meal[] }>({
            method: HttpMethods.GET,
            route: APIRoute.MEALS_BY_CATEGORY,
            params: {
                c: category.strCategory // query parameter
            }
        });

        // return array of meals from response
        return response.meals;
    };

    // useQuery for fetching, caching, and updating meals
    return useQuery({
        queryKey: [QueryKey.MealsByCategories, category], // unique cache key per category
        queryFn: getMeals,
        enabled: !!category // only run when category exists
    });
};