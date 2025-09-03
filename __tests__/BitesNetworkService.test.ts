import { Network } from "../app/data/network/BitesNetworkService";
import { HttpMethods, APIRoute } from "../app/data/network/APIConstructor";

// reset fetch mocks before each test
beforeEach(() => {
    fetchMock.resetMocks();
});

describe("Network.request", () => {
    it("should make GET request and return JSON", async () => {
        // mock successful response
        const mockResponse = { categories: [{ idCategory: "1", strCategory: "Beef" }] };
        fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

        // make request
        const result = await Network.request<{ categories: { idCategory: string; strCategory: string }[] }>({
            method: HttpMethods.GET,
            route: APIRoute.CATEGORIES,
        });

        // assert response and fetch call
        expect(result).toEqual(mockResponse);
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(
            expect.stringContaining(APIRoute.CATEGORIES),
            expect.objectContaining({
                method: HttpMethods.GET,
                headers: expect.objectContaining({ "Content-Type": "application/json" }),
            })
        );
    });

    it("should throw error on non-200 response", async () => {
        // mock 404 response
        fetchMock.mockResponseOnce("Not found", { status: 404 });

        // assert error thrown
        await expect(
            Network.request({
                method: HttpMethods.GET,
                route: APIRoute.CATEGORIES,
            })
        ).rejects.toThrow("HTTP 404: Not found");
    });

    it("should append query parameters for GET request", async () => {
        // mock empty meals response
        const mockResponse = { meals: [] };
        fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

        // make request with query params
        await Network.request<{ meals: any[] }>({
            method: HttpMethods.GET,
            route: APIRoute.MEALS_BY_CATEGORY,
            params: { c: "Seafood" },
        });

        // assert query param appended
        expect(fetch).toHaveBeenCalledWith(
            expect.stringContaining("c=Seafood"),
            expect.any(Object)
        );
    });
});
