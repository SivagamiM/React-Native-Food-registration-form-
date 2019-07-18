import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { ToggleButton, RadioButton ,List, Checkbox,Chip ,} from 'react-native-paper';
import { View, Switch, Text, Alert ,StyleSheet,ScrollView,Image,} from 'react-native';
import {  Header,CheckBox ,CheckboxGroup ,Button} from 'react-native-elements';


export default class MyComponent extends React.Component {
  state = {
    email: '',
        number: '',
    address: '',
    password: '',
    confirm_password: '',
    value: 'left',
    isSwitchOn: false,
    checked: 'Veg',
    expanded: true


  };
  
 
  render() {
    const { isSwitchOn } = this.state;
    const { checked } = this.state;
    return (
       <ScrollView>
      <View backgroundColor="#f2f1ed">
          <Header backgroundColor="#cf4f0a"
  leftComponent={{ icon: 'home', color: '#fcca03' }}
  centerComponent={{ text: 'Swiggy', style: { color: '#fcca03',fontWeight: 'bold',fontSize:25 } }}
/>     
        <Image source={require('test.jpg')}style={styles.backgroundImage}/>   
        <View style={styles.container}>
        <TextInput
          label="User Name"
          mode="outlined"
          selectionColor="green"
          underlineColor="yellow"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          label="Mobile Number"
          mode="outlined"
          keyboardType = 'numeric'
          value={this.state.number}
          onChangeText={number => this.setState({ number })}
        />
        <TextInput
          label="Address"
          mode="outlined"
          value={this.state.address}
          onChangeText={address => this.setState({ address })}
        />
        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <TextInput
          label="Confirm password"
          mode="outlined"
          secureTextEntry={true}
          value={this.state.confirm_password}
          onChangeText={confirm_password => this.setState({ confirm_password })}
        />
       
        
       <Text style={{color: 'green',fontWeight: 'bold'}}> Prefrence</Text> 
       
       <CheckBox
  title='Veg'
   checked={this.state.checked}

  onPress={() => this.setState({checked: !this.state.checked})}

/>
<CheckBox 
  title='Non-Veg'
 checked={this.state.checkedd}
   onPress={() => this.setState({checkedd: !this.state.checkedd})}

/>

        <Text style={{color: 'green',fontWeight: 'bold'}}>Allow to send notification</Text>
          <Switch
            value={isSwitchOn}
            
            onValueChange={() => {
              this.setState({ isSwitchOn: !isSwitchOn });
            }}
          />
         
        
       <Text>  </Text>
       <Button  style={{ width: '100%',
      height: '30%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom:20
      }}
  title="Create Account"
  onPress={
    ()=>
    {
      if(this.state.password===this.state.confirm_password){
        fetch('http://172.17.5.236:3000/register1', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    Name: this.state.email,
    Mobile: this.state.number,
    Address:this.state.address,
    Password:this.state.password,
    Veg:this.state.checked,
    Nonveg:this.state.checkedd,
    IsSwitchOn:this.state.isSwitchOn
  }),
})
.then(response=>Alert.alert('Account Created Successfully'))
.catch(err=>console.warn(err));
}
    else {
      Alert.alert("Password Mismatch!!!");
    }}
  }/>

</View>

      </View></ScrollView>
    );
  }
}
var styles = StyleSheet.create({

     backgroundImage:{
     width:420,
     height:70
   },
    container: {
    padding:15
  
  },
})
