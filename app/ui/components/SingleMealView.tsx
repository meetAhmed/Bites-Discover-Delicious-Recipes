import { Text, StyleSheet, TouchableOpacity } from "react-native"
import { Image } from 'expo-image';

// local imports
import AppColors from "./AppColors"
import { Meal } from "../../data/models/Meal";

// properties for the component
type Props = {
    meal: Meal, // meal item to display
    onTap: (meal: Meal) => void // callback when user taps on the item
}

const SingleMealView = ({ meal, onTap }: Props) => (
    <TouchableOpacity onPress={() => onTap(meal)} style={styles.container}>
        {/* Meal image */}
        <Image
            source={{ uri: meal.strMealThumb }}
            style={styles.image}
            cachePolicy={'disk'}
            contentFit="cover"
        />

        {/* Meal title */}
        <Text style={styles.title}>{meal.strMeal}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        margin: 8,
        backgroundColor: AppColors.card,
        borderRadius: 8,
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: AppColors.text,
        marginTop: 12,
        'textAlign': 'center'
    },
    description: {
        fontSize: 12,
        color: AppColors.textSecondary,
        marginTop: 4,
        textAlign: 'center'
    },
})

export default SingleMealView