import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import UseAuth from "../../utilities/UseAuth";
const Register = () => {
  const { googleLogin, githubLogin } = UseAuth();
  const handleRegister = (e, media) => {
    e.preventDefault();
    console.log(media());
    media()
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Join Us Now!</h1>
            <p className="py-6">
              Your business is a reflection of yourself, and you work hard for
              it. Your marketing and branding should support that. That’s why
              you don’t need just another design tool, you need an entire
              workshop.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div>
                  <p>
                    Already Have an account? click{" "}
                    <Link to={"/login"}>
                      <span className="border-b-2 border-blue-500 text-blue-500">
                        login
                      </span>
                    </Link>
                  </p>
                </div>
                <div className="form-control mt-6">
                  <button onClick={handleRegister} className="btn btn-primary">
                    Register
                  </button>
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-semibold">Join Us Using</h2>
                  <div>
                    <button onClick={(e) => handleRegister(e, googleLogin)}>
                      <FcGoogle className="text-5xl shadow-lg rounded-full hover:border hover:border-blue-500" />
                    </button>
                    <button onClick={(e) => handleRegister(e, githubLogin)}>
                      <BsGithub className="text-5xl shadow-lg rounded-full hover:border hover:border-blue-500" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
