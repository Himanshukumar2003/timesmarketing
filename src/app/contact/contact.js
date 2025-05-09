"use client";

import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    street: "",
    zipCode: "",
    townCity: "",
    email: "",
    telephone: "",
    country: "",
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateField = (name, value) => {
    if (name === "termsAccepted" && !value) {
      return "You must accept the terms and conditions.";
    }
    if (!value) {
      return "This field is required.";
    }
    if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      return "Invalid email address.";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, val) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) newErrors[key] = error;
    });
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      console.log("Form submitted:", formData);
    } else {
      setErrors(newErrors);
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      street: "",
      zipCode: "",
      townCity: "",
      email: "",
      telephone: "",
      country: "",
      termsAccepted: false,
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {submitted ? (
          <div className="p-6 bg-green-50 rounded-md text-center">
            <h2 className="text-xl font-bold text-green-800 mb-2">
              Form Submitted Successfully!
            </h2>
            <p className="text-green-700">Thank you for your submission.</p>
            <button
              onClick={resetForm}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Submit Another Form
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "firstName",
                "lastName",
                "company",
                "street",
                "zipCode",
                "townCity",
                "email",
                "telephone",
                "country",
              ].map((field) => (
                <div className="form-group" key={field}>
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {field.charAt(0).toUpperCase() +
                      field.slice(1).replace(/([A-Z])/g, " $1")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  {field === "title" || field === "country" ? (
                    <select
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">- Select -</option>
                      {[
                        "United States",
                        "Canada",
                        "United Kingdom",
                        "Australia",
                        "Germany",
                        "France",
                        "Other",
                      ].map((opt) => (
                        <option key={opt} value={opt.toLowerCase()}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={
                        field === "email"
                          ? "email"
                          : field === "telephone"
                          ? "tel"
                          : "text"
                      }
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  )}
                  {errors[field] && (
                    <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 form-group">
              <div className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <input
                  type="checkbox"
                  id="termsAccepted"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className="mt-1"
                />
                <div className="space-y-1 leading-none">
                  <label
                    htmlFor="termsAccepted"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Terms of use & data protection / data transmission{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <p className="text-sm text-gray-500">
                    I have read and agree to the
                    <a href="#" className="text-blue-500 hover:underline">
                      {" "}
                      Terms of Use{" "}
                    </a>
                    &
                    <a href="#" className="text-blue-500 hover:underline">
                      {" "}
                      Privacy Policy
                    </a>
                    .
                    <br />
                    I consent to data processing in accordance with the privacy
                    policy.
                    <br />I can revoke consent anytime and understand my data
                    may be shared with external partners.
                  </p>
                  {errors.termsAccepted && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.termsAccepted}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="flex rounded-sm mt-4 items-center  btn"
              >
                <span className="shadow-lg items-center  bg-blue-700 hover:bg-blue-800 text-white font-bold  px-4 py-2 ">
                  <span className="flex-1 text-center mr-2">Submit</span>
                </span>
                <span className="bg-blue-500  shadow-lg py-2 px-2  ">
                  <FiChevronRight className=" text-white  text-2xl  font-bold" />
                </span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
