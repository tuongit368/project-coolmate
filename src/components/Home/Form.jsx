
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import "../../styles/home/form.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clear } from '@testing-library/user-event/dist/clear';

function Form() {

    const {register, handleSubmit, reset} = useForm()

    const handleFormEmail = (data) => {
        
        const dataEmail = {
            name : data.name,
            phone : data.phone,
            email : data.email,
            to_name : "COOLMATE",
            message : "Email from to client!"

        }

        emailjs
        .send('service_rk4qobm', 'template_m0qz7cg', dataEmail, {
          publicKey: 'I4-R7nzmOBLFHPTDq',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            toast.success('Đăng ký thành công!', {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored", 
              });

              reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
            toast.error('Đăng nhập thất bại!', {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });

              reset();
          },
        );
    };

  return (
    <>
    <div className='email-form'>
        <h1 className='email-form-text'>Liên hệ</h1>
        <form onSubmit={handleSubmit(handleFormEmail)}>
            <input type="text" name="name" placeholder='Họ và tên' required {...register("name")} />
            <input type="number" name="phone" placeholder='Số điện thoại' required {...register("phone")} />
            <input type="email" name="email" placeholder='Email' required {...register("email")} />
            <button>Hẹn lịch</button>
        </form>
    </div>
    <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            />
    </>
  )
  
}

export default Form