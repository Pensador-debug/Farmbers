import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        width: '100%',
        height: "100%",
        display: 'flex',
        justifyContent: 'flex-start',
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
    scrollWrapper: {
        width,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: height * 0.4
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
    sunIcon: {
        height: height * 0.02,
        width: height * 0.02,
        borderRadius: 50,
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
    searchIcon: {
        height: height * 0.07,
        width: height * 0.07,
        borderRadius: 50,
    },
    warnIcon: {
        height: height * 0.035,
        width: height * 0.035,
        // marginLeft:15,
        // borderRadius: 50,
        // position: 'absolute',
        // left:5,
        // top: -15
    },
    helpIcon: {
        height: height * 0.035,
        width: height * 0.035,
        marginLeft: 15
        // borderRadius: 50,
        // position: 'absolute',
        // left: 35,
        // top: -15
    },
    downWrapper: {
        width: '95%',
        height: height * 0.08,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#006631',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        // marginTop:'30%',
        position: 'absolute',
        top: height * 0.96
    },
    formBox: {
        justifyContent: 'center',
        alignItems: 'center',
        // width: "100%",
        // height:'31%',
        flexDirection: 'row',
        borderRadius: 30,
        // borderWidth:1,
        marginTop: 15,
        backgroundColor: "#fff",
        elevation: 2,
    },
    input: {
        width: '80%',
        // backgroundColor:'#000',
        paddingVertical: 12,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        marginLeft: 20
    },
    input12: {
        width: '60%',
        // backgroundColor:'#fff',
        paddingVertical: 12,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        marginLeft: 20
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
    btnText: {
        // width:'100%',
        // fontWeight: 'bold',
        textShadowColor: '#ffffff',
        fontSize: 18,
        color: '#ffffff'
    },
    testModel: {
        backgroundColor: '#FFFFFF',
        marginTop: height * 0.1,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: height * 0.2,
        borderRadius: 10,
        flex: 1,
        borderColor: "#29E093",
        // borderWidth: 1
    },
    middleWrapper1: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: '#006631',
        // paddingLeft: 15
    },
    nameWrapper: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff'
    },
});