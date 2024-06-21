import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import { jobApplicationValidator } from "../helpers/formValidator";




function JobApplicationForm (){
  const { formData, errors, handleInputChange,submittedData, setSubmittedData,handleSubmit,setFormData } = useForm({
    fullName: "",
    email: "",
    phoneNumber: "",
    position: "",
    relevantExperience: "",
    portfolioURL: "",
    managementExperience: "",
    additionalSkills: {
      JavaScript: false,
      CSS: false,
      Python: false,
    },
    preferredInterviewTime: "",
  },jobApplicationValidator);

  const [] = useState(null);

  const onSubmit = (data) => {
     //perform some api calls
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      additionalSkills: {
        ...formData.additionalSkills,
        [name]: checked,
      },
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg space-y-8 border">
      <h1 className="text-center font-bold text-xl">Job Application form</h1>
      {submittedData ? (
        <div className="mt-8 p-6 bg-gray-100 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Submitted Data</h2>
          <p>
            <strong>Full Name:</strong> {submittedData.fullName}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Phone Number:</strong> {submittedData.phoneNumber}
          </p>
          <p>
            <strong>Applying for Position:</strong> {submittedData.position}
          </p>
          {submittedData.position === "Developer" ||
          submittedData.position === "Designer" ? (
            <p>
              <strong>Relevant Experience:</strong>{" "}
              {submittedData.relevantExperience} years
            </p>
          ) : null}
          {submittedData.position === "Designer" ? (
            <p>
              <strong>Portfolio URL:</strong> {submittedData.portfolioURL}
            </p>
          ) : null}
          {submittedData.position === "Manager" ? (
            <p>
              <strong>Management Experience:</strong>{" "}
              {submittedData.managementExperience}
            </p>
          ) : null}
          <p>
            <strong>Additional Skills:</strong>{" "}
            {Object.entries(submittedData.additionalSkills)
              .filter(([skill, selected]) => selected)
              .map(([skill]) => skill)
              .join(", ")}
          </p>
          <p>
            <strong>Preferred Interview Time:</strong>{" "}
            {submittedData.preferredInterviewTime}
          </p>
          <button
            className="underline"
            onClick={() => setSubmittedData(null)}
          >
            Go back to form
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <label
              htmlFor="fullName"
              className="block text-gray-700 font-bold mb-2"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.fullName && (
              <span className="text-red-500">{errors.fullName}</span>
            )}
          </div>

          <div className="mb-2">
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

          <div className="mb-2">
            <label
              htmlFor="phoneNumber"
              className="block text-gray-700 font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              id="phoneNumber"
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.phoneNumber && (
              <span className="text-red-500">{errors.phoneNumber}</span>
            )}
          </div>

          <div className="mb-2">
            <label
              htmlFor="position"
              className="block text-gray-700 font-bold mb-2"
            >
              Applying for Position
            </label>
            <select
              id="position"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Position</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
            </select>
            {errors.position && (
              <span className="text-red-500">{errors.position}</span>
            )}
          </div>

          {(formData.position === "Developer" ||
            formData.position === "Designer") && (
            <div className="mb-2">
              <label
                htmlFor="relevantExperience"
                className="block text-gray-700 font-bold mb-2"
              >
                Relevant Experience (years)
              </label>
              <input
                id="relevantExperience"
                type="number"
                name="relevantExperience"
                value={formData.relevantExperience}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.relevantExperience && (
                <span className="text-red-500">
                  {errors.relevantExperience}
                </span>
              )}
            </div>
          )}

          {formData.position === "Designer" && (
            <div className="mb-2">
              <label
                htmlFor="portfolioURL"
                className="block text-gray-700 font-bold mb-2"
              >
                Portfolio URL
              </label>
              <input
                id="portfolioURL"
                type="text"
                name="portfolioURL"
                value={formData.portfolioURL}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.portfolioURL && (
                <span className="text-red-500">{errors.portfolioURL}</span>
              )}
            </div>
          )}

          {formData.position === "Manager" && (
            <div className="mb-2">
              <label
                htmlFor="managementExperience"
                className="block text-gray-700 font-bold mb-2"
              >
                Management Experience
              </label>
              <input
                id="managementExperience"
                type="text"
                name="managementExperience"
                value={formData.managementExperience}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.managementExperience && (
                <span className="text-red-500">
                  {errors.managementExperience}
                </span>
              )}
            </div>
          )}

          <div className="mb-2">
            <label className="block text-gray-700 font-bold mb-2">
              Additional Skills
            </label>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="JavaScript"
                  checked={formData.additionalSkills.JavaScript}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                <span className="ml-2">JavaScript</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="CSS"
                  checked={formData.additionalSkills.CSS}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                <span className="ml-2">CSS</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="Python"
                  checked={formData.additionalSkills.Python}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Python</span>
              </label>
            </div>
            {errors.additionalSkills && (
              <span className="text-red-500">{errors.additionalSkills}</span>
            )}
          </div>

          <div className="mb-2">
            <label
              htmlFor="preferredInterviewTime"
              className="block text-gray-700 font-bold mb-2"
            >
              Preferred Interview Time
            </label>
            <input
              id="preferredInterviewTime"
              type="datetime-local"
              name="preferredInterviewTime"
              value={formData.preferredInterviewTime}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.preferredInterviewTime && (
              <span className="text-red-500">
                {errors.preferredInterviewTime}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-2"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default JobApplicationForm;
