import Head from "next/head"
import useSWR from "swr"



const fatcher = (...args)=> fetch(...args).then((res) => res.json())

export default function Home() {

    const {data, error } = useSWR('https://jsonplaceholder.typicode.com/posts?_limit=6', fatcher)

    console.log(data)


    if(error) return <div> Failed To Load </div>
    if(!data) return <div> Loading..... </div>



    return (
        <>
            <Head>
                <title>
                    Web Dev Next JS
                </title>
            </Head>
            {
                data.map(d => {
                    return (
                        <div key={d.id} className='container'>
                            <h1 className='mt-5 bg-primary p-4'> Title : {d.title} </h1>
                            <p className='ps-3'> Description :
                                {d.body}
                            </p>
                        </div>
                    )
                })
            }
        </>
    )

}

