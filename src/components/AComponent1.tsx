import {FC} from "react"

interface props {
    name:string,
    age?:number //* Optional
    
}

const AComponent1:FC <props> = ({ name , age }) => {

    
    return (
        <div className="AComponent">
            
            <h1>{age} {name}</h1>

        </div>
    );
}
 
export default AComponent1;