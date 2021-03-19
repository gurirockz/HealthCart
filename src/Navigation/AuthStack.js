import React from 'react';
import {Login, OtpVerification, OuterScreen, Signup, LandingPage, Email, } from '../Screens';
import navigationStrings from '../constants/navigationStrings';


export default function (Stack) {
  return (
    <>
    <Stack.Screen
        name={navigationStrings.LANDING_PAGE}
        component={LandingPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.OUTER_SCREEN}
        component={OuterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.SIGN_UP}
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.OTP_VERIFICATION}
        component={OtpVerification}
        options={{headerShown: false}}
      />

<Stack.Screen
        name={navigationStrings.EMAIL}
        component={Email}
        options={{headerShown: false}}
      />

{/* <Stack.Screen
        name={navigationStrings.SHOPPING_CART}
        component={ShoppingCart}
        options={{headerShown: false}}
      /> */}

    </>
  );
}
