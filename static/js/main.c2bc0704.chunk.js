(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),o=(a(22),a(1)),i=a(2),s=a(4),u=a(3),d=a(5),m=(a(12),a(6)),h=a(7),p=a.n(h),b=r.a.createContext({location:"Seattle WA",animal:"",breed:"",breeds:[],handleAnimalChange:function(){},handleBreedChange:function(){},handleLocationChange:function(){},getBreeds:function(){}}),f=b.Provider,v=b.Consumer,g=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.animal,n=e.breed,l=e.media,c=e.location,o=e.id,i=[];l&&l.photos&&l.photos.photo&&(i=l.photos.photo.filter(function(e){return"pn"===e["@size"]}));var s=i[0]?i[0].value:"http://placecorgi.com/300/300";return r.a.createElement(m.a,{to:"/details/".concat(o),className:"pet"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:s,alt:t})),r.a.createElement("div",{className:"info"},r.a.createElement("h1",null,t),r.a.createElement("h2",null,a," - ",n," - ",c)))}}]),t}(r.a.Component),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleFormSubmit=function(e){e.preventDefault(),a.props.search()},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(v,null,function(t){return r.a.createElement("div",{className:"search-params"},r.a.createElement("form",{onSubmit:e.handleFormSubmit},r.a.createElement("label",{htmlFor:"location"},"Location",r.a.createElement("input",{id:"location",onChange:t.handleLocationChange,value:t.location,placeholder:"Location"})),r.a.createElement("label",{htmlFor:"animal"},"Animal",r.a.createElement("select",{id:"animal",value:t.animal,onChange:t.handleAnimalChange,onBlur:t.handleAnimalChange},r.a.createElement("option",{value:""},"All Animals"),h.ANIMALS.map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("label",{htmlFor:"breed"},"Breed",r.a.createElement("select",{disabled:!t.breeds.length,id:"breed",value:t.breed,onChange:t.handleBreedChange,onBlur:t.handleBreedChange},r.a.createElement("option",null),t.breeds.map(function(e,t){return r.a.createElement("option",{key:e+t,value:e},e)}))),r.a.createElement("button",null,"Submit")))})}}]),t}(r.a.Component),j=p()(),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={pets:[]},a.search=function(){j.pet.find({output:"full",location:a.props.searchParams.location,animal:a.props.searchParams.animal,breed:a.props.searchParams.breed}).then(function(e){var t;t=e.petfinder.pets&&e.petfinder.pets.pet?Array.isArray(e.petfinder.pets.pet)?e.petfinder.pets.pet:[e.petfinder.pets.pet]:[],a.setState({pets:t})})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.search()}},{key:"render",value:function(){return r.a.createElement("div",{className:"search"},r.a.createElement(E,{search:this.search}),this.state.pets.map(function(e){var t;return t=Array.isArray(e.breeds.breed)?e.breeds.breed.join(", "):e.breeds.breed,r.a.createElement(g,{key:e.id,animal:e.animal,name:e.name,breed:t,media:e.media,location:"".concat(e.contact.city,", ").concat(e.contact.state),id:e.id})}))}}]),t}(n.Component);function O(e){return r.a.createElement(v,null,function(t){return r.a.createElement(y,Object.assign({},e,{searchParams:t}))})}var C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={photos:[],active:0},a.handleIndexClick=function(e){a.setState({active:+e.target.dataset.index})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.photos,n=t.active;return r.a.createElement("div",{className:"carousel"},r.a.createElement("img",{src:a[n].value,alt:"primary animal"}),r.a.createElement("div",{className:"carousel-smaller"},a.map(function(t,a){return r.a.createElement("img",{key:t.value,src:t.value,className:a===n?"active":"","data-index":a,onClick:e.handleIndexClick,alt:"animal thumbnail"})})))}}],[{key:"getDerivedStateFromProps",value:function(e){var t=e.media,a=[];return t&&t.photos&&t.photos.photo&&(a=t.photos.photo.filter(function(e){return"pn"===e["@size"]})),{photos:a}}}]),t}(r.a.Component),k=document.getElementById("modal"),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).el=document.createElement("div"),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){k.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){k.removeChild(this.el)}},{key:"render",value:function(){return Object(l.createPortal)(this.props.children,this.el)}}]),t}(r.a.Component),S=p()(),w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,showModal:!1},a.toggleModal=function(){return a.setState({showModal:!a.state.showModal})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;S.pet.get({output:"full",id:this.props.id}).then(function(t){var a,n=t.petfinder.pet;a=Array.isArray(n.breeds.breed)?n.breeds.breed.join(", "):n.breeds.breed,e.setState({name:n.name,animal:n.animal,location:"".concat(n.contact.city,", ").concat(n.contact.state),description:n.description,media:n.media,breed:a,loading:!1})}).catch(function(e){Object(m.c)("/")})}},{key:"render",value:function(){if(this.state.loading)return r.a.createElement("h1",null,"Loading...");var e=this.state,t=e.name,a=e.animal,n=e.breed,l=e.location,c=e.description,o=e.media,i=e.showModal;return r.a.createElement("div",{className:"details"},r.a.createElement(C,{media:o}),r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("h2",null,a," - ",n," - ",l),r.a.createElement("button",{onClick:this.toggleModal},"Adopt ",t),r.a.createElement("p",null,c),i?r.a.createElement(A,null,r.a.createElement("h1",null," Would you like to adopt ",t," ?"),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:this.toggleModal},"Yes"),r.a.createElement("button",{onClick:this.toggleModal},"Definitely Yes"))):null))}}]),t}(r.a.Component),B=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleSearchSubmit",value:function(){Object(m.c)("/")}},{key:"render",value:function(){return r.a.createElement("div",{className:"search-route"},r.a.createElement(E,{search:this.handleSearchSubmit}))}}]),t}(r.a.Component),M=p()(),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleLocationChange=function(e){a.setState({location:e.target.value})},a.handleAnimalChange=function(e){a.setState({animal:e.target.value,breed:""},a.getBreeds)},a.handleBreedChange=function(e){a.setState({breed:e.target.value})},a.getBreeds=function(){a.setState({breeds:[]}),a.state.animal?M.breed.list({animal:a.state.animal}).then(function(e){e.petfinder&&e.petfinder.breeds&&Array.isArray(e.petfinder.breeds.breed)?a.setState({breeds:e.petfinder.breeds.breed}):a.setState({breeds:[]})}).catch(console.error):a.setState({breeds:[]})},a.state={location:"Seattle, WA",animal:"",breed:"",breeds:[],handleAnimalChange:a.handleAnimalChange,handleBreedChange:a.handleBreedChange,handleLocationChange:a.handleLocationChange,getBreeds:a.getBreeds},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement(m.a,{to:"/"},"Adopt Me!"),r.a.createElement(m.a,{to:"/search-params"},r.a.createElement("span",{"aria-label":"search",role:"img"},":)"))),r.a.createElement(f,{value:this.state},r.a.createElement(m.b,null,r.a.createElement(O,{path:"/"}),r.a.createElement(w,{path:"/details/:id"}),r.a.createElement(B,{path:"/search-params"}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},17:function(e,t,a){e.exports=a(144)},22:function(e,t,a){}},[[17,1,2]]]);
//# sourceMappingURL=main.c2bc0704.chunk.js.map