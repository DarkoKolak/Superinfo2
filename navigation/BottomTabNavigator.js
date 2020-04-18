import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SuperinfoHome from '../screens/SuperinfoHome';
import Posts from "../components/Posts.js"
import Fokus from "../components/Fokus.js"
import Onama from "../components/Onama.js"
import Contact from "../components/Contact.js"



const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Superinfo';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({headerTitleStyle: {flex: 1, textAlign: 'center' }, headerTitle: <Text style={styles.headerText}>{getHeaderTitle(route)}</Text>,headerTintColor:'white',
    fontWeight: 'bold',headerStyle: {
      backgroundColor: 'red',
  },
 });

  return (
    <BottomTab.Navigator tabBarOptions={{activeTintColor: "red"}} initialRouteName={INITIAL_ROUTE_NAME}>

        <BottomTab.Screen
        name="Superinfo"
        component={SuperinfoHome}
        options={{
          title: 'Početna',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
              <BottomTab.Screen
        name="API"
        component={Fokus}
        options={{
          title: 'Fokus',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-today" />,
        }}
      />
      
      <BottomTab.Screen
        name="O nama"
        component={Onama}
        options={{
          title: 'O nama',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-man" />,
        }}
      />
      <BottomTab.Screen
        name="Kontakt"
        component={Contact}
        options={{
          title: 'Kontakt',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-contact" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'O nama':
      return <Text style={styles.header}>O nama</Text>;
    case 'Kontakt':
      return <Text style={styles.header}>Kontakt</Text>;
      case "API":
      return <Text style={styles.header}>Fokus</Text>
    default :
      return (
        <Text style={styles.header}>
          <Text>
         Superinfo
          </Text>
        </Text>
          
        );  
  }
}

const styles = StyleSheet.create({
  headerText: {
      fontStyle: "italic",
      fontWeight: "bold",
      fontSize: 25,
      flex: 1,
      flexDirection: "row",
  }, header:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  }


});
