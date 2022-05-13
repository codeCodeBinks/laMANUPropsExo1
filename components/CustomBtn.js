import { Pressable, StyleSheet, Text } from 'react-native'

const CustomBtn = (props) => {
    // let textColor = "white";
    let color = props.color;
    let isTooLight = false ;
    switch (props.type){
     case "Primary" : color="#0069D9";
     break;
     case "Secondary" : color="grey";
     break;
     case "Success" : color="green";
     break;
     case "Info" : color="#17A2B8";
     break;
     case "Warning" : color="yellow"; isTooLight=true ; /* textColor = "black" */
     break;
     case "Danger" : color="red";
     break;
     case "Light" : color="white"; isTooLight=true; /* textColor = "black" */
     break;
     case "Dark" : color="black";
     break;
    }
    
  return (
  <Pressable style ={{backgroundColor : color, width : 150, height : 70, borderRadius : 10, marginTop : 20}}><Text style = {[style.text, {color : /* textColor */ isTooLight ? "black" : "white"}]}>{props.text}</Text></Pressable>
  )
}

const style = StyleSheet.create({
    
    text : {
     
        alignSelf : 'center',
        marginTop : 18,
        fontSize : 20
        
    }
})


export default CustomBtn