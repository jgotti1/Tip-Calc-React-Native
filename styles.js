import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
   flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},

  container: {
    backgroundColor: '#bfecc1',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 570,
    borderRadius: 10,
    padding: 20,
   
  },
  topcontainer: {
    flex: 2,
    alignContent: "flex-start"
      
  },
  
  simpleText: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 20,

  },

  heading: {
      color: "#0c0c0c",
      fontSize: 46,
      height: 90,
      textShadowColor: "#9d9da7",
      textShadowRadius: 10,
      textShadowOffset: { width: 2, height: 2 },
      borderStyle: "solid",
      borderBottomWidth: 2,
      borderColor: "black"
  },
    
  title: {
    
    fontSize: 28,
    textAlign: "center",
    marginBottom: 10,
    color: "#0a0a0a",
    textShadowColor: "#9d9da7",
    textShadowRadius: 10,
    textShadowOffset: { width: 2, height: 2 },
  },
  totaltext: {
    
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10,
    color: "#197a1e",
    textShadowColor: "#9d9da7",
    textShadowRadius: 10,
    textShadowOffset: { width: 2, height: 2 },
  
  },
  
    inputcontainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "center",
      marginBottom: 10,
  },
    totalcontainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "center",
      gap: 10,
      marginTop: 20,
      maxWidth: "95%",

  },


    bottomcontainer: {
     
      alignItems: 'center',
      justifyContent: "center",
  },
    $: {
     
    fontSize: 34,
    fontWeight: 'bold',
    color: '#333',
  },
    textstyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
    
  billamount: {
      backgroundColor: "#ebebeb",
      height: 60,
      width: "85%",
      borderWidth: 1,
      borderRadius: 9,
    borderColor: "#070707",
      padding: 20,
  },
  totalAmount: {
      backgroundColor: "#ebebeb",
      height: 70,
      width:  280,
      borderWidth: 3.5,
      borderRadius: 13,
      borderColor: "#89cc89",
      justifyContent: "center",
      fontSize: 32,
      textAlign: "center",
      shadowOffset: { width: 0, height: 6 },
      shadowColor: "black",
      shadowRadius: 5,
      shadowOpacity: 0.2,
    
      
  },
  tipAmount: {
      backgroundColor: "#ebebeb",
      height: 50,
      width:  175,
      borderWidth: 1.5,
      borderRadius: 10,
      borderColor: "#acd6ac",
      justifyContent: "center",
      fontSize: 32,
      textAlign: "center",
      

  },
  tiptext: {
    fontSize: 24,
    textShadowColor: "#9d9da7",
    textShadowRadius: 5,
    textShadowOffset: { width: 2, height: 2 },

},

  tipcontainer: {
      flexDirection: 'row',
      gap: 10,

  },

  tipbox: {
    backgroundColor: "#ebebeb",
    borderRadius: 20,
    borderColor: "none", 
    marginVertical: 9,
  }, splitContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 20,
    width: '100%',
  },

  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: '#ddd',
    borderRadius: 50,
    marginHorizontal: 10,
    padding: 5,
  },
  splitButton: {
    // paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textstyle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  splitAmount: {
    fontSize: 20,
    fontWeight: 'bold',
  },


});

export default styles