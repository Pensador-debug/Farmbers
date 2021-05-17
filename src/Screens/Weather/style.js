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
        paddingBottom: height * 0.3
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
    bhindiIcon: {
        height: height * 0.09,
        width: height * 0.09,
        borderRadius: 50,
        // marginLeft: width * 0.01,
    },
    farwardIcon: {
        height: height * 0.035,
        width: height * 0.035,
        borderRadius: 50,
        marginLeft: width * 0.05,
        marginTop: 2
    },
    warnIcon: {
        height: height * 0.045,
        width: height * 0.045,
        // borderRadius: 50,
        marginLeft: width * 0.07,
        marginTop: 2
    },
    docDetailedWrapper1: {
        width: width * 0.9,
        // height: height * 0.16,
    //    justifyContent:'space-around',
        backgroundColor: '#fff',
        marginTop: 10,
        flexDirection: 'column',
        borderRadius: 15,
       
        elevation: 4,
        
    },
    docSpecsWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    docNameWrapper: {
        width: '90%',
        marginLeft: 25,
        display: 'flex',
        marginTop: 3,
        flexDirection: 'column',
        paddingBottom: 20
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
        fontSize: 16,
        color: '#ffffff'
    },
});