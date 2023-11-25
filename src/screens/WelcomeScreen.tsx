import { Button, Text, View } from '@ant-design/react-native';
import { useNavigation } from '@react-navigation/native';
import React, { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const WelcomeScreen = () => {
    const { navigate } = useNavigation()
    const navigateToSearchMap = () => {
        navigate('SearchMap');
    };

    return (
        <LinearGradient
            colors={['#ffffff', '#3498db']}
            style={styles.container}
        >
            <View style={styles.container}>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeText}>Welcome to My App!</Text>
                </View>
                <View style={styles.btnContainer}>
                    <Button type="primary" onPress={navigateToSearchMap}>
                        Get Started
                    </Button>
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    btnContainer: {
        padding: 8,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    welcomeContainer: {
        alignItems: 'center'
    },
    welcomeText: {
        fontSize: 30,
        fontWeight: '600',
    },
    body: {
    }
});

export default WelcomeScreen;
