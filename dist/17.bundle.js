webpackJsonp([17],{1320:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),u=a(i),d=n(1),o=(a(d),n(540));e.default=(0,u.default)(o.Slide,{transition:["slide"],bgColor:"background",maxWidth:"1200px"},void 0,(0,u.default)(o.Heading,{size:1,textColor:"heading",caps:!0,fit:!0},void 0,"ReactJS fundamentals: Reducers"),(0,u.default)("br",{}),(0,u.default)(o.CodePane,{lang:"jsx",source:n(1338)}))},1338:function(t,e){t.exports="...\nfunction qtyReducer(state = initialState, action) {\n  switch (action.type) {\n    case INCREMENT_QTY:\n      return Object.assign({}, state, {\n        quantity: state.quantity + action.payload\n      });\n      ...\n    default:\n      return state;\n  }\n}\n..."}});