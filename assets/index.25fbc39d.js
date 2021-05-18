import{a as e,C as l,E as t,d as s,l as i,y as a,N as n}from"./vendor.4627c4cf.js";!function(e=".",l="__import__"){try{self[l]=new Function("u","return import(u)")}catch(t){const s=new URL(e,location),i=e=>{URL.revokeObjectURL(e.src),e.remove()};self[l]=e=>new Promise(((t,a)=>{const n=new URL(e,s);if(self[l].moduleMap[n])return t(self[l].moduleMap[n]);const r=new Blob([`import * as m from '${n}';`,`${l}.moduleMap['${n}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){a(new Error(`Failed to import: ${e}`)),i(c)},onload(){t(self[l].moduleMap[n]),i(c)}});document.head.appendChild(c)})),self[l].moduleMap={}}}("/assets/");const r=()=>e("div",{class:"flex flex-col items-center text-headline"},e("div",null,"Scroll"),e(l,{class:"animate-bounce mt-0.5"})),c=({children:l})=>e("div",{class:"relative w-full h-screen flex justify-center items-center"},e("div",{class:"text-8xl text-primary"},l),e("div",{class:"absolute bottom-0"},e(r,null))),o=({children:l})=>e("header",{class:"sticky z-10 top-0 rounded-b-lg shadow-md bg-background"},e("nav",{class:"container mx-auto"},e("ul",{class:"flex flex-wrap justify-around py-3"},l))),d=({children:l,link:t})=>e("li",null,e("a",{href:t,class:"text-2xl text-headline hover:opacity-75"},l)),m=({children:l})=>e("main",null,e("article",{class:"container mx-auto px-6"},l)),u=({children:l,id:t})=>e("h1",{id:t,class:"text-center text-4xl text-primary pt-20 -mt-20"},l),h=({children:l,title:t,id:s})=>e("section",{class:"my-6"},e(u,{id:s},t),e("div",{class:"mt-3"},l)),p=({children:l})=>e("h2",{class:"text-2xl text-accent"},l),x=({children:l,title:t})=>e("section",{class:"my-3"},e(p,null,t),e("div",{class:"text-text"},l)),f=({completed:l})=>e("div",{class:"relative w-full"},e("div",{class:"h-1.5 rounded bg-text"},e("div",{style:`width:${l}%`,class:"h-full rounded bg-primary"}))),y=({completed:l})=>e("div",{class:"flex w-full items-center"},e(f,{completed:l}),e("span",{class:"ml-2"},l,"%")),k=({name:l,completed:t})=>e("div",{class:"my-2 flex flex-col sm:flex-row sm:items-center"},e("span",{style:"min-width:12rem"},l),e(y,{completed:t})),b=({links:l})=>e("ul",{class:"flex flex-wrap gap-x-3"},l.map(((l,s)=>e("li",{key:s},e("a",{href:l.url,target:"_blank",rel:"noopener noreferrer",class:"text-accent"},e(t,{class:"inline-block w-4 h-4 -mt-1 mr-0.5"}),l.name))))),v=({history:l})=>e("div",{class:"my-3"},e("h4",{class:"text-text"},l.date),e("h3",{class:"text-xl text-headline"},l.title),null!=l.links?e(b,{links:l.links}):null),w=({children:l})=>e("div",{class:"flex flex-wrap gap-4 justify-center"},l),g=({href:l,children:t})=>e("a",{href:l,target:"_blank",rel:"noopener noreferrer",class:"text-xl text-text"},t),j=({children:l})=>e("footer",{class:"w-full p-4 flex justify-center border-t-2 text-text"},l),U=s.gql`
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
`;n(e((()=>{const[l,t]=i(null);return a((()=>{s.request("https://api.shun.technology/graphql",U).then(t).catch(console.error)}),[t]),null===l?null:e("div",{class:"bg-background"},e(c,null,"SHUN"),e(o,null,e(d,{link:"#profile"},"Profile"),e(d,{link:"#skills"},"Skills"),e(d,{link:"#histories"},"Histories"),e(d,{link:"#contacts"},"Contacts")),e(m,null,e(h,{title:"Profile",id:"profile"},e(x,{title:"Birthday"},l.basic.birthday),e(x,{title:"School"},l.basic.school),e(x,{title:"Department"},l.basic.department)),e(h,{title:"Skills",id:"skills"},l.skills.map(((l,t)=>e(x,{key:t,title:l.name},l.skills.map(((l,t)=>e(k,{key:t,name:l.name,completed:l.level}))))))),e(h,{title:"Histories",id:"histories"},l.histories.map(((l,t)=>e(v,{key:t,history:l})))),e(h,{title:"Contacts",id:"contacts"},e(w,null,l.contacts.map(((l,t)=>e(g,{key:t,href:l.uri},l.name)))))),e(j,null,"Copyright©2021 Shuntaro Nishizawa"))}),null),document.body);
