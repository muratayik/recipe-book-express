export const findUserRole = (email: string) => {
  const adminEmailList = process.env.ADMIN_EMAIL_LIST || "";

  const splittedAdminEmailList = adminEmailList.split(",");
  const isEmailInAdminList = splittedAdminEmailList.includes(email);

  return isEmailInAdminList ? "admin" : "user";
};
