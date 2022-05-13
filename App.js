import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native';
import CustomBtn from './components/CustomBtn';

export default function App() {

  return (
     <ScrollView style={{flex : 1}}>
    <View style={styles.container}>
     
      <CustomBtn type="Primary" text="Primary"/>
      <CustomBtn type="Secondary" text="Secondary"/>
      <CustomBtn type="Success" text="Success"/>
      <CustomBtn type="Danger" text="Danger" />
      <CustomBtn type="Warning" text="Warning"/>
      <CustomBtn type="Info" text="Info"/>
      <CustomBtn type="Light" text="Light"/>
      <CustomBtn type="Dark" text="Dark"/>
      <CustomBtn type="Warning" text="ma couleur"/>
      <CustomBtn type="Orange" text="Test"/>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop : 20
   
  },
});
