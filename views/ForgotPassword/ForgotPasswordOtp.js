
import React,{Fragment} from 'react';
//import locked_Img from '../../assets/images/locked_Img.png'
// import message from '../../assets/images/message.png'
import { useForm } from 'react-hook-form';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import logo from '../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForgetPasswordOtpVerifyMutation } from '../redux/api';

// schema OTP validation
const schema = Yup.object().shape({
    otp: Yup.string().required('otp is required').min(6, 'Enter Six Digits Number').max(6, 'Invalid OTP').trim(),
});

const ForgetPasswordOtp = () => {
    const navigate = useNavigate()
    // localStorage ID
    const userId = localStorage.getItem('userId')
    // React-Hook-Form
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
        mode: 'all'
    });
    // verify Fuction
    const [verifyOtp] = useForgetPasswordOtpVerifyMutation();
    const onSubmit = async (data) => {
        console.log(data);
        try {
            const verifyResponse = await verifyOtp({ otp: data.otp, id: userId })
            if (verifyResponse.error) {
                const errorMessage = verifyResponse.error.data.message
                toast.error(errorMessage, {
                    position: toast.POSITION.TOP_CENTER
                })
                return
            }
            toast.success(verifyResponse.data.message, {
                position: toast.POSITION.TOP_CENTER
            })
            navigate('/changepassword')
        } catch (err) {
            console.log(err.message);
        }
    }
    return (
        <Fragment>
            <Header />
            <div className="Main-section cmsSec" style={{ paddingTop: '80px' }}>
                <div className="container container-1200">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="LgnPg">
                                <img src={logo} className="img-fluid d-block mx-auto" />
                                <h3 style={{textAlign:'center'}}>Enter OTP</h3>
                                <form className="p-5 rounded h-100 mb-5" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                       
                                        <input
                                            className={`form-control  ${errors?.otp ? 'is-invalid' : ''
                                                }`}
                                            type="text"
                                            name="otp"
                                            {...register('otp')}
                                            placeholder="Enter Your OTP" />
                                        <div className="invalid-feedback">{errors?.otp?.message}
                                        </div> 
                                        <button className="btn LGn-btn">Send</button>                                   </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </Fragment>

    );
}

 export default ForgetPasswordOtp;
