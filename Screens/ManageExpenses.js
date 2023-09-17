import { View, Button, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import ButtonIcon from '../components/UI/ButtonIcon';

const ManageExpenses = ({route, navigation}) => {

  const Editing = route.params?.expenseId;
  const isEditing = !! Editing;

  useLayoutEffect(()=>{
    navigation.setOptions({
      title: isEditing? 'Edit Expense' : 'Add Expense'
    })
  },[isEditing,navigation]);

  const cencelHandeler = () =>{

    navigation.goBack();

  }
  const updateHandeler = () =>{
    navigation.goBack();

  }
  const deleteHandeler = () =>{
    navigation.goBack();

  }

  return (
    <View style={styles.ManageExpensesContainer}>
      <View style={styles.buttonContainer}>
        <Button  title='Cencel' color='red'  onPress={cencelHandeler}/>
        <Button title={isEditing?'Ediit':'Add'} onPress={updateHandeler}></Button>
      </View>
    <View style={styles.trashContainer}>
      <View style={styles.trashSubContainer}>
      {isEditing && <ButtonIcon style={styles.manageButtons} icon={'trash'} color={'red'} size={24} onPress={deleteHandeler}/>}
      </View>
    </View>
    </View>
  )
}

export default ManageExpenses ;


const styles = StyleSheet.create({
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    gap: 10,
  },
  trashContainer:{
    width: '100%',
    alignItems: 'center',
    padding: 10,
  },
  trashSubContainer:{
    padding: 5,
    alignItems: 'center',
    width: '75%',
    borderTopWidth: 1,
    borderColor: 'blue'
  },
})