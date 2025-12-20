"use client";

import { useState } from "react";
import {
  Users,
  X,
  Settings,
  CheckCircle,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaFilePdf } from "react-icons/fa";
import Image from "next/image";

export default function PageSidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCraneType, setSelectedCraneType] = useState("");
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const craneTypes = [
    {
      value: "EOT CRANE",
      label: "EOT Crane",
      description:
        "Electric overhead traveling cranes for heavy-duty operations",
      icon: "/img/single.jpg",
    },
    {
      value: "UNDERSLUNG CRANE",
      label: "Underslung Crane",
      description: "Suspended cranes for maximum headroom utilization",
      icon: "/img/underslung.jpg",
    },
    {
      value: "PORTAL CRANE",
      label: "Portal Crane",
      description: "Outdoor cranes for heavy lifting in ports and yards",
      icon: "/img/portalcrane.jpg",
    },
    {
      value: "KBK/X-Y RAIL",
      label: "KBK/X-Y Rail",
      description: "Modular rail systems for flexible material handling",
      icon: "/img/kbk1.webp",
    },
    {
      value: "JIB CRANE",
      label: "Jib Crane",
      description:
        "Ideal for localized lifting in workshops and production areas",
      icon: "/img/jib.jpg",
    },
    {
      value: "TRANSFER CART",
      label: "Transfer Cart",
      description: "Material handling carts for horizontal transportation",
      icon: "/img/transfer-cart.jpg",
    },
  ];

  const fieldsByType = {
    "EOT CRANE": [
      {
        key: "CUSTOMER_NAME",
        label: "Customer Name",
        placeholder: "Enter your full name",
        type: "text",
        required: true,
      },
      {
        key: "CONTACT_NUMBER",
        label: "Contact Number",
        placeholder: "Enter your phone number",
        type: "tel",
        required: true,
      },
      {
        key: "EMAIL",
        label: "Email",
        placeholder: "Enter your email address",
        type: "email",
        required: true,
      },

      {
        key: "SWL",
        label: "Safe Working Load (SWL)",
        placeholder: "e.g., 10000 kg",
        type: "text",
        required: true,
      },
      {
        key: "SPAN",
        label: "Span",
        placeholder: "e.g., 20 meters",
        type: "text",
        required: true,
      },
      {
        key: "CROSS_TRAVEL",
        label: "Cross Travel",
        placeholder: "e.g., 100 meters",
        type: "text",
        required: true,
      },
      {
        key: "LONG_TRAVEL",
        label: "Long Travel",
        placeholder: "e.g., 50 meters",
        type: "text",
        required: true,
      },
      {
        key: "HOOK_PATH",
        label: "Hook Path",
        placeholder: "e.g., 8 meters",
        type: "text",
        required: true,
      },
      {
        key: "APPLICATION",
        label: "Application",
        placeholder: "Describe your specific use case",
        type: "textarea",
        required: true,
      },
    ],
    "UNDERSLUNG CRANE": [
      {
        key: "CUSTOMER_NAME",
        label: "Customer Name",
        placeholder: "Enter your full name",
        type: "text",
        required: true,
      },
      {
        key: "CONTACT_NUMBER",
        label: "Contact Number",
        placeholder: "Enter your phone number",
        type: "tel",
        required: true,
      },
      {
        key: "EMAIL",
        label: "Email",
        placeholder: "Enter your email address",
        type: "email",
        required: true,
      },

      {
        key: "SWL",
        label: "Safe Working Load (SWL)",
        placeholder: "e.g., 5000 kg",
        type: "text",
        required: true,
      },
      {
        key: "SPAN",
        label: "Span",
        placeholder: "e.g., 15 meters",
        type: "text",
        required: true,
      },
      {
        key: "CROSS_TRAVEL",
        label: "Cross Travel",
        placeholder: "e.g., 80 meters",
        type: "text",
        required: true,
      },
      {
        key: "LONG_TRAVEL",
        label: "Long Travel",
        placeholder: "e.g., 40 meters",
        type: "text",
        required: true,
      },
      {
        key: "HOOK_PATH",
        label: "Hook Path",
        placeholder: "e.g., 6 meters",
        type: "text",
        required: true,
      },
      {
        key: "APPLICATION",
        label: "Application",
        placeholder: "Describe your specific use case",
        type: "textarea",
        required: true,
      },
    ],
    "PORTAL CRANE": [
      {
        key: "CUSTOMER_NAME",
        label: "Customer Name",
        placeholder: "Enter your full name",
        type: "text",
        required: true,
      },
      {
        key: "CONTACT_NUMBER",
        label: "Contact Number",
        placeholder: "Enter your phone number",
        type: "tel",
        required: true,
      },
      {
        key: "EMAIL",
        label: "Email",
        placeholder: "Enter your email address",
        type: "email",
        required: true,
      },

      {
        key: "SWL",
        label: "Safe Working Load (SWL)",
        placeholder: "e.g., 50000 kg",
        type: "text",
        required: true,
      },
      {
        key: "SPAN",
        label: "Span",
        placeholder: "e.g., 30 meters",
        type: "text",
        required: true,
      },
      {
        key: "CROSS_TRAVEL",
        label: "Cross Travel",
        placeholder: "e.g., 200 meters",
        type: "text",
        required: true,
      },
      {
        key: "LONG_TRAVEL",
        label: "Long Travel",
        placeholder: "e.g., 100 meters",
        type: "text",
        required: true,
      },
      {
        key: "HOOK_PATH",
        label: "Hook Path",
        placeholder: "e.g., 15 meters",
        type: "text",
        required: true,
      },
      {
        key: "APPLICATION",
        label: "Application",
        placeholder: "Describe your specific use case",
        type: "textarea",
        required: true,
      },
    ],
    "KBK/X-Y RAIL": [
      {
        key: "CUSTOMER_NAME",
        label: "Customer Name",
        placeholder: "Enter your full name",
        type: "text",
        required: true,
      },
      {
        key: "CONTACT_NUMBER",
        label: "Contact Number",
        placeholder: "Enter your phone number",
        type: "tel",
        required: true,
      },
      {
        key: "EMAIL",
        label: "Email",
        placeholder: "Enter your email address",
        type: "email",
        required: true,
      },

      {
        key: "SWL",
        label: "Safe Working Load (SWL)",
        placeholder: "e.g., 2000 kg",
        type: "text",
        required: true,
      },
      {
        key: "SPAN",
        label: "Span",
        placeholder: "e.g., 10 meters",
        type: "text",
        required: true,
      },
      {
        key: "CROSS_TRAVEL",
        label: "Cross Travel",
        placeholder: "e.g., 30 meters",
        type: "text",
        required: true,
      },
      {
        key: "LONG_TRAVEL",
        label: "Long Travel",
        placeholder: "e.g., 25 meters",
        type: "text",
        required: true,
      },
      {
        key: "HOOK_PATH",
        label: "Hook Path",
        placeholder: "e.g., 4 meters",
        type: "text",
        required: true,
      },

      {
        key: "APPLICATION",
        label: "Application",
        placeholder: "Describe your specific use case",
        type: "textarea",
        required: true,
      },
    ],
    "JIB CRANE": [
      {
        key: "CUSTOMER_NAME",
        label: "Customer Name",
        placeholder: "Enter your full name",
        type: "text",
        required: true,
      },
      {
        key: "CONTACT_NUMBER",
        label: "Contact Number",
        placeholder: "Enter your phone number",
        type: "tel",
        required: true,
      },
      {
        key: "EMAIL",
        label: "Email",
        placeholder: "Enter your email address",
        type: "email",
        required: true,
      },

      {
        key: "SWL",
        label: "Safe Working Load (SWL)",
        placeholder: "e.g., 2000 kg",
        type: "text",
        required: true,
      },
      {
        key: "OUTREACH",
        label: "Outreach",
        placeholder: "e.g., 5 meters",
        type: "text",
        required: true,
      },
      {
        key: "SWIVEL_ANGLE",
        label: "Swivel Angle",
        placeholder: "e.g., 270°",
        type: "text",
        required: true,
      },
      {
        key: "HOOK_PATH",
        label: "Hook Path",
        placeholder: "e.g., 4 meters",
        type: "text",
        required: true,
      },

      {
        key: "APPLICATION",
        label: "Application",
        placeholder: "Describe your specific use case",
        type: "textarea",
        required: true,
      },
    ],
    "TRANSFER CART": [
      {
        key: "CUSTOMER_NAME",
        label: "Customer Name",
        placeholder: "Enter your full name",
        type: "text",
        required: true,
      },
      {
        key: "CONTACT_NUMBER",
        label: "Contact Number",
        placeholder: "Enter your phone number",
        type: "tel",
        required: true,
      },
      {
        key: "EMAIL",
        label: "Email",
        placeholder: "Enter your email address",
        type: "email",
        required: true,
      },

      {
        key: "SWL",
        label: "Safe Working Load (SWL)",
        placeholder: "e.g., 10000 kg",
        type: "text",
        required: true,
      },
      {
        key: "BED_SIZE",
        label: "Bed Size",
        placeholder: "e.g., 4m x 2m",
        type: "text",
        required: true,
      },
      {
        key: "LONG_TRAVEL",
        label: "Long Travel",
        placeholder: "e.g., 50 meters",
        type: "text",
        required: true,
      },

      {
        key: "APPLICATION",
        label: "Application",
        placeholder: "Describe your specific use case",
        type: "textarea",
        required: true,
      },
    ],
  };

  const fieldsToShow = selectedCraneType ? fieldsByType[selectedCraneType] : [];

  const validateForm = () => {
    const newErrors = {};
    const fields = fieldsToShow;

    fields.forEach((field) => {
      if (
        field.required &&
        (!formData[field.key] || formData[field.key].trim() === "")
      ) {
        newErrors[field.key] = `${field.label} is required`;
      }
    });

    // Email validation
    if (formData.EMAIL && !/\S+@\S+\.\S+/.test(formData.EMAIL)) {
      newErrors.EMAIL = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const sendEmail = async (formData, craneType) => {
    try {
      const response = await fetch("/api/email/configurator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formData,
          craneType,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        return true;
      } else {
        console.error("Email API error:", result.message);
        return false;
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitStatus({ type: "", message: "" });

    if (!validateForm()) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields correctly.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const emailSent = await sendEmail(formData, selectedCraneType);

      if (emailSent) {
        setSubmitStatus({
          type: "success",
          message:
            "Specification request submitted successfully! Our team will contact you shortly.",
        });

        // Reset form after a delay to show success message
        setTimeout(() => {
          setIsModalOpen(false);
          setCurrentStep(1);
          setFormData({});
          setSelectedCraneType("");
          setErrors({});
          setSubmitStatus({ type: "", message: "" });
        }, 3000);
      } else {
        setSubmitStatus({
          type: "error",
          message: "There was an error sending your request. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "There was an error submitting your request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactClick = () => {
    window.location.href = "/contact";
  };

  const handlePdfDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdf/TK-CATALOGUE.pdf";
    link.download = "TK-CATALOGUE.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const nextStep = () => {
    if (currentStep === 1 && !selectedCraneType) {
      setSubmitStatus({
        type: "error",
        message: "Please select a crane type to continue.",
      });
      return;
    }
    setSubmitStatus({ type: "", message: "" });
    if (currentStep < 2) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setSubmitStatus({ type: "", message: "" });
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const canProceedToStep2 = selectedCraneType !== "";

  function handleClick(type) {
    setSelectedCraneType(type.value);
    nextStep();
  }

  return (
    <>
      {/* Enhanced Sidebar Icons */}
      <div className="flex flex-col gap-4 justify-center items-center text-center fixed bottom-20 right-4 z-20 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-gray-200">
        {/* Contact */}
        <div
          onClick={handleContactClick}
          className="group cursor-pointer transform transition-all duration-300 hover:scale-110 flex flex-col items-center"
        >
          <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:from-blue-500 group-hover:to-blue-600">
            <Users className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
          </div>
          <p className="mt-2 text-xs font-medium text-blue-600">Contact</p>
        </div>

        {/* Configurator */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="group cursor-pointer transform transition-all duration-300 hover:scale-110 flex flex-col items-center"
        >
          <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:from-emerald-500 group-hover:to-emerald-600">
            <Settings className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
          </div>
          <p className="mt-2 text-xs font-medium text-emerald-600">Configure</p>
        </div>

        {/* PDF Download */}
        <div
          onClick={handlePdfDownload}
          className="group cursor-pointer transform transition-all duration-300 hover:scale-110 flex flex-col items-center"
        >
          <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:from-amber-400 group-hover:to-amber-500">
            <FaFilePdf className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
          </div>
          <p className="mt-2 text-xs font-medium text-amber-600">Catalog</p>
        </div>
      </div>

      {/* Enhanced Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center py-2 px-4 z-50">
          <Card className="custom-scrollbar w-full max-w-5xl max-h-[90vh]     overflow-y-auto border-0 shadow-2xl p-0">
            <CardHeader className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white p-6 flex-shrink-0 shadow-lg rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl font-bold text-balance">
                    Crane Specification Configurator
                  </CardTitle>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setIsModalOpen(false);
                    setCurrentStep(1);
                    setFormData({});
                    setSelectedCraneType("");
                    setErrors({});
                    setSubmitStatus({ type: "", message: "" });
                  }}
                  className="text-white hover:bg-white/20 h-8 w-8 p-0"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-center gap-4 mt-6">
                {[1, 2].map((step) => (
                  <div key={step} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                        step < currentStep
                          ? "bg-gradient-to-r from-blue-800 to-blue-900 text-white"
                          : step === currentStep
                          ? "bg-white text-slate-800"
                          : "bg-white/20 text-white/60"
                      }`}
                    >
                      {step < currentStep ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        step
                      )}
                    </div>
                    {step < 2 && (
                      <div
                        className={`w-12 h-0.5 mx-2 transition-all ${
                          step < currentStep
                            ? "bg-gradient-to-r from-blue-800 to-blue-900"
                            : "bg-white/20"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="flex gap-6 mt-3 text-sm">
                <span
                  className={
                    currentStep === 1
                      ? "text-white font-medium"
                      : "text-slate-300"
                  }
                >
                  Select Type
                </span>
                <span
                  className={
                    currentStep === 2
                      ? "text-white font-medium"
                      : "text-slate-300"
                  }
                >
                  Specifications & Contact
                </span>
              </div>
            </CardHeader>

            {submitStatus.message && (
              <div
                className={`px-6 py-4 border-b flex items-center gap-3 ${
                  submitStatus.type === "success"
                    ? "bg-green-50 border-green-200 text-green-800"
                    : "bg-red-50 border-red-200 text-red-800"
                }`}
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm font-medium">{submitStatus.message}</p>
              </div>
            )}

            <CardContent className="p-0">
              <div>
                <form onSubmit={handleSubmit} className="p-6">
                  {/* Step 1: Crane Type Selection */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {craneTypes.map((type) => (
                          <Card
                            key={type.value}
                            className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-2 p-4  ${
                              selectedCraneType === type.value
                                ? "border-blue-500 bg-blue-50 shadow-md"
                                : "border-gray-200 hover:border-blue-300"
                            }`}
                            onClick={function () {
                              handleClick(type);
                            }}
                          >
                            <CardContent className="p-0 text-center  ">
                              <Image
                                src={type.icon}
                                alt={type.icon}
                                className="text-3xl w-full h-40 object-cover  rounded-xl mb-3"
                                width={200}
                                height={200}
                              ></Image>
                              <h4 className="font-semibold text-lg mb-2 text-slate-800">
                                {type.label}
                              </h4>
                              <p className="text-sm text-slate-600 text-pretty">
                                {type.description}
                              </p>
                              {/* {selectedCraneType === type.value && (
                                <Badge className="mt-3 bg-blue-500 text-white hover:bg-blue-600">
                                  <CheckCircle className="w-3 h-3 mr-1" />
                                  Selected
                                </Badge>
                              )} */}
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Specifications & Contact */}
                  {currentStep === 2 && (
                    <div className="space-y-4">
                      {/* <div className="text-center mb-8">
                        <h3 className="text-xl font-semibold text-slate-800 mb-2">
                          {selectedCraneType} Specifications & Contact Details
                        </h3>
                        <p className="text-slate-600">
                          Provide the technical requirements and your contact information
                        </p>
                      </div> */}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {fieldsToShow.map((field) => (
                          <div
                            key={field.key}
                            className={
                              field.type === "textarea" ? "md:col-span-2" : ""
                            }
                          >
                            <div className="space-y-2">
                              <label
                                htmlFor={field.key}
                                className="text-sm font-medium text-slate-700 flex items-center gap-2"
                              >
                                {field.label}
                              </label>
                              {field.type === "textarea" ? (
                                <textarea
                                  id={field.key}
                                  placeholder={field.placeholder}
                                  value={formData[field.key] || ""}
                                  onChange={(e) =>
                                    handleInputChange(field.key, e.target.value)
                                  }
                                  rows={4}
                                  className={`w-full px-4 py-3 border rounded-lg bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${
                                    errors[field.key]
                                      ? "border-red-500"
                                      : "border-gray-300"
                                  }`}
                                />
                              ) : (
                                <input
                                  type={field.type}
                                  id={field.key}
                                  placeholder={field.placeholder}
                                  value={formData[field.key] || ""}
                                  onChange={(e) =>
                                    handleInputChange(field.key, e.target.value)
                                  }
                                  className={`w-full px-4 py-3 border rounded-lg bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                                    errors[field.key]
                                      ? "border-red-500"
                                      : "border-gray-300"
                                  }`}
                                />
                              )}
                              {errors[field.key] && (
                                <p className="text-red-500 text-sm">
                                  {errors[field.key]}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </form>
              </div>

              {/* Footer with Navigation */}
              <div className="border-t border-gray-200 p-2 bg-gray-50">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    {currentStep > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        className="px-6 border-gray-300 text-slate-700 hover:bg-gray-100 bg-transparent"
                        disabled={isSubmitting}
                      >
                        Previous
                      </Button>
                    )}
                  </div>

                  <div className="flex gap-3">
                    {currentStep < 2 ? (
                      ""
                    ) : (
                      <Button
                        type="submit"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="px-8 bg-gradient-to-r from-blue-800 to-blue-900 text-white disabled:bg-gray-400"
                      >
                        {isSubmitting ? "Submitting..." : "Submit Request"}
                        <CheckCircle className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
