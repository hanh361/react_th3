import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import ReactLoading from 'react-loading';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            navigate('/');
        }, 5000);
    }
    return (
        <section className="h-100">
        <div className="container h-100">
          <div className="row justify-content-sm-center h-100">
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div className="text-center my-5">
               <h1>Login</h1>
              </div>
              <div className="card shadow-lg">
                <div className="card-body p-5">
                 
                  {loading ? (
                      <div className="d-flex justify-content-center">
                          <ReactLoading 
                      type='spin' 
                      color='blue' 
                      height={'20%'} 
                      width={'20%'} 
                      />
                      </div>
                  ): (<form onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate autoComplete="off">
                  <div className="mb-3">
                    <label className="mb-2 text-muted" htmlFor="email">E-Mail Address</label>
                    <input id="email" type="email" className="form-control" name="email"  {...register("email", { required: true })}/>
                    <div className="text-danger">
                    {errors.email && <span>This field is required</span>}
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="mb-2 w-100">
                      <label className="text-muted" htmlFor="password">Password</label>
                      <a href="forgot.html" className="float-end">
                        Forgot Password?
                      </a>
                    </div>
                    <input id="password" type="password" className="form-control" name="password" {...register("password", { required: true })} />
                    <div className="text-danger">
                    {errors.password && <span>This field is required</span>}
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="form-check">
                      <input type="checkbox" name="remember" id="remember" className="form-check-input" />
                      <label htmlFor="remember" className="form-check-label">Remember Me</label>
                    </div>
                    <button type="submit" className="btn btn-primary ms-auto">
                      Login
                    </button>
                  </div>
                </form>)}
                  

                 
                </div>
                <div className="card-footer py-3 border-0">
                  <div className="text-center">
                    Don't have an account? <Link to="/register" className="text-dark">Create One</Link>
                  </div>
                </div>
              </div>
              <div className="text-center mt-5 text-muted">
                Copyright © 2017-2021 — Your Company 
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default LoginPage ;