var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.reducer=exports.failure=exports.success=exports.request=exports.GithubSelectors=exports.INITIAL_STATE=exports["default"]=exports.GithubTypes=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _reduxsauce=require("reduxsauce");var _seamlessImmutable=_interopRequireDefault(require("seamless-immutable"));var _createReducer;var _createActions=(0,_reduxsauce.createActions)({userRequest:['username'],userSuccess:['avatar'],userFailure:null}),Types=_createActions.Types,Creators=_createActions.Creators;var GithubTypes=Types;exports.GithubTypes=GithubTypes;var _default=Creators;exports["default"]=_default;var INITIAL_STATE=(0,_seamlessImmutable["default"])({avatar:null,fetching:null,error:null,username:null});exports.INITIAL_STATE=INITIAL_STATE;var GithubSelectors={selectAvatar:function selectAvatar(state){return state.github.avatar;}};exports.GithubSelectors=GithubSelectors;var request=function request(state,_ref){var username=_ref.username;return state.merge({fetching:true,username:username,avatar:null});};exports.request=request;var success=function success(state,action){var avatar=action.avatar;return state.merge({fetching:false,error:null,avatar:avatar});};exports.success=success;var failure=function failure(state){return state.merge({fetching:false,error:true,avatar:null});};exports.failure=failure;var reducer=(0,_reduxsauce.createReducer)(INITIAL_STATE,(_createReducer={},(0,_defineProperty2["default"])(_createReducer,Types.USER_REQUEST,request),(0,_defineProperty2["default"])(_createReducer,Types.USER_SUCCESS,success),(0,_defineProperty2["default"])(_createReducer,Types.USER_FAILURE,failure),_createReducer));exports.reducer=reducer;