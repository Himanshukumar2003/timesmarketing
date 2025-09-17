"use client";

import { useState } from "react";
import { TbUserSearch } from "react-icons/tb";

export default function GetInTouch() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    city: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    company: "",
    city: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    if (!formData.company.trim() || formData.company.length < 2) {
      newErrors.company = "Company must be at least 2 characters";
      isValid = false;
    }

    if (!formData.city.trim() || formData.city.length < 2) {
      newErrors.city = "City must be at least 2 characters";
      isValid = false;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      isValid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/model/form/sand", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setShowSuccess(true);
        setFormData({
          name: "",
          company: "",
          city: "",
          phone: "",
          email: "",
        });
        setTimeout(() => {
          setShowSuccess(false);
          setIsOpen(false);
        }, 2000);
      } else {
        alert(result.error || "Failed to send email.");
      }
    } catch (err) {
      alert("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center bg-[#ffcc00] text-[#003366] px-3 py-1 text-[14px] font-bold"
      >
        <TbUserSearch className="mr-2" /> Enquire Now
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex justify-center items-center">
          <div className="bg-white w-full max-w-md p-6 rounded-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-[30px] right-[20px] text-gray-500 text-xl"
              disabled={isSubmitting}
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-2 text-blue-500">
              Get Enquiry
            </h2>
            <p className="text-gray-600 mb-4">
              Please fill out the form below to get in touch.
            </p>

            {showSuccess ? (
              <div className="bg-green-100 text-green-800 p-3 rounded mb-4">
                Form submitted successfully! We’ll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-gray-600">
                {["name", "company", "city", "phone", "email"].map((field) => (
                  <div key={field}>
                    <label className="block mb-1 capitalize">{field}</label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded ${
                        errors[field] ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder={`Enter your ${field}`}
                    />
                    {errors[field] && (
                      <p className="text-sm text-red-500">{errors[field]}</p>
                    )}
                  </div>
                ))}

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 border rounded text-gray-700"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
