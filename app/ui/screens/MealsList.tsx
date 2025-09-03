import { View, FlatList, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// local
import { useGetMealsByCategory } from '../../data/api/useGetMealsByCategory';
import { LocalRoute, RootStackParamList } from '../navigation/NavigationTypes';
import AppColors from '../components/AppColors';
import { AppLoadingView } from '../components/AppLoadingView';
import AppErrorMessage from '../components/AppErrorMessageView';
import SingleMealView from '../components/SingleMealView';
import { Meal } from '../../data/models/Meal';

// Type safe access to navigation route params
// make sure that 'route.params.category' matches the structure defined in our navigation types
type MealsListRouteProp = RouteProp<RootStackParamList, typeof LocalRoute.mealsList>;

// Navigation type for this screen
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const MealsListScreen = () => {
  // Get navigation object with type safety
  const navigation = useNavigation<NavigationProp>();

  // Get current route object
  const route = useRoute<MealsListRouteProp>();

  // Extract the category passed as a navigation parameter
  const category = route.params?.category

  // If category is missing, display error
  if (!category) {
    return <AppErrorMessage message='Category not found' />
  }

  // Fetch meals
  const { data: meals, isLoading, error } = useGetMealsByCategory(category)

  // Show loading spinner while fetching data
  if (isLoading) return <AppLoadingView />

  // Show generic error if API call fails
  if (error) return <AppErrorMessage />

  // navigate to detail screen when a category is tapped, passing the category object as a parameter
  const handleMealTap = (meal: Meal) => {
    navigation.navigate(LocalRoute.mealDetails, { meal: meal })
  }

  // Render the list of meals
  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <SingleMealView meal={item} onTap={handleMealTap} />
        )}
      />
    </View>
  );
};

export default MealsListScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background
  }
})