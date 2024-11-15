/**
 * Jupiter Terminal Widget for Framer by MJN (manjumjn.com)
 * reuseui.com | framervariants.framer.website
 *
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */import{jsx as _jsx,jsxs as _jsxs,Fragment as _Fragment}from"react/jsx-runtime";import{useRef,useEffect,useState}from"react";const loadJupiter=()=>{// modify this options based on your settings
const options={displayMode:"integrated",integratedTargetId:"fv-jp-terminal",endpoint:"https://api.mainnet-beta.solana.com"};// do not edit integratedTargetID
window.Jupiter.init({...options,integratedTargetId:"fv-jp-terminal"});};export default function FvJupiterTerminal(props){const currentElement=useRef();const currentElemetId="fv-jp-terminal";const[loaded,setLoaded]=useState(false);const[failedLoading,setFailedLoading]=useState(false);const[isInsetingScript,setIsInsertingScript]=useState(false);const loadDynamicScript=()=>{if(isInsetingScript)return;const script=document.createElement("script");script.src="https://terminal.jup.ag/main-v3.js";script.async=true;setIsInsertingScript(true);script.onload=()=>{setLoaded(true);loadJupiter();};script.onerror=()=>{setFailedLoading(true);};document.body.appendChild(script);};useEffect(()=>{loadDynamicScript();});const styles=`#jupiter-terminal{min-height: 400px}`;return failedLoading?/*#__PURE__*/_jsx("p",{children:"Failed to load jupiter script"}):/*#__PURE__*/_jsxs(_Fragment,{children:[/*#__PURE__*/_jsx("style",{children:styles}),/*#__PURE__*/_jsx("div",{...props,ref:currentElement,id:currentElemetId})]});}FvJupiterTerminal.displayName="Jupiter Terminal Widget - FV";
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FvJupiterTerminal","slots":[],"annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./JupiterTerminal.map
