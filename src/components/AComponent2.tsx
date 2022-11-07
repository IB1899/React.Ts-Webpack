import { useEffect, useState } from 'react';

interface props {
    name?: string,  //* Optional
    age: number
}

const AComponent2 = (props: props) => {

    let { name, age } = props;

    let [state, setState] = useState("");


    let [state1, setState1] = useState<string>("This is a state");

    let [state2, setState2] = useState<number | null>(null);

    let [state3, setState3] = useState<"Mike" | "Jane">();

    useEffect(() => {

        setState3("Mike");
        //! setState3("hi");

    }, [])


    return (
        <div className="AComponent2">

        </div>
    );
}

export default AComponent2;