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
    profileIcon1: {
        height: height * 0.035,
        width: height * 0.035,
        // borderRadius: 50,
        marginLeft: width * 0.02,
    },
    docDetailedWrapper2: {
        width: width * 0.9,
        height: height * 0.1,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        // marginTop: height * 0.02,
        borderRadius: 10,
        shadowColor: 'rgba(1, 1, 1, 1)',
        // elevation: 4,
        // marginLeft: 18,
        borderBottomWidth: .5,
        borderBottomColor: "#C8C8C8",
        marginTop:10
    },
    docSpecsWrapper: {
        width: '93%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    },
    docdetailImg: {
        width: 50,
        height: 50,
        borderRadius: 30,
        borderWidth: 1,
        // borderColor: colors.WHITE,
        // shadowColor: colors.BLACK,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 5,
        marginBottom: 4
    },
    docNameWrapper: {
        width: '80%',
        marginLeft: 25,
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
    docSubNameText: {
        // color: '#898A8F',
        color: '#000',
        fontSize: width * 0.033,
        fontWeight: '400',
        fontFamily: 'Helvetica Neue',
        fontStyle: 'normal',
        marginTop:'2%'
    },
   
});