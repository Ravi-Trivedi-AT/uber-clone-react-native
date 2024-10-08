import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootBottomTabParamList} from '../types/navigation';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Rides from '../screens/Rides';
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import {colors} from '../constants/colors';
import {icons} from '../constants/onboarding';

const Tab = createBottomTabNavigator<RootBottomTabParamList>();

const TabIcon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => (
  <View style={[styles.container, focused && styles.containerFocused]}>
    <View
      style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
      <Image source={source} style={styles.image} resizeMode="contain" />
    </View>
  </View>
);

const HomeTabs = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarActiveTintColor: colors.primary['100'],
      tabBarInactiveTintColor: colors.primary['100'],
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: colors.secondary['900'],
        borderRadius: 50,
        paddingBottom: 0,
        overflow: 'hidden',
        marginHorizontal: 20,
        marginBottom: 20,
        height: 78,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
      },
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Home',
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <TabIcon source={icons.home} focused={focused} />
        ),
      }}
    />
    <Tab.Screen
      name="Rides"
      component={Rides}
      options={{
        title: 'Rides',
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <TabIcon source={icons.list} focused={focused} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        title: 'Profile',
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <TabIcon source={icons.profile} focused={focused} />
        ),
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
  },
  containerFocused: {
    backgroundColor: '#D1E3DD',
  },
  iconContainer: {
    borderRadius: 9999,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainerFocused: {
    backgroundColor: colors.success['400'],
  },
  image: {
    width: 28,
    height: 28,
    tintColor: 'white',
  },
});

export default HomeTabs;
