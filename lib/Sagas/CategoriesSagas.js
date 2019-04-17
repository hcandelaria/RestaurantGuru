var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.getAllCategories=getAllCategories;exports.updateCategory=updateCategory;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _effects=require("redux-saga/effects");var _CategoriesRedux=_interopRequireDefault(require("../Redux/CategoriesRedux.js"));var _marked=_regenerator["default"].mark(getAllCategories),_marked2=_regenerator["default"].mark(updateCategory);function getAllCategories(api){var response,categories;return _regenerator["default"].wrap(function getAllCategories$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return(0,_effects.call)(api.getCategories);case 3:response=_context.sent;if(!response.ok){_context.next=10;break;}categories=response.data.categories;_context.next=8;return(0,_effects.put)(_CategoriesRedux["default"].getCategoriesSuccess(categories));case 8:_context.next=12;break;case 10:_context.next=12;return(0,_effects.put)(_CategoriesRedux["default"].getCategoriesFailure('Connection problems :('));case 12:_context.next=18;break;case 14:_context.prev=14;_context.t0=_context["catch"](0);_context.next=18;return(0,_effects.put)(_CategoriesRedux["default"].getCategoriesFailure(_context.t0.message));case 18:case"end":return _context.stop();}}},_marked,null,[[0,14]]);}function updateCategory(action){var category;return _regenerator["default"].wrap(function updateCategory$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;if(!action.category){_context2.next=5;break;}category=action.payload.category;_context2.next=5;return(0,_effects.put)(CategoriesAction.updateCategory(category));case 5:_context2.next=11;break;case 7:_context2.prev=7;_context2.t0=_context2["catch"](0);_context2.next=11;return(0,_effects.put)(CategoriesAction.updateCategoryFailure(_context2.t0.message));case 11:case"end":return _context2.stop();}}},_marked2,null,[[0,7]]);}