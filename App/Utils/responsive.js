import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
 
export function rh(size){
    return responsiveHeight(size)
}
export function rw(size){
    return responsiveWidth(size)
}
export function rf(size){
    return responsiveFontSize(size)
}