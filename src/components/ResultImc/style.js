import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    information: {
        flex: 1,
        marginTop: 5,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
    },
    resultImc: {
        fontSize: 48,
        color: "#FF0043",
        fontWeight: "bold"
    },
    titleResultImc: {
        fontSize: 18,
        color: "#FF0043",
        fontWeight: "bold"
    },
    boxShareButton: {
        width: "100%",
        alignItems: "center",
        marginTop: 15 
    },
    shared: {
        backgroundColor: "#1877f2",
        borderRadius: 50,
        paddingTop: 5,
        paddingBottom: 5
    },
    sharedText: {
        color: "#ffffff",
        fontWeight: "bold",
        paddingHorizontal: 30
    }
})

export default styles