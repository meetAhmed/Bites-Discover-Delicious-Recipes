import { Text, StyleSheet, TouchableOpacity } from "react-native"
import { Image } from 'expo-image';

// local imports
import { Category } from "../../data/models/Category"
import AppColors from "./AppColors"

// properties for the component
type Props = {
    category: Category, // category item to display
    onTap: (category: Category) => void // callback when user taps on the item
}

const SingleCategoryView = ({ category, onTap }: Props) => (
    <TouchableOpacity onPress={() => onTap(category)} style={styles.container}>
        {/* Category image */}
        <Image
            source={{ uri: category.strCategoryThumb }}
            style={styles.image}
            cachePolicy={'disk'}
            contentFit="cover"
        />

        {/* Category title */}
        <Text style={styles.title}>{category.strCategory}</Text>

        {/* Category description, limited to 2 lines with ellipsis */}
        <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
            {category.strCategoryDescription}
        </Text>
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
        height: 100,
        borderRadius: 8
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: AppColors.text,
        marginTop: 12
    },
    description: {
        fontSize: 12,
        color: AppColors.textSecondary,
        marginTop: 4,
        textAlign: 'center'
    },
})

export default SingleCategoryView