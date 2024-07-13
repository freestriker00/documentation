"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[9078],{7803:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var o=n(5893),s=n(1151);const t={sidebar_position:3,description:"Initialize configs"},r="Config",l={id:"cli-tools/config",title:"Config",description:"Initialize configs",source:"@site/docs/cli-tools/config.md",sourceDirName:"cli-tools",slug:"/cli-tools/config",permalink:"/cli-tools/config",draft:!1,unlisted:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/cli-tools/config.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Initialize configs"},sidebar:"tutorialSidebar",previous:{title:"Txs - Validator",permalink:"/cli-tools/txs/validator"},next:{title:"Genesis",permalink:"/cli-tools/genesis"}},c={},d=[{value:"Description",id:"description",level:2},{value:"How to Use the Config Tool",id:"how-to-use-the-config-tool",level:2},{value:"Subcommands",id:"subcommands",level:3},{value:"Init",id:"init",level:4},{value:"Fix",id:"fix",level:4},{value:"ValidatorInit",id:"validatorinit",level:4},{value:"FullnodeInit",id:"fullnodeinit",level:4},{value:"Note",id:"note",level:3}];function a(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h1,{id:"config",children:"Config"}),"\n",(0,o.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.code,{children:"ConfigCli"})," tool is a command-line utility within the Libra Framework designed to facilitate the generation and management of configuration files for various components of the 0L Network. Its primary function is to create and modify the ",(0,o.jsx)(i.code,{children:"libra.yaml"})," configuration file, which is essential for the operation of CLI tools like ",(0,o.jsx)(i.code,{children:"txs"}),", ",(0,o.jsx)(i.code,{children:"tower"}),", and others within the ecosystem."]}),"\n",(0,o.jsx)(i.p,{children:"The tool provides several subcommands to handle different aspects of configuration, from initializing new configurations to adjusting existing ones, as well as specialized options for validators and fullnodes."}),"\n",(0,o.jsx)(i.h2,{id:"how-to-use-the-config-tool",children:"How to Use the Config Tool"}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.code,{children:"config"})," is invoked from the command line and requires a subcommand to specify the action to be taken. It can operate on a global configuration directory or a specified path, and it can manage different network profiles for various deployment environments like MAINNET, TESTNET, and DEVNET."]}),"\n",(0,o.jsx)(i.h3,{id:"subcommands",children:"Subcommands"}),"\n",(0,o.jsx)(i.h4,{id:"init",children:"Init"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Purpose"}),": Initializes the ",(0,o.jsx)(i.code,{children:"libra.yaml"})," configuration file with options for various CLI tools."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Syntax"}),": ",(0,o.jsx)(i.code,{children:"libra config init [OPTIONS]"})]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Options"}),":","\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"--force-address <ADDRESS>"}),": Force a specific account address instead of deriving from mnemonic."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"--force-authkey <AUTHKEY>"}),": Force a specific authentication key, requires ",(0,o.jsx)(i.code,{children:"--force_address"}),"."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"--test-private_key <KEY>"}),": Use a private key for initialization (intended for testing)."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"--playlist-url <URL>"}),": URL for a network playlist to load default nodes from."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Example"}),":","\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{children:'libra config init --force-address 0x1 --force-authkey "0x..." --test-private-key "0x123..."\n'})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h4,{id:"fix",children:"Fix"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Purpose"}),": Attempts to fix or adjust the ",(0,o.jsx)(i.code,{children:"libra.yaml"})," file with various options."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Syntax"}),": ",(0,o.jsx)(i.code,{children:"libra config fix [OPTIONS]"})]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Options"}),":","\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"--address"}),": Reset the address from mnemonic and look up the chain for the actual address."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"--remove-profile <NAME>"}),": Remove the profile with the specified name."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"--force-url <URL>"}),": Force overwrite all URLs in the current network profile to this URL."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Example"}),":","\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{children:'libra config fix --address --remove-profile "test_profile"\n'})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h4,{id:"validatorinit",children:"ValidatorInit"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Purpose"}),": Generates the validators' configuration file."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Syntax"}),": ",(0,o.jsx)(i.code,{children:"libra config validator-init [OPTIONS]"})]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Options"}),":","\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"--check"}),": Check the files generated."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Example"}),":","\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{children:"libra config validator-init --check\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h4,{id:"fullnodeinit",children:"FullnodeInit"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Purpose"}),": Generates a fullnode directory and adds ",(0,o.jsx)(i.code,{children:"fullnode.yaml"})," from the template."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Syntax"}),": ",(0,o.jsx)(i.code,{children:"libra config fullnode-init [OPTIONS]"})]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Options"}),":","\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"--home-path <PATH>"}),": Path to libra config and data files, defaults to ",(0,o.jsx)(i.code,{children:"$HOME/.libra"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Example"}),":","\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{children:'libra config fullnode-init --home_path "/path/to/fullnode"\n'})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"note",children:"Note"}),"\n",(0,o.jsxs)(i.p,{children:["When using the ",(0,o.jsx)(i.code,{children:"ConfigCli"})," tool, it is important to be aware of the network and profile context in which you're operating. Make sure to back up your existing configurations before making changes, especially in a production environment."]})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>r});var o=n(7294);const s={},t=o.createContext(s);function r(e){const i=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(t.Provider,{value:i},e.children)}}}]);