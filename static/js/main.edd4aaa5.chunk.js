(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/brain.c81a95e9.png"},function(e,t,a){e.exports=a(35)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(6),r=a.n(s),l=(a(17),a(1)),o=a(2),c=a(4),m=a(3),u=a(5),h=(a(19),a(8)),p=a.n(h),d=(a(21),function(){return i.a.createElement("div",{className:"titl"},i.a.createElement("h1",{className:" f1 lh-solid"},"FACE DETECT"))}),g=(a(23),function(e){var t=e.onRouteChange;return e.signedIn?i.a.createElement("div",null,i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{className:"sig f4 fw6 link white pa3 pointer",onClick:function(){return t("signinPage")}},"Sign-Out"))):i.a.createElement("div",null,i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{className:"sig f4 fw6 link white pa3 pointer",onClick:function(){return t("signinPage")}},"Sign-In")))}),b=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).onEmailChange=function(t){e.setState({signedInEmail:t.target.value})},e.onPasswordChange=function(t){e.setState({signedInPassword:t.target.value})},e.hi=function(){console.log("Sign-in")},e.onSubmitSignin=function(){fetch("https://inquisitive-waistcoat-bee.cyclic.app/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.signedInEmail,password:e.state.signedInPassword})}).then(function(e){return e.json()}).then(function(t){t.id&&(e.props.loadUser(t),e.props.onRouteChange("home"))})},e.state={signedInEmail:"guest@gmail.com",signedInPassword:"guest"},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"ma5"},i.a.createElement("article",{className:"br3 bw2 ba  b--black mv4 br4 w-100 w-50-m w-25-l mw6 shadow-5 center"},i.a.createElement("main",{className:"pa4 black-80"},i.a.createElement("form",{className:"measure white"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Sign In"),i.a.createElement("p",{className:"white"},"Email: guest@gmail.com"),i.a.createElement("hr",null),i.a.createElement("p",{className:"white"},"Password: guest"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6 "},"Email"),i.a.createElement("input",{className:"pa2 input-reset ba white bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange,value:"guest@gmail.com"})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6"},"Password"),i.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 white",type:"password",name:"password",id:"password",onChange:this.onPasswordChange,value:"guest",autoComplete:"true"}))),i.a.createElement("div",{className:""},i.a.createElement("input",{className:"b w3 ph3 pv2 center black ba1 b--black blue br-pill bg-white grow pointer f6 dib",value:"Sign in",onClick:this.onSubmitSignin,onChange:this.hi})),i.a.createElement("div",{className:"lh-copy mt3"})))))}}]),t}(i.a.Component),f=a(9),w=a.n(f),E=a(10),v=a.n(E),N=(a(25),function(){return i.a.createElement("div",null,i.a.createElement(w.a,{className:"Tilt br2 ma3 shadow-2",options:{max:25},style:{height:150,width:150}},i.a.createElement("div",{className:"Tilt-inner"},i.a.createElement("img",{src:v.a,alt:"logo"}))))}),C=(a(27),function(e){var t=e.name,a=e.entries;return i.a.createElement("div",{className:"ma5"},i.a.createElement("p",{className:"white fw6 f3"},"".concat(t,", Your current rank is ...")),i.a.createElement("br",null),i.a.createElement("p",{className:"rankno white fw8 f1 mt0 grow"},i.a.createElement("span",null,a)))}),y=(a(29),function(e){var t=e.onInputChange,a=e.onButtonClick;return i.a.createElement("div",null,i.a.createElement("p",{className:"fw5 white"}," This app will detect faces in your pictures. Give it a try"),i.a.createElement("div",{className:"center"},i.a.createElement("div",{className:"form center pa4 br4 shadow-5"},i.a.createElement("input",{className:"hovr f4 pa2 w-70 center",type:"text",onChange:t}),i.a.createElement("button",{className:"w-30 grow f3 fw6 link ph3 pv2 dib white bg-purple ima",onClick:a},"Detect"))))}),k=(a(31),function(e){var t=e.image,a=e.box;return i.a.createElement("div",{className:"center"},i.a.createElement("div",{className:"imagediv absolute mt2"},i.a.createElement("img",{id:"inputImage",alt:"",className:"imagesearch",src:t}),i.a.createElement("div",{className:"bounding-box",style:{top:a.top,bottom:a.bottom,left:a.left,right:a.right}})))}),j=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).onNameChange=function(t){e.setState({name:t.target.value})},e.onEmailChange=function(t){e.setState({email:t.target.value})},e.onPasswordChange=function(t){e.setState({password:t.target.value})},e.hi=function(){console.log("register")},e.onSubmitRegister=function(){fetch("https://inquisitive-waistcoat-bee.cyclic.app/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.state.name,email:e.state.email,password:e.state.password})}).then(function(e){return e.json()}).then(function(t){t.id&&(e.props.loadUser(t),e.props.onRouteChange("home"))})},e.state={name:"",email:"",password:""},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("article",{className:"br3 bw2 ba b--black mv4 br4 w-100 w-50-m w-25-l mw6 shadow-5 center"},i.a.createElement("main",{className:"pa4 black-80"},i.a.createElement("form",{className:"measure white"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Register"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6"},"Name"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6"},"Email"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6"},"Password"),i.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),i.a.createElement("div",{className:""},i.a.createElement("input",{className:"b w4  pl5 pv2 ba1 b--black blue br-pill bg-white grow pointer f6 dib",value:"Register",onClick:this.onSubmitRegister,onChange:this.hi}))))))}}]),t}(i.a.Component),S={particles:{number:{value:90,density:{enable:!0,value_area:1e3}}}},I=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,password:t.password,entries:t.entries,joinDate:t.joindate}})},e.faceDetection=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputImage"),n=a.width,i=a.height;return{top:t.top_row*i,bottom:i-t.bottom_row*i,left:t.left_col*n,right:n-t.right_col*n}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonClick=function(){e.setState({imageUrl:e.state.input}),fetch("https://inquisitive-waistcoat-bee.cyclic.app/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then(function(e){return e.json()}).then(function(t){console.log("response",t),t&&fetch("https://inquisitive-waistcoat-bee.cyclic.app/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then(function(e){return e.json()}).then(function(t){e.setState(Object.assign(e.state.user,{entries:t}))}),e.displayFaceBox(e.faceDetection(t))}).catch(function(e){return console.log(e)})},e.onRouteChange=function(t){"home"===t?e.setState({signedIn:!0}):"signinPage"===t&&(e.setState({signedIn:!1}),e.setState({imageUrl:""})),e.setState({route:t})},e.state={input:"",imageUrl:"",box:{},route:"signinPage",signedIn:!1,user:{id:"",name:"",email:"",password:"",entries:0,joinDate:""}},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p.a,{className:"particle",param:S}),i.a.createElement(d,null),i.a.createElement(g,{onRouteChange:this.onRouteChange,signedIn:this.state.signedIn}),"home"===this.state.route?i.a.createElement("div",null,i.a.createElement(N,null),i.a.createElement(C,{name:this.state.user.name,entries:this.state.user.entries}),i.a.createElement(y,{onInputChange:this.onInputChange,onButtonClick:this.onButtonClick}),i.a.createElement(k,{image:this.state.imageUrl,box:this.state.box})):"signinPage"===this.state.route?i.a.createElement(b,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):i.a.createElement(j,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(33);r.a.render(i.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,2,1]]]);
//# sourceMappingURL=main.edd4aaa5.chunk.js.map