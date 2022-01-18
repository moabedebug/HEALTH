import React, {useState} from "react"
import { 
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Vibration,
    Keyboard,
    Pressable,
    ScrollView,
    FlatList,
    SectionList
} from 'react-native'
import ResultImc from "../ResultImc"
import styles from "./style"

export default function Form() {

const [height, setHeight] = useState(null)
const [weight, setWeight]= useState(null)
const [messageImc, setMessageImc]= useState(null)
const [imc, setImc]= useState(null)
const [textButton, setTextButton]= useState("Calcular")
const [errorMessage, setErrorMessager] =useState(null)

function imcCalculator(){
    let heightFormat = height.replace(",",".")
    return setImc((weight/(heightFormat*heightFormat)).toFixed(2))
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
    }else {
        verificationImc()
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura")  
    }
}

    return(
        <View style={styles.formContext}>
            { imc == null ? 
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
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
                
            </Pressable>
            : 
            <View style={styles.exhibitionResultImc}>
                <ResultImc messageResultImc={messageImc} resultImc={imc}/>
                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => ValidationImc()}
                    
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            }
        </View>
    )
}

