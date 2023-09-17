import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpenses from './Screens/AllExpenses';
import ManageExpenses from './Screens/ManageExpenses';
import RecentExpenses from './Screens/RecentExpenses';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import ButtonIcon from './components/UI/ButtonIcon';
import { Provider } from 'react-redux';
import { Store } from './store/ConfigStore';


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();


function ExpensesOverView (){
  return(
    <BottomTabs.Navigator 
      screenOptions={({navigation})=> ({
      headerStyle:{backgroundColor: 'blue',},
      headerTintColor: 'white',
      headerTitleAlign : 'center',
      tabBarStyle: {backgroundColor: 'blue'},
      tabBarActiveTintColor: '#8AC7DB',
      headerRight: () =>(
        <ButtonIcon icon='add' color='white' size={24} onPress={() =>{
          navigation.navigate('ManageExpences')
        }} />
      ),
    })}>
      <BottomTabs.Screen 
        name='RecentExpenses'  
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          name: 'RecentExpenses',
          tabBarIcon: (color, size) =>{ <Ionicons name='hourglass' size={size} color={color}/>}
        }}
        />
      <BottomTabs.Screen 
        name='AllExpenses'  
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          name: 'All Expenses',
          tabBarIcon: (color, size) =>{ <Ionicons name='facebook' size={size} color={color}/>}
        }}
        />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
    <Provider store={Store}>
    <StatusBar style="auto" />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Manage Expenses' 
          component={ExpensesOverView} 
          options={{
            headerShown: false,
          }} 
          />
        <Stack.Screen name='ManageExpences' 
        component={ManageExpenses}
        options={{
          headerStyle:{
            backgroundColor: 'blue',
          },
          headerTintColor: 'white',
          presentation: 'modal'
        }}>
      </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    </>
  );
}

