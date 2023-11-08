"use strict";(self.webpackChunk_0_l_documentation=self.webpackChunk_0_l_documentation||[]).push([[9173],{5694:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>r,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var t=n(5893),a=n(1151);const s={title:"VFN yaml example",id:"vfn-yaml"},l="VFN Example YAML",i={id:"validators/yaml-templates/vfn-yaml",title:"VFN yaml example",description:"vfn.yaml",source:"@site/docs/validators/yaml-templates/vfn-yaml.md",sourceDirName:"validators/yaml-templates",slug:"/validators/yaml-templates/vfn-yaml",permalink:"/validators/yaml-templates/vfn-yaml",draft:!1,unlisted:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/validators/yaml-templates/vfn-yaml.md",tags:[],version:"current",frontMatter:{title:"VFN yaml example",id:"vfn-yaml"},sidebar:"tutorialSidebar",previous:{title:"Validator yaml example",permalink:"/validators/yaml-templates/validator-yaml"},next:{title:"Developers",permalink:"/category/developers"}},r={},o=[{value:"vfn.yaml",id:"vfnyaml",level:3}];function m(e){const d={code:"code",h1:"h1",h3:"h3",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.h1,{id:"vfn-example-yaml",children:"VFN Example YAML"}),"\n",(0,t.jsx)(d.h3,{id:"vfnyaml",children:"vfn.yaml"}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{children:"# replace file path differences for the username\nsed -i 's#/validatorusername/.libra#/vfnusername/.libra#g' ~/.libra/vfn.yaml\n"})}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{children:"# resulting vfn.yaml contents\nbase:\n  role: 'full_node'\n  data_dir: '/home/vfnusername/.libra/data'\n  waypoint:\n    from_file: '/home/vfnusername/.libra/genesis/waypoint.txt'\n\nexecution:\n  genesis_file_location: '/home/vfnusername/.libra/genesis/genesis.blob'\n\nfull_node_networks:\n- network_id:\n    private: 'vfn'\n  listen_address: '/ip4/0.0.0.0/tcp/6181'\n  identity:\n    type: 'from_file'\n    path: /home/vfnusername/.libra/validator-identity.yaml\n  seeds:\n    valpeersdf34tdfgddfgsdfsssssssssssssssssdfddddddddddddddd:\n      addresses:\n      - \"/ip4/<validator_ip>/tcp/6181/noise-ik/0xvalpeersdf34tdfgddfgsdfsssssssssssssssssdfddddddddddddddd/handshake/0\"\n      role: \"Validator\"\n- network_id: 'public'\n  discovery_method: 'onchain'\n  listen_address: \"/ip4/0.0.0.0/tcp/6182\"\n  identity:\n    type: \"from_config\"\n    key: \"privatekeydfwsdfdfsdfddddddddddddddddddddddddddddddddddddd\"\n    peer_id: \"peeridfdgfgswddfddddddddddddddddddddddddddddddddddddddd\"\n\napi:\n  enabled: true\n  address: '0.0.0.0:8080'\n"})}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{})})]})}function f(e={}){const{wrapper:d}={...(0,a.a)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},1151:(e,d,n)=>{n.d(d,{Z:()=>i,a:()=>l});var t=n(7294);const a={},s=t.createContext(a);function l(e){const d=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function i(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:d},e.children)}}}]);