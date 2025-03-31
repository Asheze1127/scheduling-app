import{f as x}from"./index-BZkcKs8Z.js";import{j as T}from"./jsx-runtime-D_zvdyIk.js";const y=({primary:f=!1,size:C="medium",backgroundColor:k,label:h,...S})=>{const v=f?"storybook-button--primary":"storybook-button--secondary";return T.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${C}`,v].join(" "),style:{backgroundColor:k},...S,children:h})};y.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Calendar",props:{primary:{required:!1,tsType:{name:"boolean"},description:"Is this the principal call to action on the page?",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"What background color to use"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"How large should the button be?",defaultValue:{value:"'medium'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Button contents"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}};const j={title:"Example/Calendar",component:y,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:x()}},e={args:{primary:!0,label:"Calendar"}},a={args:{label:"Calendar"}},r={args:{size:"large",label:"Calendar"}},o={args:{size:"small",label:"Calendar"}};var s,t,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Calendar'
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var l,i,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Calendar'
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,d,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Calendar'
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,g,b;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Calendar'
  }
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const _=["Primary","Secondary","Large","Small"];export{r as Large,e as Primary,a as Secondary,o as Small,_ as __namedExportsOrder,j as default};
