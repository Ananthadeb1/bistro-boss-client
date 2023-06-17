import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
    const captchaRef = useRef(null)
    const [disabled, setDisabled ] = useState(true);
    
    const {signIn}=useContext(AuthContext)

    useEffect(()=> {
        loadCaptchaEnginge(6);
    }, [])


    const handelValidateCaptcha = () =>{
        const captcha_Value = captchaRef.current.value;
        console.log(captcha_Value)
        if (validateCaptcha(captcha_Value)) {
            setDisabled(false)
        }
   
        else {
            setDisabled(true)
            alert('Captcha Does Not Match, Try again! Latter case matters');
        }
    }
    const handelLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email,password)
        .then(result =>{
          const user = result.user;
          console.log(user)
        })
    }
    return (
    <div >
      <div className="hero min-h-screen bg-slate-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-white">
            <form onSubmit={handelLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered bg-white"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered bg-white"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-black">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  ref={captchaRef}
                  name="captcha"
                  placeholder="type the above text "
                  className="input input-bordered bg-white"
                />
                <button onClick={handelValidateCaptcha} className="btn btn-outline btn-xs mt-3 text-black">Verify</button>
              </div>
              <div className="form-control mt-6">
                <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
              </div>
            <p><small>New here? <Link to="/signup" className='text-blue-500'>create an account.</Link></small></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
