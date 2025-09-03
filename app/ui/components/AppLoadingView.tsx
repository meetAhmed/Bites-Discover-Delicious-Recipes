import { ActivityIndicator, StyleSheet, View } from 'react-native';

// local
import AppColors from './AppColors';

{/* ActivityIndicator shows a spinning loader */ }
export const AppLoadingView = () => (
    <View style={styles.container}>
        <ActivityIndicator style={styles.center} color={AppColors.primary} size="large" />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.background
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
