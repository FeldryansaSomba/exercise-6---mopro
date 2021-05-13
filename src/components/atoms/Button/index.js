import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({label, onSubmit}) => {
  return (
    <TouchableOpacity onPress={onSubmit} style={styles.button}>
      <Text style={styles.labelButton}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 29,
        backgroundColor: '#C238CE',
        paddingVertical: 15,
        borderRadius: 20,
    },
    labelButton: {
        textAlign: 'center',
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: '700',
    },
});

export default Button;