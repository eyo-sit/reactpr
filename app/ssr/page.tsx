
const fetchTodos = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/todos", { cache: 'no-store' });
	const data = await res.json();
	return data;
}

export default async function ssr() {
	const todos = await fetchTodos();	
	return (
		<main>
			<h1>Server side generated</h1>
			{todos.map((todo: any) => (
				<p key={todo.id}>{todo.title}</p>
			))}
		</main>
  	)
}
