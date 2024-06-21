export const eventRegistrationValidator = (data) => {
  const errors = {};
  if (!data.name) errors.name = "Name is required";
  if (!data.email) errors.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(data.email))
    errors.email = "Email is invalid";
  if (!data.age) errors.age = "Age is required";
  else if (isNaN(data.age) || data.age <= 0)
    errors.age = "Age must be a number greater than 0";
  if (data.attendingWithGuest && !data.guestName)
    errors.guestName = "Guest name is required if attending with a guest";
  return errors;
};




export const jobApplicationValidator = (data) => {
  const errors = {};
  if (!data.fullName) errors.fullName = "Full Name is required";
  if (!data.email) errors.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(data.email))
    errors.email = "Email is invalid";
  if (!data.phoneNumber) errors.phoneNumber = "Phone Number is required";
  else if (isNaN(data.phoneNumber))
    errors.phoneNumber = "Phone Number must be a valid number";
  if (
    (data.position === "Developer" || data.position === "Designer") &&
    (!data.relevantExperience || data.relevantExperience <= 0)
  )
    errors.relevantExperience =
      "Relevant Experience is required and must be a number greater than 0";
  if (data.position === "Designer" && !data.portfolioURL)
    errors.portfolioURL = "Portfolio URL is required";
  else if (
    data.position === "Designer" &&
    !/^https?:\/\/.+/.test(data.portfolioURL)
  )
    errors.portfolioURL = "Portfolio URL must be a valid URL";
  if (data.position === "Manager" && !data.managementExperience)
    errors.managementExperience = "Management Experience is required";
  if (
    !data.additionalSkills.JavaScript &&
    !data.additionalSkills.CSS &&
    !data.additionalSkills.Python
  )
    errors.additionalSkills = "At least one skill must be selected";
  if (!data.preferredInterviewTime)
    errors.preferredInterviewTime = "Preferred Interview Time is required";
  return errors;
};


export const surveyFormValidator = (data)=>{
  const errors = {};
    if (!data.fullName) errors.fullName = "Full Name is required";
    if (!data.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(data.email))
      errors.email = "Email is invalid";
    if (!data.surveyTopic) errors.surveyTopic = "Survey Topic is required";
    if (data.surveyTopic === "Technology") {
      if (!data.favoriteProgrammingLanguage)
        errors.favoriteProgrammingLanguage =
          "Favorite Programming Language is required";
      if (!data.yearsOfExperience)
        errors.yearsOfExperience = "Years of Experience is required";
    }
    if (data.surveyTopic === "Health") {
      if (!data.exerciseFrequency)
        errors.exerciseFrequency = "Exercise Frequency is required";
      if (!data.dietPreference)
        errors.dietPreference = "Diet Preference is required";
    }
    if (data.surveyTopic === "Education") {
      if (!data.highestQualification)
        errors.highestQualification = "Highest Qualification is required";
      if (!data.fieldOfStudy)
        errors.fieldOfStudy = "Field of Study is required";
    }
    if (!data.feedback || data.feedback.length < 50)
      errors.feedback =
        "Feedback is required and must be at least 50 characters";
    return errors;
}