


import Header from "../../components/header";



// import Header from '../comp/Header'
// import Footer from '../comp/Footer'


export default function singleView(props){
    let limit =props.info.length
    let a =Math.floor(Math.random() * limit) + 1
    console.log(props,a)
    return(
        <>
        <main>
            <h1>Mohammed Ghafri</h1>
        < Header />
        <div className="infoDiv">
        {/* <h1>{props}</h1> */}
        <img  src ={props.info[a]}/>
        </div>
        </main>
        {/* < Footer /> */}
</>
    );
}

export async function getServerSideProps(context){
// console.log(context.query)
    const id=context.query.id
    const breed=id.split('_')[0]
    const subBreed=id.split('_')[1]

    const res= await fetch(`https://dog.ceo/api/breed/${breed}/${subBreed}/images`)
    const singleData = await res.json();
    // console.log(singleData.message)
    return {props: {info: singleData.message}}
    // return {props:{info:{'mmmmmmmmm':1}}}
}