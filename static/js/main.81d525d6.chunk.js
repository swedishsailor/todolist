(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{33:function(t,e,n){},34:function(t,e,n){},53:function(t,e,n){},59:function(t,e,n){},60:function(t,e,n){},61:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var s=n(3),a=n.n(s),i=n(28),c=n.n(i),o=(n(33),n(6)),l=n(7),r=n(14),d=n(9),u=n(8),h=(n(34),n(18)),g=n(5),j=n(2),p=n.n(j),m=(n(53),n(10)),f=n(11),b=n(0),O="http://localhost:8000/",L=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).addTask=function(){p.a.get("".concat(O,"to-do-lists/")).then((function(t){s.setState({newList:t.data[s.props.index-1]})})).then((function(t){s.setState({newTask:Object(g.a)(Object(g.a)({},s.state.newTask),{},{id:s.state.newList.task.length+1})}),s.state.newList.task.push(s.state.newTask)})).then((function(){p.a.put("".concat(O,"to-do-lists/").concat(s.props.index),Object(g.a)(Object(g.a)({},s.state.newList),{},{task:Object(h.a)(s.state.newList.task)})).then((function(){s.componentDidMount()}))}))},s.saveChanges=function(){p.a.get("".concat(O,"to-do-lists/")).then((function(t){s.setState({newList:t.data[s.props.index-1]})})).then((function(){""!==s.state.changeTaskName&&""!==s.state.changeTaskId&&(s.state.newList.task[s.state.changeTaskId-1].name=s.state.changeTaskName),""!==s.state.changeListName&&(s.state.newList.name=s.state.changeListName)})).then((function(){p.a.put("".concat(O,"to-do-lists/").concat(s.props.index),Object(g.a)(Object(g.a)({},s.state.newList),{},{task:Object(h.a)(s.state.newList.task)})).then((function(){s.componentDidMount()}))}))},s.deleteTask=function(t){p.a.get("".concat(O,"to-do-lists/")).then((function(t){s.setState({newList:t.data[s.props.index-1]})})).then((function(){console.log("xd: "+t.target.id),p.a.put("".concat(O,"to-do-lists/").concat(s.props.index),s.state.newList).then((function(){s.componentDidMount(),s.render()}))}))},s.toggleListView=function(){s.props.toggleListView()},s.deleteList=function(){s.props.deleteList()},s.state={lists:[],index:0,changeListName:"",newList:{},newTask:{id:5,name:"",isDone:!1},changeTaskName:"",changeTaskId:""},s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;p.a.get("".concat(O,"to-do-lists/"),{headers:{Authorization:"Bearer siema"}}).then((function(e){t.setState({lists:e.data})}))}},{key:"render",value:function(){var t=this,e=this.state.lists;return Object(b.jsxs)("div",{className:"listView",children:[e.length?e.filter((function(e){return e.id===t.props.index})).map((function(e){return Object(b.jsx)("span",{className:"listSection",children:Object(b.jsx)("input",{type:"text",placeholder:"List name",defaultValue:e.name,onChange:function(e){return t.setState({changeListName:e.target.value})},className:"listName"})})})):"",e.length?e.filter((function(e){return e.id===t.props.index})).map((function(e){return Object(b.jsx)("div",{className:"tasks",children:e.task.map((function(n){return Object(b.jsxs)("form",{className:"tasksForm",children:[Object(b.jsx)("input",{type:"checkbox",className:"checkBox"}),Object(b.jsx)("input",{type:"text",placeholder:"Task name",className:"taskNameInput",id:n.id,onChange:function(e){return t.setState({changeTaskName:e.target.value})},onClick:function(e){return t.setState({changeTaskId:e.target.id})},defaultValue:n.name},e.id),Object(b.jsx)("span",{className:"checkmark"}),Object(b.jsx)("span",{className:"coverSpan",children:Object(b.jsx)(m.a,{icon:f.f,className:"deleteTask",id:n.id-1,onClick:t.deleteTask})})]},e.key)}))},e.key)})):"",Object(b.jsx)("button",{className:"addBtn",type:"submit",onClick:this.addTask,children:" ADD TASK "}),Object(b.jsx)("button",{className:"cancelAddBtn",onClick:this.deleteList,children:" DELETE LIST "}),Object(b.jsx)("a",{className:"cancelBtn",onClick:this.toggleListView,children:"CANCEL"}),Object(b.jsx)("button",{className:"saveBtn",type:"submit",onClick:this.saveChanges,children:"SAVE"})]})}}]),n}(a.a.Component),x=n(12),w=(n(59),p.a.create({baseURL:"http://localhost:8000",headers:{Authorization:"Bearer ".concat("siema")}})),k=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).toggle=function(){s.props.toggle()},s.logged=function(){s.postLogin(),s.props.logged()},s.changeHandler=function(t){s.setState(Object(x.a)({},t.target.name,t.target.value))},s.state={identifier:"",password:""},s}return Object(l.a)(n,[{key:"postLogin",value:function(){var t=w.post("/login",this.state).then((function(e){console.log(e),console.log(t)})).catch((function(t){console.log(t),console.log(":(")}))}},{key:"render",value:function(){var t=this.state,e=t.identifier,n=t.password;return Object(b.jsx)("div",{className:"Login",ref:this.props.containerRef,children:Object(b.jsxs)("div",{className:"window",children:[Object(b.jsx)("h1",{className:"loginHeader",children:"Login"}),Object(b.jsx)("input",{className:"username",name:"identifier",placeholder:"E-mail or Username",value:e,onChange:this.changeHandler}),Object(b.jsx)("input",{type:"password",className:"password",name:"password",placeholder:"Password",value:n,onChange:this.changeHandler}),Object(b.jsx)("button",{className:"loginBtn",onClick:this.logged,children:"Login"}),Object(b.jsx)("p",{className:"smallOr",children:" or "}),Object(b.jsx)("a",{className:"createAccount",ref:this.props.containerRef,onClick:this.toggle,children:" create an account "})]})})}}]),n}(a.a.Component),v=(n(60),p.a.create({baseURL:"http://localhost:8000",headers:{Authorization:"Bearer ".concat("siema")}})),N=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).toggle=function(){s.props.toggle()},s.changeHandler=function(t){s.setState(Object(x.a)({},t.target.name,t.target.value))},s.submitHandler=function(t){t.preventDefault(),console.log(s.state);var e=v.post("/register",s.state).then((function(t){console.log(t),console.log(e)})).catch((function(t){console.log(t)}))},s.state={username:"",email:"",password:""},s}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.username,n=t.email,s=t.password,a=t.check;return Object(b.jsxs)("div",{className:"register",ref:this.props.containerRef,children:[Object(b.jsx)(m.a,{icon:f.b,onClick:this.toggle,className:"back"}),Object(b.jsx)("h1",{className:"registerHeader",children:" Create a new account "}),Object(b.jsxs)("form",{onSubmit:this.submitHandler,children:[Object(b.jsx)("input",{type:"text",placeholder:"Username",name:"username",className:"inputs",value:e,onChange:this.changeHandler}),Object(b.jsx)("input",{type:"email",placeholder:"E-mail",name:"email",className:"inputs",value:n,onChange:this.changeHandler}),Object(b.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"inputs",value:s,onChange:this.changeHandler}),Object(b.jsx)("input",{type:"password",placeholder:"Repeat password",name:"password",className:"inputs",value:a,onChange:this.changeHandler}),Object(b.jsx)("button",{type:"submit",className:"createBtn",children:" Create "})]})]})}}]),n}(a.a.Component),C=(n(61),"http://localhost:8000/"),S=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).logged=function(){s.props.logged()},s.getKeyOfList=function(t){void 0!==t&&s.setState({indexOfList:t.target.getAttribute("index")})},s.toggleListView=function(){!1===s.state.viewList?s.setState({viewList:!0}):s.setState({viewList:!1})},s.listItemOnClick=function(){s.getKeyOfList(),s.toggleListView()},s.filterBySearch=function(){},s.addList=function(){p.a.get("".concat(C,"to-do-lists/")).then((function(t){s.setState({lists:t.data})})).then((function(){s.setState({newList:Object(g.a)(Object(g.a)({},s.state.newList),{},{id:s.state.lists.length+1})})})).then((function(){p.a.post("".concat(C,"to-do-lists/"),Object(g.a)({},s.state.newList))}))},s.deleteList=function(t){p.a.get("".concat(C,"to-do-lists/")).then((function(t){s.setState({placeholderList:t.data[s.props.index-1]})})).then((function(){p.a.delete("".concat(C,"to-do-lists/").concat(s.state.indexOfList)).then((function(){s.componentDidMount()})),s.setState({viewList:!1})}))},s.state={lists:[],viewList:!1,indexOfList:0,renderToDo:!1,dataFromChild:"",newList:{id:"",name:"I'm nameless list :(",task:[]},searchingPhrase:"",placeholderList:{}},s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;p.a.get("".concat(C,"to-do-lists/"),{headers:{Authorization:"Bearer siema"}}).then((function(e){t.setState({lists:e.data})})).catch((function(t){}))}},{key:"componentDidUpdate",value:function(){this.componentDidMount()}},{key:"render",value:function(){var t=this,e=this.state,n=e.lists,s=e.viewList,a=e.indexOfList,i=e.renderToDo;return Object(b.jsxs)("div",{className:"toDo",children:[Object(b.jsx)(m.a,{icon:f.d,className:"logOut",onClick:this.logged}),Object(b.jsx)("input",{placeholder:"Search for lists!",className:"searchInput",onChange:function(e){return t.setState({searchingPhrase:e.target.value.toLowerCase()})}}),Object(b.jsx)("div",{className:"mainBody",children:Object(b.jsxs)("div",{className:"lists",children:[n.filter((function(e){return""===t.state.searchingPhrase||e.name.toLowerCase().includes(t.state.searchingPhrase.toLowerCase())?e.name:void 0})).map((function(e,n){return Object(b.jsxs)("span",{className:"pinSpan",children:[Object(b.jsx)(m.a,{icon:f.e,className:"pinIcon"}),Object(b.jsxs)("div",{className:"list",onClick:t.listItemOnClick,onClickCapture:function(){return t.setState({indexOfList:e.id})},index:e.id,children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsx)("p",{children:" created today"}),Object(b.jsxs)("span",{className:"tasksDone",children:[Object(b.jsxs)("p",{children:[" Tasks: ",e.task.length]}),Object(b.jsx)(m.a,{icon:f.a,className:"doneIcon"}),Object(b.jsxs)("p",{children:["/",e.task.length," all"]})]})]},e.id),Object(b.jsx)(m.a,{icon:f.e,className:"pinIcon"})]})})),s&&Object(b.jsx)(L,{toggleListView:this.toggleListView,index:a,renderToDo:i,deleteList:this.deleteList})]})}),Object(b.jsxs)("span",{className:"addNewList",children:[Object(b.jsx)(m.a,{icon:f.c,className:"plusList",onClick:this.addList}),Object(b.jsx)("p",{className:"plusListDescription",children:" add new list "})]})]})}}]),n}(a.a.Component),y=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).toggleLoginAndRegister=function(){!0===s.state.loginView?s.setState({loginView:!1}):s.setState({loginView:!0})},s.logIn=function(){!1===s.state.loggedIn?s.setState({loggedIn:!0}):s.setState({loggedIn:!1})},s.state={loginView:!0,loggedIn:!1,viewList:!1},s.toggleLoginAndRegister=s.toggleLoginAndRegister.bind(Object(r.a)(s)),s}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.loginView,n=t.loggedIn;t.viewList;return Object(b.jsxs)("div",{className:"App",children:[e&&!n&&Object(b.jsx)(k,{toggle:this.toggleLoginAndRegister,logged:this.logIn}),!e&&!n&&Object(b.jsx)(N,{toggle:this.toggleLoginAndRegister}),n&&Object(b.jsx)(S,{logged:this.logIn,toggleListView:this.toggleListView,viewList:this.viewList})]})}}]),n}(a.a.Component),T=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),s(t),a(t),i(t),c(t)}))};c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),T()}},[[62,1,2]]]);
//# sourceMappingURL=main.81d525d6.chunk.js.map