import { StyleSheet, Text, View, Image } from 'react-native';
import logo from '../assets/Img/light.png';
import { Link } from 'expo-router';

const Home = () => {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.img}/>
            <Text style={styles.title}>Home</Text>
            <Text style={{margin: 10}}>Welcome to the Home Screen!</Text>
            
            <Link href="/about" style={styles.link}>About Page</Link>
            <Link href="/contact" style={styles.link}>Contact Page</Link>
        </View>
    );
}

export default Home;
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
    img: {
        width: 90,
        height: 90,
        resizeMode: 'contain',
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
    }
});