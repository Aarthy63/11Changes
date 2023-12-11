// import React, { Fragment, useEffect, useState } from "react";
// import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
// import classnames from "classnames";
// // import camera from '../../assets/images/bnr-rt-img.png';
// import fileUploadIcon from "../../assets/images/file-upload-icon.svg";
// import vwTcktArrw from "../../assets/images/vw-tckt-arrw.svg";
// import vwtcktInptIcon1 from "../../assets/images/vwtckt-inpt-icon1.svg";
// import vwtcktInptIcon2 from "../../assets/images/vwtckt-inpt-icon2.svg";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";
// import { useChangePasswordMutation } from "../redux/api";
// import {
//   useGetProfileDetailsMutation,
//   useProfileDetailsUpdateMutation,
// } from "../redux/api";
// import { toast } from "react-toastify";

// import ReactDOM from "react-dom";
// import { BrowserRouter, Navigate, Route, Routes, Link } from "react-router-dom";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from "react-accessible-accordion";

// // Demo styles, see 'Styles' section below for some notes on use.
// import "react-accessible-accordion/dist/fancy-example.css";

// const validationSchema = Yup.object().shape({
//   profileImg: Yup.mixed(),
//   userName: Yup.string()
//     .required("User Name is required")
//     .min(3, "Please Enter Valid Name")
//     .matches(/[A-Za-z]+/, "User Name should contain only letters")
//     .trim(),

//   userEmail: Yup.string()
//     .required("Email is required")
//     .email("Email is invalid")
//     .matches(
//       /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//       "Invalid Email address"
//     )
//     .trim(),

//   userDoB: Yup.date().required("Date of Birth is required"),

//   state: Yup.string().required("State is required").trim(),

//   country: Yup.string().required("Country is required").trim(),

//   zipcode: Yup.string()
//     .required("Zip code is required")
//     .matches(/[0-9]{6}/, "Invalid zip code")
//     .max(6, "invalid pin code")
//     .trim(),

//   userphonenumber: Yup.string()
//     .required("Phone number is required")
//     .matches(/^[6-9]\d{9}$/, "Invalid Number")
//     // .matches(/[0-9]{10}/, 'Invalid phone number')
//     .trim(),

//   city: Yup.string()
//     .required("City is required")
//     .min(3, "Please Enter Valid City")
//     .matches(/[A-Za-z]+/, "City should contain only letters")
//     .trim(),
// });

// const DsbPages = (props) => {
//   const loggedUserId = localStorage.getItem("loggedUserId");
//   // profileUpdate RTK
//   const [userProfileUpdate] = useProfileDetailsUpdateMutation();
//   const [userProfileDetails] = useGetProfileDetailsMutation();

//   // state Handles
//   const [dobInfo, setDobInfo] = useState(null);
//   const [profileImg, setProfileImg] = useState();

