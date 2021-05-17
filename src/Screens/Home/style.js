import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        width,
        height,
        display: 'flex',
        justifyContent: 'flex-start',
        // position:"absolute",
        // backgroundColor: 'red'
    },
    upperWrapper: {
        width: '100%',
        height: height * 0.15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#006631',
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45,
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
        // backgroundColor: '#00cccc',
        alignItems: 'center',
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
    // scrollWrapper: {
    //     width,
    //     display: 'flex',
    //     justifyContent: 'flex-start',
    //     alignItems: 'center',
    //     // paddingBottom: height *1
    // },
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
    downWrapper: {
        width: '95%',
        height: height * 0.07,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#006631',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30, marginTop: 40
    },
    docDetailedWrapper3: {
        width: width * 0.9,
        height: height * 0.08,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginTop: height * 0.38,
        borderRadius: 5,
        shadowColor: 'rgba(1, 1, 1, 1)',
        // elevation: 4,
        // marginLeft: 18,
        borderBottomWidth: .5,
        borderBottomColor: "#C8C8C8",
        flexDirection:'row'
    },
    docNameWrapper: {
        width: '80%',
        marginLeft:35,
        display: 'flex',
        // marginTop: 7,
        flexDirection: 'column',
    },
    docNameText: {
        fontFamily: 'Helvetica Neue',
        color: '#000',
        fontSize: width * 0.038,
        fontWeight: 'bold',
        paddingBottom: 1,
    },
});