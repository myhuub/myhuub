import React from "react";
import {View, Text,TextInput} from "react-native";
import { WebView } from 'react-native-webview';
export const applyCustomCode = externalCodeSetup => {
    // call custom code api here
    // externalCodeSetup.configApi.setAppSwitchEnabled(true);
    externalCodeSetup.navigationApi.replaceScreenComponent("SignupScreen", () => (
        <WebView source={{ uri: 'https://mesa.myhuub.com/register/' }} />
    ));
};
