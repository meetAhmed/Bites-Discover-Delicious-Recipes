import { createNativeStackNavigator } from "@react-navigation/native-stack"

import CategoryList from "../screens/CategoryList";
import MealsList from "../screens/MealsList";
import MealDetails from "../screens/MealDetails";
import AppColors from "../components/AppColors";
import { LocalRoute, RootStackParamList } from "./NavigationTypes";

// Create the stack navigator using the type-safe RootStackParamList
const Stack = createNativeStackNavigator<RootStackParamList>()

// RootNavigator component contains all the screens and their configuration
export default function RootNavigator() {
    return (
        // Set the default screen to 'categoryList'
        <Stack.Navigator initialRouteName={LocalRoute.categoryList} screenOptions={{
            headerStyle: {
                backgroundColor: AppColors.primary,
            },
            headerTintColor: AppColors.primaryBtnText,
            headerBackButtonDisplayMode: 'minimal'
        }}>
            {/* Category List screen configuration */}
            <Stack.Screen name={LocalRoute.categoryList} component={CategoryList} options={{ title: "Bites" }} />

            {/* Meal List screen configuration */}
            <Stack.Screen name={LocalRoute.mealsList} component={MealsList}
                options={({ route }) => ({
                    // Dynamically set header title based on the selected category
                    title: route.params?.category.strCategory ?? 'Details'
                })}
            />

            {/* Meal Details screen configuration */}
            <Stack.Screen name={LocalRoute.mealDetails} component={MealDetails}
                options={({ route }) => ({
                    // Dynamically set header title based on the selected meal
                    title: route.params?.meal.strMeal ?? 'Details'
                })}
            />
        </Stack.Navigator>
    )
}