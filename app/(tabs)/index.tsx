import { Image, StyleSheet, Platform, Text, View } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View>
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#f1c232', dark: '##f1c232' }}
      headerImage={
        <Image
          source={require('@/assets/images/cristian.jpg')}
          style={styles.photo}
        />
      }>  
      <ThemedView>
        <Text style={styles.text}>Hello!</Text>
        <Text style={styles.subText}> My name is Cristian Contreras. I am a upcoming Junior at Alliance Ouchi Highschool. I like to listen to music and play videogames during my spare. I don't necessarily have a career I want to persue yet, although I have some options I am heavily considering like computer science or pure maths. Some colleges I have in my mind are USC, Cal State Dominguez Hills, and UCLA.</Text>
      </ThemedView>
    </ParallaxScrollView>
    </View>
    
  
  );
}

const styles = StyleSheet.create({
  photo: {
    height: 225,
    width: 225,
    bottom: 10,
    left: 100,
    position: 'absolute',
    borderRadius: 150,
  },
  text: {
    fontWeight: "bold",
    fontSize: 50,
    left: 120,
  },
  subText: {
    fontSize: 28,
  }
});
