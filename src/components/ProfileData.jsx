
const ProfileData = ({ profile }) => {

    const { avatar_url, followers, following, public_repos, url, login, name, created_at } = profile;

    const createDate = new Date(created_at);
  return (
    <div className='container justify-content-center align-items-center py-3'>
      <div className="row">
        <div className="col-md-6 offset-md-3">
        <div className="card bg-dark text-success border-success p-2">
          <img src={ avatar_url } className=" card-img-top rounded-pill w-55 text-center p-2 border border-2 border-success" alt="Profile-Image"/>
          <div className="card-body">
            <h5 className="card-title text-center">Profile <i className="fa-solid fa-address-card"></i></h5>
            <hr className="" />
            
            <a href={`https://api.github.com/users/${ login }`} className="btn btn-outline-success w-100">{ name || login } <i className="fa-solid fa-face-smile"></i></a>
            
            <p className="card-text mt-4"><i className="fa-solid fa-book-bookmark"></i> Public Repos { public_repos }</p>
            <p className="card-text"><i className="fa-solid fa-user-plus"></i> Followers { followers }</p>
            <p className="card-text"><i className="fa-solid fa-user-group"></i> Following { following }</p>
            <hr className="" />
            <p className="card-text text-center fst-italic">User Joined On {`${createDate.getDate()} ${createDate.toLocaleDateString('en-us', { month : 'short' })} ${createDate.getFullYear()}`}</p>
          </div>
        </div>
        </div>
      </div>
        
    </div>
    
  )
}

export default ProfileData