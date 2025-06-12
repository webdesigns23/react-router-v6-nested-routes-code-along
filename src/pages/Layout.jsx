import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"


function Layout(){
    const [users, setUsers] = useState([])

    useEffect(() =>{
        fetch("http://localhost:4000/users")
        .then(r => {
            if (!r.ok) { throw new Error("failed to fetch users") }
            return r.json()
        })
        .then(data => setUsers(data))
        .catch(error => console.error(error))
    }, [])

    return(
        <>
            <header>
                <NavBar />
            </header>
            <Outlet context={users}/>
        </>
    )
}