import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';


const Register = () => {
  const navigate = useNavigate()
    const {createUser,signWithGoogle}=useContext(AuthContext)


    const handleRegister=e=>{
        e.preventDefault() 
        const name=e.target.name.value
        const email=e.target.email.value
        const password=e.target.password.value
        console.log(name,email,password);

        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            e.target.reset()
            navigate('/login')
        })
        .catch(error =>{
            console.log('Error', error.message)
        })
    }

    const handleGoogle = ()=>{
      signWithGoogle()
      .then((result)=>{
        console.log(result.user)
        navigate('/')
      })
      .catch((error)=>{
        console.log('Error', error.message)

      })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className='p-3'>Alrady Habe an account ? plese <NavLink className='text-blue-500 font-semibold' to='/login'> Login</NavLink></p>
            <a onClick={handleGoogle} className='btn'>Google</a>
          </div>
        </div>
      </div>
    );
};

export default Register;