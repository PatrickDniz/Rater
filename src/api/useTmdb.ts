import axiosInstance from "@/lib/axiosInstance";

export const useTmdb = async (endpoint: string) => {
  try {
    const response = await axiosInstance.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};