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
        height: height * 0.035,
        width: height * 0.035,
        borderRadius: 50,
        marginLeft: width * 0.05,
        marginTop: 2
    },
    warnIcon: {
        height: height * 0.045,
        width: width * 0.059,
        // borderRadius: 50,
        marginLeft: width * 0.07,
        marginTop: 2
    },
    docDetailedWrapper1: {
        width: width * 0.9,
        // height: height * 0.45,
        display: 'flex',
        // justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 10,
        borderRadius: 15,
        shadowColor: 'rgba(1, 1, 1, 1)',
        elevation: 4,
        // marginLeft: 18,
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
    barDetailImg: {
        width: width * 1,
        height:height*0.8,
        // borderRadius: 50,
        // borderWidth: 1,
        borderColor: '#ffffff',
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 1,
        marginRight: 10,
        // elevation: 5,
        marginBottom: 4
    },
    boxBtn: {
        width: width * 0.25,
        height: height * 0.05,
        display: 'flex',
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        marginTop: '7%'
    },
    maparea: {
        width: width,
        height:height*0.75,
        // height:height*0.5,
        alignItems: 'flex-start'
    },
});