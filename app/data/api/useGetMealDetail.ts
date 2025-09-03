import { useQuery } from '@tanstack/react-query';

// local
import { Meal } from '../models/Meal';
import { Network } from '../network/BitesNetworkService';
import { APIRoute, HttpMethods } from '../network/APIConstructor';
import { QueryKey } from '../../shared/Constants';
import { MealDetails } from '../models/MealDetails';

// fetch details of a single meal
export const useGetMealDetail = (meal: Meal) => {
    // async function to get meal details from API
    const getMealDetail = async (): Promise<MealDetails> => {
        // make GET request to MEAL_DETAILS endpoint with meal ID
        const response = await Network.request<{ meals: MealDetails[] }>({
            method: HttpMethods.GET,
            route: APIRoute.MEAL_DETAILS,
            params: { i: meal.idMeal }, // query param for meal ID
        });

        // API returns an array with one meal
        return response.meals[0];
    };

    // useQuery to manage fetching and caching
    return useQuery({
        queryKey: [QueryKey.MealDetails, meal.idMeal], // unique cache key per meal
        queryFn: getMealDetail,
        enabled: !!meal.idMeal // only fetch if meal ID exists
    });
};
