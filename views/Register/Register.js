// import React, { Fragment, useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";
// import OtpInput from 'react-otp-input';
// import { useNavigate } from "react-router-dom";
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
// import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
// import logo from '../../assets/images/logo.png';
// import Swal from "sweetalert2";
// import { useAddUserMutation, useCreateRegisterMutation, useGetUsersQuery, useDeleteUserMutation } from "../redux/api";



// const validationSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .matches(/^[a-zA-Z ]*$/, "Name should be in alphabets")
//     .required("FirstName is required")
//     .min(3, "Name must be at least 3 characters")
//     .max(20, "Name should not exceed 20 characters")
//     .trim(),
//   lastName: Yup.string()
//     .matches(/^[a-zA-Z ]*$/, "Name should be in alphabets")
//     .required("LastName is required")
//     .min(3, "Name must be at least 3 characters")
//     .max(20, "Name should not exceed 20 characters")
//     .trim(),
//   email: Yup.string()
//     .required("Email is required")
//     .email("Email is invalid")
//     .matches(
//       /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
//       "Invalid email format"
//     )
//     .trim(),
//   username: Yup.string()
//     .matches(/^[a-zA-Z ]*$/, "Name should be in alphabets")
//     .required("Username is required")
//     .min(3, "Name must be at least 3 characters")
//     .max(20, "Name should not exceed 20 characters")
//     .trim(),
//   password: Yup.string()
//     .min(7, "Password must be at least 7 characters")
//     .matches(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//       "Minimum eight characters, at least one uppercase, one lowercase, one number and one special character"
//     )
//     .required("Password is required"),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref("password")], "Passwords must match")
//     .required("Confirm Password is required"),
//     profileImage: Yup.string()
//     .required("Image is required ")
// });

// const Register = (props) => {
//   const [modal, setModal] = useState(false);
//   const [otp, setOtp] = useState("");
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState(null);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [userAdd]= useAddUserMutation();
//   // const [userAdd] = useAddUserMutation();
//   // const { data: getusers, isLoading, isError } = useGetUsersQuery();
//   const [createUser] = useCreateRegisterMutation();
  
//   const {
//     register,
//     handleSubmit,
//     trigger,
//     formState: { errors },
//     reset,
//   } = useForm({
//     resolver: yupResolver(validationSchema),
//     mode: "all",
//   });

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     setSelectedFile(file);
//   };

//   const handleuserAdd = async (data) => {
//     const imageFile = data.profileImage[0];
//     const storedData = JSON.parse(localStorage.getItem("usersData")) || [];
//     try {
//       //const user = storedData.find((user) => user.username === userData.username);
//         const response = await createUser(data)
//         if (response.error) {
//             const errorMessage = response.error.userData.message
//             toast.error(errorMessage, {
//                 position: toast.POSITION.TOP_CENTER
//             })
//           //  else if (user) {
//           //     toast.error("Email Already Exists");
//           //     return
//         } else {
//             const successMsg = response.data.data.otp.code
//             const getUserID = response.data.data._id
//             localStorage.setItem('userId', getUserID)
//             toast.info(`Your OTP ${successMsg}`, {
//                 position: toast.POSITION.TOP_RIGHT,
//                 autoClose: 10000,
//                 closeOnClick: true

//             });
//             navigate('/RegisterOtp')
//             // navigate("/Register");
//         }

//         const formData = new FormData();
//         formData.append("firstName", data.firstName);
//         formData.append("lastName", data.lastName);
//         formData.append("email", data.email);
//         formData.append("username", data.usename);
//         formData.append("password", data.password);
//         formData.append("profileImage", imageFile);
//         // console.log(formData);
//         let result = await userAdd(formData);
//         console.log("User added:", result);
//     } catch (err) {
//         console.log(err.message)
//         toast.error('SomeThing Went Wrong', {
//             position: toast.POSITION.TOP_CENTER
//         })
//     }

// }

//   const toggle = () => {
//     setModal(!modal);
//     setOtp("");
//   };
  
//   const handleVerify = () => {
    
//       if (formData) {
//         console.log(formData);
//         setOtp("");
//         toggle();
//         reset();
//         navigate("/Register");
//         Swal.fire({
//           icon: 'success',
//           title: 'OTP Verified',
//           text: 'Your email has been verified successfully!',
//         });
  
//     } else {
//       toast.error("Oops incorrect OTP");
//     }
//   };

//   const renderInput = (props, index) => {
//     return (
//       <input
//         key={index}
//         {...props}
//         style={{
//           width: "40px",
//           height: "40px",
//           marginRight: "5px",
//           textAlign: "center",
//           backgroundColor: "gray",
//         }}
//       />
//     );
//   };



