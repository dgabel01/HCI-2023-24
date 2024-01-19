import React, { useState } from 'react';

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
  const [successMessage, setSuccessMessage] = useState<string>("");



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
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
          setSuccessMessage("Thank you for reaching out to us, we will get back to you shortly!");
          setTimeout(() => {
            setSuccessMessage("");
          }, 6500);
        }
      }, 1500); 
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
            placeholder="Tell us more about your issue"
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
      <div className="col-span-2 text-green-500 m-24 animate-pulse text-center text-xl">
        <p>{successMessage}</p>
      </div>
    </div>
  );
};

export default Form;
