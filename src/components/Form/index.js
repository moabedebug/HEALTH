import React, {useState} from "react"
import { 
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Vibration
} from 'react-native'
import ResultImc from "../ResultImc"
import styles from "./style"

export default function From() {

const [height, setHeight] = useState(null)
const [weight, setWeight]= useState(null)
const [messageImc, setMessageImc]= useState(null)
const [imc, setImc]= useState(null)
const [textButton, setTextButton]= useState(null)
const [errorMessage, setErrorMessager] =useState(null)

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2))
}

function verificationImc(){
    if(imc == null){
        Vibration.vibrate();
        setErrorMessager("campo obrigatório*")
    }
}

function ValidationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setWeight(null)
        setHeight(null)
        setMessageImc("Seu IMC é igual:")
        setTextButton("Calcular Novamente")
        setErrorMessager(null)
        return
    }
    verificationImc()
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha o peso e altura")  
}

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex: 1.75"
                    keyboardType="numeric"
                />
                
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex: 75.36"
                    keyboardType="numeric"
                />

                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => ValidationImc()}
                    
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
                
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    )
}

