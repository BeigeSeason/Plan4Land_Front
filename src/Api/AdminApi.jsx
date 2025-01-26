import AxiosInstance from "./AxiosInstance";
import axios from "axios";
import Common from "../Util/Common";


const AdminApi = {
  adminLogin: async (id, password) => {
    const data = {
      id: id,
      password: password,
    };
    return axios.post(Common.PLAN_DOMAIN + "/admin/admin-login", data);
  },
  // 유저 검색
  userSearch: async (keyword, select) => {
    const response = await AxiosInstance.get("/admin/member-search", {params: {keyword, select}});
    return response.data;
  },
  // 신고 목록 불러오기
  loadReports: async () => {
    const response = await AxiosInstance.get("/admin/report-list");
    console.log(response.data);
    return response.data;
  },
  reportCount: async (userId) => {
    const response = await AxiosInstance.get("/admin/report-count", {params: {userId: userId}});
    return response.data;
  },
  reportReject: async (reportId) => {
    console.log("AdminAPI : ", reportId);
    return await AxiosInstance.post(`/admin/report-manage?reportId=${reportId}&status=false`);
  },
  reportAccept: async (reportId, userId, day) => {
    return await AxiosInstance.post(`/admin/report-manage?reportId=${reportId}&userId=${userId}&day=${day}&status=true`);
  },
  userBan: async (userId, day) => {
    return await AxiosInstance.post(`/admin/member-ban?userId=${userId}&day=${day}`);
  }

}

export default AdminApi;