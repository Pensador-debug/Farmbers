import { combineReducers } from "redux"
import register from './registration'
import otp from './otp'
import forgetpin from './forgetpin'
import resetpin from './resetpin'
import profile from './profile'
import saveprofile from './saveprofile'
import notification from './notifications'
import pincode from './pincode'
import languages from './languages'
import savelanguage from './savelanguage'
import dashboard from './dashboard'
import magiccircle from './magiccircle'
import saveland from './saveland'
import home from './home'
import savecrop from './savecrop'
import cropstage from './crop_stage'
import usercrops from './usercrops'
import mandi from './mandi'
import weather from './weather'
import soildata from './soildata'
import help from './help'
import savemagiccircle from './savemagiccircle'


const rootReducer = combineReducers({
  register: register,
  otp: otp,
  forgetpin: forgetpin,
  resetpin: resetpin,
  profile: profile,
  saveprofile: saveprofile,
  notification: notification,
  pincode: pincode,
  languages: languages,
  savelanguage: savelanguage,
  dashboard:dashboard,
  magiccircle:magiccircle,
  saveland:saveland,
  home:home,
  savecrop:savecrop,
  cropstage:cropstage,
  usercrops:usercrops,
  mandi:mandi,
  weather:weather,
  soildata:soildata,
  help:help,
  savemagiccircle:savemagiccircle





})
export default rootReducer
