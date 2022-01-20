import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        marginTop: 30,
        backgroundColor: "#fff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 15
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 15,
        padding: 10,
    },
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20
    },
    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#FF0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30
    },
    textButtonCalculator: {
        fontSize: 20,
        color: "#fff"
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#FF0043',
        padding: 10,
        width: 300,
        marginTop: 16,
    },
    errorMessage: {
        color: "red",
        fontSize: 12,
        fontWeight: "bold",
        paddingLeft: 20
    },
    exhibitionResultImc: {
        width: "100%",
        height: "50%",
    },
    listImcs: {
        marginTop: 20
    },
    resultImcItem: {
        color: "red",
        fontSize: 26,
        height: 50,
        width: "100%",
        paddingRight: 20,
        fontWeight: "bold"
    },
    textResultItemList: {
        fontSize: 16,
        fontWeight: "normal"
    }
})

export default styles