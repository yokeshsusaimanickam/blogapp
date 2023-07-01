
"use client";
import { createContext,useState } from "react";
/* React Context is a way to manage state globally.
It can be used together with the useState 
Hook to share state between deeply nested 
components more easily than with useState alone. */

/* to create context we must import createContext and initialize it like below */
export const themeContext=createContext();
export const ThemeProvider=({children})=>{
   const [mode,setMode]=useState("dark");
   const toggle=()=>{
    setMode(prev=>prev==="dark"?"light":"dark");
   };
   return(
      /* next step of we need to wrap the tree of components that need the state context
          wrap child components in the context provider and supply the state value
          in this child component will be all the children
          next step is in darkmodetoggle.jsx
          */
<themeContext.Provider value={{toggle,mode}}>
      {/* next step is in global css */}
      <div className={`theme ${mode}`}>
{children}
</div>
   </themeContext.Provider>

   )
};