import React, { useState } from "react";
import { Alert, StyleSheet, Text, Pressable, View, Button } from "react-native";
import Modal from 'react-native-modal'

const ModalT = (props) => {
    return (
        <Modal
            {...props}
            style={styles.modal}
            backdropOpacity={0.20}
            animationType="slide"
            transparent={true}
            isVisible={props.isVisible}
        >
            <Text>Oi tudo bem</Text>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex:1,
        
    }
})


export default ModalT