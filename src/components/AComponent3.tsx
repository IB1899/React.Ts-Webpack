import { useState, useEffect , ChangeEvent} from 'react';

let AComponent3 = () => {

    let [inputText1 , setInputText1] = useState<string>()

    enum index {zero , First , Second , Third }
    
    let number1:number = index.First; //? Now number has a value of 1
    let number2:index = index.Second; //? Now number has a value of 2
    

    enum colors {
        red = "The color is red",
        blue = "The color is blue",
        green = "The color is green"
    }
    let color1 = colors.red;
    

    return (
        <div className="AComponent3">

            <input type="text" onChange={ (e:ChangeEvent<HTMLInputElement>)=> setInputText1(e.target.value)  }  />
            <p> { inputText1 } </p>

            { number1 + number2 }

        </div>
    )

}

export default AComponent3;