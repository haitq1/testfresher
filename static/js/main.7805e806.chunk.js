(this.webpackJsonptestfresher=this.webpackJsonptestfresher||[]).push([[0],{66:function(e,a,t){e.exports=t(79)},71:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(9),o=t.n(l),i=(t(71),t(14)),s=t(15),u=t(18),c=t(17),d=t(125),m=t(122),p=t(124),f=t(118),h=t(109),v=t(126),E=t(123),b=t(127),g=t(13),F=["breakfast","lunch","dinner"],O=function(e){Object(u.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).handleChangeMeal=function(a){e.props.selectMeal(a.target.value),e.setState({meal:a.target.value})},e.handleChangePeople=function(a){e.props.selectPeople(a.target.value),e.setState({people:a.target.value})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(h.a,{fullWidth:!0,className:"mt-16",style:{width:"300px",marginLeft:"50px"}},r.a.createElement(v.a,null,r.a.createElement("span",null,"Please select a meal")),r.a.createElement(E.a,{defaultValue:this.props.meal?this.props.meal:"",onChange:function(a){return e.handleChangeMeal(a)}},F.map((function(e){return r.a.createElement(b.a,{key:e,value:e},e)})))),r.a.createElement(h.a,{fullWidth:!0,className:"mt-16",style:{width:"300px",marginLeft:"150px"}},r.a.createElement(v.a,null,r.a.createElement("span",null,"Please select number of people")),r.a.createElement(E.a,{defaultValue:this.props.people?this.props.people:"",onChange:function(a){return e.handleChangePeople(a)}},function(){for(var e=[],a=1;a<=10;a++)e.push(r.a.createElement(b.a,{key:a,value:a},a));return e}())))}}]),t}(n.Component),y=Object(g.b)((function(e){return{people:e.orderFood.people,meal:e.orderFood.meal}}),(function(e,a){return{selectMeal:function(a){e(function(e){return{type:"SELECT_MEAL",meal:e}}(a))},selectPeople:function(a){e(function(e){return{type:"SELECT_PEOPLE",people:e}}(a))}}}))(O),M={dishes:[{id:1,name:"Chicken Burger",restaurant:"Mc Donalds",availableMeals:["lunch","dinner"]},{id:2,name:"Ham Burger",restaurant:"Mc Donalds",availableMeals:["lunch","dinner"]},{id:3,name:"Cheese Burger",restaurant:"Mc Donalds",availableMeals:["lunch","dinner"]},{id:4,name:"Fries",restaurant:"Mc Donalds",availableMeals:["lunch","dinner"]},{id:5,name:"Egg Muffin",restaurant:"Mc Donalds",availableMeals:["breakfast"]},{id:6,name:"Burrito",restaurant:"Taco Bell",availableMeals:["lunch","dinner"]},{id:7,name:"Tacos",restaurant:"Taco Bell",availableMeals:["lunch","dinner"]},{id:8,name:"Quesadilla",restaurant:"Taco Bell",availableMeals:["lunch","dinner"]},{id:9,name:"Steak",restaurant:"BBQ Hut",availableMeals:["dinner"]},{id:10,name:"Yakitori",restaurant:"BBQ Hut",availableMeals:["dinner"]},{id:11,name:"Nankotsu",restaurant:"BBQ Hut",availableMeals:["dinner"]},{id:12,name:"Piman",restaurant:"BBQ Hut",availableMeals:["dinner"]},{id:13,name:"Vegan Bento",restaurant:"Vege Deli",availableMeals:["lunch"]},{id:14,name:"Coleslaw Sandwich",restaurant:"Vege Deli",availableMeals:["breakfast"]},{id:15,name:"Grilled Sandwich",restaurant:"Vege Deli",availableMeals:["breakfast"]},{id:16,name:"Veg. Salad",restaurant:"Vege Deli",availableMeals:["lunch","dinner"]},{id:17,name:"Fruit Salad",restaurant:"Vege Deli",availableMeals:["lunch","dinner"]},{id:18,name:"Corn Soup",restaurant:"Vege Deli",availableMeals:["lunch","dinner"]},{id:19,name:"Tomato Soup",restaurant:"Vege Deli",availableMeals:["lunch","dinner"]},{id:20,name:"Minestrone Soup",restaurant:"Vege Deli",availableMeals:["lunch","dinner"]},{id:21,name:"Pepperoni Pizza",restaurant:"Pizzeria",availableMeals:["lunch","dinner"]},{id:22,name:"Pepperoni Pizza",restaurant:"Pizzeria",availableMeals:["lunch","dinner"]},{id:23,name:"Hawaiian Pizza",restaurant:"Pizzeria",availableMeals:["lunch","dinner"]},{id:24,name:"Seafood Pizza",restaurant:"Pizzeria",availableMeals:["lunch","dinner"]},{id:25,name:"Deep Dish Pizza",restaurant:"Pizzeria",availableMeals:["dinner"]},{id:26,name:"Chow Mein",restaurant:"Panda Express",availableMeals:["lunch","dinner"]},{id:27,name:"Mapo Tofu",restaurant:"Panda Express",availableMeals:["lunch","dinner"]},{id:28,name:"Kung Pao",restaurant:"Panda Express",availableMeals:["lunch","dinner"]},{id:29,name:"Wontons",restaurant:"Panda Express",availableMeals:["lunch","dinner"]},{id:30,name:"Garlic Bread",restaurant:"Olive Garden",availableMeals:["breakfast","lunch","dinner"]},{id:31,name:"Ravioli",restaurant:"Olive Garden",availableMeals:["lunch","dinner"]},{id:32,name:"Rigatoni Spaghetti",restaurant:"Olive Garden",availableMeals:["lunch","dinner"]},{id:33,name:"Fettucine Pasta",restaurant:"Olive Garden",availableMeals:["lunch","dinner"]}]},S=function(e){Object(u.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).handleChangeRestaurant=function(a){e.props.selectRestaurant(a.target.value),e.setState({restaurant:a.target.value})},e}return Object(s.a)(t,[{key:"getListRestaurant",value:function(){var e=[];return this.getListRestaurantByMeal().map((function(a){-1===e.indexOf(a.restaurant)&&e.push(a.restaurant)})),e}},{key:"getListRestaurantByMeal",value:function(){var e=this,a=[];return M.dishes.map((function(t){-1!==t.availableMeals.indexOf(e.props.meal)&&a.push(t)})),a}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{fullWidth:!0,className:"mt-16",style:{width:"300px",marginLeft:"150px"}},r.a.createElement(v.a,null,r.a.createElement("span",null,"Please select a restaurant")),r.a.createElement(E.a,{defaultValue:this.props.restaurant?this.props.restaurant:"",onChange:function(a){return e.handleChangeRestaurant(a)}},this.getListRestaurant().map((function(e){return r.a.createElement(b.a,{key:e,value:e},e)}))))}}]),t}(n.Component),k=Object(g.b)((function(e){return{people:e.orderFood.people,meal:e.orderFood.meal,restaurant:e.orderFood.restaurant}}),(function(e){return{selectRestaurant:function(a){e(function(e){return{type:"SELECT_RESTAURANT",restaurant:e}}(a))}}}))(S),C=t(114),L=t(115),j=t(116),w=t(117),D=t(119),P=t(120),x=t(121),T=t(56),R=function(e){Object(u.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=a.call.apply(a,[this].concat(l))).state={foods:[],listFoods:[]},e.handleChangeFood=function(a){e.setState({selectedFood:a.target.value})},e.handleChangeCountFood=function(a){e.setState({selectedFoodCount:a.target.value})},e.addFood=function(){var a=e.state,t=a.selectedFood,n=a.selectedFoodCount,r=e.state.foods;if(n&&t){e.props.selectFood(t,n),null==r&&(r=[]);var l={};l.name=t,l.count=n,r.push(l);var o=e.state.listFoods.filter((function(a){return a!==e.state.selectedFood}));e.setState({foods:r,listFoods:o,selectedFood:null})}else alert("You have not entered the information")},e.onDelete=function(a){e.props.deleteFood(a);var t=e.state.foods,n=e.findFood(t,a.name);t.splice(n,1);var r=e.getListFood();e.props.foods.map((function(e){r=r.filter((function(a){return a!==e.name}))})),e.setState({foods:t,listFoods:r})},e.findFood=function(e,a){var t=-1;return e.forEach((function(e,n){e.name===a&&(t=n)})),t},e.renderFoods=function(a){var t=null;return a.length>0&&(t=a.map((function(a,t){return r.a.createElement(C.a,{key:t},r.a.createElement(L.a,null,a.name),r.a.createElement(L.a,null,a.count),r.a.createElement(L.a,null,r.a.createElement(j.a,{onClick:function(){return e.onDelete(a)}},r.a.createElement(w.a,{color:"error"},"x"))))}))),t},e}return Object(s.a)(t,[{key:"getListFoodByRestaurant",value:function(){var e=this,a=[];return M.dishes.map((function(t){t.restaurant===e.props.restaurant&&a.push(t)})),a}},{key:"getListFood",value:function(){var e=this,a=[];return this.getListFoodByRestaurant().map((function(t){-1!==t.availableMeals.indexOf(e.props.meal)&&a.push(t.name)})),a}},{key:"componentWillMount",value:function(){var e=this.getListFood();this.props.foods?(this.props.foods.map((function(a){e=e.filter((function(e){return e!==a.name}))})),this.setState({foods:this.props.foods,listFoods:e})):this.setState({listFoods:e})}},{key:"componentWillReceiveProps",value:function(e){console.log(e.foods)}},{key:"render",value:function(){var e=this,a=this.state.foods?this.state.foods:[];return r.a.createElement("div",null,r.a.createElement(h.a,{fullWidth:!0,className:"mt-16",style:{width:"300px",marginLeft:"150px"}},r.a.createElement(v.a,null,r.a.createElement("span",null,"Please select a restaurant")),r.a.createElement(E.a,{onChange:function(a){return e.handleChangeFood(a)}},this.state.listFoods.map((function(e){return r.a.createElement(b.a,{key:e,value:e},e)})))),r.a.createElement(h.a,{fullWidth:!0,className:"mt-16",style:{width:"300px",marginLeft:"150px"}},r.a.createElement(v.a,null,r.a.createElement("span",null,"Please enter number of people")),r.a.createElement(E.a,{onChange:function(a){return e.handleChangeCountFood(a)}},function(){for(var e=[],a=1;a<=10;a++)e.push(r.a.createElement(b.a,{key:a,value:a},a));return e}())),r.a.createElement(f.a,{variant:"contained",onClick:this.addFood,color:"primary",style:{marginTop:"10px",marginLeft:"50px"}},r.a.createElement(T.a,null)),r.a.createElement(D.a,{className:"crud-table",style:{whiteSpace:"pre",width:"300px",marginLeft:"40%",marginTop:"30px"}},r.a.createElement(P.a,null,r.a.createElement(C.a,null,r.a.createElement(L.a,null,"Food"),r.a.createElement(L.a,null,"Amount"),r.a.createElement(L.a,null))),r.a.createElement(x.a,null,this.renderFoods(a))))}}]),t}(n.Component),B=Object(g.b)((function(e){return{people:e.orderFood.people,meal:e.orderFood.meal,restaurant:e.orderFood.restaurant,foods:e.orderFood.foods}}),(function(e){return{selectFood:function(a,t){e(function(e,a){var t={};return t.name=e,t.count=a,{type:"SELECT_FOOD",food:t}}(a,t))},deleteFood:function(a){e(function(e){return{type:"DELETE_FOOD",food:e}}(a))}}}))(R),_=(t(77),function(e){Object(u.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=a.call.apply(a,[this].concat(l))).renderFoods=function(e){var a=null;return e.length>0&&(a=e.map((function(e,a){return r.a.createElement(C.a,{key:a},r.a.createElement(L.a,null,e.name),r.a.createElement(L.a,null,e.count))}))),a},e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"review"},r.a.createElement("h3",null,"Information"),r.a.createElement("p",null,"========================================================="),r.a.createElement("p",null,r.a.createElement("b",null,"Meal:")," ",this.props.meal," \xa0\xa0\xa0\xa0\xa0",r.a.createElement("b",null,"People:")," ",this.props.people," \xa0\xa0\xa0\xa0\xa0",r.a.createElement("b",null,"Restaurant:")," ",this.props.restaurant)," ","\xa0\xa0\xa0\xa0\xa0",r.a.createElement("p",null," ",r.a.createElement("b",null,"Dishes:")),r.a.createElement(D.a,{className:"crud-table",style:{whiteSpace:"pre",width:"300px",marginLeft:"520px",alignItems:"center",paddingLeft:"100px"}},r.a.createElement(P.a,null,r.a.createElement(C.a,null,r.a.createElement(L.a,null,"Food"),r.a.createElement(L.a,null,"Amount"))),r.a.createElement(x.a,null,this.renderFoods(this.props.foods))),r.a.createElement("p",null,"============================"),r.a.createElement("h5",null,"Thank you for your order !"))}}]),t}(n.Component)),z=Object(g.b)((function(e){return{people:e.orderFood.people,meal:e.orderFood.meal,restaurant:e.orderFood.restaurant,foods:e.orderFood.foods}}),(function(e){return{}}))(_),V=(t(78),t(45)),N=["Step 1","Step 2","Step 3","Review"],A=function(e){Object(u.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).handleBack=function(){var e=n.state.activeStep-1;n.setState({activeStep:e})},n.handleNext=function(){if(1===n.checkData()){var e=n.state.activeStep+1;n.setState({activeStep:e})}else(0===n.checkData()||2===n.checkData())&&alert("You have not entered the information")},n.handleReset=function(){n.props.resetValue(),n.setState({activeStep:0})},n.checkData=function(){var e=n.state.activeStep,a=n.props,t=a.people,r=a.meal,l=a.restaurant,o=a.foods,i=1;if(0===e)i=t&&r?1:0;else if(1===e)i=l?1:0;else if(2===e)if(o){var s=null;o.map((function(e){s+=e.count})),i=s<t?2:1}else i=0;return i},n.state={activeStep:0},n}return Object(s.a)(t,[{key:"checkStep",value:function(){switch(this.state.activeStep){case 0:return r.a.createElement(y,null);case 1:return r.a.createElement(k,null);case 2:return r.a.createElement(B,null);case 3:return r.a.createElement(z,null)}}},{key:"render",value:function(){var e=this.state.activeStep;return r.a.createElement("div",{className:"App",class:"h2"},r.a.createElement("header",null,r.a.createElement("h1",{class:"h1"},"MY ORDER")),r.a.createElement(d.a,{activeStep:e,alternativeLabel:!0},N.map((function(e){return r.a.createElement(m.a,{key:e},r.a.createElement(p.a,null,e))}))),this.checkStep(),r.a.createElement("div",{style:{marginTop:"30px"}},e===N.length?r.a.createElement("div",null,r.a.createElement(f.a,{variant:"contained",onClick:this.handleReset,color:"default",style:{marginLeft:"50px"}},"Reset")):r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(f.a,{disabled:0===e,onClick:this.handleBack,style:{marginLeft:"50px",float:"left"},variant:"contained",color:"primary"},r.a.createElement(V.a,null)),r.a.createElement(f.a,{disabled:this.state.isDisable,variant:"contained",color:"primary",onClick:this.handleNext,style:{float:"right",marginRight:"50px"}},e===N.length-1?r.a.createElement(V.c,null):r.a.createElement(V.b,null))))))}}]),t}(n.Component),W=Object(g.b)((function(e){return{people:e.orderFood.people,meal:e.orderFood.meal,restaurant:e.orderFood.restaurant,foods:e.orderFood.foods}}),(function(e){return{resetValue:function(){e({type:"RESET_VALUE"})}}}))(A);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=t(24),H=t(31),U={},I=function(e,a){var t=-1;return e.forEach((function(e,n){e.name===a&&(t=n)})),t},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SELECT_MEAL":return e.meal=a.meal,e.restaurant="",e.foods=null,Object(H.a)({},e);case"SELECT_PEOPLE":return e.people=a.people,e.foods=null,Object(H.a)({},e);case"SELECT_RESTAURANT":return e.restaurant=a.restaurant,e.foods=null,Object(H.a)({},e);case"SELECT_FOOD":var t=e.foods;return null==t&&(t=[]),t.push(a.food),e.foods=t,Object(H.a)({},e);case"RESET_VALUE":return e={},Object(H.a)({},e);case"DELETE_FOOD":var n=I(e.foods,a.food.name);return console.log(n),e.foods.splice(n,1),Object(H.a)({},e);default:return e}},X=Object(G.c)({orderFood:Q}),Y=t(57),J=Object(G.e)(X,Object(G.d)(Object(G.a)(Y.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));o.a.render(r.a.createElement(g.a,{store:J},r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.7805e806.chunk.js.map