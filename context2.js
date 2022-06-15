import React, { useState, createContext, useContext } from "react";
// import ReactDOM from "react-dom/client";
import Component from "./component";
import Component2 from "./component2";

export const LangContext = createContext()


function App(){
    const[lang, setLang] = useState("english");
    console.log("1sst page", {lang})
    return(
      <div>
        <LangContext.Provider value = {lang}>
            <h1>{`my fav bhasha is ${lang} app file`}</h1>
            <Component lang={lang} />
            <Component2 lang={lang} />
        </LangContext.Provider>
      </div>
    )
}


export default App;




import { useContext } from "react";
// import ReactDOM from "react-dom/client";
import { LangContext } from "./App";

function Component2() {
    const langu= useContext(LangContext);
    console.log('component2', {langu})

    return(
        <div>
            <h2>{`${langu} good, component2`}</h2>
            <h1>2nd sheet</h1>
        </div>
    );
}

export default Component2;