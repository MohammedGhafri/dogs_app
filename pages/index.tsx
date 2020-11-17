import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Breeds from '../components/breedsFun'
// import BreedRandImg from '../components/breedImg'
import Bri from '../components/breedImg'

export default function Home(props) {
 

  return (
    <>
      <Header />

      <div className='breedsList'>
        <h1>Ghafri</h1>
        <h3>Breeds that are exist</h3>
        {Object.keys(props.dogs.message).map((item) =>



  <div><p>{item}</p>
  {/* <img src={`https://dog.ceo/api/breed/item/images`} /> */}
  {/* <BreedRandImg id={item}/> */}
  <Bri id={item}/>
    <strong>{props.dogs.message[item].length? <Breeds subBreed={item} arr={props.dogs.message}/>:null}</strong></div>   
  



        )}
       


        </div>
    </>
  )
}


export async function getServerSideProps() {
  const res = await fetch('https://dog.ceo/api/breeds/list/all')
  const myData = await res.json();
  
  return { props: { dogs: myData } };
}