//   // functions to build the form returned by useForm() hook
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({
//     resolver: yupResolver(validationSchema),
//     mode: "all",
//   });

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const profileUpdateReponse = await userProfileDetails({
//           id: loggedUserId,
//         });
//         const userData = profileUpdateReponse.data.getUserDetails;
//         console.log(userData);
//         reset({
//           userName: userData.userName,
//           userEmail: userData.email,
//           userDoB: userData.personalInfo.DOB,
//           state: userData.personalInfo.address.state,
//           country: userData.personalInfo.address.country,
//           zipcode: userData.personalInfo.address.zipcode,
//           city: userData.personalInfo.address.city,
//           userphonenumber: userData.personalInfo.phoneNumber,
//         });
//         setProfileImg(userData.personalInfo.profileImg);
//         setDobInfo(userData.personalInfo.DOB);
//       } catch (err) {
//         console.log(err.message);
//       }
//     };
//     fetchUserData();
//   }, [dobInfo, profileImg]);

//   // console.log(profileImg);

//   const handleUserDataDetails = async (data) => {
//     const formData = new FormData();
//     const imagefile = data.profileImg[0];
//     try {
//       formData.append(
//         "profileImg",
//         data.profileImg.length >= 1 ? imagefile : profileImg
//       );
//       formData.append("userName", data.userName);
//       formData.append("userEmail", data.userEmail);
//       formData.append("userDoB", data.userDoB);
//       formData.append("country", data.country);
//       formData.append("city", data.city);
//       formData.append("state", data.state);
//       formData.append("userphonenumber", data.userphonenumber);
//       formData.append("zipcode", data.zipcode);
//       formData.append("id", loggedUserId);
//       // formData.append('id', loggedUserId)
//       const profileUpdateReponse = await userProfileUpdate(formData);
//       if (profileUpdateReponse.error) {
//         toast.error("Profile Error", {
//           position: toast.POSITION.TOP_CENTER,
//         });
//         return;
//       }
//       toast.success(profileUpdateReponse.data.message, {
//         position: toast.POSITION.TOP_CENTER,
//       });
//     } catch (error) {
//       //toast.error(error.data.message)
//       console.error("Error updating item:", error);
//       // You can add further error handling logic here, such as displaying an error message to the user.
//     }
//   };

//   return (
//     <Fragment>
//       <div className="DbCntMain">
//         <div className="BluBg107 SwapMainSec BluBgLight">
//           <div className="SwpHdd mb-4">
//             <h4>Support</h4>
//           </div>
//           <div className="BluBg0b0 SwpFrMainSec StkFrmMain">
//             <div className="SupprtTbbSec">
//               <form className="SupprtFrmMain">
//                 <div className="row">
//                   <div className="col-lg-6">
//                     <div className="col-lg-3">
//                       <div className="text-center mt-4"></div>
//                     </div>
//                     <div className="form-group ">
//                       <label for="inputEmail4" className="FrmLbl">
//                         Email<span>*</span>
//                       </label>
//                       <input
//                         type="email"
//                         className="form-control pl-4"
//                         id="inputEmail4"
//                         placeholder="Enter Your Email Address"
//                       />
//                     </div>

//                     <div className="form-group ">
//                       <label for="input2" className="FrmLbl">
//                         Username<span>*</span>
//                       </label>
//                       <input
//                         name="userName"
//                         type="text"
//                         {...register("userName")}
//                         className={`form-control py-0 ${
//                           errors.userName ? "is-invalid" : ""
//                         }`}
//                         placeholder="Enter Your Name"
//                       />
//                       <div className="invalid-feedback ">
//                         <span style={{ margin: "13px" }}>
//                           {errors?.userName?.message}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="form-group ">
//                       <label
//                         for="exampleFormControlTextarea1"
//                         className="FrmLbl"
//                       >
//                         Add Attachment
//                       </label>
//                       <div className="uploadFile">
//                         <div className="uploadFileFlx">
//                           <div className="fileCnt">
//                             <p>Select or drop image here</p>
//                             <span>Max file size is 100Kb</span>
//                           </div>
//                           <div className="fileUpldIcon">
//                             <img
//                               src={fileUploadIcon}
//                               alt=""
//                               className="img-fluid"
//                             />
//                           </div>
//                         </div>
//                         <input
//                           type="file"
//                           className="inputfile form-control"
//                           name="file"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="text-center SwpMainBtn mt-3 mt-md-5">
//                   <button type="submit" className="btn BtnPrimry Btn160-42">
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default DsbPages;
import React, { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useGetProfileDetailsMutation, useProfileDetailsUpdateMutation } from "../redux/api";
import { toast } from "react-toastify";
import user from '../../assets/images/user.png'
import fileUploadIcon from "../../assets/images/file-upload-icon.svg";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
    profileImg: Yup.mixed(),
    userName: Yup.string()
        .required("User Name is required")
        .min(3, "Please Enter Valid Name")
        .matches(/[A-Za-z]+/, "User Name should contain only letters")
        .trim(),
    userEmail: Yup.string()
        .required("Email is required")
        .email("Email is invalid")
        .trim(),
    userDoB: Yup.date().required("Date of Birth is required"),
    state: Yup.string().required("State is required").trim(),
    country: Yup.string().required("Country is required").trim(),
    zipcode: Yup.string()
        .required("Zip code is required")
        .matches(/[0-9]{6}/, "Invalid zip code")
        .max(6, "Invalid pin code")
        .trim(),
    userPhoneNumber: Yup.string()
        .required("Phone number is required")
        .matches(/^[6-9]\d{9}$/, "Invalid Number")
        .trim(),
    city: Yup.string()
        .required("City is required")
        .min(3, "Please Enter Valid City")
        .matches(/[A-Za-z]+/, "City should contain only letters")
        .trim(),
});

const DsbPages = (props) => {
    const loggedUserId = localStorage.getItem("userId");
    const [userProfileUpdate] = useProfileDetailsUpdateMutation();
    const [userProfileDetails] = useGetProfileDetailsMutation();
    const [dobInfo, setDobInfo] = useState(null);
    const [profileImg, setProfileImg] = useState();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "all",
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const profileUpdateReponse = await userProfileDetails({
                    id: loggedUserId,
                });
                const userData = profileUpdateReponse.data.getUserDetails;
                reset({
                    userName: userData.userName,
                    userEmail: userData.email,
                    userDoB: userData.personalInfo.DOB,
                    state: userData.personalInfo.address.state,
                    country: userData.personalInfo.address.country,
                    zipcode: userData.personalInfo.address.zipcode,
                    city: userData.personalInfo.address.city,
                    userPhoneNumber: userData.personalInfo.phoneNumber,
                });
                setSelectedImage(`http://localhost:8080/${userData.personalInfo.profileImg}`);
                setDobInfo(userData.personalInfo.DOB);
            } catch (err) {
                console.log(err.message);
            }
        };
        fetchUserData();
    }, [dobInfo, profileImg]);
    const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }
  };

    const handleUserDataDetails = async (data) => {
        const formData = new FormData();
        const imagefile = data.profileImg[0];
        try {
            formData.append(
                "profileImg",
                data.profileImg.length >= 1 ? imagefile : profileImg
            );
            formData.append("userName", data.userName);
            formData.append("userEmail", data.userEmail);
            // formData.append("userDoB", data.userDoB);
            // formData.append("country", data.country);
            // formData.append("city", data.city);
            // formData.append("state", data.state);
            // formData.append("userPhoneNumber", data.userPhoneNumber);
            // formData.append("zipcode", data.zipcode);
            formData.append("id", loggedUserId);

            const profileUpdateReponse = await userProfileUpdate(formData);

            if (profileUpdateReponse.error) {
                toast.error("Profile Error", {
                    position: toast.POSITION.TOP_CENTER,
                });
                return;
            }

            toast.success(profileUpdateReponse.data.message, {
                position: toast.POSITION.TOP_CENTER,
            });
        } catch (error) {
            console.error("Error updating item:", error);
        }
    };
    const handleChangePassword = () => {
        // Navigate to the ChangePassword component
       navigate('/ChangePassword');
      };

    return (
        <Fragment>
            <div className="DbCntMain">
                <div className="BluBg107 SwapMainSec BluBgLight">
                    <div className="SwpHdd mb-4">
                        <h4>Support</h4>
                    </div>
                    <div className="BluBg0b0 SwpFrMainSec StkFrmMain">
                        <div className="SupprtTbbSec">
                            <form className="SupprtFrmMain" onSubmit={handleSubmit(handleUserDataDetails)}>
                                <div className="row">
                                  
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                        <div className="pro_img">
                                            <img alt=""
                                                src={
                                                    `http://localhost:8080/${profileImg}`
                                                } className="img-fluid"
                                            />
                                            {/* <img alt=""
                                                src={profileDefault} className="img-fluid"
                                            /> */}
                                            <input
                                                type="file"
                                                id="Profileimg"
                                                className="hiddenInputfile"
                                                name="profileImg"
                                                {...register('profileImg')}

                                            />
                                            <label className="uploadprofile" for="Profileimg"> ProfileImage
                                                {/* <img alt="" src={camera} /> */}
                                            </label>
                                        </div>
                                            <label htmlFor="inputEmail4" className="FrmLbl">
                                                Email<span>*</span>
                                            </label>
                                            <input
                                                type="email"
                                                className={`form-control pl-4 ${errors.userEmail ? "is-invalid" : ""}`}
                                                {...register("userEmail")}
                                                placeholder="Enter Your Email Address"
                                            />
                                            <div className="invalid-feedback ">
                                                <span style={{ margin: "13px" }}>{errors?.userEmail?.message}</span>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="input2" className="FrmLbl">
                                                Username<span>*</span>
                                            </label>
                                            <input
                                                name="userName"
                                                type="text"
                                                {...register("userName")}
                                                className={`form-control py-0 ${errors.userName ? "is-invalid" : ""}`}
                                                placeholder="Enter Your Name"
                                            />
                                            <div className="invalid-feedback ">
                                                <span style={{ margin: "13px" }}>{errors?.userName?.message}</span>
                                            </div>

                                             <div className="form-group">
                                                <label htmlFor="inputDoB" className="FrmLbl">
                                                    Date of Birth<span>*</span>
                                                </label>
                                                <input
                                                    type="date"
                                                    className={`form-control pl-4 ${errors.userDoB ? "is-invalid" : ""}`}
                                                    {...register("userDoB")}
                                                />
                                                <div className="invalid-feedback">
                                                    <span style={{ margin: "13px" }}>{errors?.userDoB?.message}</span>
                                                </div>
                                            </div> 

                                            <div className="form-group">
                                                <label htmlFor="inputState" className="FrmLbl">
                                                    State<span>*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className={`form-control pl-4 ${errors.state ? "is-invalid" : ""}`}
                                                    {...register("state")}
                                                    placeholder="Enter Your State"
                                                />
                                                <div className="invalid-feedback">
                                                    <span style={{ margin: "13px" }}>{errors?.state?.message}</span>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="inputCountry" className="FrmLbl">
                                                    Country<span>*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className={`form-control pl-4 ${errors.country ? "is-invalid" : ""}`}
                                                    {...register("country")}
                                                    placeholder="Enter Your Country"
                                                />
                                                <div className="invalid-feedback">
                                                    <span style={{ margin: "13px" }}>{errors?.country?.message}</span>
                                                </div> 
                                            </div> 
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputZipcode" className="FrmLbl">
                                                Zipcode<span>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control pl-4 ${errors.zipcode ? "is-invalid" : ""}`}
                                                {...register("zipcode")}
                                                placeholder="Enter Your Zipcode"
                                            />
                                            <div className="invalid-feedback">
                                                <span style={{ margin: "13px" }}>{errors?.zipcode?.message}</span>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="inputUserPhoneNumber" className="FrmLbl">
                                                Phone Number<span>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control pl-4 ${errors.userPhoneNumber ? "is-invalid" : ""}`}
                                                {...register("userPhoneNumber")}
                                                placeholder="Enter Your Phone Number"
                                            />
                                            <div className="invalid-feedback">
                                                <span style={{ margin: "13px" }}>{errors?.userPhoneNumber?.message}</span>
                                            </div>

                                        </div> 
                                        {/* <div className="form-group">
                                            <label htmlFor="inputCity" className="FrmLbl">
                                                City<span>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control pl-4 ${errors.city ? "is-invalid" : ""}`}
                                                {...register("city")}
                                                placeholder="Enter Your City"
                                            />
                                            <div className="invalid-feedback ">
                                                <span style={{ margin: "13px" }}>{errors?.city?.message}</span>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="text-center SwpMainBtn mt-3 mt-md-2" style={{marginRight:'600px'}}>
                                    <button type="submit" className="btn BtnPrimry Btn160-42" >
                                        Submit
                                    </button>
                                    <button type="submit" className="btn BtnPrimry" style={{marginLeft:'120px'}}   onClick={handleChangePassword}>
                                   change YourPassword?
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default DsbPages;
