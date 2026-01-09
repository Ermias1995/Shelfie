import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { Link } from 'expo-router'

export default class about extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>About Page</Text>
        <Link href='/' style={styles.link}>Back Home</Link>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
    }
})