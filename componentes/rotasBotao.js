import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import home from "..componentes/home.js";
import dica1 from "..componentes/dica1.js";
import dica2 from "..componentes/dica2.js";

const Stack = createStackNavigator();

export default function rotasBotao() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={home}/>
                <Stack.Screen name="Dica1" component={dica1}/>
                <Stack.Screen name="Dica2" component={dica2}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}