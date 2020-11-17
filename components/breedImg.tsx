import React from 'react'
import axios from 'axios'

class Bri extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            id : props.id,
            images:''
        }
        // console.log(props,"From constructor")
    }

    async handler(){
        const res= await fetch(`https://dog.ceo/api/breed/${this.state.id}/images`)
    const singleData = await res.json();
    const imageslist=singleData.message
    let limit =imageslist.length
    this.setState({
        images:imageslist
    })
    let a =Math.floor(Math.random() * limit) + 1
    // console.log(props,a)
    console.log(singleData.message,a)
    }
    
    render(){
        this.handler()
return(<img src={this.state.images}/>)
    }
}
export default Bri



















// import Header from "../../components/header";



// import Header from '../comp/Header'
// import Footer from '../comp/Footer'


// export default function BreedRandImg(props){
//     // let limit =props.info.length
//     // let a =Math.floor(Math.random() * limit) + 1
//     // console.log(props,a)
//     console.log(props)
    
//     return(
// //         <>
//         <main>
//             <h1>Mohammed Ghafri</h1>
       
//         </main>

// // {/* <img src={props.info[a]} /> */}
//     );
// }

// export async function getServerSideProps(context){
// console.log("context.query")
//     const id=context.query.id
//     // const breed=id.split('_')[0]
//     // const subBreed=id.split('_')[1]

//     const res= await fetch(`https://dog.ceo/api/breed/${id}/images`)
//     const singleData = await res.json();
//     console.log(singleData.message)
//     return {props: {info: singleData.message}}
//     // return {props:{info:{'mmmmmmmmm':1}}}
// }