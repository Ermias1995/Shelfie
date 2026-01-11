import { Text, StyleSheet, View, useColorScheme } from 'react-native'
import React, { Component } from 'react'
import { Link } from 'expo-router'
import { Colors } from '../constants/Colors'

const Contact = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Text style={[styles.title, {color: theme.title}]}>Contact Page</Text>
      <Link href='/' style={[styles.link, {color: theme.link}]}>Back Home</Link>
    </View>
  )
}

export default Contact

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