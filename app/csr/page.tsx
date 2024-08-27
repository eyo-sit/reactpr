"use client"
import{useState, useEffect} from "react"




export default  function csr() {
	const [todos, setTodos] = useState([])

	useEffect(() => {
		const fetchTodos = async ()=> {
			const res = await fetch("https://jsonplaceholder.typicode.com/todos")
			const data = await res.json()
			setTodos(data)
		}
		fetchTodos()
	}, [])
	return (
		<main>
			<h1>Client side generated</h1>
			{todos.map((todo : any) => (
				<p key={todo.id}>{todo.title}</p>
			))}
		</main>
  	)
}
