import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { useSelector } from 'react-redux';
import hero from '../images/hero-background.png'
import Ionicons from '@expo/vector-icons/Ionicons';


function HomeScreen({ navigation }) {

    return (
        <View>
            <ImageBackground
                source={hero}
                style={styles.backgroundHeroImage}
            >
                <Ionicons name="menu-outline" size={40} color="white" onPress={() => navigation.openDrawer()} 
                style={{position:'absolute', top:0, left:0}}/>

                <View style={styles.exploreSection}>
                    <Text style={styles.exploreTitle}>Live the emotion of the manga</Text>
                    <Text style={{ color: '#FFF' }}>Find the perfect manga for you</Text>
                    <View style={styles.exploreBtn}><Text style={styles.textBtn}>Explore</Text></View>
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    backgroundHeroImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        backgroundColor: '#000',
        borderRadius: 6,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    exploreSection: {
        width: 300,
        height: 204,
        gap: 25,
        margin: 0,
        alignItems: 'center',
    },
    exploreTitle: {
        fontWeight: 'bold',
        fontSize: 35,
        textShadowColor: '#00008b',
        textShadowOffset: { width: 1, height: 8 },
        textShadowRadius: 50,
        color: '#FFF',
        textAlign: 'center'
    },
    exploreBtn: {
        width: 240,
        height: 55,
        backgroundColor: '#ff1493',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtn: {
        color: '#FFF',
        fontWeight: '500',
        fontSize: 24,
        textDecorationLine: 'none',
    }
});

export default HomeScreen