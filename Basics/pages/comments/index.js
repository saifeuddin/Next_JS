import React, { useState } from 'react'

function comments() {

    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')


    const fetchComments = async ()=> {
        const res = await fetch('api/comments')
        const data = await res.json()
        setComments(data)
    }

    const submitComments = async ()=> {
        const res = await fetch('api/comments', {
            method: 'POST',
            body: JSON.stringify( { comment } ),
            headers: {
                'Content-Type' : 'application/json'
            }
        })

        const data = await res.json()
    }
    
    const deleteComment = async (id)=> {
        const res = await fetch(`api/comments/${id}`, {
            method: "DELETE"
        })

        const data = await res.json()
        fetchComments()
    }


    return (
        <>
        <br />
            <input type="text" value={comment} onChange={e => setComment(e.target.value)} /> <b></b>
            <button onClick={submitComments} className='btn btn-primary'> Submit Comment </button>

            <br />
            <br />
            <button onClick={fetchComments} className='btn btn-primary'> Load Comments </button>
            {
                comments.map( (c) => {
                    return (
                        <div key={c.id}>
                            <h1> {c.id} {' '} {c.text} </h1>
                            <button onClick={()=> deleteComment(c.id)}> Delete </button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default comments
