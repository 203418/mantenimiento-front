import { axiosInstance } from "../axios"

export const getUserDifferentOfId = async (id) => {
    console.log(id)
    let data = null;
    data = await axiosInstance.get('users/getUsers/' + id);
    if (data.status === 400)
        return [];
    else return data;
}