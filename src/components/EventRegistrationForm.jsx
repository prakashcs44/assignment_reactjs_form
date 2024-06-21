import React from "react";
import { useForm } from "../hooks/useForm";
import { eventRegistrationValidator } from "../helpers/formValidator";

function EventRegistrationForm() {
  const {
    formData,
    errors,
    handleInputChange,
    handleSubmit,
    submittedData,
    setSubmittedData,
  } = useForm(
    {
      name: "",
      email: "",
      age: "",
      attendingWithGuest: false,
      guestName: "",
    },
    eventRegistrationValidator
  );

  const onSubmit = (data) => {
     //perform api calls 
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg space-y-8">
      <h1 className="text-center font-bold text-xl">Event Registration Form</h1>
      {submittedData ? (
        <div className="mt-8 p-6 bg-gray-100 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Submitted Data
          </h2>
          <p className="text-gray-700 mb-2">
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Age:</strong> {submittedData.age}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Attending with Guest:</strong>{" "}
            {submittedData.attendingWithGuest ? "Yes" : "No"}
          </p>
          {submittedData.attendingWithGuest && (
            <p className="text-gray-700 mb-2">
              <strong>Guest Name:</strong> {submittedData.guestName}
            </p>
          )}
          <button
            className="text-blue-500 underline mt-4"
            onClick={() => setSubmittedData(null)}
          >
            Go back to form
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-700 font-bold mb-2">
              Age
            </label>
            <input
              id="age"
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.age && <span className="text-red-500">{errors.age}</span>}
          </div>

          <div className="mb-4 flex items-center">
            <label
              htmlFor="with-guest"
              className="block text-gray-700 font-bold mr-2"
            >
              Are you attending with a guest?
            </label>
            <input
              id="with-guest"
              type="checkbox"
              name="attendingWithGuest"
              checked={formData.attendingWithGuest}
              onChange={handleInputChange}
            />
          </div>

          {formData.attendingWithGuest && (
            <div className="mb-4">
              <label
                htmlFor="guest"
                className="block text-gray-700 font-bold mb-2"
              >
                Guest Name
              </label>
              <input
                id="guest"
                type="text"
                name="guestName"
                value={formData.guestName}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.guestName && (
                <span className="text-red-500">{errors.guestName}</span>
              )}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default EventRegistrationForm;
