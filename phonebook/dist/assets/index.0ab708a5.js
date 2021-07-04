var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n;import{a as m,R as o,r as c,b as d}from"./vendor.661b7f7a.js";const i="/api/persons";var u=()=>m.get(i).then((e=>e.data)),p=e=>m.post(i,e).then((e=>e.data)),E=e=>m.delete(`/api/persons/${e}`).then((e=>e.data)),h=(e,t)=>m.put(`/api/persons/${e}`,t).then((e=>e.data));function b({type:e,message:t}){return null===t?null:o.createElement("div",{className:"my-4 p-2 rounded-md shadow text-center "+("success"===e?"bg-green-300":"bg-red-300")},o.createElement("p",{className:"font-semibold "+("success"===e?"text-green-600":"text-red-600")},t))}const v=({setPersons:e,persons:m})=>{const[d,i]=c.exports.useState(""),[E,v]=c.exports.useState(""),[f,y]=c.exports.useState(null),[g,w]=c.exports.useState(),x=m.map((e=>e.name.toLowerCase()));return o.createElement("div",null,o.createElement("form",{onSubmit:o=>{if(o.preventDefault(),x.includes(d.toLowerCase())){if(window.confirm(`${d} is already added to the phonebook, replace the old number with a new one?`)){const o=m.find((e=>e.name.toLowerCase()===d.toLowerCase())),i=(c=((e,t)=>{for(var a in t||(t={}))l.call(t,a)&&s(e,a,t[a]);if(n)for(var a of n(t))r.call(t,a)&&s(e,a,t[a]);return e})({},o),t(c,a({number:E})));h(o.id,i).then((t=>{e(m.map((e=>e.id===o.id?t:e))),y(`Edited ${o.name}`),w("success"),setTimeout((()=>y(null)),3e3)})).catch((t=>{y(`${o.name} is already removed from the phone book`),w("error"),u().then((t=>e(t))),setTimeout((()=>y(null)),3e3)}))}}else{const t={name:d,id:m.length+1,number:E};p(t).then((t=>e(m.concat(t)))),y("Added a new number"),w("success"),setTimeout((()=>y(null)),2e3)}var c;v(""),i("")}},o.createElement("label",{htmlFor:"name",className:"py-4 font-bold"},"Add Contact"),o.createElement("div",{className:"my-4"}),o.createElement("div",{className:"grid gap-3 mx-8"},o.createElement("div",null,o.createElement("input",{required:!0,id:"name",type:"text",placeholder:"Name",value:d,onChange:e=>i(e.target.value)})),o.createElement("div",null,o.createElement("input",{required:!0,type:"text",placeholder:"Number",value:E,onChange:e=>v(e.target.value)})),o.createElement("div",{className:"justify-self-center mt-4"},o.createElement("button",{className:"btn",type:"submit"},"add")))),o.createElement(b,{type:g,message:f}))},f=({person:e,handleDelete:t})=>o.createElement("div",{className:"grid grid-cols-3 grid-rows-1 items-center my-3 gap-2"},o.createElement("div",null,e.name),o.createElement("div",null,e.number),o.createElement("div",null,o.createElement("button",{onClick:()=>t(e.id),className:"btn-delete"},"delete"))),y=({persons:e,handleDelete:t})=>o.createElement("div",null,o.createElement("h2",{className:"font-bold text-lg mb-3"},"Numbers"),o.createElement("div",null,e.map((e=>o.createElement("div",{className:"my-1",key:e.id},o.createElement(f,{person:e,handleDelete:t})))))),g=()=>o.createElement("div",{className:"w-full py-4 text-center bg-sky-500 shadow"},o.createElement("h2",{className:"text-white text-3xl font-bold tracking-wide"},"Phonebook")),w=({persons:e,handleDelete:t})=>{const[a,n]=c.exports.useState(""),l=e.filter((e=>e.name.toLowerCase().includes(a.toLowerCase())));return o.createElement("div",{className:"mb-4"},o.createElement("input",{type:"text",placeholder:"Filter by name",className:"my-4",value:a,onChange:e=>n(e.target.value)}),a&&0===l.length?o.createElement("div",null,"No matches"):a?l.map((e=>o.createElement("div",{className:"my-1",key:e.id},o.createElement(f,{person:e,handleDelete:t})))):void 0)},x=()=>{const[e,t]=c.exports.useState([]),[a,n]=c.exports.useState(null);c.exports.useEffect((()=>{u().then((e=>t(e)))}),[]);const l=a=>{window.confirm(`Delete ${e.find((e=>e.id===a)).name}?`)&&(E(a).then((n=>t(e.filter((e=>e.id!==a))))),n(`Deleted ${e.find((e=>e.id===a)).name}`),setTimeout((()=>{n(null)}),2e3))};return o.createElement("div",{className:"flex flex-col items-center mb-10"},o.createElement(g,null),o.createElement("div",{className:"mt-10 p-5 bg-white rounded shadow-md max-w-4xl"},o.createElement(w,{persons:e,handleDelete:l}),o.createElement("hr",{className:"my-10"}),o.createElement(v,{persons:e,setPersons:t}),o.createElement("hr",{className:"my-10"}),o.createElement(y,{setPersons:t,persons:e,handleDelete:l}),o.createElement(b,{message:a})))};d.render(o.createElement(o.StrictMode,null,o.createElement(x,null)),document.getElementById("root"));
