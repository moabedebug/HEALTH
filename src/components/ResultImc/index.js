import React from "react"
import { View, Text, TouchableOpacity, Share } from 'react-native'
import styles from "./style"

export default function ResultImc(props) {

    const onShare = async () => {
        const result = await Share.share({
            message: `Meu imc hoje é: ${props.resultImc}`
        })
    }

    return(
        <View style={styles.information}>
            <Text 
                style={styles.titleResultImc}        
            >{props.messageResultImc}</Text>

            <Text
                style={styles.resultImc}
            >{props.resultImc}</Text>

            <View style={styles.boxShareButton}>
                {props.resultImc != null ?
                <TouchableOpacity
                    style={styles.shared} 
                    onPress={onShare}>
                    <Text style={styles.sharedText}>Compartilhar</Text>
                </TouchableOpacity>
                :
                <View/>
                }
            </View>

        </View>
    )
}