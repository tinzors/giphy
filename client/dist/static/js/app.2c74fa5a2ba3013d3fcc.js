webpackJsonp([1],{"3ZCP":function(t,e){},"5p9o":function(t,e){},"88OA":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},a,!1,function(t){n("o8nZ")},null,null).exports,o=n("/ocq"),i=n("Dd8w"),l=n.n(i),c=n("NYxO"),u={data:function(){return{searchTerm:""}},created:function(){},methods:{search:function(){var t=this,e=this.searchTerm.replace(/ /g,"+"),n={searchTerm:e,infiniteScrolling:!1,offset:this.offset};this.$store.commit("SET_SEARCH_TERM",e),this.$store.commit("SET_IS_SCROLLING",!1),this.$store.dispatch("GET_GIPHIES",n).catch(function(e){t.$swal("Error","Sorry, but you need to implement proper error handling!","error")})},keyMonitor:function(t){"Enter"==t.key&&this.search()}},computed:l()({},Object(c.b)({offset:"offset"})),components:{}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row searchBar"},[n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search for a Giphy!"},domProps:{value:t.searchTerm},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.keyMonitor(e)},input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}}),t._v(" "),n("span",{staticClass:"input-group-btn"},[n("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.search()}}},[t._v("Search")])])])])])])},staticRenderFns:[]};var d=n("VU/8")(u,m,!1,function(t){n("mx6B")},null,null).exports,p={data:function(){return{isMouseOver:!1}},created:function(){},methods:{handleMouseOver:function(){this.isMouseOver=!0},handleMouseLeave:function(){this.isMouseOver=!1},setGiphyUrl:function(){this.$store.commit("SET_GIPHY_URL_TO_SEND",this.giphy)}},computed:l()({},Object(c.b)({})),components:{},props:["giphy"]},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"show-giphy-actions",on:{mouseover:this.handleMouseOver,mouseleave:this.handleMouseLeave}},[e("img",{attrs:{src:this.giphy,height:"400",width:"400"}}),this._v(" "),e("button",{staticClass:"btn btn-info btn-lg update",attrs:{type:"button","data-toggle":"modal","data-target":"#myModal"},on:{click:this.setGiphyUrl}},[e("span",{staticClass:"glyphicon glyphicon-envelope"})])])},staticRenderFns:[]};var h=n("VU/8")(p,f,!1,function(t){n("3ZCP")},null,null).exports,v={data:function(){return{}},created:function(){},methods:{},computed:l()({},Object(c.b)({})),components:{Giphy:h},props:["giphies"]},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",this._l(this.giphies,function(t){return e("div",[e("div",{staticClass:"col-md-4"},[e("Giphy",{attrs:{giphy:t}})],1)])}))},staticRenderFns:[]};var _=n("VU/8")(v,g,!1,function(t){n("dhGH")},null,null).exports,y={data:function(){return{emailOpts:{email:"",message:""}}},created:function(){},methods:{sendEmail:function(){var t=this;this.emailOpts.giphyUrlToSend=this.giphyUrlToSend,this.$store.dispatch("EMAIL_GIPHY",this.emailOpts).then(function(){t.$swal("Success","Email sent!","success").then(function(){$("#myModal").modal("hide")})}).catch(function(e){t.$swal("Error","Something went wrong, improve your error handling!","error")})}},computed:l()({},Object(c.b)({giphyUrlToSend:"giphyUrlToSend"})),components:{}},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal fade",attrs:{id:"myModal",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel"}},[n("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),n("div",{staticClass:"modal-body"},[n("div",{staticClass:"container col-md-offset-2"},[n("div",{staticClass:"col-md-4"},[n("form",[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[t._v("Email")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.emailOpts.email,expression:"emailOpts.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Enter your friend's email"},domProps:{value:t.emailOpts.email},on:{input:function(e){e.target.composing||t.$set(t.emailOpts,"email",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[t._v("Password")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.emailOpts.message,expression:"emailOpts.message"}],staticClass:"form-control",attrs:{type:"text",rows:"10",placeholder:"Enter a short message for your friend"},domProps:{value:t.emailOpts.message},on:{input:function(e){e.target.composing||t.$set(t.emailOpts,"message",e.target.value)}}})])])])])]),t._v(" "),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.sendEmail()}}},[t._v("Send")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])]),this._v(" "),e("h4",{staticClass:"modal-title",attrs:{id:"myModalLabel"}},[this._v("Share this Giphy with your friend!")])])}]};var E=n("VU/8")(y,S,!1,function(t){n("f/TE")},null,null).exports,b={data:function(){return{}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(t){var e=this;this.isScrolling=!0;var n=document.documentElement;if(n.scrollTop+window.innerHeight>=.9*n.offsetHeight){var r={searchTerm:this.searchTerm,infiniteScrolling:!0,offset:this.offset};this.$store.dispatch("GET_GIPHIES",r).catch(function(t){e.$swal("Error","Sorry, but you need to implement proper error handling!","error")})}}},computed:l()({},Object(c.b)({giphies:"giphies",searchTerm:"searchTerm",offset:"offset",isScrolling:"isScrolling"})),components:{SearchBar:d,GiphyCollection:_,EmailFriend:E}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"col-md-offset-4"},[e("SearchBar")],1),this._v(" "),e("div",[e("GiphyCollection",{attrs:{giphies:this.giphies}})],1),this._v(" "),e("EmailFriend")],1)},staticRenderFns:[]};var I=n("VU/8")(b,w,!1,function(t){n("5p9o")},null,null).exports,C={data:function(){return{user:{firstName:"",lastName:"",email:"",password:""}}},created:function(){},methods:{register:function(){var t=this;this.$store.dispatch("SIGN_UP",this.user).then(function(e){t.$swal("Success","Welcome!","success").then(function(){t.$router.push("/")})}).catch(function(e){t.$swal("Error","Sorry, but you need to implement proper error handling!","error")})}},computed:l()({},Object(c.b)({})),components:{}},T={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container col-md-offset-4 signup"},[n("div",{staticClass:"col-md-4"},[n("form",[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[t._v("First Name")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.firstName,expression:"user.firstName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter first name"},domProps:{value:t.user.firstName},on:{input:function(e){e.target.composing||t.$set(t.user,"firstName",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[t._v("Last Name")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.lastName,expression:"user.lastName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter last name"},domProps:{value:t.user.lastName},on:{input:function(e){e.target.composing||t.$set(t.user,"lastName",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[t._v("Email")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Enter email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[t._v("Password")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Enter password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),t._v(" "),n("p",[t._v("Already have an account? Login "),n("router-link",{attrs:{to:{name:"Login"}}},[t._v("here")]),t._v(".")],1),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){e.preventDefault(),t.register()}}},[t._v("Submit")])])])])])},staticRenderFns:[]};var G=n("VU/8")(C,T,!1,function(t){n("88OA")},null,null).exports,P={data:function(){return{user:{email:"",password:""}}},created:function(){},methods:{login:function(){var t=this;this.$store.dispatch("LOGIN",this.user).then(function(e){t.$swal("Success","Welcome!","success").then(function(){t.$router.push("/")})}).catch(function(e){t.$swal("Error","Sorry, but you need to implement proper error handling!","error")})}},computed:l()({},Object(c.b)({})),components:{}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container col-md-offset-4 login"},[n("div",{staticClass:"col-md-4"},[n("form",[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[t._v("Email")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Enter email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[t._v("Password")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Enter password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("p",[t._v("Don't have an account? Sign up "),n("router-link",{attrs:{to:{name:"Signup"}}},[t._v("here")]),t._v(".")],1)]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){e.preventDefault(),t.login()}}},[t._v("Login")])])])])])},staticRenderFns:[]};var O=n("VU/8")(P,x,!1,function(t){n("rpS2")},null,null).exports,N=n("//Fk"),H=n.n(N),k=n("Zrlr"),L=n.n(k),M=n("wxAW"),U=n.n(M),Y=n("mtWM"),R=n.n(Y),F=n("M4fF"),j=n.n(F),A=function(){function t(){L()(this,t)}return U()(t,null,[{key:"callInternal",value:function(t){var e=t.method,n=t.url,r=t.data,a=t.params,s=window.location.host;n="http://"+s+"/api/"+n;var o=void 0;return localStorage.getItem("x-access-token")&&(o={"x-access-token":localStorage.getItem("x-access-token")}),new H.a(function(t,s){R()({url:n,method:e,headers:o,data:r,params:a}).then(function(e){t(e)}).catch(function(t){s()})})}},{key:"callExternal",value:function(t){var e=t.method,n=t.url,r=t.data,a=t.params;return new H.a(function(t,s){R()({method:e,url:n,data:r,params:a}).then(function(e){t(e)}).catch(function(t){s(t)})})}}]),t}();r.a.use(o.a);var V=new o.a({routes:[{path:"/",name:"Home",component:I,beforeEnter:function(t,e,n){!function(t){A.callInternal({method:"post",url:"checkLoggedIn"}).then(function(e){t()}).catch(function(e){t("login")})}(n)}},{path:"/signup",name:"Signup",component:G,beforeEnter:function(t,e,n){n()}},{path:"/login",name:"Login",component:O,beforeEnter:function(t,e,n){n()}}]}),D={state:{user:null},mutations:{SET_USER:function(t,e){t.giphy=e}},getters:{user:function(t){return t.user}},actions:{SIGN_UP:function(t,e){t.commit;var n={url:"signup",method:"post",data:e};return A.callInternal(n).then(function(t){return localStorage.setItem("x-access-token",t.data["x-access-token"]),localStorage.setItem("GIPHY_KEY",t.data.GIPHY_KEY),localStorage.setItem("GIPHY_LIMIT",t.data.GIPHY_LIMIT),H.a.resolve()}).catch(function(t){return H.a.reject(new Error("failed"))})},LOGIN:function(t,e){t.commit;var n={url:"login",method:"post",data:e};return A.callInternal(n).then(function(t){return localStorage.setItem("x-access-token",t.data["x-access-token"]),localStorage.setItem("GIPHY_KEY",t.data.GIPHY_KEY),localStorage.setItem("GIPHY_LIMIT",t.data.GIPHY_LIMIT),H.a.resolve()}).catch(function(t){return H.a.reject(new Error("failed"))})}}},B={state:{giphy:null,giphies:[],searchTerm:null,offset:0,isScrolling:!1,giphyUrlToSend:null},mutations:{SET_GIPHY:function(t,e){t.giphy=e},SET_GIPHIES:function(t,e){var n=e.infiniteScrolling,r=e.giphies;n||(t.giphies=[],t.offset=0),t.giphies.length>0&&(t.offset+=1);var a=r.data;j.a.forEach(a,function(e){t.giphies.push(e.images.downsized_medium.url)})},SET_SEARCH_TERM:function(t,e){t.searchTerm=e},SET_IS_SCROLLING:function(t,e){t.isScrolling=e},SET_GIPHY_URL_TO_SEND:function(t,e){t.giphyUrlToSend=e}},getters:{giphy:function(t){return t.giphy},giphies:function(t){return t.giphies},searchTerm:function(t){return t.searchTerm},offset:function(t){return t.offset},giphyUrlToSend:function(t){return t.giphyUrlToSend}},actions:{GET_GIPHIES:function(t,e){var n=t.commit,r=e.searchTerm,a=e.infiniteScrolling,s=e.offset,o={method:"get",url:"http://api.giphy.com/v1/gifs/search?q="+r+"&api_key="+localStorage.getItem("GIPHY_KEY")+"&limit="+localStorage.getItem("GIPHY_LIMIT")+"&offset="+s+"&rating=g"};return A.callExternal(o).then(function(t){var e={infiniteScrolling:a,giphies:t.data};return n("SET_GIPHIES",e),H.a.resolve()}).catch(function(t){return console.log(t),H.a.reject()})},EMAIL_GIPHY:function(t,e){t.commit;var n={method:"post",url:"email",data:e};return A.callInternal(n).then(function(){return H.a.resolve()}).catch(function(t){return H.a.reject()})}}};r.a.use(c.a);var K=new c.a.Store({modules:{user:D,giphy:B}}),W=n("f1Fh"),Z=n.n(W),q=n("rifk"),z=n.n(q);r.a.config.productionTip=!1,r.a.use(Z.a),r.a.use(z.a),new r.a({el:"#app",router:V,store:K,components:{App:s},template:"<App/>"})},dhGH:function(t,e){},"f/TE":function(t,e){},mx6B:function(t,e){},o8nZ:function(t,e){},rpS2:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2c74fa5a2ba3013d3fcc.js.map