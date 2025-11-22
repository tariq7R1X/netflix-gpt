export const checkValidData = (fullName, email, password, isSignIn) => {
  if (!isSignIn) {
    const isFullNameValid = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/.test(fullName);
    if (!isFullNameValid) return "Full Name is required";
  }

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  if (!isEmailValid) return "Email ID is not valid";

  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
    password
  );

  if (!isPasswordValid) return "Password is not valid";

  return null;
};
