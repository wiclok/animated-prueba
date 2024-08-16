import Constants from 'expo-constants';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import { Button, StyleSheet, Text, View } from "react-native";
import { useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  
  // Animacion de desplazamiento para el titulo cuando carga
  const translateY = useSharedValue(-100);

  useEffect(() => {
    translateY.value = withTiming(0, { duration: 1000 });
  }, []);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));


  // Animacion para cambiar el color de fondo con efecto de desvanecimiento

  const progress = useSharedValue(0);
  

  const handlePress = ()=>{


  }

  const backgroundAnimated = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View style={[styles.container, backgroundAnimated]}>
      <Animated.View style={[styles.titleContainer, animatedStyles]}>
        <Text style={styles.titleText}>Estoy Probando animaciones</Text>
      </Animated.View>
      <Button title="Iniciar" onPress={handlePress} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f55151",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  }
});
