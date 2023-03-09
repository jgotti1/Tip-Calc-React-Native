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

      
  },
  
  tip: {
height: 35,
      
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
});

export default styles