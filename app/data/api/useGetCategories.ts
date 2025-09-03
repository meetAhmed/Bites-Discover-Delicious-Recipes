import { useQuery } from "@tanstack/react-query";

// local
import { Category } from "../models/Category";
import { APIRoute, HttpMethods } from "../network/APIConstructor";
import { Network } from "../network/BitesNetworkService";
import { QueryKey } from "../../shared/Constants";

// async function to fetch categories from API
const getCategories = async (): Promise<Category[]> => {
    // make GET request to CATEGORIES endpoint
    const result = await Network.request<{ categories: Category[] }>({
        method: HttpMethods.GET,
        route: APIRoute.CATEGORIES,
    })

    // extract and return categories array from response
    return result.categories
}

export const useGetCategories = () => {
    return useQuery({
        queryKey: [QueryKey.Categories], // unique key for caching the categories query
        queryFn: getCategories // function to fetch data
    })
}