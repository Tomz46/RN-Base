import React from 'react';
import { View, Text, Image } from 'react-native';
import { welcomeAuth } from '../../assets';
import { colors } from '../../utils/colors';

import ActionButton from './ActionButton';

const WelcomeAuth = ({navigation}) => {
    const handleGoTo = screen =>{
        navigation.navigate(screen);
    };

    return (
        <View style={styles.wrapper.page}>
            <Image source={welcomeAuth} style={styles.wrapper.ilustration} />
            <Text style={styles.text.welcome}> Selamat datang di..TopIQ </Text>
            <ActionButton
                desc="Silahkan Pilih Login Jika Sudah Memiliki Akun"
                title="Masuk" onPress={() => handleGoTo('Login')} />
            <ActionButton
                desc="Pilih Daftar Jika Belum Memiliki Akun"
                title="Daftar" onPress={()=> handleGoTo('Register')} />
        </View>
    );
};

const styles = {
    wrapper: {
        page: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: 'white',
        },
        ilustration: {
            width: 219,
            height: 117,
            marginBottom: 10,
        },
    },
    text: {
        welcome: {
            fontSize: 18,
            fontWeight: 'bold',
            color: colors.default,
            marginBottom: 76,
        },
    },
};

export default WelcomeAuth;
