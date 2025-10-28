import React, { useRef } from 'react';
import { StyleSheet, View, Dimensions, Animated } from 'react-native';
import Video from 'react-native-video';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
};

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

const { width, height } = Dimensions.get('window');

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  // 👇 Step 1: Create fade animation reference
  const fadeAnim = useRef(new Animated.Value(1)).current;

  // 👇 Step 2: Handle video end with fade-out animation
  const handleVideoEnd = () => {
    Animated.timing(fadeAnim, {
      toValue: 0, // fade out
      duration: 800, // 0.8 seconds
      useNativeDriver: true,
    }).start(() => {
      navigation.replace('Login'); // navigate after fade out
    });
  };

  return (
    <View style={styles.container}>
      {/* 👇 Step 3: Wrap video in Animated.View */}
      <Animated.View style={{ opacity: fadeAnim }}>
        <Video
          source={require('../assets/EchoSee.mp4')} 
          style={styles.backgroundVideo}
          resizeMode="cover"
          onEnd={handleVideoEnd}
          muted={false}
          repeat={false}
          playInBackground={false}
          playWhenInactive={false}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  backgroundVideo: {
    width: width,
    height: height,
  },
});

export default SplashScreen;
