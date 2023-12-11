import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import logo from '../../assets/images/logo.png';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import OtpInput from 'react-otp-input';
import Swal from "sweetalert2";
import { useLogInUserMutation, useLoginverifyOtpMutation } from "../redux/api";


const schema = yup.object({
  username: yup.string()
    .matches(/^[a-zA-Z ]*$/, "Name should be in alphabets")
    .required("Username is required")
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name should not exceed 20 characters")
    .trim(),
  password: yup.string()
    .min(7, "Password must be at least 7 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Minimum eight characters, at least one uppercase, one lowercase, one number and one special character"
    )
    .required("Password is required"),
});

const Login = (props) => {
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [ addUser]= useLogInUserMutation();
  // const [logInUser] = useLoginverifyOtpMutation();
  const [CaptchaIsDone, setCaptchaIsDone]= useState(false);

  function onChange(value) {
    console.log("Captcha value:", value);
    setCaptchaIsDone(true);
  }

  

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await addUser (data);
      if (response.error) {
        const otperrorMessage = response.error.data.message
        toast.error(otperrorMessage, {
            position: toast.POSITION.TOP_CENTER
        })
    } else {
        console.log(response);
        const otpMsg = response.data.updateOtpData.otp.code
        console.log(otpMsg);
        const getUserID = response.data.updateOtpData._id
        localStorage.setItem('userId', getUserID)
        // const token = response.data.token
        // localStorage.setItem('LoggedUserToken',JSON.stringify(token))
        toast.info(`Your OTP ${otpMsg}`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 10000,
            closeOnClick: true
        });
        navigate('/LoginOtp')

    }
        console.log(response);
      const userid = response.data.user._id
      // console.log(response.data.token,"hygfyutgfyu");
      const token = response.data.token
      localStorage.setItem("token", token)
      localStorage.setItem("loggedInUser", JSON.stringify(response.data.user._id))
      console.log(response.data.user._id);
      // console.log(userid);     
        setModal(true);

    } catch (error) {
      // toast.error("Invalid username or password");
      console.error("Login failed", error);
    }
    resetField("username");
    resetField("password");
  };

  
  // const handleVerify = () => {
  //   // Simulate OTP verification logic
  //   if (otp) {
  //     setOtp("");
  //     setModal(false);
  //     Swal.fire({
  //       icon: 'success',
  //       title: 'OTP Verified',
  //       text: 'Your email has been verified successfully!',
  //     });
  //     toast.success("Successfully logged in!");
  //     navigate('/kyc');
  //   } else {
  //     toast.error("Oops, incorrect OTP");
  //   }
  // };

  // const renderInput = (props, index) => {
  //   return (
  //     <input
  //       key={index}
  //       {...props}
  //       style={{
  //         width: "40px",
  //         height: "40px",
  //         marginRight: "5px",
  //         textAlign: "center",
  //         backgroundColor: "gray",
  //       }}
  //     />
  //   );
  // };

  return (
    <Fragment>
      <Header />
      <div className="Main-section cmsSec" style={{ paddingTop: '80px' }}>
        <div className="container container-1200">
        <ToastContainer limit={1} />
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="LgnPg">
                <img src={logo} className="img-fluid d-block mx-auto" />
                <h3>LOGIN</h3>
                <form className="p-5 rounded h-100 mb-5" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      name="Username"
                      {...register('username')} />
                    <div className="text-danger">{errors.username?.message}</div>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      {...register('password')}
                    />
                    <div className="text-danger">{errors.password?.message}</div>
                  </div>
              
                  <a href="/forgotpassword">Forgot Password</a>
                
               <button type="submit" className="btn LGn-btn">Login</button>  
                  <p>Don’t have an account?<a href="/register" className="ml-2" >Register</a></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Modal isOpen={modal} toggle={() => setModal(!modal)} modalClassName="CmmnMdl" className="modal-md">
        <ModalBody>
          <div className="MdlHdr BrdBttm pb-3 mb-3 ">
            <div className="StkMdlHdd ">
              <h4 className="mb-0 ">
                <span>Verify</span> Your Mail
              </h4>
            </div>
          </div>
          <div className="modal-body">
            <OtpInput
              value={otp} */}
              {/* onChange={(otp) => setOtp(otp)}
              numInputs={6}
              renderSeparator={
                <span
                  style={{
                    color: "gold",
                    marginRight: "5px",
                  }}
                >
                  -
                </span>
              }
              containerStyle={{ display: "flex", justifyContent: "center" }}
              renderInput={renderInput}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleVerify} className="btn BtnPrimry Btn-182-44 BtnInrpg">
            Verify
          </Button>
        </ModalFooter>
      </Modal>
      */}
      <Footer />
    </Fragment>
  );
}

export default Login;
