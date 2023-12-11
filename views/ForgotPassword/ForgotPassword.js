import React, { Fragment, useState } from
 
"react";
import { useForm } from
 
'react-hook-form';
import { yupResolver } from
 
'@hookform/resolvers/yup';
import * as Yup from
 
'yup';
import {
  useForgotPasswordMutation
} from "../redux/api";
import OtpInput from 'react-otp-input';
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import termsBanner from '../../assets/images/termsBanner.png';
import logo from '../../assets/images/logo.png';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";


const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const ForgotPassword = (props) => {

  const [forgotPwd] = useForgotPasswordMutation();
  // const [modal, setModal] = useState(false);
  // const [otp, setOtp] = useState("");
  const navigate= useNavigate();
 

  const { register, handleSubmit, formState: { errors },
  reset, } = useForm({
    resolver: yupResolver(schema),
  });
  const handleVerifyOtp = async (userEmail) => {
    try {
        const response = await forgotPwd(userEmail)
        console.log(response);
        if (response.error) {
            return toast.error(response.error.data.message)
        }
        const otpCode = response.data.otp.code
        const getUserID = response.data._id
        localStorage.setItem('userId', getUserID)
       
        toast.info(`Your OTP ${otpCode}`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 10000,
            closeOnClick: true
        });
        reset();
        navigate('/ForgotPasswordOtp')
        } catch (error) {
        console.log(error.message);
    }
}
  // const onSubmit = async (data) => {
  //   try {
  //     await forgotPwd(data);
  //     // setModal(true);
  //   } catch (error) {
  //     console.error("Forgot password failed", error);
  //     toast.error("An unexpected error occurred.");
  //   }
  // };

  // const toggle = () => {
  //   setModal(!modal);
  //   setOtp("");
  // };
  
  // const handleVerify = async (useremail) => {
  //   // Simulate OTP verification logic
  //   try{
  //   const response = await forgotPwd(useremail)
    // console.log(response);
    //   // if (otp === "123456") {
    //   //   setOtp("");
    //   //   toggle();
    //     reset();
    //     navigate('/ForgotPasswordOtp');
    //     setModal(false);
    //     Swal.fire({
    //       icon: 'success',
    //       title: 'OTP Verified',
    //       text: 'Your email has been verified successfully!',
    //     });
    // }
    //   // toast.success("Successfully logged in!");
    // } catch(error) {
    //   toast.error("Oops, incorrect OTP");
    // }
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
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="LgnPg">
                <img src={logo} className="img-fluid d-block mx-auto" />
                <h3>FORGOT PASSWORD</h3>
                <form className="p-5 rounded h-100 mb-5" onSubmit={handleSubmit(handleVerifyOtp)}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="Enter your Email Id"
                    {...register('email')}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email.message}
                    </div>
                  )}
                </div>
                <button className="btn LGn-btn">Send</button>
                <p>Didn’t receive the OTP ?<a href="#" className="ml-2">Resend OTP</a></p>
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
              value={otp}
              onChange={(otp) => setOtp(otp)}
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

export default ForgotPassword;