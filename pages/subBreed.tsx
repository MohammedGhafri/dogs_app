import axios from 'axios'

import Header from '../components/header'

export default function SubBreedImages(props) {
    // props.subDogsbreeds.map((item)=>{
    //     console.log("mmmmmmmmm")
    // })
    // console.log("***********",props.subDogsbreeds)
    // props['subDogsbreeds.'].map((item)=>{
    //     console.log(item['imageswithNames'].map(item=>{item['image']['message'].map((theImage)=>{
    //         <img src={theImage}/>
    //     })}))
    // }    )
    return (
        <>
            <Header />
            <section>
            {

                props.subDogsbreeds.map(item=>item.map(item2=>
                    <div>{
                        item2.image.map(item3=><img src={item3}/>)}
                    </div>))
            }
            </section>
            <div>Ghafri Sub Breed</div>
        </>)
}


export async function getServerSideProps() {
    const res = await fetch('https://dog.ceo/api/breeds/list/all')
        // for (var elem in )
        ;
    var myData = await res.json();
    myData = myData.message
    // console.log(myData['australian'].length)
    var i = 0
    var obj = {}
    for (var elm in myData) {
        if (myData.hasOwnProperty(elm) && (myData[elm].length)) {
            var arr = []

            // console.log(i++)
            myData[elm].map((item) => {
                arr.push(item)
            })
            obj[elm] = arr
        }
    }

    var allsubBreedsImgs = []

    var keyArray = Object.keys(obj)
    for (var i = 0; i < keyArray.length; i++) {
        var valuesArray = obj[keyArray[i]]
        var images = []

        for (var j = 0; j < valuesArray.length; j++) {
            // console.log(i, j, keyArray[i], valuesArray[j])
            var breed = keyArray[i];
            let subBreed = valuesArray[j]
            const res2 = await fetch(`https://dog.ceo/api/breed/${breed}/${subBreed}/images`)
            var myData2 = await res2.json();
            images.push({name:subBreed,image:myData2.message})
            // console.log(myData2.message)


        }
        allsubBreedsImgs.push(images)


    }
    return { props: {  subDogsbreeds: allsubBreedsImgs } };
}