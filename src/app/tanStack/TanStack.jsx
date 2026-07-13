import { useQuery } from '@tanstack/react-query'

export default function TanStack() {

  const {isPending, data, error} = useQuery({
    queryKey: ['repoData'],
    queryFn: () => fetch('https://api.github.com/repos/TanStack/query').then((res) => res.json())
  })

  console.log(data)

        if(error) return(
            <div>
                <p>error fetching data!</p>
            </div>
        )

        if(isPending) return (
            <div>
                <p>loading...</p>
            </div>
        )
        
        return (
            <div className="text-white">
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                <strong>👀 {data.subscribers_count}</strong>{' '}
                <strong>✨ {data.stargazers_count}</strong>{' '}
                <strong>🍴 {data.forks_count}</strong>
            </div>
        )
}
