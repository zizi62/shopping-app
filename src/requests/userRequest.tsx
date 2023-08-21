import { TUserType } from "store/userType";

export const saveUserType = (userType: TUserType) => {
  localStorage.setItem('userType', JSON.stringify(userType));
}

export const getUserType = () => {
  const userType = localStorage.getItem('userType');
  return userType && JSON.parse(userType)
}

export const clearUserType = () => {
  localStorage.removeItem('userType');
}