//   return (
//     <Fragment>
//       <Header />
//       <div className="Main-section cmsSec" style={{ paddingTop: '80px' }}>
//         <div className="container container-1200">
//           <div className="row justify-content-center">
//             <div className="col-lg-8">
//               <div className="LgnPg">
//                 <img src={logo} className="img-fluid d-block mx-auto" />
//                 <h3>REGISTER</h3>
//                 <form onSubmit={handleSubmit(handleuserAdd)}>
//                   <div className="form-group" >
//                     <label>First Name</label>
//                     <input type="text" name="FirstName" {...register("firstName")} className={`form-control ${errors.firstName ? "is-invalid" : ""}`} />
//                     <div className="invalid-feedback">
//                       {errors.firstName?.message}
//                     </div>
//                   </div>
//                   <div className="form-group">
//                     <label>Last Name</label>
//                     <input type="text" name="LastName" {...register("lastName")} className={`form-control ${errors.lastName ? "is-invalid" : ""}`} />
//                     <div className="invalid-feedback">
//                       {errors.lastName?.message}
//                     </div>
//                   </div>
//                   <div className="form-group">
//                     <label>Email</label>
//                     <input
//                       name="email"
//                       type="text"
//                       {...register("email")}
//                       className={`form-control ${errors.email ? "is-invalid" : ""
//                         }`}
//                     />
//                     <div className="invalid-feedback">
//                       {errors.email?.message}
//                     </div>
//                   </div>
//                   <div className="form-group">
//                     <label>Username</label>
//                     <input type="text" name="Username" {...register("username")} className={`form-control ${errors.username ? "is-invalid" : ""}`} />
//                     <div className="invalid-feedback">
//                       {errors.username?.message}
//                     </div>
//                   </div>
//                   <div className="form-group ">
//                     <label>Password</label>
//                     <input
//                       name="password"
//                       type="password"
//                       {...register("password")}
//                       className={`form-control ${errors.password ? "is-invalid" : ""
//                         }`}
//                       onBlur={() => trigger("confirmPassword")}
//                     />
//                     <div className="invalid-feedback">
//                       {errors.password?.message}
//                     </div>
//                   </div>
//                   <div className="form-group">
//                     <label>Confirm Password</label>
//                     <input
//                       name="confirmPassword"
//                       type="password"
//                       {...register("confirmPassword")}
//                       className={`form-control ${errors.confirmPassword ? "is-invalid" : ""
//                         }`}
//                     />
//                     <div className="invalid-feedback">
//                       {errors.confirmPassword?.message}
//                     </div>
//                   </div>
//                   {/* <div className="form-group">
//                   <label className="form-label" style={{color: "white" }}>Profile Image</label>
//                   <input
//                     type="file"
//                     onChange={handleImageUpload}
//                     accept=".jpg , .jpeg, .png, .gif"
//                     {...register("profileImage")}
//                     className={`form-control ${errors.profileImage ? "is-invalid" : ""
//                       }`}/>
               
//                 <div className="invalid-feedback">{errors.profileImage?.message}
//                 </div>
//                 </div> */}
//                   <button className="btn LGn-btn">Register</button>
//                   <p>Already have an account?<a href="/login" className="ml-2" >Login</a></p>
//                 </form>
//               </div>
//               <ToastContainer limit={1} />
//             </div>
//           </div>
//         </div>
//       </div>
//       <Modal isOpen={modal} toggle={toggle} modalClassName="CmmnMdl" className="modal-md ">
//         <ModalBody>
//           <div class="MdlHdr BrdBttm pb-3 mb-3 ">
//             <div class="StkMdlHdd ">
//               <h4 class="mb-0 ">
//                 <span>Verify</span> Your Mail
//               </h4>
//             </div>
//           </div>
//           <div className="modal-body">
//             <OtpInput
//               value={otp}
//               onChange={(otp) => setOtp(otp)}
//               numInputs={6}
//               renderSeparator={
//                 <span
//                   style={{
//                     color: "gold",
//                     marginRight: "5px",
//                   }}
//                 >
//                   -
//                 </span>
//               }
//               containerStyle={{ display: "flex", justifyContent: "center" }}
//               renderInput={renderInput}
//             />
//           </div>
//         </ModalBody>
//         <ModalFooter>
//           <Button onClick={handleVerify} className="btn BtnPrimry Btn-182-44 BtnInrpg">
//             Verify
//           </Button>
//         </ModalFooter>
//       </Modal>
//       <Footer />
//     </Fragment>
//   );
// };

// export default Register;


