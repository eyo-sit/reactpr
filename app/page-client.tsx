"use client"

import Link from "next/link";
import {useState, useEffect} from "react";

export default function Home() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchTodos = async () => {
			const res = await fetch("https://jsonplaceholder.typicode.com/todos");
			const data = await res.json();
			setData(data);	
		}
		fetchTodos()
	}, [])
	
	return (
		<main>
			<Link href={'/about'}>Navigate to about page</Link>
			<h1>Hello Next 13</h1>
			{data.map((todo) =>( 
				<div key = {todo['id']}>
					{todo['id']}
				</div>
			))}
		</main>
  	)
}
