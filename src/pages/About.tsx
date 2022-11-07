import {FC} from "react";

import AComponent1 from "../components/AComponent1";
import AComponent2 from "../components/AComponent2";
import AComponent3 from "../components/AComponent3";
import AComponent4 , { Levels } from "../components/AComponent4";


let About:FC = () => {

    let Name:string = "Ibrahim";
    let age:number = 17.7;

    let func = (Name:string):string=>{
        if(Name === "Ibrahim") return Name + age
        else  return "Not exist"
    }
    
    
    return (
        <div className="About">
            <h1> This is about page </h1>

            <h2> {func(Name)  }  </h2>

            <AComponent1 name={Name} age={age} />
            <AComponent2 name={Name} age={age} />
            <AComponent3 />
            <AComponent4  level={Levels.Senior} />
        </div>
    );
}
 
export default About;