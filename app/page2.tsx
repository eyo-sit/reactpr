const fetchTodos = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/todos");
	const data = await res.json();
	return data;
}

export default async function Home() {
	const todos = await fetchTodos();	
	return (
		<main>
			<h1>Statically generated</h1>
			{todos.map((todo: any) => (
				<p key={todo.id}>{todo.title}</p>
			))}
		</main>
  	)
}
