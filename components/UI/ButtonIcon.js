import { Ionicons } from '@expo/vector-icons';
import { View, Pressable, StyleSheet} from 'react-native';

const ButtonIcon = ({icon, color , size , onPress}) => {
  return (
    <Pressable
    onPress={onPress}
    style ={(presed) => presed && styles.presed}
    > 
        <View>
            <Ionicons name={icon} color={color} size={size} />
        </View>
    </Pressable>
  )
}

export default ButtonIcon ;

const styles = StyleSheet.create({
    container:{
        borderRadius: 24,
        padding: 6,
        margin: 4,
        marginHorizontal: 8,
        marginBottom: 2,
    },
    presed:{
        opacity: 0.75,
    }
})