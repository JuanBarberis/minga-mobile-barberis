import React, { useState } from 'react'
import { View, Text, Image , StyleSheet , TextInput} from 'react-native'
import textActions from '../../store/SearchBar/actions'
import { useDispatch } from 'react-redux'
import { ImageBackground } from 'react-native';
import imgback from '../../images/mangas-background.png'
import loupe from '../../images/Search.png'

const { captureText } = textActions

function MangasTitle() {

    const dispatch = useDispatch()
   
    function handleSearch(text) {
        dispatch(captureText({ inputText: text }))
    }

    return (
        <ImageBackground source={imgback} style={styles.title}>
            <Text style={styles.titleText}>Mangas</Text>
            <View style={styles.searchBar}>
                <Image source={loupe} style={styles.loupe} />
                <TextInput style={styles.inputText} placeholder='Find your manga here' onChangeText={handleSearch} />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    title: {
        height: 200,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    titleText: {
        fontWeight: '700',
        fontSize: 32,
        color: '#FFFFFF',
    },
    searchBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        gap: 2,
        width: 200,
        height: 30,
        backgroundColor: '#EBEBEB',
        borderRadius: 10,
    },
    loupe: {
        height: 15,
        width: 15,
    },
    inputText: {
        width: '90%',
        overflow: 'hidden',
    }
})

export default MangasTitle