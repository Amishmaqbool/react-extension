import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import OtpInput from 'react-otp-input';
export default function SignupComponent() {
  const [view, setView] = useState("email");
  const [step, setStep] = useState(1);

  return (
    <>
      <div className="max-w-sm bg-white m-auto min-h-screen shadow-lg">
        {/* Header */}
        <div className={`${step === 6 ? "bg-gradient-to-r from-blue-400 to-purple-500 py-8" : "bg-gray-100 py-4"} flex justify-center w-full mb-6`}>
          {step === 1 && <img src="/images/home.png" alt="home" />}
          {step === 2 && <p className="font-semibold text-black">Verification</p>}
          {step === 3 && <p className="font-semibold text-black">Create NEAR account</p>}
          {(step === 4 || step === 5) && <p className="font-semibold text-black">Secure your account</p>}
          {step === 6 && (
            <div className="flex flex-col items-center">
              <img src="/images/home-white.png" alt="home" />
              <p className="mt-2.5 text-white text-sm font-medium">a web3 gateway to hidden experiences</p>
            </div>
          )}
        </div>
        {/* Sections */}
        <div className="px-6">
          {step === 1 && <Home setStep={setStep} view={view} setView={setView} />}
          {step === 2 && <Verify setStep={setStep} view={view} />}
          {step === 3 && <Register setStep={setStep} />}
          {step === 4 && <Secure setStep={setStep} />}
          {step === 5 && <Seed setStep={setStep} />}
          {step === 6 && <Login setStep={setStep} />}
          {step === 7 && <Profile />}
        </div>
        {/* Footer */}
        {(step === 1 || step === 3) && (
          <div className="mt-6">
            <p className="text-center text-xs px-12 leading-6">
              By creating a NEAR account, you agree to the NEAR {`${step===1?"labs":"Wallet"}`} <span className={`cursor-pointer ${step===1?"text-blue-600":"text-purple-600"}`}>{`${step===1?"Terms & Conditions":"Terms of Service"}`}</span> and <span className={`cursor-pointer ${step===1?"text-blue-600":"text-purple-600"}`}>Privacy Policy</span>.
            </p>
            <div className="w-full border-b border-gray-300 mt-7 mb-6" />
            <p className="text-gray-800 text-sm font-medium text-center mb-2.5">Already have NEAR Account?</p>
            <button className={`font-semibold py-2.5 px-5 rounded-lg flex items-center bg-black text-white m-auto`} type="submit">
              <span className="mr-3">Login with NEAR</span>
              <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.686525 2.70578C0.296737 2.31599 0.298863 1.68189 0.686829 1.29393L0.774674 1.20608C1.16463 0.816125 1.79426 0.813511 2.18874 1.20799L7.27276 6.29202C7.66377 6.68303 7.66724 7.31351 7.27276 7.70799L2.18874 12.792C1.79773 13.183 1.16264 13.1819 0.774674 12.7939L0.686829 12.7061C0.296873 12.3161 0.293524 11.6872 0.686525 11.2942L4.98075 7L0.686525 2.70578Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

const Home = ({ setStep, view, setView }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/\S+@\S+\.\S+/);
  };

  const signup = () => {
    if (view === "email") {
      if (validateEmail(inputValue) === null) return null;
      //   useDispatch();
      dispatch({ type: "ADD_EMAIL", payload: inputValue });
      setStep(2);
    } else {
      if (inputValue.length < 4) return;
      dispatch({ type: "ADD_PHONE", payload: inputValue });
      setStep(2);
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <button
          className={`${view === "email" ? "font-medium border" : undefined} border-gray-300 rounded-lg py-1.5 px-3 mr-4`}
          onClick={() => {
            setInputValue("");
            setView("email");
          }}>
          Email
        </button>
        <button
          className={`${view === "phone" ? "font-medium border" : undefined} border-gray-300 rounded-lg py-1.5 px-3`}
          onClick={() => {
            setInputValue("");
            setView("phone");
          }}>
          Phone
        </button>
      </div>
      <form
        className="mt-6"
        onSubmit={(e) => {
          e.preventDefault();
          signup();
        }}>
        <div className="relative mb-5">
          <input type={view === "phone" ? "text" : view} value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder={`Enter your ${view}`} className="py-3 px-5 w-full h-full rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none" />
        </div>
        <div className="flex justify-center w-full">
          <button disabled={(view === "email" && !validateEmail(inputValue)) || (view === "phone" && inputValue.length < 4)} className={`font-semibold py-2.5 px-5 rounded-lg text-white flex items-center ${(view === "email" && validateEmail(inputValue)) || (view === "phone" && inputValue.length > 4) ? "bg-purple-500" : "bg-gray-300"} `} type="submit">
            <span className="mr-3">Continue</span>
            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.686525 2.70578C0.296737 2.31599 0.298863 1.68189 0.686829 1.29393L0.774674 1.20608C1.16463 0.816125 1.79426 0.813511 2.18874 1.20799L7.27276 6.29202C7.66377 6.68303 7.66724 7.31351 7.27276 7.70799L2.18874 12.792C1.79773 13.183 1.16264 13.1819 0.774674 12.7939L0.686829 12.7061C0.296873 12.3161 0.293524 11.6872 0.686525 11.2942L4.98075 7L0.686525 2.70578Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

const Verify = ({ setStep, view }) => {
  const selectUser = (state) => state.user;
  const { email, phone } = useSelector(selectUser);
  const [OTP, setOTP] = useState("");
  const [isWrongOTP, setIsWrongOTP] = useState(false);
  const defaultOTP = "123456";
  const verify = () => {
    if (OTP === defaultOTP) {
      setStep(3);
    } else {
      setIsWrongOTP(true);
    }
  };
  return (
    <div>
      <p className="mb-5 text-sm text-center w-3/4 m-auto leading-6 text-gray-800">
        {`We've sent a 6-digit verification code to the ${view === "email" ? "email address" : view}`} <br />
        <span className="text-blue-600 font-medium">{view === "email" ? email : phone}</span>
      </p>
      <p className="mb-2 text-gray-600 text-center">Enter verification code</p>
      <OtpInput
        value={OTP}
        onChange={(otp)=>setOTP(otp)}
        numInputs={6}
        isInputNum={true}
        containerStyle="justify-center"
        inputStyle={`otp border ${isWrongOTP ? "border-red-500" : "border-gray-300"} w-10 h-10 bg-gray-100 rounded-md text-gray-800`}
        focusStyle={"border-purple-600 outline-none"}
      />
      <div className="flex justify-center w-full mt-8">
        <button onClick={verify} disabled={OTP .length!==6} className={`font-semibold py-2.5 px-5 rounded-lg text-white flex items-center ${OTP .length===6 ? "bg-purple-500" : "bg-gray-300"} `} type="submit">
          <span className="mr-3">Continue</span>
          <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.686525 2.70578C0.296737 2.31599 0.298863 1.68189 0.686829 1.29393L0.774674 1.20608C1.16463 0.816125 1.79426 0.813511 2.18874 1.20799L7.27276 6.29202C7.66377 6.68303 7.66724 7.31351 7.27276 7.70799L2.18874 12.792C1.79773 13.183 1.16264 13.1819 0.774674 12.7939L0.686829 12.7061C0.296873 12.3161 0.293524 11.6872 0.686525 11.2942L4.98075 7L0.686525 2.70578Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className="w-full border-b border-gray-300 mt-7 mb-6" />
      <p className="text-gray-800 text-sm font-medium text-center">Didn`t receive your code?</p>
      <p onClick={() => setStep(1)} className="text-blue-600 text-sm font-medium text-center my-6 cursor-pointer">{`Send to a different ${view === "email" ? "email address" : view}`}</p>
      <p className="text-blue-600 text-sm font-medium text-center cursor-pointer">
        Resend your code
      </p>
    </div>
  );
};

const Register = ({ setStep }) => {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState("");
  const [accountID, setAccountID] = useState("");

  const register = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_NAME", payload: fullName });
    dispatch({ type: "ADD_ID", payload: `${accountID}.near` });
    setStep(4);
  };
  return (
    <form onSubmit={(e) => register(e)}>
      <p className="text-gray-600 text-sm mb-6">Enter an Account ID to use with your NEAR account. Your Account ID will be used for all NEAR operations, including sending and receiving assets.</p>
      <div className="mb-4">
        <label htmlFor="name">Full Name</label>
        <input required value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder={`Ex. John Doe`} className="mt-2.5 py-3 px-5 w-full rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none" />
      </div>
      <div className="mb-7">
        <label htmlFor="name">Account ID</label>
        <div className="flex items-stretch mt-2.5 w-full relative">
          <input required value={accountID} onChange={(e) => setAccountID(e.target.value)} placeholder={`yourname`} className="py-3 px-5 w-full rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none" />
          <div className="p-3 border-gray-300 border-l rounded-l-none absolute rounded-lg right-0 m-px">.near</div>
        </div>
      </div>
      <button disabled={fullName.length < 4 || accountID.length < 4} className={`font-semibold py-2.5 px-5 rounded-lg text-white flex items-center ${fullName.length < 4 || accountID.length < 4 ? "bg-gray-300" : "bg-purple-500"} m-auto`} type="submit">
        <span className="mr-3">Continue</span>
        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.686525 2.70578C0.296737 2.31599 0.298863 1.68189 0.686829 1.29393L0.774674 1.20608C1.16463 0.816125 1.79426 0.813511 2.18874 1.20799L7.27276 6.29202C7.66377 6.68303 7.66724 7.31351 7.27276 7.70799L2.18874 12.792C1.79773 13.183 1.16264 13.1819 0.774674 12.7939L0.686829 12.7061C0.296873 12.3161 0.293524 11.6872 0.686525 11.2942L4.98075 7L0.686525 2.70578Z"
            fill="white"
          />
        </svg>
      </button>
    </form>
  );
};

const Secure = ({ setStep }) => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [arePasswordsUnmatched, setArePasswordsUnmatched] = useState(false);
  const secure = (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      setArePasswordsUnmatched(true);
      return;
    }
    dispatch({ type: "ADD_PASSWORD", payload: password });
    setStep(5);
  };
  return (
    <form onSubmit={(e) => secure(e)}>
      <p className="text-gray-600 text-sm mb-6">Keep your apps safe from other with access to your computer.</p>
      <div className="mb-4">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => {
            setArePasswordsUnmatched(false);
            setPassword(e.target.value);
          }}
          placeholder={``}
          className={`mt-2.5 py-3 px-5 w-full rounded-lg border ${arePasswordsUnmatched ? "border-red-500" : "border-gray-300"} focus:border-purple-600 focus:outline-none`}
        />
      </div>
      <div className="mb-7">
        <label htmlFor="rePassword">Confirm Password</label>
        <input
          type="password"
          required
          value={rePassword}
          onChange={(e) => {
            setArePasswordsUnmatched(false);
            setRePassword(e.target.value);
          }}
          placeholder={``}
          className={`mt-2.5 py-3 px-5 w-full rounded-lg border ${arePasswordsUnmatched ? "border-red-500" : "border-gray-300"} focus:border-purple-600 focus:outline-none`}
        />
      </div>
      <button disabled={password.length < 4 || rePassword.length < 4} className={`font-semibold py-2.5 px-5 rounded-lg text-white flex items-center ${password.length < 4 || rePassword.length < 4 ? "bg-gray-300" : "bg-purple-500"} m-auto`} type="submit">
        <span className="mr-3">Continue</span>
        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.686525 2.70578C0.296737 2.31599 0.298863 1.68189 0.686829 1.29393L0.774674 1.20608C1.16463 0.816125 1.79426 0.813511 2.18874 1.20799L7.27276 6.29202C7.66377 6.68303 7.66724 7.31351 7.27276 7.70799L2.18874 12.792C1.79773 13.183 1.16264 13.1819 0.774674 12.7939L0.686829 12.7061C0.296873 12.3161 0.293524 11.6872 0.686525 11.2942L4.98075 7L0.686525 2.70578Z"
            fill="white"
          />
        </svg>
      </button>
    </form>
  );
};

const Seed = ({ setStep }) => {
  const dispatch = useDispatch();
  const phrases = ["gather", "engage", "father", "plant", "indigo", "dental", "sick", "fungus", "river", "morning", "love", "cow"];
  const [copiedPhrase, setCopiedPhrase] = useState("");
  const login = () => {
    dispatch({ type: "ADD_SEED", payload: copiedPhrase });
    setStep(6);
  };
  return (
    <>
      <p className="text-gray-600 text-sm mb-6">Keep your apps safe from other with access to your computer.</p>
      <p className="text-black font-semibold text-center mb-4">Seed phrase</p>
      <div className="border border-gray-300 rounded-lg flex justify-center flex-wrap p-1 mx-2.5">
        {phrases.map((phrase, idx) => (
          <div key={idx} onClick={() => setCopiedPhrase(phrase)} className={`border ${copiedPhrase === phrase ? "border-purple-500" : "border-gray-300"} rounded-lg flex items-center pl-1 py-1 pr-3 m-1 cursor-pointer`}>
            <div className={`${copiedPhrase === phrase ? "bg-purple-600" : "bg-gray-700"} rounded-lg flex items-center justify-center p-1 w-6 h-6 text-white text-sm font-medium mr-2.5`}>{idx + 1}</div>
            <p className={`text-sm font-medium ${copiedPhrase === phrase ? "text-purple-500" : "text-gray-800"}`}>{phrase}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center cursor-pointer mt-6 mb-10">
        <svg className="mr-2" width={25} height={24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.98096 4V16C8.98096 16.5304 9.19167 17.0391 9.56674 17.4142C9.94182 17.7893 10.4505 18 10.981 18H18.981C19.5114 18 20.0201 17.7893 20.3952 17.4142C20.7702 17.0391 20.981 16.5304 20.981 16V7.242C20.9809 6.97556 20.9277 6.71181 20.8243 6.46624C20.7209 6.22068 20.5695 5.99824 20.379 5.812L17.064 2.57C16.6903 2.20466 16.1885 2.00007 15.666 2H10.981C10.4505 2 9.94182 2.21071 9.56674 2.58579C9.19167 2.96086 8.98096 3.46957 8.98096 4V4Z"
            stroke="#885FFF"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.981 18V20C16.981 20.5304 16.7702 21.0391 16.3952 21.4142C16.0201 21.7893 15.5114 22 14.981 22H6.98096C6.45052 22 5.94182 21.7893 5.56674 21.4142C5.19167 21.0391 4.98096 20.5304 4.98096 20V9C4.98096 8.46957 5.19167 7.96086 5.56674 7.58579C5.94182 7.21071 6.45052 7 6.98096 7H8.98096"
            stroke="#885FFF"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-purple-600 font-semibold">Copy Seed</p>
      </div>
      <button onClick={login} className={`font-semibold py-2.5 px-5 rounded-lg text-white flex items-center ${copiedPhrase?"bg-purple-500":"bg-gray-300"}  m-auto`} type="submit">
        <span className="mr-3">Continue to Login</span>
        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.686525 2.70578C0.296737 2.31599 0.298863 1.68189 0.686829 1.29393L0.774674 1.20608C1.16463 0.816125 1.79426 0.813511 2.18874 1.20799L7.27276 6.29202C7.66377 6.68303 7.66724 7.31351 7.27276 7.70799L2.18874 12.792C1.79773 13.183 1.16264 13.1819 0.774674 12.7939L0.686829 12.7061C0.296873 12.3161 0.293524 11.6872 0.686525 11.2942L4.98075 7L0.686525 2.70578Z"
            fill="white"
          />
        </svg>
      </button>
    </>
  );
};

const Login = ({ setStep }) => {
  const selectUser = (state) => state.user;
  const user = useSelector(selectUser);
  const [password, setPassword] = useState("");
  const [isWrongPassword, setIsWrongPassword] = useState(false);
  console.log("chosenPassword",user)
  const unlock = () => {
    if (user.password !== password) {
      setIsWrongPassword(true);
      return;
    }
    setStep(7);
  };
  return (
    <>
      <div className="mt-7">
        <p className="text-lg mb-2.5 text-center font-semibold">Welcome back!</p>
        <p className="text-sm text-center">Please enter the password to unlock this wallet</p>
        <div className="my-4">
          <label htmlFor="lPassword">Password</label>
          <input
            id="lPassword"
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder={``}
            className={`mt-2.5 py-3 px-5 w-full rounded-lg border ${isWrongPassword ? "border-red-500" : "border-gray-300"} focus:border-purple-600 focus:outline-none`}
          />
        </div>
        <button onClick={unlock} className={`font-semibold py-2.5 px-5 rounded-lg text-white flex items-center ${password.length > 4 ? "bg-purple-500" : "bg-gray-300"}  m-auto`} type="submit">
          <span className="mr-3">Unlock</span>
          <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.686525 2.70578C0.296737 2.31599 0.298863 1.68189 0.686829 1.29393L0.774674 1.20608C1.16463 0.816125 1.79426 0.813511 2.18874 1.20799L7.27276 6.29202C7.66377 6.68303 7.66724 7.31351 7.27276 7.70799L2.18874 12.792C1.79773 13.183 1.16264 13.1819 0.774674 12.7939L0.686829 12.7061C0.296873 12.3161 0.293524 11.6872 0.686525 11.2942L4.98075 7L0.686525 2.70578Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

const Profile = () => {
  const selectUser = (state) => state.user;
  const { name, id, phone, email, password, seed } = useSelector(selectUser);
  return (
    <>
      <p className="text-center text-black font-semibold mb-6">Welcome to the wallet. Here are your details</p>
      <div className="flex items-center mb-2">
        <p className="text-black font-semibold text-sm w-28">Name: </p>
        <p className="text-sm w-28 mt-0 ml-4">{name}</p>
      </div>
      <div className="flex items-center mb-2">
        <p className="text-black font-semibold text-sm w-28">Client ID: </p>
        <p className="text-sm w-28 mt-0 ml-4">{id}</p>
      </div>
      <div className="flex items-center mb-2">
        <p className="text-black font-semibold text-sm w-28">Phone: </p>
        <p className="text-sm w-28 mt-0 ml-4">{phone}</p>
      </div>
      <div className="flex items-center mb-2">
        <p className="text-black font-semibold text-sm w-28">Email:</p>
        <p className="text-sm w-28 mt-0 ml-4">{email}</p>
      </div>
      <div className="flex items-center mb-2">
        <p className="text-black font-semibold text-sm w-28">Password:</p>
        <p className="text-sm w-28 mt-0 ml-4">{password}</p>
      </div>
      <div className="flex items-center mb-2">
        <p className="text-black font-semibold text-sm w-28">Saved phrase:</p>
        <p className="text-sm w-28 mt-0 ml-4">{seed}</p>
      </div>
    </>
  );
};
