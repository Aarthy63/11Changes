import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import otpImg from '../../images/cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37330.avif'
import useClipboard from "react-use-clipboard";
import { FaRegCopy } from "react-icons/fa";
import OTPInput, { ResendOTP } from 'otp-input-react';
import { useDisableTwoFactorVerifyMutation,useGetTwoFactorAuthenticationMutation, useTwoFactorVerifyMutation } from 'src/appstore_admin/service_admin/apiquery_admin';





const schema = Yup.object().shape({
    otp: Yup.string()
    .required('otp is required')
    .min(6, 'Enter Six Digits Number').max(6, 'Invalid OTP')
    .trim(),
});


const TwoFactorAuth = () => {
const navigate = useNavigate()
const adminId = localStorage.getItem('AdminId')
const forgotpassword=localStorage.getItem("forgotpassword")
const forgotpattern=localStorage.getItem("forgotpattern")


const [authCode, setAuthCode] = useState('')
const [authQrCode, setAuthQrCode] = useState('')
const [isCopied, setCopied] = useClipboard(authCode);

const [getTwoFactorData] = useGetTwoFactorAuthenticationMutation()
const [verifyUserAuthCode] = useTwoFactorVerifyMutation()
const [disableTwoFactor] = useDisableTwoFactorVerifyMutation()

const [OTP, setOTP] = useState("");
const [authVerifyStatus, setAuthVerifyStatus] = useState('')


    useEffect(() => {
        const handleTwoFactorAuth = async () => {
            try {
                const response = await getTwoFactorData({ id: adminId })
    
                if (response.error) {
                    return toast.error(response.error.data.message, {
                        position: toast.POSITION.TOP_CENTER
                    })
                }
                setAuthVerifyStatus(response.data.twoFactorAuthData.authVerify)
                setAuthCode(response.data.authCode)
                setAuthQrCode(response.data.qrCodeImgSrc)
                console.log(response);
            } catch (error) {
                console.log(error.message);
            }
        }
        handleTwoFactorAuth()
    }, [])
    
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
        mode: 'all'
    });

    const disableTwoFactorAuth = async () => {
        try {
            const response = await disableTwoFactor({ id: adminId })
            if (response.error) {
                return toast.error('Something Went Wrong', {
                    position: toast.POSITION.TOP_CENTER
                })
            }
            // navigate('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }


    const copyText = () => {
        setCopied()
        toast.info('Text Copied', {
            position: toast.POSITION.TOP_CENTER
        })
    }


    // verify Fuction
    const verifyAuthCode = async (e) => {
        e.preventDefault()
        try {
            const response = await verifyUserAuthCode({ id: adminId, token: OTP })
            if (response.error) {
                return toast.error(response.error.data.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            }
            if(forgotpassword){
                navigate('/forgetPasswordAuthCodeVerify')
                localStorage.removeItem('forgotpassword')
                return
            }
            if(forgotpattern){
                navigate('/forgetPatternAuthCodeVerify')
                localStorage.removeItem("forgotpattern")
                return
            }

            toast.success('verfied sucess')
            setTimeout(() => {  navigate('/dashboard')
            }, 2600);

        } catch (error) {
            console.log(error);

        }

    }

  return (

    <div className=' bg-body-tertiary'>
            <div className='p-4 twoFactor-Bg' style={{ minHeight: "100vh" }}>
                <h1 className='text-center mb-5 text-primary input-group-text'>Two Factor Authentication</h1>
                <div className='row'>
                    {
                        authVerifyStatus ?
                            <div className='col-lg-6'>
                                <p className='display-4 fw-bold'>Google Authentication <span style={{ color: '#9ADE7B' }}>Verified</span></p>
                                <button type="button" onClick={disableTwoFactorAuth} className=' mt-4 btn btn-warning'>Disable</button>
                            </div>
                            :
                            <div className='col-lg-7'>
                                <form onSubmit={verifyAuthCode}>
                                    <div className='col-md-12'>
                                        <p className='fw-bold text-primary'>Copy This Code Generate Authentication <span role='button'> <FaRegCopy onClick={copyText} /></span>
                                        </p>
                                        <p className='text-danger fw-bolder'>{authCode}</p>
                                        <div>
                                            <>
                                                <h5 className='mt-5 mb-3 text-primary'>Enter Your Authetication Key</h5>
                                                <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} />
                                            </>

                                        </div>
                                        <div className='d-grid my-3'>
                                            <div>
                                            <button className=' btn btn-success btn-lg' type="submit">Verify</button>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                                <ToastContainer/>
                            </div>
                    }
                    <div className='col-lg-5'>
                    <h2 className='text-primary'>Scan Qr Code </h2>
                                <img src={authQrCode} alt="" />
                    </div>
                </div>
            </div>
        </div>

  )
}

export default TwoFactorAuth