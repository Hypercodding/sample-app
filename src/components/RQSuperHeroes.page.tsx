import axios from "axios"
import { useQuery } from "react-query"

interface Hero {
    id: number;
    name: string
}
export const RQSuperHeroesPage = () => {
    const {isLoading, data} = useQuery('super-hero', ()=>{
        return axios.get("http://localhost:4000/superheroes")
    })

    if(isLoading){
        return <h2>Loading....</h2>
    }
  return (
    <>
        <h1>Super Herous Query</h1>
        {
            data?.data.map((hero : Hero)=>{
                return <div key={hero.id}>{hero.name}</div>
            })
        }
    </>
  )
}
