import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {normalize, normalizeHeight} from '@helper/ResponsiveSize';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HomeScreen from '@screens/Home';

const Tap = createBottomTabNavigator();

//  CustomBottomTap
const CustomBottomNav = ({state, descriptors, navigation}: any) => {
  return (
    <View style={styles.BottomNavContainer}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.jumpTo(route.name, {
              render: `${route.name}_${new Date()}`,
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={`tabkey_${index}`}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.TapBtn}>
            <Text
              style={[
                styles.TextFtSize,
                {
                  color: isFocused ? 'rgb(51, 49, 50)' : 'rgb(146, 148, 151)',
                },
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  BottomNavContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingBottom: Platform.OS === 'ios' ? normalize(20) : 0,
    height: normalizeHeight(75),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1.2},
    shadowOpacity: 1,
    shadowRadius: 1.2,
    elevation: 10,
  },
  TapBtn: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  TextFtSize: {
    fontSize: normalize(11),
    marginTop:
      Platform.OS === 'ios' ? normalizeHeight(-2) : normalizeHeight(-12),
    marginBottom: Platform.OS === 'ios' ? 0 : normalizeHeight(20),
  },
  Tapimg: {width: normalize(35)},
});
// BottomNav Container
const BottomTabNav = () => {
  return (
    <Tap.Navigator tabBar={(props: any) => <CustomBottomNav {...props} />}>
      <Tap.Screen
        name="Home"
        options={{tabBarLabel: '홈', title: '홈'}}
        component={HomeScreen}
      />
    </Tap.Navigator>
  );
};
export default BottomTabNav;
