import Link from "next/link"

const postList = ({post}) => {


    return (
        <div>
            {
                post.map( (p) => {
                    return (
                        <div key={p.id}>
                            <h1> {p.title} </h1>
                            <p> {p.body} </p>
                            <hr />
                            <Link href={`posts/${p.id}`}>
                                <button className='btn btn-primary'> Go to </button>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )

}


export default postList



// export async function getStaticProps() {

//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//     const data = await res.json()


//     return {
//         props: {
//             post: data,
//         },
//     }

// }


export async function getServerSideProps(context) {
    console.log(context)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()


    return {
        props: {
            post: data,
        },
    }

}