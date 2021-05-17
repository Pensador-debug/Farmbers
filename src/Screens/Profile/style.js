import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        width,
        // height,
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
    
    profileIcon: {
        height: height * 0.05,
        width: height * 0.05,
        marginLeft: width * 0.04,
    },
    upperWrapper: {
        width: '100%',
        height: height * 0.15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems:'center',
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
    scrollWrapper: {
        width,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: height * 0.2
    },
    wrapper: {
        width: width * 1,
        // backgroundColor:'#00cccc',
        alignItems: 'center',
       
    },
 
    profileImgWrapper: {
        height: height * 0.10,
        width: height * 0.15,
        // marginTop:height*0.02, 
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'#000'
        // marginTop: '5%'
    },
    profileContainer: {
        position: 'absolute',
        left: '47%'
    },
    boxBtn2: {
        width: width * 0.4,
        height: height * 0.065,
        display: 'flex',
        backgroundColor: '#006631',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop:30
    },
    btnText: {
        // width:'100%',
        // fontWeight: 'bold',
        textShadowColor: '#ffffff',
        fontSize: 18,
        color: '#ffffff'
    },
    input: {
        width: '90%',
        fontFamily: 'Eina03_Bold',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontSize: 14,
        backgroundColor: '#fff',
        borderColor: '#E5E7E9',
        paddingLeft:30,
       
        // justifyContent: 'center',
        // alignItems: 'center',
        // textAlign: 'center'
    },
    formBox: {
        // justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        // height:'31%',
        flexDirection: 'row',
        borderRadius: 30,
        // borderWidth:1,
        marginTop: 10,
        backgroundColor: "#fff",
        elevation: 2
    },
    formBox1: {
        // justifyContent: 'center',
        // alignItems: 'center',
        width: "100%",
        // height: '31%',
        flexDirection: 'row',
        borderRadius: 20,
        // borderWidth:1,
        marginTop: 5,
        backgroundColor: "#D3D3D3",
        elevation: 2
    },
    input1: {
        width: '90%',
        fontFamily: 'Eina03_Bold',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontSize: 14,
        backgroundColor: '#D3D3D3',
        borderColor: '#E5E7E9',
        paddingLeft:30
        // justifyContent: 'center',
        // alignItems: 'center',
        // textAlign: 'center'
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
    downWrapper: {
        width: '95%',
        height: height * 0.07,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#006631',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
});