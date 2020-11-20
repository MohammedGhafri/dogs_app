import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Breeds from '../components/breedsFun'
// import BreedRandImg from '../components/breedImg'
import Bri from '../components/breedImg'


function randomNumber(limit){
  let a =Math.floor(Math.random() * limit) + 1
  // console.log(a,"from index",limit)
  return a
}
export default function Home(props) {
//  console.log(Object.values(props.dogs.message['australian']))

  return (
    <>
      <Header />

        <h1 className='mainSubject'>Dogs Breeds</h1>
        {/* <h3 className=''>Breeds that are exist</h3> */}
      <div className='breedsList'>
        {Object.keys(props.dogs.message).map((item) =>



  <div className='divInmain'><p className='paraInmain'>{item.replace(/\b\w/g, l => l.toUpperCase())}</p>
  
  <Bri id={item} lim={randomNumber(Object.values(props.dogs.message[item]).length)}/>
  
    <strong className='subBreedsTexts'>{props.dogs.message[item].length? <Breeds  subBreed={item} arr={props.dogs.message}/>:null}</strong></div>   
  



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
