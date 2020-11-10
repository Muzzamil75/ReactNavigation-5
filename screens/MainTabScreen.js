import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
	<Tab.Navigator
		initialRouteName="Home"
		activeColor="#fff"
	>
		<Tab.Screen
			name="Home"
			component={HomeStackScreen}
			options={{
				tabBarLabel: 'Home',
				tabBarColor: 'red',
				tabBarIcon: ({ color }) => (
					<Icon name="ios-home" color={color} size={26} />
				),
			}}
		/>
		<Tab.Screen
			name="Detail"
			component={DetailsStackScreen}
			options={{
				tabBarLabel: 'Details',
				tabBarColor: 'blue',
				tabBarIcon: ({ color }) => (
					<Icon name="ios-notifications" color={color} size={26} />
				),
			}}
		/>
		<Tab.Screen
			name="Profile"
			component={ProfileStackScreen}
			options={{
				tabBarLabel: 'Profile',
				tabBarColor: '#694fad',
				tabBarIcon: ({ color }) => (
					<Icon name="ios-person" color={color} size={26} />
				),
			}}
		/>
		<Tab.Screen
			name="Explore"
			component={ExploreScreen}
			options={{
				tabBarLabel: 'Explore',
				tabBarColor: '#d02860',
				tabBarIcon: ({ color }) => (
					<Icon name="ios-aperture" color={color} size={26} />
				),
			}}
		/>
	</Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
	<HomeStack.Navigator screenOptions={{
		headerStyle: {
			backgroundColor: '#009387',
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold'
		}
	}}>
		<HomeStack.Screen name="Home" component={HomeScreen} options={{
			title: 'Overviewee',
			headerLeft: () => (
				<Icon.Button name="ios-menu" size={25} backgroundColor="#009387" 
				onPress={() => navigation.openDrawer()}></Icon.Button>
			)
		}} />
		{/* <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
		headerLeft: () => (
			<Icon.Button name="ios-menu" size={25} backgroundColor="##009387" onPress={() => navigation.openDrawer()}></Icon.Button>
		)
	}} /> */}
	</HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
	<DetailsStack.Navigator screenOptions={{
		headerStyle: {
			backgroundColor: '#1f65ff',
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold'
		}
	}}>
		<DetailsStack.Screen name="Details" component={DetailsScreen} options={{
			headerLeft: () => (
				<Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
			)
		}} />
	</DetailsStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
	<DetailsStack.Navigator screenOptions={{
		headerStyle: {
			backgroundColor: '#1f65ff',
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold'
		}
	}}>
		<DetailsStack.Screen name="Profile" component={ProfileScreen} options={{
			headerLeft: () => (
				<Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
			)
		}} />
	</DetailsStack.Navigator>
);

