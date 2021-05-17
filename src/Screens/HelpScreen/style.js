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
        alignItems:'center',
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
        borderRadius:50,
       
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
   
    bottomBar: {
        width: '80%',
        height: height * 0.09,
        // backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '5%',
        justifyContent: 'space-around'
    },
   
    searchIcon: {
        height: height * 0.08,
        width: height * 0.08,
        borderRadius: 50,
        // position: 'absolute', left: 0
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
        top: height * 0.94
    },
    docDetailedWrapper2: {
        width: width *0.85,
        height: height * 0.35,
        display: 'flex',
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        backgroundColor: '#ffffff',
        marginTop: '40%',
        borderRadius: 10,
        shadowColor: 'rgba(1, 1, 1, 1)',
        elevation: 4,
        borderColor: '#00cccc'
        // marginLeft: 18,
    },
    nameWrapper: {
        fontSize: 20,
        // fontWeight: 'bold',
        color: '#ffffff'
    },
    middleWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: '#006631',
        paddingLeft: 15
    },
    formBox1: {
        // justifyContent: 'center',
        // alignItems: 'center',
        width: "80%",
        height: '31%',
        flexDirection: 'row',
        borderRadius: 20,
        // borderWidth:1,
        marginTop: 5,
        backgroundColor: "#D3D3D3",
        elevation: 2
    },
    input1: {
        marginTop:'5%',
        // width: '95%',
        // height:'70%',
        paddingLeft:10,
        borderColor: 'gray', 
        fontSize:20
      
      
    },
});