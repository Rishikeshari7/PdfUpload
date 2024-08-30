const BASEURL = import.meta.env.VITE_BASE_URL;
import toast from "react-hot-toast";
export const GetAllUser = async () => {
  let toastId = toast.loading("Loading");
  console.log(`API API API-> ${BASEURL}all`)
  try {
    const response = await fetch(`${BASEURL}all`, {
      method: "GET",
    });
    toast.success("Fetched User Successfully")
    const data = await response.json();
    console.log("Successfully Data retrive");
    return data.data;
  } catch (err) {
    console.error("Error fetching users:", err);
    toast.error("Can't Fetch User")
  } finally {
    toast.dismiss(toastId);
  }
};
export const uploadUser = async (userData) => {
  let toastId = toast.loading("Loading");
  try {
    const response = await fetch(`${BASEURL}create`,{
        method:"POST",
        body:userData
    })
    toast.success("Uploaded User Successfully")
    const data = response.json()
    return data;
  } catch (err) {
    console.log("Error in upload data")
    toast.error("Error in user data upload")
  } finally {
    toast.dismiss(toastId);
  }
};
