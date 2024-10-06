import { useState, useEffect } from "react";
import ProfileData from "./ProfileData";
import Spinner from "./Spinner";
const GithubProfileFinder = () => {

  const [userName, setUserName] = useState('Watuulo-Richard');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  async function fetchGithubUserData() {
    setLoading(true)

    const res = await fetch (`https://api.github.com/users/${userName}`);

    const data = await res.json();

    if(data) {
      setUserData(data)
      setLoading(false)
      setUserName('')
    }

    console.log(data);
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevents form from reloading the page
    fetchGithubUserData()
  }

  useEffect(()=>{
    fetchGithubUserData()
  }, []);

  if(loading) {
    return <Spinner loading={ loading }/>
  }
  return (
    
    <div className="bg-dark text-white min-vh-100   justify-content-center align-items-center py-3">
      <div className="row container">
        <div className="col-md-6 offset-md-3">
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input name="search" className="form-control me-2 bg-dark text-success border-success focus-ring-success" type="search" placeholder="Enter Username..." aria-label="Search" value={ userName } onChange={(event) => setUserName(event.target.value)}/>
              <button className="btn btn-outline-success" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
          </form>

          {
            userData !== null ? <ProfileData profile={userData} /> : null
          }
        </div>
      </div>
    </div>
  )
}

export default GithubProfileFinder