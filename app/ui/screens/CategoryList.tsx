import { FlatList, StyleSheet, View } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// local
import { useGetCategories } from '../../data/api/useGetCategories'
import AppColors from '../components/AppColors';
import SingleCategoryView from '../components/SingleCategoryView';
import { Category } from '../../data/models/Category';
import { LocalRoute, RootStackParamList } from '../navigation/NavigationTypes';
import { AppLoadingView } from '../components/AppLoadingView';
import AppErrorMessageView from '../components/AppErrorMessageView';

// navigation type
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const CategoryList = () => {
  // Get the navigation object typed with our stack's param list
  const navigation = useNavigation<NavigationProp>();

  // Fetch categories: destructure data, loading and error states
  const { data: categories, isLoading, error } = useGetCategories()

  // Display loading indicator while data is fetching
  if (isLoading) return <AppLoadingView />

  // Display error message if fetch fails
  if (error) return <AppErrorMessageView error={String(error)} />

  // navigate to detail screen when a category is tapped, passing the category object as a parameter
  const handleCategoryTap = (category: Category) => {
    navigation.navigate(LocalRoute.mealsList, { category: category })
  }

  // Render the category list using FlatList
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.idCategory}
        numColumns={2}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <SingleCategoryView category={item} onTap={handleCategoryTap} />
        )}
      />
    </View>
  );
}

export default CategoryList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background
  },
  center: {
    flex: 1,
    justifyContent: 'center'
  },
  error: {
    color: AppColors.text,
    padding: 12
  },
  grid: {
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
})