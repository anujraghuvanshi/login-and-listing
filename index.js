
global.XMLHttpRequest = global.originalXMLHttpRequest
? global.originalXMLHttpRequest
: global.XMLHttpRequest
global.FormData = global.originalFormData
? global.originalFormData
: global.FormData

fetch // Ensure to get the lazy property

if (window.__FETCH_SUPPORT__) {
// it's RNDebugger only to have
window.__FETCH_SUPPORT__.blob = false
} else {
/*
 * Set __FETCH_SUPPORT__ to false is just work for `fetch`.
 * If you're using another way you can just use the native Blob and remove the `else` statement
 */
global.Blob = global.originalBlob ? global.originalBlob : global.Blob
global.FileReader = global.originalFileReader
	? global.originalFileReader
	: global.FileReader
}

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
