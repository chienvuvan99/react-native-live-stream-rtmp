import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './pages/Login';
import Home from './pages/Home';
import Streamer from './pages/Streamer';
import Viewer from './pages/Viewer';

const Stack = createStackNavigator();

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Streamer" component={Streamer} />
          <Stack.Screen name="Viewer" component={Viewer} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

// import React, {useRef} from 'react';
// import {View, Animated, StyleSheet, TouchableHighlight} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();

// // https://dribbble.com/shots/7046707-Nav-Bar-Animation
// const AddButton = () => {
//   const mode = useRef(new Animated.Value(0)).current;
//   const buttonSize = useRef(new Animated.Value(1)).current;
//   const handlePress = () => {
//     Animated.sequence([
//       Animated.timing(buttonSize, {
//         toValue: 0.95,
//         duration: 200,
//       }),
//       Animated.timing(buttonSize, {
//         toValue: 1,
//       }),
//       Animated.timing(mode, {
//         toValue: mode._value === 0 ? 1 : 0,
//       }),
//     ]).start();
//   };

//   const thermometerX = mode.interpolate({
//     inputRange: [0, 1],
//     outputRange: [-24, -100],
//   });

//   const thermometerY = mode.interpolate({
//     inputRange: [0, 1],
//     outputRange: [-50, -100],
//   });

//   const timeX = mode.interpolate({
//     inputRange: [0, 1],
//     outputRange: [-24, -24],
//   });

//   const timeY = mode.interpolate({
//     inputRange: [0, 1],
//     outputRange: [-50, -150],
//   });

//   const pulseX = mode.interpolate({
//     inputRange: [0, 1],
//     outputRange: [-24, 50],
//   });

//   const pulseY = mode.interpolate({
//     inputRange: [0, 1],
//     outputRange: [-50, -100],
//   });

//   const rotation = mode.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '45deg'],
//   });

//   const sizeStyle = {
//     transform: [{scale: buttonSize}],
//   };

//   return (
//     <View style={{position: 'absolute', alignItems: 'center'}}>
//       <Animated.View
//         style={{position: 'absolute', left: thermometerX, top: thermometerY}}>
//         <View style={styles.secondaryButton}>
//           <View style={{backgroundColor: 'blue', width: 20, height: 20}} />
//         </View>
//       </Animated.View>
//       <Animated.View style={{position: 'absolute', left: timeX, top: timeY}}>
//         <View style={styles.secondaryButton}>
//           <View style={{backgroundColor: 'blue', width: 20, height: 20}} />
//         </View>
//       </Animated.View>
//       <Animated.View style={{position: 'absolute', left: pulseX, top: pulseY}}>
//         <View style={styles.secondaryButton}>
//           <View style={{backgroundColor: 'blue', width: 20, height: 20}} />
//         </View>
//       </Animated.View>
//       <Animated.View style={[styles.button, sizeStyle]}>
//         <TouchableHighlight onPress={handlePress} underlayColor="#7F58FF">
//           <Animated.View style={{transform: [{rotate: rotation}]}}>
//             <View style={{backgroundColor: 'blue', width: 20, height: 20}} />
//           </Animated.View>
//         </TouchableHighlight>
//       </Animated.View>
//     </View>
//   );
// };

// const JournalScreen = () => {
//   return <View></View>;
// };
// const MeasuresScreen = () => {
//   return <View></View>;
// };
// const TreatmentScreen = () => {
//   return <View></View>;
// };
// const ProfileScreen = () => {
//   return <View></View>;
// };
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({route}) => ({
//           tabBarActiveTintColor: 'tomato',
//           tabBarInactiveTintColor: 'gray',
//         })}>
//         <Tab.Screen
//           name="JournalScreen"
//           component={JournalScreen}
//           options={({}) => ({
//             tabBarIcon: ({focused, color, size}) => {
//               // You can return any component that you like here!
//               return (
//                 <View style={{backgroundColor: 'red', width: 20, height: 20}} />
//               );
//             },
//           })}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={ProfileScreen}
//           options={({}) => ({
//             tabBarIcon: ({focused, color, size}) => {
//               // You can return any component that you like here!
//               return (
//                 <View
//                   style={{backgroundColor: 'blue', width: 20, height: 20}}
//                 />
//               );
//             },
//           })}
//         />
//         <Tab.Screen
//           name="Add"
//           component={AddButton}
//           options={({}) => ({
//             tabBarIcon: ({focused, color, size}) => {
//               // You can return any component that you like here!
//               return (
//                 <View
//                   style={{backgroundColor: 'orange', width: 20, height: 20}}
//                 />
//               );
//             },
//           })}
//         />
//         <Tab.Screen
//           name="MeasuresScreen"
//           component={MeasuresScreen}
//           options={({}) => ({
//             tabBarIcon: ({focused, color, size}) => {
//               // You can return any component that you like here!
//               return (
//                 <View
//                   style={{backgroundColor: 'gray', width: 20, height: 20}}
//                 />
//               );
//             },
//           })}
//         />
//         <Tab.Screen
//           name="TreatmentScreen"
//           component={TreatmentScreen}
//           options={({}) => ({
//             tabBarIcon: ({focused, color, size}) => {
//               // You can return any component that you like here!
//               return (
//                 <View
//                   style={{backgroundColor: 'green', width: 20, height: 20}}
//                 />
//               );
//             },
//           })}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
// const styles = StyleSheet.create({
//   button: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 30,
//     height: 30,
//     borderRadius: 36,
//     backgroundColor: '#7F58FF',
//     position: 'absolute',
//     // marginTop: -60,
//     shadowColor: '#7F58FF',
//     shadowRadius: 5,
//     shadowOffset: {height: 10},
//     shadowOpacity: 0.3,
//     borderWidth: 3,
//     borderColor: '#FFFFFF',
//   },
//   secondaryButton: {
//     position: 'absolute',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 48,
//     height: 48,
//     borderRadius: 24,
//     backgroundColor: '#7F58FF',
//   },
// });
