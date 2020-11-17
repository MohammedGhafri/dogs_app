import Link from 'next/link'

export default function Breeds(props) {
    // console.log(props)
    //   function testme(key){
    // // console.log(key)
    // console.log(Object.values(props.dogs.message[key]))
    return (
        <div>

            {Object.values(props.arr[props.subBreed]).map((elem) =>
                <ul>
                    <li>

                        <Link href='/singleView/[id].tsx' as={`/singleView/${props.subBreed +'_'+elem}`}>
                            <a>{elem}</a>
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    )





    // }
    return (<p>I am here</p>)
}