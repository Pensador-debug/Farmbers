import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        width,
        height,
        display: 'flex',
        alignItems: 'center',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20%'
    },
    boxBtn2: {
        width: width * 0.9,
        height: height * 0.065,
        display: 'flex',
        backgroundColor: '#006631',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    btnText: {
        // width:'100%',
        // fontWeight: 'bold',
        textShadowColor: '#ffffff',
        fontSize: 18,
        color: '#ffffff'
    },
    input: {
        width: '65%',
        fontFamily: 'Eina03_Bold',
        borderRadius: 20,
        paddingVertical: 12,
        fontSize: 14,
        backgroundColor: '#fff',
        borderColor: '#E5E7E9',
        textAlign: 'center'
    },
    formBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        // height:'31%',
        flexDirection: 'row',
        borderRadius: 30,
        // borderWidth:1,
        marginTop: 15,
        backgroundColor: "#fff",
        elevation: 2
    },
    formshortInput: {
        width: "80%",
        height: '100%',
        marginLeft: width * 0.01,
        fontSize: width * 0.04,
    },
    searchIcon: {
        height: height * 0.06,
        width: height * 0.06,
        borderRadius: 50,
        position: 'absolute', left: 0
    },
    otpCont: {
        width: '80%',
        height: height * 0.068,
        //  backgroundColor: 'silver',
         marginLeft:25,
        marginTop:10
        
      },
      underlineStyleBase: {
        width: width * 0.12,
        height: height * 0.055,
        borderWidth: 1,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
        backgroundColor: '#F8F8F8',
        fontSize: width * 0.045,
        color: '#000000',
        fontWeight: 'bold',
        marginLeft:5
        
      },
     
});