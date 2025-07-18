import React , {useState} from 'react'
import AuthLayout from '../../components/AuthLayout';
import {Link, useNavigate} from 'react-router-dom';
import Input from '../../components/Input';
import ProfilePhotoSelector from '../../inputs/ProfilePhotoSelector';
import { validateEmail } from '../../utils/helper';
//validatehelper import

const Signup = () => {
  const [profilePic , setProfilePic] = useState("null");
  const [fullname , setFullname] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const [error,setError] = useState("null");
  const navigate = useNavigate();

  //signup form submission
  const handleSignup = async (e) =>{
    e.preventDefault();
    let profileImageUrl = "";
    if(!fullname){
      setError("Please enter your name");
      return;
    }
    if(!validateEmail(email)){
      setError("Please mention valid email");
      return;
    }
    if(!password){
      setError("Please enter the password");
      return;
    }
    setError(""
      //singup api call
    )
  }
  return (
    <AuthLayout>
      <div className='lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Create an Account</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>Join us today by entering your details below</p>

        <form onSubmit={handleSignup}>

          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic}/>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Input
            value = {fullname}
            onChange={({target}) => setFullname(target.value)}
            label="Full name"
            placeholder="John"
            type="text"
          />
          <Input
            value = {email}
            onChange={({target}) => setEmail(target.value)}
            label="Email Address"
            placeholder="John@gmail.com"
            type="text"
          />
          <div className='col col-span-2'>
          <Input
            value = {password}
            onChange={({target}) => setPassword(target.value)}
            label="Full name"
            placeholder="Min 8 Characters"
            type="text"
          />
           </div> 
          </div>

          {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
                       <button type='submit' className='btn-primary'>SIGN UP</button>
                       <p className='text-[13px] text-slate-800 mt-3'>Already have an Account?{" "}
                       <Link className='font-medium text-primary underline' to="/login">Login</Link>
                       </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Signup
