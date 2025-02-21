import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function UserProfile() {
  const [user, setUser] = useState({})
  const params = useParams()
  const userId = params.id

  useEffect(() =>{
    fetch(`http://localhost:4000/users/${userId}`)
    .then(r => {
      if (!r.ok) { throw new Error("Failed to get user information") }
      return r.json()
    })
    .then(data => setUser(data))
    .catch(error => console.error(error))
  }, [userId])

  return(  
      <aside>
        { user.name ? <h1>{user.name}</h1> : <h1>Loading...</h1> }
      </aside>
  )
}

export default UserProfile