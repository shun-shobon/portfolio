import{a as e,C as l,d as t,l as s,y as i,N as n}from"./vendor.ddf7db06.js";!function(e=".",l="__import__"){try{self[l]=new Function("u","return import(u)")}catch(t){const s=new URL(e,location),i=e=>{URL.revokeObjectURL(e.src),e.remove()};self[l]=e=>new Promise(((t,n)=>{const a=new URL(e,s);if(self[l].moduleMap[a])return t(self[l].moduleMap[a]);const r=new Blob([`import * as m from '${a}';`,`${l}.moduleMap['${a}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){n(new Error(`Failed to import: ${e}`)),i(c)},onload(){t(self[l].moduleMap[a]),i(c)}});document.head.appendChild(c)})),self[l].moduleMap={}}}("/assets/");const a=()=>e("div",{class:"flex flex-col items-center text-headline"},e("div",null,"Scroll"),e(l,{class:"animate-bounce mt-0.5"})),r=({children:l})=>e("div",{class:"relative w-full h-screen flex justify-center items-center"},e("div",{class:"text-8xl text-primary"},l),e("div",{class:"absolute bottom-0"},e(a,null))),c=({children:l})=>e("header",{class:"sticky z-10 top-0 rounded-b-lg shadow-md bg-background"},e("nav",{class:"container mx-auto"},e("ul",{class:"flex flex-wrap justify-around py-3"},l))),o=({children:l,link:t})=>e("li",null,e("a",{href:t,class:"text-2xl text-headline hover:opacity-75"},l)),d=({children:l})=>e("main",null,e("article",{class:"container mx-auto px-6"},l)),m=({children:l,id:t})=>e("h1",{id:t,class:"text-center text-4xl text-primary pt-20 -mt-20"},l),u=({children:l,title:t,id:s})=>e("section",{class:"my-6"},e(m,{id:s},t),e("div",{class:"mt-3"},l)),p=({children:l})=>e("h2",{class:"text-2xl text-accent"},l),h=({children:l,title:t})=>e("section",{class:"my-3"},e(p,null,t),e("div",{class:"text-text"},l)),f=({completed:l})=>e("div",{class:"relative w-full"},e("div",{class:"h-1.5 rounded bg-text"},e("div",{style:`width:${l}%`,class:"h-full rounded bg-primary"}))),x=({completed:l})=>e("div",{class:"flex w-full items-center"},e(f,{completed:l}),e("span",{class:"ml-2"},l,"%")),y=({name:l,completed:t})=>e("div",{class:"my-2 flex flex-col sm:flex-row sm:items-center"},e("span",{style:"min-width:12rem"},l),e(x,{completed:t})),b=({children:l})=>e("div",{class:"flex flex-wrap gap-4 justify-center"},l),v=({href:l,children:t})=>e("a",{href:l,target:"_blank",rel:"noopener noreferrer",class:"text-xl text-text"},t),k=({children:l})=>e("footer",{class:"w-full p-4 flex justify-center border-t-2 text-text"},l),w=t.gql`
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
        level
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
`;n(e((()=>{const[l,n]=s(null);return i((()=>{t.request("https://api.shun.technology/graphql",w).then(n).catch(console.error)}),[n]),null===l?null:e("div",{class:"bg-background"},e(r,null,"SHUN"),e(c,null,e(o,{link:"#profile"},"Profile"),e(o,{link:"#skills"},"Skills"),e(o,{link:"#histories"},"Histories"),e(o,{link:"#contacts"},"Contacts")),e(d,null,e(u,{title:"Profile",id:"profile"},e(h,{title:"Birthday"},l.basic.birthday),e(h,{title:"School"},l.basic.school),e(h,{title:"Department"},l.basic.department)),e(u,{title:"Skills",id:"skills"},l.skills.map(((l,t)=>e(h,{key:t,title:l.name},l.skills.map(((l,t)=>e(y,{key:t,name:l.name,completed:l.level}))))))),e(u,{title:"Contacts",id:"contacts"},e(b,null,l.contacts.map(((l,t)=>e(v,{key:t,href:l.uri},l.name)))))),e(k,null,"Copyright©2021 Shuntaro Nishizawa"))}),null),document.body);
