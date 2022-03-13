
import { useRouter } from "next/router"



const postDetails = ({ post }) => {

    const router = useRouter()
    console.log(router)
    // const {productId} = router.query


    return (
        <div>
            <h1>
                {/* Product  {productId} */}
            </h1>
            <h1> {post.id} </h1>
            <h1> {post.title} </h1>
            <p> {post.body} </p>
        </div>
    )

}


export default postDetails








export async function getStaticPaths() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    const paths = data.map( (post) => {
        return {
            params: {
                postId: `${post.id}`,
            }
        }
    })


    return {
        paths,
        fallback: false
    }

}



export async function getStaticProps(context) {
    console.log(context)

    const { postId } = context.params

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = await res.json()


    return {
        props: {
            post: data,
        },
        revalidate: 10,
    }

}


