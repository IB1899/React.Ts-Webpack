import React, { createContext, useState } from 'react';

interface properties {
    Theme:string | boolean,
    setTheme:Function
}

export let Context = createContext<properties | null>(null);

let ContextProvider = (props:any) => {

    let [Theme, setTheme] = useState<boolean | string>(false);

    console.log(Theme);

    return (
        <Context.Provider  value={{ Theme , setTheme }} >

            {props.children}

        </Context.Provider>
    )

}

export default ContextProvider;