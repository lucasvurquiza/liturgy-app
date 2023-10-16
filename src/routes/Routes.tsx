import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { COLORS, DRAWER_STYLE } from "@utils/constants";
import { Liturgia } from "@screens/Liturgia";
import { Santo } from "@screens/Santo";
import { Tercos } from "@screens/Tercos";

type TStackList = {
  Liturgia: undefined;
  Santo: undefined;
  Tercos: undefined;
}

const Drawer = createDrawerNavigator<TStackList>()

export function Routes() {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        ...DRAWER_STYLE,
        headerLeft: () => <TouchableOpacity style={{ marginLeft: 20 }} onPress={navigation.toggleDrawer}>
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>
      })}
    >
      <Drawer.Screen name="Liturgia" component={Liturgia} options={{
        drawerLabel: "Liturgia",
        headerTitle: "Liturgia",
        drawerIcon: ({ focused, size }) =>
          <FontAwesome5
            name="bible"
            size={size}
            color={focused ? COLORS.YELLOW : COLORS.BLACK}
          />
      }} />
      <Drawer.Screen name="Santo" component={Santo} options={{
        drawerLabel: "Santo do Dia",
        headerTitle: "Santo do Dia",
        drawerIcon: ({ focused, size }) =>
          <FontAwesome5
            name="cross"
            size={size}
            color={focused ? COLORS.YELLOW : COLORS.BLACK}
          />
      }} />
      <Drawer.Screen name="Tercos" component={Tercos} options={{
        drawerLabel: "Terços",
        headerTitle: "Terços",
        drawerIcon: ({ focused, size }) =>
          <FontAwesome5
            name="praying-hands"
            size={size}
            color={focused ? COLORS.YELLOW : COLORS.BLACK}
          />
      }} />
    </Drawer.Navigator>
  )
}