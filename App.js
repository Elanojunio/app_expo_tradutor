import { View, Text, StyleSheet } from 'react-native'

export default function app(){
  return(
    <View style={Styles.container}>

      <View style={Styles.topbar}> 
    
    </View>
    <View>
      <Text style={Styles.title}>
        translator
      </Text>
    </View>
    </View>
    
  )

}

const Styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"gray",
    margin: "flex",
    alignItems: 'center',
    marginBottom:20,
    height:70,


  },
  topbar: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#018786"
  },
  title: {
    color: "#c2c2c2S",
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    margin: 30,
  }
})