import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Button, Input} from '../../components';
import {colors} from '../../utils/colors';
import {IconBack, IlustrationRegister} from '../../assets';
import { useState } from 'react';


const Register = () => {
  const [form, setform] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const sendData = () => {
    console.log('Data yang dikirim', form);
  };

const onInputChange = (value, Input) => {
  setform({
    ...form,
    [Input]: value,

  });
};
    return (
       
      <View style={styles.wrapper.page}>
           <ScrollView showsVerticalScrollIndicator={false} >
        <IconBack width={25} height={25} />
        <IlustrationRegister
          width={106}
          height={115}
          style={styles.ilustrations}
        />
        <Text style={styles.text.desc}>Mohon mengisi beberapa data</Text>
        <View style={styles.space(55)} />
        <Input placeholder="Nama Lengkap" value = {form.fullName} onChangeText={(value) => onInputChange(value,'fullName')} />
        <View style={styles.space(25)} />
        <Input placeholder="Email" value = {form.email} onChangeText={(value) => onInputChange(value, 'email')} />
        <View style={styles.space(25)} />
        <Input placeholder="Password" value = {form.password} onChangeText={(value) => onInputChange(value, 'password')} 
        secureTextEntry ={true} />
        <View style={styles.space(65)} />
        <Button title={"Daftar"} onPress = {sendData} />
        </ScrollView>
      </View>
    );
};

const styles = {
  wrapper: {
    page: {padding: 20},
  },

  ilustrations: {
    marginTop: 8,
  },
  text: {
    desc: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.default,
      marginTop: 16,
      maxWidth: 200,
    },
  },

  space: (value) => {
    return {
      height: value,
    };
  },
};

export default Register;