import { View, Text, ScrollView, Linking, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from 'expo-image';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";

// local
import { LocalRoute, RootStackParamList } from '../navigation/NavigationTypes';
import AppColors from '../components/AppColors';
import { AppLoadingView } from '../components/AppLoadingView';
import AppErrorMessage from '../components/AppErrorMessageView';
import { useGetMealDetail } from '../../data/api/useGetMealDetail';
import { getIngredients } from '../../data/models/MealDetails';

// Type safe access to navigation route params
// make sure that 'route.params.category' matches the structure defined in our navigation types
type MealDetailsRouteProp = RouteProp<RootStackParamList, typeof LocalRoute.mealDetails>;

const MealDetails = () => {
  // Get the current route object with type safety
  const route = useRoute<MealDetailsRouteProp>();

  // Extract the meal passed as a navigation parameter
  const meal = route.params?.meal

  // If no meal is passed, show an error message
  if (!meal) {
    return <AppErrorMessage message='Meal not found' />
  }

  // Fetch detailed meal data
  const { data: mealDetail, isLoading, error } = useGetMealDetail(meal)

  // Show a loading spinner while fetching data
  if (isLoading) return <AppLoadingView />

  // Show generic error if API call fails
  if (error) return <AppErrorMessage />

  // Show error if meal detail data is empty
  if (!mealDetail) {
    return <AppErrorMessage message='Meal data not found' />
  }

  // Extract ingredients list from meal detail
  const ingredients = getIngredients(mealDetail);

  return (
    <ScrollView style={styles.container}>
      {/* Meal Image */}
      <Image
        source={{ uri: mealDetail.strMealThumb }}
        style={{ width: "100%", height: 250 }}
        contentFit="cover"
        cachePolicy={'disk'}
      />

      {/* Meal Info */}
      <View style={styles.content}>
        <Text style={styles.mealTitle}>{mealDetail.strMeal}</Text>

        <View style={styles.textAndIcon}>
          {/* Left: Category | Area */}
          <Text style={styles.mealSubTitle}>{mealDetail.strCategory} | {mealDetail.strArea}</Text>

          {/* Right: Icons */}
          <View style={{ flexDirection: "row" }}>
            {mealDetail.strYoutube && (
              <TouchableOpacity
                onPress={() => Linking.openURL(mealDetail.strYoutube!)}
                style={{ marginLeft: 12 }}
              >
                <Ionicons name="logo-youtube" size={24} color={AppColors.red} />
              </TouchableOpacity>
            )}
            {mealDetail.strSource && (
              <TouchableOpacity
                onPress={() => Linking.openURL(mealDetail.strSource!)}
                style={{ marginLeft: 12 }}
              >
                <Ionicons name="globe-outline" size={24} color={AppColors.lightBlue} />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Ingredients */}
        <Text style={styles.ingredientsTitle}>Ingredients</Text>
        {ingredients.map((i, index) => (
          <Text key={index} style={styles.ingredientsText}>
            • {i.name}: {i.measure}
          </Text>
        ))}

        {/* Instructions */}
        <Text style={styles.instructionsTitle}>Instructions</Text>
        <Text style={styles.instructionsText}>{mealDetail.strInstructions}</Text>
      </View>
    </ScrollView>
  )
}

export default MealDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background
  },
  content: {
    padding: 12
  },
  mealTitle: {
    color: AppColors.text,
    fontSize: 24,
    fontWeight: "bold"
  },
  mealSubTitle: {
    color: AppColors.textSecondary,
    fontSize: 16,
    marginTop: 4
  },
  ingredientsTitle: {
    color: AppColors.text,
    fontSize: 20,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 4
  },
  ingredientsText: {
    color: AppColors.textSecondary,
    fontSize: 16,
    marginVertical: 2
  },
  instructionsTitle: {
    color: AppColors.text,
    fontSize: 18,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 4
  },
  instructionsText: {
    color: AppColors.textSecondary,
    fontSize: 16,
    lineHeight: 22,
    marginTop: 4
  },
  textAndIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
  }
})