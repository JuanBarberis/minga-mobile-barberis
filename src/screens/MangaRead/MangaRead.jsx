import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import MangasTitle from '../../components/Manga/MangasTitle';
import MangasType from '../../components/Manga/MangasType';
import MangasCards from '../../components/Manga/MangasCards';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Mangas() {
    
    return (
        <ScrollView style={styles.mangas}>
            <MangasTitle/>
            <ScrollView style={styles.mangasDisplayed}>
                <Text style={{ marginBottom: 12, fontWeight: 'bold' }}>Explore</Text>
                <MangasType/>
                <MangasCards/>
            </ScrollView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    mangas: {
        height: '100%',
    },
    mangasDisplayed: {
        display: 'flex',
        padding: 10,
        width: '100%',
        minHeight: windowHeight,
        backgroundColor: 'white',
        borderRadius: 16,
    }
})


export default Mangas