import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../../components';
import { colors } from '../../utils/colors';

const ActionButton = ({desc, title, onPress}) => {
  return (
    <View style={styles.wrapper.component}>
      <Text style={styles.Text.desc}>{desc}</Text>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

const styles = {
    wrapper: {
        component: { marginBottom: 43, width: 225 }
    },
    Text: {
        desc: {
            fontSize: 10,
            color: colors.text.default,
            textAlign: 'center',
            paddingHorizontal: '15%',
            marginBottom: 6
        },
    },
};

export default ActionButton;
