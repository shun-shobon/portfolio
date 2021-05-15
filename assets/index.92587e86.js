import{a as e,C as l,d as t,l as s,y as i,b as n,N as c}from"./vendor.716d9dc1.js";!function(e=".",l="__import__"){try{self[l]=new Function("u","return import(u)")}catch(t){const s=new URL(e,location),i=e=>{URL.revokeObjectURL(e.src),e.remove()};self[l]=e=>new Promise(((t,n)=>{const c=new URL(e,s);if(self[l].moduleMap[c])return t(self[l].moduleMap[c]);const o=new Blob([`import * as m from '${c}';`,`${l}.moduleMap['${c}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){n(new Error(`Failed to import: ${e}`)),i(r)},onload(){t(self[l].moduleMap[c]),i(r)}});document.head.appendChild(r)})),self[l].moduleMap={}}}("/assets/");const o=()=>e("div",{class:"flex flex-col items-center"},e("div",null,"Scroll"),e(l,{class:"animate-bounce mt-0.5"})),r=({children:l})=>e("div",{class:"relative w-full h-screen flex justify-center items-center"},e("div",{class:"text-8xl"},l),e("div",{class:"absolute bottom-0"},e(o,null))),a=({children:l})=>e("header",{class:"sticky z-10 top-0 bg-white rounded-b-lg shadow-md"},e("nav",{class:"container mx-auto"},e("ul",{class:"flex flex-wrap justify-around py-3"},l))),d=({children:l,link:t})=>e("li",null,e("a",{href:t,class:"text-2xl hover:opacity-75"},l)),m=({children:l})=>e("main",null,e("article",{class:"container mx-auto px-6"},l)),u=({children:l,id:t})=>e("h1",{id:t,class:"text-center text-4xl pt-20 -mt-20"},l),p=({children:l,title:t,id:s})=>e("section",{class:"my-6"},e(u,{id:s},t),e("div",{class:"mt-3"},l)),h=({children:l})=>e("h2",{class:"text-2xl"},l),f=({children:l,title:t})=>e("section",{class:"my-3"},e(h,null,t),e("div",null,l)),x=({completed:l})=>e("div",{class:"relative w-full"},e("div",{class:"h-1.5 rounded bg-gray-500"},e("div",{style:`width:${l}%`,class:"h-full rounded bg-blue-400"}))),y=({completed:l})=>e("div",{class:"flex w-full items-center"},e(x,{completed:l}),e("span",{class:"ml-2"},l,"%")),v=({name:l,completed:t})=>e("div",{class:"my-2 flex flex-col sm:flex-row sm:items-center"},e("span",{style:"min-width:12rem"},l),e(y,{completed:t})),b=({children:l})=>e("footer",{class:"w-full p-4 flex justify-center border-t-2"},l),w=t.gql`
  query Profile {
    basic {
      aka
      birthday
      school
      department
    }
    skills {
      name
      skills {
        name
      }
    }
    histories {
      date
      title
      links {
        name
        url
      }
    }
    contacts {
      name
      uri
    }
  }
`;c(e((()=>{const[l,c]=s(null);return i((()=>{t.request("https://api.shun.technology/graphql",w).then(c).catch(console.error)}),[c]),e(n,null,e(r,null,"SHUN"),e(a,null,e(d,{link:"#profile"},"Profile"),e(d,{link:"#skills"},"Skills"),e(d,{link:"#histories"},"Histories"),e(d,{link:"#contacts"},"Contacts")),e(m,null,e(p,{title:"Profile",id:"profile"},e(f,{title:"Frontend"},e(v,{name:"TypeScript",completed:95}),e(v,{name:"HTML5 / CSS3",completed:80}),e(v,{name:"Google Cloud Platform",completed:30})),e(f,{title:"Birthday"},"これはテストです。これはテストです。これはテストです。これはテストです。"),e(f,{title:"Birthday"},"これはテストです。これはテストです。これはテストです。これはテストです。"),e("div",{class:"h-screen"})),e(p,{title:"Skills",id:"skills"},e("div",{class:"h-screen"}))),e(b,null,"Copyright©2021 Shuntaro Nishizawa"))}),null),document.body);
