(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"title":"CEO","firstName":"Kevin","lastName":"Currier","location":"Austin, TX"},{"id":2,"title":"Construction Project Manager","firstName":"Jeff","lastName":"Judd","location":"Austin, TX"},{"id":3,"title":"CEO Emeritus","firstName":"Robert","lastName":"Currier","location":"Alpena, MI"},{"id":4,"title":"IT Specialist","firstName":"Corey","lastName":"Spratlan","location":"Austin, TX"},{"id":5,"title":"Business Operations","firstName":"Sarah","lastName":"Bartholomew","location":"Austin, TX"},{"id":6,"title":"Business Associate","firstName":"Kim","lastName":"Aleman","location":"Round Rock, TX"},{"id":7,"title":"Business Associate","firstName":"Ross","lastName":"Aleman","location":"Round Rock, TX"},{"id":8,"title":"Business Associate","firstName":"Zach","lastName":"Aleman","location":"Round Rock, TX"},{"id":9,"title":"Business Associate","firstName":"Liz","lastName":"Aleman","location":"Round Rock, TX"},{"id":10,"title":"Security","firstName":"Cliff","lastName":"Spratlan","location":"Austin, TX"},{"id":11,"title":"Security","firstName":"Cliffy","lastName":"Spratlan","location":"Montgomery, TX"},{"id":12,"title":"Visibility Team","firstName":"Linda","lastName":"Currier","location":"Alpena, MI"},{"id":13,"title":"Visibility Team","firstName":"Nancy","lastName":"Spratlan","location":"Austin, TX"},{"id":14,"title":"Visibility Team","firstName":"Misty","lastName":"Spratlan","location":"Mongomery, TX"}]')},,,,,,,function(e,a,t){e.exports=t(15)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(3),c=t.n(r),i=(t(13),t(4)),s=t(5),m=t(7),o=t(6);t(14);var d=function(e){return n.a.createElement("div",{className:"jumbotron text-center"},n.a.createElement("h1",{className:"display-4"},n.a.createElement("b",null,"EMPLOYEE DIRECTORY")),n.a.createElement("p",{className:"lead"}," "),n.a.createElement("hr",{className:"my-4"}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-3"}),n.a.createElement("div",{className:"col-md-6",align:"center"},n.a.createElement("input",{className:"form-control",name:"firstName",onChange:e.handleInputChange,type:"text",placeholder:"First Name"})),n.a.createElement("div",{className:"col-md-3"})),n.a.createElement("br",null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-3"}),n.a.createElement("div",{className:"col-md-6",align:"center"},n.a.createElement("input",{className:"form-control",name:"lastName",onChange:e.handleInputChange,type:"text",placeholder:"Last Name"})),n.a.createElement("div",{className:"col-md-3"})),n.a.createElement("br",null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-3"}),n.a.createElement("div",{className:"col-md-6",align:"center"},n.a.createElement("input",{className:"form-control",name:"title",onChange:e.handleInputChange,type:"text",placeholder:"Title"})),n.a.createElement("div",{className:"col-md-3"})),n.a.createElement("br",null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-3"}),n.a.createElement("div",{className:"col-md-6",align:"center"},n.a.createElement("input",{className:"form-control",name:"location",onChange:e.handleInputChange,type:"text",placeholder:"Location"})),n.a.createElement("div",{className:"col-md-3"})),n.a.createElement("br",null))};var u=function(e){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-3"}),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"card border-secondary  mb-3",style:{maxWidth:1e3}},n.a.createElement("div",{className:"card-header bg-dark text-white border-secondary text-center"},n.a.createElement("b",null,e.title)),n.a.createElement("div",{className:"card-body text-secondary"},n.a.createElement("h5",{className:"card-title text-black text-center"},n.a.createElement("b",null,e.firstName," ",e.lastName)),n.a.createElement("p",{className:"card-text"})),n.a.createElement("div",{className:"card-footer border-secondary text-black text-center"},n.a.createElement("b",null,e.location)))),n.a.createElement("div",{className:"col-md-3"}))},N=t(1),E=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(i.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={allEmployees:N,filteredEmployees:N},e.handleInputChange=function(a){var t=a.target,l=t.name,n=t.value,r=e.state.allEmployees.filter((function(e){return e[l].includes(n)}));e.setState({filteredEmployees:r})},e}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(d,{handleInputChange:this.handleInputChange}),this.state.filteredEmployees.map((function(e){return n.a.createElement(u,{employees:N,id:e.id,key:e.id,title:e.title,firstName:e.firstName,lastName:e.lastName,location:e.location})})))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.ae643e2a.chunk.js.map