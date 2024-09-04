"use client"
import{useState, useEffect} from "react"




export default  function csr() {
	const [message, setMessage] = useState([])
	const fetchMessage = async () => {
		const response = await fetch("/api/todos")
		const message = await response.json()	
		console.log(message)
		setMessage(message)
	}
	
	return (
		<main>
			<h1 onClick={ fetchMessage }>Client side generated</h1>
		</main>
  	)
}
