import {useMutation, useQueryClient} from '@tanstack/react-query'

export default function Todos(){
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationKey:['todos'],
        mutationFn: async () => fetch(
            'https://dummyjson.com/todos/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  todo: 'Use DummyJSON in the project',
                  completed: false,
                  userId: 5,
                })
        }).then(res => res.json()).then((data) => {
            console.log(data)
            return data;
        }),

        onMutate: async () => {
            await queryClient.cancelQueries({queryKey: ['todos']});

            const prevTodos = queryClient.getQueryData(['todos'])

            queryClient.setQueryData(['todos'], (old) => 
                old.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo)
            );

            return {
                prevTodos
            }
        },

        onError: (err, updatedTodo, context) => {
            queryClient.setQueryData(['todos'], context.prevTodos)
        },

        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['todos']})
        }
    })

    return <button onClick={() => mutation.mutate()}>update</button>
}
