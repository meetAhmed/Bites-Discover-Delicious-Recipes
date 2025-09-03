import { Text, StyleSheet, View } from 'react-native';

// local
import AppColors from './AppColors';

// Defining the props for the component
// `message` is an optional string with a default value if not provided
// `error` is an optional string representing additional error details
type Props = {
    message?: string;
    error?: String;
};

const AppErrorMessageView = ({ message = 'Error while loading data:', error }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.error}>{message} {error}</Text>
        </View>
    );
};

export default AppErrorMessageView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.background
    },
    error: {
        color: AppColors.text,
        padding: 12
    },
});
