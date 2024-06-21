import React from "react";
import { surveyFormValidator } from "../helpers/formValidator";
import { useForm } from "../hooks/useForm";
import { useState,useEffect } from "react";
function SurveyForm() {
  const initialValues = {
    fullName: "",
    email: "",
    surveyTopic: "",
    favoriteProgrammingLanguage: "",
    yearsOfExperience: "",
    exerciseFrequency: "",
    dietPreference: "",
    highestQualification: "",
    fieldOfStudy: "",
    feedback: "",
  };

 

  const {
    formData,
    errors,
    handleInputChange,
    handleSubmit,
    submittedData,
    setSubmittedData,
  } = useForm(initialValues, surveyFormValidator);
  const [additionalQuestions, setAdditionalQuestions] = useState([]);

  useEffect(() => {
    if (formData.surveyTopic) {
      fetchAdditionalQuestions(formData.surveyTopic);
    }
  }, [formData.surveyTopic]);

  

  const fetchAdditionalQuestions = async (topic) => {
    try {
      const response = await fetch(
        `https://api.example.com/questions?topic=${topic}`
      );
      const data = await response.json();
      setAdditionalQuestions(data);
    } catch (error) {
      console.error("Error fetching additional questions:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg space-y-8">
         <h1 className="text-center font-bold text-xl">Survey Form</h1>
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
            <strong>Survey Topic:</strong> {submittedData.surveyTopic}
          </p>
          {submittedData.surveyTopic === "Technology" && (
            <>
              <p>
                <strong>Favorite Programming Language:</strong>{" "}
                {submittedData.favoriteProgrammingLanguage}
              </p>
              <p>
                <strong>Years of Experience:</strong>{" "}
                {submittedData.yearsOfExperience}
              </p>
            </>
          )}
          {submittedData.surveyTopic === "Health" && (
            <>
              <p>
                <strong>Exercise Frequency:</strong>{" "}
                {submittedData.exerciseFrequency}
              </p>
              <p>
                <strong>Diet Preference:</strong> {submittedData.dietPreference}
              </p>
            </>
          )}
          {submittedData.surveyTopic === "Education" && (
            <>
              <p>
                <strong>Highest Qualification:</strong>{" "}
                {submittedData.highestQualification}
              </p>
              <p>
                <strong>Field of Study:</strong> {submittedData.fieldOfStudy}
              </p>
            </>
          )}
          <p>
            <strong>Feedback:</strong> {submittedData.feedback}
          </p>
          {additionalQuestions.map((question, index) => (
            <p key={index}>
              <strong>{question.question}:</strong> {question.answer}
            </p>
          ))}
          <button className="underline" onClick={() => setSubmittedData(null)}>
            Go back to form
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit((data) =>
            console.log("Form submitted with data:", data)
          )}
        >
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
              type="email"
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
              htmlFor="surveyTopic"
              className="block text-gray-700 font-bold mb-2"
            >
              Survey Topic
            </label>
            <select
              id="surveyTopic"
              name="surveyTopic"
              value={formData.surveyTopic}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Topic</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
            </select>
            {errors.surveyTopic && (
              <span className="text-red-500">{errors.surveyTopic}</span>
            )}
          </div>
          {formData.surveyTopic === "Technology" && (
            <>
              <div className="mb-2">
                <label
                  htmlFor="favoriteProgrammingLanguage"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Favorite Programming Language
                </label>
                <select
                  id="favoriteProgrammingLanguage"
                  name="favoriteProgrammingLanguage"
                  value={formData.favoriteProgrammingLanguage}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select Language</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                  <option value="C#">C#</option>
                </select>
                {errors.favoriteProgrammingLanguage && (
                  <span className="text-red-500">
                    {errors.favoriteProgrammingLanguage}
                  </span>
                )}
              </div>
              <div className="mb-2">
                <label
                  htmlFor="yearsOfExperience"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Years of Experience
                </label>
                <input
                  id="yearsOfExperience"
                  type="number"
                  name="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.yearsOfExperience && (
                  <span className="text-red-500">
                    {errors.yearsOfExperience}
                  </span>
                )}
              </div>
            </>
          )}
          {formData.surveyTopic === "Health" && (
            <>
              <div className="mb-2">
                <label
                  htmlFor="exerciseFrequency"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Exercise Frequency
                </label>
                <select
                  id="exerciseFrequency"
                  name="exerciseFrequency"
                  value={formData.exerciseFrequency}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select Frequency</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Rarely">Rarely</option>
                </select>
                {errors.exerciseFrequency && (
                  <span className="text-red-500">
                    {errors.exerciseFrequency}
                  </span>
                )}
              </div>
              <div className="mb-2">
                <label
                  htmlFor="dietPreference"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Diet Preference
                </label>
                <select
                  id="dietPreference"
                  name="dietPreference"
                  value={formData.dietPreference}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select Diet</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Non-Vegetarian">Non-Vegetarian</option>
                </select>
                {errors.dietPreference && (
                  <span className="text-red-500">{errors.dietPreference}</span>
                )}
              </div>
            </>
          )}
          {formData.surveyTopic === "Education" && (
            <>
              <div className="mb-2">
                <label
                  htmlFor="highestQualification"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Highest Qualification
                </label>
                <select
                  id="highestQualification"
                  name="highestQualification"
                  value={formData.highestQualification}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select Qualification</option>
                  <option value="High School">High School</option>
                  <option value="Bachelor's">Bachelor's</option>
                  <option value="Master's">Master's</option>
                  <option value="PhD">PhD</option>
                </select>
                {errors.highestQualification && (
                  <span className="text-red-500">
                    {errors.highestQualification}
                  </span>
                )}
              </div>
              <div className="mb-2">
                <label
                  htmlFor="fieldOfStudy"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Field of Study
                </label>
                <input
                  id="fieldOfStudy"
                  type="text"
                  name="fieldOfStudy"
                  value={formData.fieldOfStudy}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.fieldOfStudy && (
                  <span className="text-red-500">{errors.fieldOfStudy}</span>
                )}
              </div>
            </>
          )}
          <div className="mb-2">
            <label
              htmlFor="feedback"
              className="block text-gray-700 font-bold mb-2"
            >
              Feedback
            </label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.feedback && (
              <span className="text-red-500">{errors.feedback}</span>
            )}
          </div>
          {additionalQuestions.map((question, index) => (
            <div key={index} className="mb-2">
              <label className="block text-gray-700 font-bold mb-2">
                {question.question}
              </label>
              <input
                type="text"
                name={`additionalQuestion${index}`}
                value={formData[`additionalQuestion${index}`] || ""}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          ))}
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
}

export default SurveyForm;
