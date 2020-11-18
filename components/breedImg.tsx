import React from 'react'
import axios from 'axios'

class Bri extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            images: '',
            a: 1,
        }
        
        // this.tocheckImage = this.tocheckImage.bind(this);
        // this.tocheckImage = this.tocheckImage.bind(this);

        this.handler()

    }

    async handler() {

        const res = await fetch(`https://dog.ceo/api/breed/${this.state.id}/images`)
        const singleData = await res.json();
        const imageslist = singleData.message
        let limit = imageslist.length
        const a = Math.floor(Math.random() * limit) 
        this.setState({
            images: imageslist,
            a: a

        })
        
    }
    componentDidMount() {
        this.setState({ ruinPerformance: true })
    }

    // tocheckRandom(a) {
    //     if (a) {
    //         return a
    //     } else {
    //         return 1
    //     }
    // }
    // tocheckImage() {
    //     let img = this.state.images[this.tocheckRandom(this.state.a)]
    //     if (img) {
    //         return img
    //     } else {
            
            
    //         let a=this.state.a
    //         console.log("inside Else",a)
            
    //         return this.state.images[a]
    //     }
        
    // }
    // timeout(delay: number) {
    //     return new Promise(res => setTimeout(res, delay));
    // }

    render() {
        if (!(this.state.images[0])) {

            return <div>Loading</div>

        }
        
        return (<img style={{ width: '200px', height: '200px' }} src={this.state.images[(this.state.a)]} />)
       
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