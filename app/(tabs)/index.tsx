import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

export default function App() {
  const titleOpacity = useSharedValue(0);
  const titleTranslateY = useSharedValue(-50);
  const backgroundColorValue = useSharedValue(0);

  const animatedTitleStyle = useAnimatedStyle(() => {
    return {
      opacity: titleOpacity.value,
      transform: [{ translateY: titleTranslateY.value }],
    };
  });

  const animatedBackgroundStyle = useAnimatedStyle(() => {
    const backgroundColor = backgroundColorValue.value === 0 
      ? 'rgb(65, 105, 225)'
      : 'rgb(50, 205, 50)';
    return { backgroundColor };
  });

  useEffect(() => {
    titleOpacity.value = withTiming(1, { duration: 1000 });
    titleTranslateY.value = withTiming(0, { duration: 1000 });
  }, []);

  const handleStart = () => {
    titleOpacity.value = withTiming(0, { duration: 500 });
    backgroundColorValue.value = withTiming(1, { duration: 1000 });
  };

  return (
    <Animated.View style={[styles.container, animatedBackgroundStyle]}>
      <Animated.Text style={[styles.title, animatedTitleStyle]}>
        Bienvenido
      </Animated.Text>
      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  button: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(65, 105, 225)',
  },
});