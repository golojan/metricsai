// To check if a string contains special characters or spaces //

export const hasSpacialChars = (str: string) => {
  const regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  return regex.test(str);
};
