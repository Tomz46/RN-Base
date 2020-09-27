import React from 'react';
import {View, Text} from 'react-native';
import {Input} from '../../components';
import {colors} from '../../utils/colors';
import {IconBack, IlustrationRegister} from '../../assets';

const Register = () => {
    return (
      <View style={styles.wrapper.page}>
        <IconBack width={25} height={25} />
        <IlustrationRegister
          width={106}
          height={115}
          style={styles.ilustrations}
        />
        <Text style={styles.text.desc}>Mohon mengisi beberapa data</Text>
        <View style={styles.space(55)} />
        <Input placeholder="Nama Lengkap" />
        <View style={styles.space(25)} />
        <Input placeholder="Email" />
        <View style={styles.space(25)} />
        <Input placeholder="Password" />
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