import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HostingScreen from '../screens/HostingScreen';
import VolunteerScreen from '../screens/VolunteerScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Volunteer';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Host"
        component={HostingScreen}
        options={{
          title: 'Host',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="Volunteer"
        component={VolunteerScreen}
        options={{
          title: 'Volunteer',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      <BottomTab.Screen
        name="Log"
        component={HostingScreen}
        options={{
          title: 'Log Hours',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Host':
      return 'Host An Event';
    case 'Volunteer':
      return 'Select An Event Near You';
    case 'Log':
    return 'Log Your Hours';
  }
}
