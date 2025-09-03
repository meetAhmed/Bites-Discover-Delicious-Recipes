// local
import { APIConstructor } from './APIConstructor';
import { BASE_URL } from '../../shared/Constants';

// Network class encapsulates all API request logic.
// Using a class here allows grouping of related network methods.
export class Network {
    // Static method `request` allows calling Network.request() without creating an instance.
    // The method is generic <T> so that the response type can be strongly typed.
    static async request<T>(config: APIConstructor): Promise<T> {
        // Destructuring the APIConstructor object into variables.
        const { method, route, headers, body, params = {} } = config;

        // Convert the params object into a URL-encoded query string.
        // Object.entries(params) converts the object into an array of [key, value] pairs.
        // URLSearchParams handles encoding special characters for URLs.
        const queryString = new URLSearchParams(
            Object.entries(params).map(([key, value]) => [key, value])
        ).toString();

        // Construct the final URL by combining the BASE_URL, route, and query string (if any).
        const finalUrl = `${BASE_URL}${route}${queryString ? `?${queryString}` : ''}`;

        // Create the RequestInit object used by the fetch API.
        // This defines method, headers, and optional body for the request.
        const requestInit: RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...(headers || {}),
            },
        };

        // If a body is provided and the method is not GET, stringify it as JSON.
        if (body && method !== 'GET') {
            requestInit.body = JSON.stringify(body);
        }

        // Perform the network request using fetch and wait for the response.
        const response = await fetch(finalUrl, requestInit);

        // If the response status is not in the 200-299 range, throw an error.
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP ${response.status}: ${errorText}`);
        }

        // Return the parsed JSON response cast as the generic type <T>.
        return response.json() as Promise<T>;
    }
}
