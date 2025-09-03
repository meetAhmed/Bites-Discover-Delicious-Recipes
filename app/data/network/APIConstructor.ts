// HTTP methods enum for API requests
export enum HttpMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH',
}

// API endpoints enum
export enum APIRoute {
    CATEGORIES = '/categories.php', // fetch all categories
    MEALS_BY_CATEGORY = '/filter.php', // fetch meals by category
    MEAL_DETAILS = '/lookup.php'  // fetch details of a meal
}

// interface for API request configuration
export interface APIConstructor {
    method: HttpMethods; // HTTP method
    route: APIRoute;  // API endpoint
    headers?: Record<string, string>; // optional headers
    body?: any; // optional body for POST/PUT requests
    params?: Record<string, string>; // optional query parameters
}
