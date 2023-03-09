import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
   flex: 1,
    // backgroundColor: '#3d3d3d',
    alignItems: 'center',
    justifyContent: 'center',

},

  container: {
    backgroundColor: '#bfecc1',
    borderWidth: 2,

    alignItems: 'center',
    justifyContent: 'center',
    height: 500,
    borderRadius: 10,
    padding: 20,
   
  },
  topcontainer: {
    flex: 2,
    alignContent: "flex-start"
      
  },
  
  tip: {

    marginTop: 60,
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
    
  billamount: {
      backgroundColor: "#ebebeb",
      height: 50,
      width: 250,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: "#070707",
  },
  totalAmount: {
      backgroundColor: "#ebebeb",
      height: 60,
      width: 200,
      borderWidth: 1.5,
      borderRadius: 5.9,
      borderColor: "#acd6ac",
    justifyContent: "center",
    fontSize: 32,
    textAlign: "center",
      

  }
});

export default styles