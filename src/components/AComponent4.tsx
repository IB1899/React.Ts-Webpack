import { useContext, useEffect } from "react";
import { Context } from "../contexts/Context";

export enum Levels {
    beginner = "It's matter of time , knowledge and practice",
    intermediate = " It's a matter of time and practice ",
    Senior = " Be grateful for what you have achieved . go and be a lot more "
}

interface props {
    level:Levels
}
//TODO the level prop that we get from the parent component must be of type enum

const AComponent4 = ( {level}:props ) => {

    //ToDo Consuming context's states
    let {Theme , setTheme} = useContext(Context)!;
    useEffect(()=>{
        console.log(Theme);
        setTheme(true);
    },[])
    

    return (
        <div className="AComponent4">

            <h1> {level} </h1>

        </div>
    );
}

export default AComponent4;