import comments from "../../data/comments"


const comment = ({ comment }) => {

    return (
        <div>
            {comment.id} { comment.text}
        </div>
    )
}

export default comment


export const getStaticPaths = async () => {

    return {
        paths: [
            {params: {commentId: '1'} },
            {params: {commentId: '2'} },
            {params: {commentId: '3'} },
        ],
        fallback: false,
    }
}

export const getStaticProps = async (context) => {

    const { params } = context
    const { commentId } = params

    const comment = comments.find(comment => comment.id === parseInt(commentId))

    return {
        props: {
            comment,
        },
    }
}