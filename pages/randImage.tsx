export default function RandImage(props){
    console.log(props.info)
return(
    <>
    <p>Random Image For a dog</p>
    <img src={props.info}/>
    </>
)
}

export async function getServerSideProps(){
 

    const res= await fetch(`https://dog.ceo/api/breeds/image/random`)
    const singleData = await res.json();
    
    return {props: {info: singleData.message}}
    
}