import React, { Fragment, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import OtpInput from 'react-otp-input';
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import logo from '../../assets/images/logo.png';
import Swal from "sweetalert2";

import { useAddUserMutation, useCreateRegisterMutation, useGetUsersQuery, useDeleteUserMutation } from "../redux/api";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[a-zA-Z ]*$/, "Name should be in alphabets")
    .required("FirstName is required")
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name should not exceed 20 characters")
    .trim(),
  lastName: Yup.string()
    .matches(/^[a-zA-Z ]*$/, "Name should be in alphabets")
    .required("LastName is required")
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name should not exceed 20 characters")
    .trim(),
  email: Yup.string()
    .required("Email is required")
    .email("Email is invalid")
    .matches(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      "Invalid email format"
    )
    .trim(),
  username: Yup.string()
    .matches(/^[a-zA-Z ]*$/, "Name should be in alphabets")
    .required("Username is required")
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name should not exceed 20 characters")
    .trim(),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Minimum eight characters, at least one uppercase, one lowercase, one number and one special character"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const Register = (props) => {
  const [modal, setModal] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [userAdd]= useAddUserMutation();
  // const [userAdd] = useAddUserMutation();
  // const { data: getusers, isLoading, isError } = useGetUsersQuery();
  const [createUser] = useCreateRegisterMutation();
  
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "all",
  });

  
  const handleuserAdd = async (data) => {
 
    const storedData = JSON.parse(localStorage.getItem("usersData")) || [];
    try {
      //const user = storedData.find((user) => user.username === userData.username);
        const response = await createUser(data)
        if (response.error) {
            const errorMessage = response.error.data.message
            toast.error(errorMessage, {
                position: toast.POSITION.TOP_CENTER
            })
          //  else if (user) {
          //     toast.error("Email Already Exists");
          //     return
        } else {
            const successMsg = response.data.data.otp.code
            const getUserID = response.data.data._id
            localStorage.setItem('userId', getUserID)
            toast.info(`Your OTP ${successMsg}`, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 10000,
                closeOnClick: true

            });
            navigate('/RegisterOtp')
            // navigate("/Register");
        }

        const formData = new FormData();
        formData.append("firstName", data.firstName);
        formData.append("lastName", data.lastName);
        formData.append("email", data.email);
        formData.append("username", data.usename);
        formData.append("password", data.password);
          // formData.append("profileImage", imageFile);
        // console.log(formData);
        let result = await userAdd(formData);
        console.log("User added:", result);
    } catch (err) {
        console.log(err.message)
        toast.error('SomeThing Went Wrong', {
            position: toast.POSITION.TOP_CENTER
        })
    }

}

  const toggle = () => {
    setModal(!modal);
    setOtp("");
  };
  
  const handleVerify = () => {
    
      if (formData) {
        console.log(formData);
        setOtp("");
        toggle();
        reset();
        navigate("/Register");
        Swal.fire({
          icon: 'success',
          title: 'OTP Verified',
          text: 'Your email has been verified successfully!',
        });
  
    } else {
      toast.error("Oops incorrect OTP");
    }
  };

  const renderInput = (props, index) => {
    return (
      <input
        key={index}
        {...props}
        style={{
          width: "40px",
          height: "40px",
          marginRight: "5px",
          textAlign: "center",
          backgroundColor: "gray",
        }}
      />
    );
  };



  return (
    <Fragment>
      <Header />
      <div className="Main-section cmsSec" style={{ paddingTop: '80px' }}>
        <div className="container container-1200">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="LgnPg">
                <img src={logo} className="img-fluid d-block mx-auto" />
                <h3>REGISTER</h3>
                <form onSubmit={handleSubmit(handleuserAdd)}>
                  <div className="form-group" >
                    <label>First Name</label>
                    <input type="text" name="FirstName" {...register("firstName")} className={`form-control ${errors.firstName ? "is-invalid" : ""}`} />
                    <div className="invalid-feedback">
                      {errors.firstName?.message}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" name="LastName" {...register("lastName")} className={`form-control ${errors.lastName ? "is-invalid" : ""}`} />
                    <div className="invalid-feedback">
                      {errors.lastName?.message}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      name="email"
                      type="text"
                      {...register("email")}
                      className={`form-control ${errors.email ? "is-invalid" : ""
                        }`}
                    />
                    <div className="invalid-feedback">
                      {errors.email?.message}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="Username" {...register("username")} className={`form-control ${errors.username ? "is-invalid" : ""}`} />
                    <div className="invalid-feedback">
                      {errors.username?.message}
                    </div>
                  </div>
                  <div className="form-group ">
                    <label>Password</label>
                    <input
                      name="password"
                      type="password"
                      {...register("password")}
                      className={`form-control ${errors.password ? "is-invalid" : ""
                        }`}
                      onBlur={() => trigger("confirmPassword")}
                    />
                    <div className="invalid-feedback">
                      {errors.password?.message}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                      name="confirmPassword"
                      type="password"
                      {...register("confirmPassword")}
                      className={`form-control ${errors.confirmPassword ? "is-invalid" : ""
                        }`}
                    />
                    <div className="invalid-feedback">
                      {errors.confirmPassword?.message}
                    </div>
                  </div>
                  {/* <div className="form-group">
                  <label className="form-label" style={{ fontWeight: "bold", color: "white" }}>Profile Image</label>
                  <input
                    type="file"
                    onChange={handleImageUpload}
                    accept=".jpg , .jpeg, .png, .gif"
                    {...register("profileImage")}
                    className={`form-control ${errors.profileImage ? "is-invalid" : ""
                      }`}/>
               
                <div className="invalid-feedback">{errors.profileImage?.message}
                </div>
                </div> */}
                  <button className="btn LGn-btn">Register</button>
                  <p>Already have an account?<a href="/login" className="ml-2" >Login</a></p>
                </form>
              </div>
              <ToastContainer limit={1} />
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggle} modalClassName="CmmnMdl" className="modal-md ">
        <ModalBody>
          <div class="MdlHdr BrdBttm pb-3 mb-3 ">
            <div class="StkMdlHdd ">
              <h4 class="mb-0 ">
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
      <Footer />
    </Fragment>
  );
};

export default Register;