import { View, Text, StyleSheet } from 'react-native'

export default function app(){
  return(
    <View style={Styles.container}>
      <Text>Tradutor</Text>
    </View>
  )

}

const Styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "red"

  }
})