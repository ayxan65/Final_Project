
import React from 'react';



// function App() {
//   const [inputs, setInputs] = useState({
//     input1: '',
//     input2: '',
//     input3: '',
//     input4: ''
//   });

//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputs({
//       ...inputs,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { input1, input2, input3, input4 } = inputs;

//     if (!input1 || !input2 || !input3 || !input4) {
//       setError('Lütfen tüm alanları doldurun.');
//     } else {
//       setError('');
//       alert('Form başarıyla gönderildi!');

//     }
//   };


const Button = () => {

   
  return (
    <>
     <div className='flex justify-center mt-8  mr-2'>
        <button onClick={(()=>{
          
           
                alert('müracietiniz qebul edildi')
            
         
         
        })} className='h-12 w-52 bg-primary text-white rounded-lg'>Göndər
         
        </button>

       </div>
    </>
  )
}

export default Button