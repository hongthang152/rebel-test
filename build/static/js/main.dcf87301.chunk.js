(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,a){e.exports=a(75)},47:function(e,t,a){},48:function(e,t,a){},53:function(e,t,a){},60:function(e,t){},62:function(e,t){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(39),s=a.n(o),c=(a(47),a(3)),l=a(4),i=a(8),u=a(5),d=a(7),p=(a(48),a(19)),f=a(12),b=a(6),y=(a(53),a(20)),h="NOTIFY_ADD_ITEM",v="RESET_STORE",m="RESET_ADD_BUTTON_CLICKED",E="ADD_KEY_VALUE",O="NOTIFY_DELETE_ITEM",j="RESET_DELETE_BUTTON_CLICKED",C="REMOVE_KEY_VALUE",k="RESET_CLEAR_BUTTON",S="SORT_KEYS",g="SORT_VALUES",A=a(30),w=a.n(A),D={data:{}};var B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object.assign({},e,{addButtonClicked:!0});case m:return Object.assign({},e,{addButtonClicked:!1});case v:return Object.assign({},D,{clearButtonClicked:!0});case k:return Object.assign({},e,{clearButtonClicked:!1});case E:return Object.assign({},e,{data:Object(f.a)({},e.data,t.payload)});case O:return Object.assign({},e,{deleteButtonClicked:!0});case j:return Object.assign({},e,{deleteButtonClicked:!1});case C:return delete e.data[t.payload],Object.assign({},e,{data:e.data});case S:var a={};return"asc"===t.payload?Object.keys(e.data).sort().forEach(function(t){a[t]=e.data[t]}):"desc"===t.payload&&Object.keys(e.data).sort().reverse().forEach(function(t){a[t]=e.data[t]}),Object.assign({},e,{data:a});case g:return"asc"===t.payload?a=w()(e.data):"desc"===t.payload&&(a=w()(e.data,"desc")),Object.assign({},e,{data:a});default:return e}},I=Object(y.b)(B);function K(){return{type:j}}function V(e){return{type:C,payload:e}}var x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={previousSelect:a.refs["input-row-0"]},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleSelect",value:function(e){if(this.state.previousSelect){var t=this.refs[this.state.previousSelect];t.style.backgroundColor="white",t.style.color="black"}e.target.style.backgroundColor="#1818C6",e.target.style.color="white",this.setState(Object(f.a)({},this.state,{previousSelect:e.target.getAttribute("id")}))}},{key:"render",value:function(){var e=this;I.subscribe(function(){var t=e.refs[e.state.previousSelect]?e.refs[e.state.previousSelect].textContent:"",a=(t=t.replace(/\s*=/,"=").replace(/=\s*/,"=")).split("=");if(I.getState().addButtonClicked){if(e.props.resetAddButtonClicked(),/[^a-zA-Z0-9]/.test(a[0])||/[^a-zA-Z0-9]/.test(a[1]))return void alert("Invalid input. Only alpha numeric characters are accepted");e.props.addKeyValue(Object(p.a)({},a[0],a[1]))}else if(I.getState().deleteButtonClicked&&e.refs[e.state.previousSelect].textContent)e.refs[e.state.previousSelect].textContent="";else if(I.getState().clearButtonClicked){e.props.resetClearButtonClicked();for(var n=0;n<15;n++)e.refs["input-row-"+n].textContent=""}});for(var t=[],a=0;a<15;a++){var n="input-row-"+a;t.push(r.a.createElement("tr",null,r.a.createElement("td",{contenteditable:"true",class:"input-row",id:n,ref:n,onClick:this.handleSelect.bind(this)})))}return r.a.createElement("table",{class:"column1",border:"1"},r.a.createElement("tbody",null,t))}}]),t}(r.a.Component),T=Object(b.b)(null,function(e){return{resetAddButtonClicked:function(){return e({type:m})},resetDeleteButtonClicked:function(){return e(K())},addKeyValue:function(t){return e(function(e){return{type:E,payload:e}}(t))},removeKeyValue:function(t){return e(V(t))},resetClearButtonClicked:function(){return e({type:k})}}})(x),_=a(1),L=a(41),R=a.n(L);a(73);var M=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).notifyAddItem=e.notifyAddItem.bind(Object(_.a)(Object(_.a)(e))),e.notifyDeleteItem=e.notifyDeleteItem.bind(Object(_.a)(Object(_.a)(e))),e.clear=e.clear.bind(Object(_.a)(Object(_.a)(e))),e.exportXML=e.exportXML.bind(Object(_.a)(Object(_.a)(e))),e.sortKeys=e.sortKeys.bind(Object(_.a)(Object(_.a)(e))),e.sortValues=e.sortValues.bind(Object(_.a)(Object(_.a)(e))),e.state={isKeyAsc:!0,isValueAsc:!0},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"notifyAddItem",value:function(e){e.preventDefault(),this.props.notifyAddItem()}},{key:"notifyDeleteItem",value:function(e){e.preventDefault(),this.props.notifyDeleteItem()}},{key:"clear",value:function(e){e.preventDefault(),this.props.resetStore()}},{key:"exportXML",value:function(e){if(I.getState().data){var t=R.a.js2xml(I.getState().data,{compact:!0,ignoreComment:!0,spaces:4});this.refs.export.setAttribute("href","data:text/plain,"+encodeURIComponent(t)),this.refs.export.setAttribute("download","result.xml"),this.refs.export.click()}}},{key:"sortKeys",value:function(e){e.preventDefault(),this.state.isKeyAsc?(this.props.sortKeys("asc"),this.setState({isKeyAsc:!1})):(this.props.sortKeys("desc"),this.setState({isKeyAsc:!0}))}},{key:"sortValues",value:function(e){e.preventDefault(),this.state.isValueAsc?(this.props.sortValues("asc"),this.setState({isValueAsc:!1})):(this.props.sortValues("desc"),this.setState({isValueAsc:!0}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{class:"button",onClick:this.notifyAddItem},"Add"),r.a.createElement("br",null),r.a.createElement("button",{class:"button",onClick:this.notifyDeleteItem},"Remove Selected"),r.a.createElement("br",null),r.a.createElement("button",{class:"button",onClick:this.clear},"Clear"),r.a.createElement("br",null),r.a.createElement("button",{class:"button",onClick:this.exportXML},"Export to XML"),r.a.createElement("br",null),r.a.createElement("button",{class:"button",onClick:this.sortKeys},"Sort by Name"),r.a.createElement("br",null),r.a.createElement("button",{class:"button",onClick:this.sortValues},"Sort by Value"),r.a.createElement("a",{ref:"export",id:"download"}))}}]),t}(r.a.Component),N=Object(b.b)(null,function(e){return{notifyAddItem:function(){return e({type:h,payload:t});var t},notifyDeleteItem:function(){return e({type:O})},resetStore:function(){return e({type:v})},sortKeys:function(t){return e(function(e){return{type:S,payload:e}}(t))},sortValues:function(t){return e(function(e){return{type:g,payload:e}}(t))}}})(M);a(74);var U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={previousSelect:null},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleSelect",value:function(e){if(this.state.previousSelect){var t=this.refs[this.state.previousSelect];t.style.backgroundColor="white",t.style.color="black"}e.target.style.backgroundColor="#1818C6",e.target.style.color="white",this.setState(Object(f.a)({},this.state,{previousSelect:e.target.getAttribute("id")}))}},{key:"render",value:function(){var e=this;I.subscribe(function(){if(I.getState().deleteButtonClicked){e.props.resetDeleteButtonClicked();var t=e.refs[e.state.previousSelect]?e.refs[e.state.previousSelect].textContent.split("=")[0]:"";e.props.removeKeyValue(t)}for(var a=I.getState().data,n=0,r=0;r<15;r++)e.refs["output-row-"+r].textContent="";for(var o in a)e.refs["output-row-"+n].textContent=o+"="+a[o],n++});for(var t=[],a=0;a<15;a++){var n="output-row-"+a;t.push(r.a.createElement("tr",null,r.a.createElement("td",{class:"output-row",id:n,ref:n,onClick:this.handleSelect.bind(this)})))}return r.a.createElement("table",{class:"column3",border:"1"},r.a.createElement("tbody",null,t))}}]),t}(r.a.Component),X=Object(b.b)(null,function(e){return{removeKeyValue:function(t){return e(V(t))},resetDeleteButtonClicked:function(){return e(K())}}})(U),Y=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"column"},r.a.createElement(T,null)),r.a.createElement("div",{class:"column"},r.a.createElement(N,null)),r.a.createElement("div",{class:"column"},r.a.createElement(X,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(b.a,{store:I},r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,1,2]]]);
//# sourceMappingURL=main.dcf87301.chunk.js.map