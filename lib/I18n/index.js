var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _objectSpread2=_interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));var _typeof2=_interopRequireDefault(require("@babel/runtime/helpers/typeof"));var _reactNativeI18n=_interopRequireDefault(require("react-native-i18n"));var missingTranslationRegex=/^\[missing ".*" translation\]$/;var translateOrFallback=function translateOrFallback(initialMsg,options){if(typeof initialMsg!=='string'){__DEV__&&console.log("I18n: you must give a string to translate instead of \""+(0,_typeof2["default"])(initialMsg)+"\"");return'';}var localMsg=_reactNativeI18n["default"].t(initialMsg,options);if(missingTranslationRegex.test(localMsg)){__DEV__&&console.log("translation \""+initialMsg+"\" does not exists in translations files");return initialMsg;}return localMsg;};var _default=(0,_objectSpread2["default"])({},_reactNativeI18n["default"],{t:translateOrFallback});exports["default"]=_default;