import Header from '../components/header'
function refreshPage(){
    window.location.reload();
} 
export default function RandImage(props){
    // console.log(props.info)
    console.log(props.info.split('/'))
return(
    <>
    <Header />
    <h2 className='randh2'>Random Image For a dog</h2>

<button className='fetchButton' onClick={()=>{refreshPage()}}>Fetch</button>
    <img className='randImage' src={props.info}/>
<p className='randPara'>This Dog is : <strong>{props.info.split('/')[4]}</strong></p>
    </>
)
}

export async function getServerSideProps(){
 

    const res= await fetch(`https://dog.ceo/api/breeds/image/random`)
    const singleData = await res.json();
    
    return {props: {info: singleData.message}}
    
}