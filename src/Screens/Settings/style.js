import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        width,
        height,
        display: 'flex',
        backgroundColor:'#fff'
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
    profileIcon: {
        height: height * 0.05,
        width: height * 0.05,
        marginLeft: width * 0.04,
    },
    upperWrapper: {
        width: '100%',
        height: height * 0.1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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
    bhindiIcon: {
        height: height * 0.09,
        width: height * 0.09,
        borderRadius: 50,
        // marginLeft: width * 0.01,
    },
    farwardIcon: {
        height: height * 0.015,
        width: height * 0.015,
        borderRadius: 50,
        
        marginTop: 2
    },
    warnIcon: {
        height: height * 0.045,
        width: height * 0.045,
        // borderRadius: 50,
        marginLeft: width * 0.07,
        marginTop: 2
    },
    cardDetailedWrapper: {
        width: width * 0.9,
        // height: height * 0.45,
        display: 'flex',
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 10,
        borderRadius: 15,
        shadowColor: 'rgba(1, 1, 1, 1)',
        elevation: 4,
        paddingBottom: 5
        // marginLeft: 18,
    },
    docSpecsWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    docNameWrapper: {
        
        display: 'flex',
        marginTop: 3,
        flexDirection: 'column',
        paddingBottom: 10
    },
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5'
    },
    TouchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 100,
    },
    FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        borderRadius: 600
    },
    boxBtn: {
        // width: '60%',
        height: height * 0.025,
        marginTop: 10,
        // backgroundColor: 'green',
        justifyContent:'flex-start',
        alignItems: 'center',
      
        flexDirection:'row',
        // marginLeft:10
    },
    boxBtn1: {
        // width: '60%',
        height: height * 0.025,
        marginTop: 10,
        // backgroundColor: 'green',
        justifyContent: 'flex-end',
        alignItems: 'center',
        
        flexDirection:'row',
        // marginLeft:10
    },
    formBox: {
        // justifyContent: 'center',
        // alignItems: 'center',
        // width: "100%",
        // height:'31%',
        flexDirection: 'row',
        // borderRadius: 30,
        // borderWidth:1,
        marginTop:height*0.08,
        backgroundColor: "#fff",
        marginLeft:'7%'
        // elevation: 2,
    },
    formBox1: {
        // justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        // height:'31%',
        flexDirection: 'row',
        // borderRadius: 30,
        // borderWidth:1,
        marginTop:height*0.08,
        backgroundColor: "#fff",
        marginLeft:30
        // elevation: 2,
    },
    input: {
        width: '80%',
        // backgroundColor:'#000',
        paddingVertical: 12,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        flexDirection: 'column',
        marginLeft:20
    },
    input12: {
        width: '65%',
        // backgroundColor:'#000',
        paddingVertical: 12,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        flexDirection: 'column',
        marginLeft:'13%'
    },
    input13: {
        width: '65%',
        // backgroundColor:'#000',
        paddingVertical: 12,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        flexDirection: 'column',
        marginLeft:'15%'
    },
    helpIcon: {
        height: height * 0.02,
        width: height * 0.02,
        marginLeft:15
        // borderRadius: 50,
        // position: 'absolute',
        // left: 35,
        // top: -15
    },
    boxBtn2: {
        width: width * 0.4,
        height: height * 0.065,
        display: 'flex',
        backgroundColor: '#006631',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    searchIcon: {
        height: height * 0.05,
        width: height * 0.05,
        borderRadius: 50,
        position: 'absolute', left: 0,
       
    },
   
});