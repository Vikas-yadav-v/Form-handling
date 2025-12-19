import React, { useState } from "react";

function MultiInputForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  //Empty Errors Object.
  const validate = () => {
    let newErrors = {};

    //Name Validation.
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

//Email Validation.
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\.\$\%\&\#/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }
//Age  Validation.
    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (formData.age < 18) {
      newErrors.age = "Age must be 18 or above";
    }

    //rrors state update hota hai.
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log(formData);
      alert("Form Submitted Successfully!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          Multiple Input Form
        </h2>

        {/* Name */}
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-1 px-4 py-2 border rounded-md"
        />
        {errors.name && <p className="text-red-500 text-sm mb-3">{errors.name}</p>}

        {/*Email */}
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-1 px-4 py-2 border rounded-md"
        />
        {errors.email && <p className="text-red-500 text-sm mb-3">{errors.email}</p>}

        {/* Age */}
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full mb-1 px-4 py-2 border rounded-md"
        />
        {errors.age && <p className="text-red-500 text-sm mb-4">{errors.age}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default MultiInputForm;
