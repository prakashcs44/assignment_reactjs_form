import { useState } from "react";

export const useForm = (initialValues, validator) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submittedData,setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (onSubmit) => {

    return (e) => {
      e.preventDefault();

      const validationErrors = validator(formData);

      if (Object.keys(validationErrors).length === 0) {
        setErrors({});
        setSubmittedData(formData);
        onSubmit(formData);
       
      } else {
        setErrors(validationErrors);
        setSubmittedData(null);
      }
    };
  };

  return {
    formData,
    errors,
    handleInputChange,
    handleSubmit,
    submittedData,
    setSubmittedData,
    setFormData
  };
};
