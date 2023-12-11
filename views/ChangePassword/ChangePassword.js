import { React, Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useChangePasswordMutation} from '../redux/api';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import logo from '../../assets/images/logo.png';

// schema OTP validation
const schema = Yup.object().shape({
    oldPassword: Yup.string().required ('Old Password us required'),
    password: Yup.string().required('Password is required').matches(/[A-Z]/, 'Please Give One UpperCase Letter').matches(/[0-9]/, 'Please One Number').matches(/[-!$%^&*()_+|~=`{}[\]:/;<>?,.@#]/, 'Please Give Special Character.. like @#$').trim().min(8, 'Password must be at least 8 characters'),
    confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords does not match')
          .required('Confirm Password is required').trim(),
});
const ChangePassword = (props) => {
    const navigate = useNavigate();
    const [changePassword] = useChangePasswordMutation();
    // localStorage ID
    const userId = localStorage.getItem('userId')
    // React-Hook-Form
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
        mode: 'all'
    });
    // set newPassword Fuction
    

    const onSubmit = async (data) => {
        try {
            const verifyResponse = await changePassword({ id: userId, password: data.oldPassword, newPassword: data.password })
            reset()
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
            localStorage.removeItem('userId')
            navigate('/login')
        } catch (err) {
            console.log(err.message);
        }
        reset()
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
                                <h3>Forgot Password</h3>
                                <form className="p-5 rounded h-100 mb-5" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                        <label>Old Password</label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.oldPassword ? 'is-invalid' : ''}`}
                                            placeholder="Enter your New Password"
                                            {...register('oldPassword')}
                                        />
                                        {errors.oldPassword && (
                                            <div className="invalid-feedback">{errors.oldPassword.message}
                                            </div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label>New Password</label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                            placeholder="Enter your New Password"
                                            {...register('password')}
                                        />
                                        {errors.password && (
                                            <div className="invalid-feedback">{errors.password.message}
                                            </div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label>Confirm Password</label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                            placeholder="Enter your Confirm Password"
                                            {...register('confirmPassword')}
                                        />
                                        {errors.confirmPassword && (
                                            <div className="invalid-feedback">{errors.confirmPassword.message}
                                            </div>
                                        )}
                                    </div>
                                    <button className="btn LGn-btn">Submit</button>
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

export default ChangePassword;