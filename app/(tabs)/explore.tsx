
import { StyleSheet, Image, Platform, Text, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
  <View>
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#6a329f', dark: '#2986cc' }}
      headerImage={
        <Image
          source={require('@/assets/images/person.jpg')}
          style={styles.photo}
        />
      }>  
      <ThemedView style={styles.titleContainer}>
        <Text style = {styles.title}>About Me</Text>
      </ThemedView>
      <Text style = {styles.description}>Here are some things about me that correspond to the Challenge.</Text>
      <Collapsible title="Passion">
        <Text>
          One of my biggest passions that has been circulating my mind for the past few days is storytelling. Although I haven't picked up the motivation to actually be able to tell a story, I always enjoyed seeing how a narrative can inspire a person. Storytelling is a pretty powerful tool that can be used to make an impact on people. I wish in the future to be able to create a full-fleshed out story of my own, preferable in the form of a novel.
        </Text>
      </Collapsible>
      <Collapsible title="Position for SCLA">
        <Text>
          My position for SCLA 2024 will be a developer.
        </Text>
      </Collapsible>
      <Collapsible title="My Dream Career">
        <Text>
          In the future I have certain careers to dream. First I dream to have a career as a Software Engineer. Second I dream to be a professional writer. And Third I wish to be a professional musician, though I haven't decided an instrument to focus on.
        </Text>
      </Collapsible>
    </ParallaxScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    height: 225,
    width: 225,
    bottom: 0,
    left: 100,
    position: 'absolute',
  
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  description: {
    fontSize: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    left: 70,
  },
});
