import useIbrahim from "../hooks/useIbrahim";
import catPng from "/public/images/cat.jpg"

let Home = () => {

    let result = useIbrahim()

    return (
        <div className="Home">
            <h1>This is home page</h1>

            {result}

            <img src={catPng} alt="" />
            <img src="./images/cat.jpg" alt="cat" />

        </div>
    )

}

export default Home;