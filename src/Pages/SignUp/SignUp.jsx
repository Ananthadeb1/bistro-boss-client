import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  const  {createUser, updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email,data.password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser)
      updateUserProfile(data.name,data.photoURL)
      .then(()=>{
        console.log('user profile updated');
        reset();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User created successfully',
          showConfirmButton: false,
          timer: 1500
        })
        navigate('/');
      })
      .catch(error=> console.log(error))
    })
  };




  return (
    <>
     <Helmet>
        <title>Bistro Boss | SignUp</title>
      </Helmet>
      <div className="hero min-h-screen bg-slate-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold text-black">Sign up now!</h1>
            <p className="py-6 text-black">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-white">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="name"
                  className="input input-bordered bg-white"
                />
                {errors.name && <span className="text-red-600">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Photo Url</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered bg-white"
                />
                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", {required : true })}
                  placeholder="email"
                  className="input input-bordered bg-white"
                />
                {errors.email && <span className="text-red-600">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password",{required:true, minLength:6 , maxLength:20,pattern: /(?=.*[A-Z])(?=.*[@$!#%*&])(?=.*[0-9])(?=.*[a-z])/})}
                  placeholder="password"
                  className="input input-bordered bg-white"
                />
                {errors.password && <span className="text-red-600">Password is required</span>}
                {errors.password?.type==="minLength" && <span className="text-red-600">Password must be in 6 characters</span>}
                {errors.password?.type ==="maxLength" && <span className="text-red-600">Password should not above then 20 characters</span>}
                {errors.password?.type ==="pattern" && <span className="text-red-600">Password must have one upper case and one lower case and one special character</span>}
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary"  type="submit" value="Signup" />
              </div>
              <p>
                <small>
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-500">
                    Please Log In.
                  </Link>
                </small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
