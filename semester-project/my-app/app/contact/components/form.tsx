import React, { useState } from 'react';
import toast from 'react-hot-toast';


interface FormData {
  name: string;
  surname: string;
  email: string;
  buyerseller: string;
  accountname: string;
  text: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    surname: '',
    email: '',
    buyerseller: '',
    accountname: '',
    text: '',
  });

  const [loading, setLoading] = useState<boolean>(false);



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (!formData.name || !formData.surname|| !formData.email || !formData.text) {
      toast.error('Please fill in all required fields.', { duration: 4000 });
      return;
    }
    e.preventDefault();

    setLoading(true);


       setTimeout(async () => {
        try {
          console.log(formData);
        } catch (error) {
          console.error('Error submitting form data:', error);
        } finally {
          setLoading(false);
          
          setFormData({ 
            name: '',
            surname: '',
            email: '',
            buyerseller: '',
            accountname: '',
            text: '',
          });
        
        }
      }, 1500); 
      setTimeout(()=>{ 
        toast.success("Your reponse has been sent sucessfully!",{
          duration:4000,
        })
      }, 2000)
    };

  return (
    <div className="">
      <form action="" className="flex flex-col justify-center items-center p-4">
        <div className="flex gap-8 my-12 xs:flex-col sm:flex-col md:flex-row">
          <input
            value={formData.name}
            onChange={handleInputChange}
            name="name"
            type="text"
            placeholder="First name*"
            className="rounded-xl p-2 border-2 hover:shadow-lg"
            autoComplete='true'
          />
          <input
            value={formData.surname}
            onChange={handleInputChange}
            name="surname"
            type="text"
            placeholder="Last name*"
            className="rounded-xl p-2 border-2 hover:shadow-lg"
          />
        </div>
        <input
          value={formData.email}
          onChange={handleInputChange}
          name="email"
          type="text"
          placeholder="Email address*"
          autoComplete='true'
          className="p-2 rounded-xl w-80 border-2 hover:shadow-lg"
        />

        <div className="flex gap-8 mt-8 xs:flex-col md:flex-row">
          <select
            value={formData.buyerseller}
            onChange={handleSelectChange}
            name="buyerseller"
            placeholder="Role*"
            className="rounded-xl p-2 border-2 hover:shadow-lg"
          >
            <option>Buyer</option>
            <option>Seller</option>
          </select>
          <input
            value={formData.accountname}
            onChange={handleInputChange}
            type="text"
            name="accountname"
            id=""
            placeholder="EasyShop account name"
            className="rounded-xl p-2 border-2 hover:shadow-lg"
          />
        </div>

        <div className="flex items-center justify-center">
          <textarea
            value={formData.text}
            onChange={handleInputChange}
            placeholder="Tell us more about your issue*"
            name="text"
            id=""
            className="my-8 xs:w-64 sm:w-64 md:w-96 h-28 w-auto rounded-xl p-2 outline-none border-2 hover:shadow-lg"
          ></textarea>
        </div>
      </form>
      <div className="flex flex-row justify-center items-center">
      <button
        type="submit"
        onClick={handleSubmit}
        className={`btn btn-success px-4 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={loading}
        >
        {loading ? 'Sending...' : 'Send'}
      </button>
      </div>
      
    </div>
  );
};

export default Form;
