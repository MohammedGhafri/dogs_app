import Link from 'next/link'

export default function Breeds(props) {
  
    return (
        <div className='divFromBreedsFun'>
            <p>Sub Breeds</p>
            {Object.values(props.arr[props.subBreed]).map((elem) =>
                <ul className='ullll'>
                    <li>

                        <Link href='/singleView/[id].tsx' as={`/singleView/${props.subBreed + '_' + elem}`}>
                            <a>{elem}</a>
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    )





    
}