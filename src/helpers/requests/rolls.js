import { axiosInstance } from "../axios"

export const getRolls = async() => {
    return await axiosInstance.get('rolls/getRolls');
}