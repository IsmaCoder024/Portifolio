import './Homepage.css';
import Header from "../componets/Header";
import Navigation from "../componets/Navigation";
import HomeItem from "../componets/HomeItem";

function Homepage(){

    const links = [
        { label: "Projects", path:""},
        { label: "Repository", path:""}
    ]
   
    return (
        <>
        <Header title={"Isma"} theme={"to my portifolio"}/>
        <Navigation links={links}/>

        <div className='main'>

        <div className="main-left">
            <HomeItem title={"My awesome portifolio"} description={"My awesome portifolio"}/>
        </div>

        <div className="main-right">
               <HomeItem title={"Portfolio"} description={"Free us"} />
        </div>

        </div>
        
        </>
    )
}

export default Homepage;