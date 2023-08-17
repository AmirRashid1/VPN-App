import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import { Country } from './components';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{
          presentation: 'modal', // Use modal presentation for the Menu screen
          cardStyleInterpolator: ({ current, next, layouts }) => {
            const translateX = current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0], // Slide from right to left
            });

            const slideFromRight = { transform: [{ translateX }] };
            return slideFromRight;
          },
          headerTitle: "Menu"
          , headerTitle: 'Select Region', headerShadowVisible: true
        }} name="Country" component={Country} />
        {/* <Stack.Screen options={{ headerTitle: 'Select ', headerShadowVisible: true }} name="Demo" component={Demo} /> */}
        {/* <Stack.Screen options={{ headerTitle: 'Menu ', headerShadowVisible: true }} name="Menu" component={Menu} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

