import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        width,
        height,
        display: 'flex',
    },
    upperBar: {
        width,
        height: height * 0.075,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoContainer: {
        // justifyContent:"center",
        // alignItems:'center',
        
        // backgroundColor:'#000'
    },
    headingContainer: {
        width: '50%',
        // marginLeft: '10%',
        alignItems: 'center',
    },
    barText: {
        color: "green",
        fontSize: height * 0.03,
        fontWeight: 'bold'
    },
    wrapper: {
        width: width * 1,
        // backgroundColor:'#00cccc',
        alignItems: 'center',
        height: '10%'
    },
 
    upperWrapper: {
        width: '100%',
        height: height * 0.1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#006631',
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45,
    },
    barMenuIcon: {
        height: height * 0.04,
        width: height * 0.04,
        marginLeft: width * 0.04,
    },
    logoStyle: {
        height: height * 0.042,
        width: height * 0.15,
        marginLeft: width * 0.04,
    },
    backContainerStyle: {
        height: height * 0.042,
        width: height * 0.05,
        marginLeft: width * 0.04,
    },
    
    bellIcon: {
        height: height * 0.038,
        width: height * 0.0426,
    },
    bellIcon1: {
        height: height * 0.038,
        width: height * 0.035,
    },
    profileIcon: {
        height: height * 0.045,
        width: height * 0.045,
        borderRadius: 50,
        marginLeft: width * 0.02,
    },
    docDetailedWrapper2: {
        width: width * 0.9,
        height: height * 0.08,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginTop: height * 0.04,
        borderRadius: 5,
        shadowColor: 'rgba(1, 1, 1, 1)',
        // elevation: 4,
        marginLeft: 18,
        borderBottomWidth: .5,
        borderBottomColor: "#C8C8C8",
        flexDirection:'row'
    },
    docNameWrapper: {
        width: '75%',
        // marginLeft: 25,
        display: 'flex',
        // marginTop: 10,
        flexDirection:'row',
        marginLeft:20
    },
    docNameText: {
        fontFamily: 'Helvetica Neue',
        color: '#000',
        fontSize: width * 0.035,
        fontWeight: 'bold',
        paddingBottom: 1,
    },
    boxBtn: {
        width: width * 0.3,
        height: height * 0.05,
        display: 'flex',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        marginTop: '5%'
    },
    btnText: {
        // width:'100%',
        fontWeight: 'bold',
        textShadowColor: '#ffffff',
        fontSize: 14,
        color: 'green',
    },
    btnText1: {
        // width:'100%',
        fontWeight: 'bold',
        textShadowColor: '#ffffff',
        fontSize: 10,
        color: 'green',
        // marginTop: 20,
        // marginLeft:20
    },
    btnText2: {
        // width:'100%',
        fontWeight: 'bold',
        textShadowColor: '#ffffff',
        fontSize: 14,
        color: 'green',
        // marginTop: 20,
        marginLeft:20
    },
    boxBtn2: {
        width: width * 0.35,
        height: height * 0.05,
        display: 'flex',
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    topheading:{
        // paddingTop: height*0.03,
        fontSize: width*0.065,
        color: '#fff',
        alignItems: 'center'
    },
    topheading1:{
        // paddingTop: height*0.03,
        fontSize: width*0.065,
        color: '#fff',
        alignItems: 'center'
    },
   
  
   
});