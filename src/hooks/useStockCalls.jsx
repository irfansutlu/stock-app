import { fetchStart } from "../features/authSlice";
import { fetchFail, getSuccess } from "../features/stockSlice";
import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useStockCalls = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  // ------------ GET CALLS --------------

  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`stock/${url}/`);
      console.log(data);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getFirms = () => getStockData("firms");
  const getSales = () => getStockData("sales");
  const getCategories = () => getStockData("categories");
  const getBrands = () => getStockData("brands");
  const getProducts = () => getStockData("products");
  const getPurchases = () => getStockData("purchases");

  // ---------------- DELETE CALLS -------------------

  const deleteStockData = async (url, id) => {
    try {
      await axiosWithToken.delete(`stock/${url}/${id}/`);
      toastSuccessNotify(`${url} successfuly deleted`);
      getStockData(url);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be deleted`);
    }
  };

  const deleteFirm = (id) => deleteStockData("firms", id);
  const deleteBrand = (id) => deleteStockData("brand", id);

  // --------------- PUT CALL ----------------

  const putStockData = async (info, url) => {
    try {
      await axiosWithToken.put(`stock/${url}/${info.id}/`, info);
      toastSuccessNotify(`${url} successfuly uptaded`);
      getStockData(url);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be uptaded`);
    }
  };

  const putFirm = (info) => putStockData(info, "firms");
  const putBrand = (info) => putStockData(info, "brands");
  // --------------- POST CALL ----------------

  const postStockData = async (info, url) => {
    try {
      await axiosWithToken.post(`stock/${url}/`, info);
      toastSuccessNotify(`${url} successfuly added`);
      getStockData(url);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be added`);
    }
  };

  const postFirm = (info) => postStockData(info, "firms");
  const postBrand = (info) => postStockData(info, "brands");
  return {
    getStockData,
    getFirms,
    getSales,
    getCategories,
    getProducts,
    getBrands,
    getPurchases,
    deleteFirm,
    deleteBrand,
    putBrand,
    putFirm,
    postBrand,
    postFirm,
  };
};

export default useStockCalls;
