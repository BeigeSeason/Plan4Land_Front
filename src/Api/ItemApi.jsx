import AxiosInstance from "./AxiosInstance";

// 여행지 목록 조회
export const TravelSpotApi = {
  getTravelSpots: async (filters) => {
    try {
      const params = {
        ...filters,
      };

      console.log("******************************");
      console.log(filters);

      const response = await AxiosInstance.get("/api/travelspots", { params });
      console.log("API 응답 데이터:", response.data);

      return response.data || [];
    } catch (error) {
      console.error("여행지 데이터 조회 오류:", error);
      throw error;
    }
  },
};

// 여행지 상세 정보 조회
export const TourItemApi = {
  getSpotDetails: async (spotId) => {
    try {
      console.log("여기 : ", spotId);
      const response = await AxiosInstance.get(`/api/travelspotInfo/${spotId}`);
      console.log("API 응답 데이터:", response.data); // 응답 데이터 확인
      return response.data || [];
    } catch (error) {
      console.error("여행지 상세 조회 오류:", error);
      throw error;
    }
  },
};

// 관광지 북마크 추가, 삭제, 상태확인
export const BookmarkApi = {
  addBookmark: async (memberId, spotId) => {
    try {
      const response = await AxiosInstance.post("/api/bookmarks/add", null, {
        params: { memberId, spotId },
      });
      return response.data;
    } catch (error) {
      console.error("북마크 추가 실패:", error);
      throw error;
    }
  },

  removeBookmark: async (memberId, spotId) => {
    try {
      const response = await AxiosInstance.delete("/api/bookmarks/remove", {
        params: { memberId, spotId }, // params로 변경
      });
      return response.data;
    } catch (error) {
      console.error("북마크 삭제 실패:", error);
      throw error;
    }
  },

  getBookmarkStatus: async (memberId, spotId) => {
    try {
      const response = await AxiosInstance.get("/api/bookmarks/status", {
        params: { memberId, spotId },
      });
      return response.data;
    } catch (error) {
      console.error("북마크 상태 조회 실패:", error);
      throw error;
    }
  },
};

// 내가 북마크한 관광지 목록 조회
export const BookmarkedSpotsApi = {
  getBookmarkedSpots: async (memberId, page = 0, size = 3) => {
    try {
      const response = await AxiosInstance.get(`/api/bookmarks/myBookmarks`, {
        params: { memberId, page, size },
      });
      return response.data; // 응답 데이터에는 Page 객체가 포함됩니다.
    } catch (error) {
      console.error("북마크 여행지 조회 오류:", error);
      throw error;
    }
  },
};

// 플래너 목록 조회
export const PlannerItemApi = {
  getPlanners: async (filters, page = 0, size = 10) => {
    try {
      const params = {
        ...filters, // 필터 추가
      };
      const response = await AxiosInstance.get("/planner/planners", { params });
      console.log("API 응답 데이터:", response.data);
      return response.data || [];
    } catch (error) {
      console.error("플래너 데이터 조회 오류:", error);
      throw error;
    }
  },
};

// 내가 북마크한 플래너 목록 조회
export const BookmarkedPlanApi = {
  getBookmarkedPlan: async (memberId, page = 0, size = 5) => {
    try {
      const response = await AxiosInstance.get(
        `/bookmarkPlanner/myBookmarkPlanners`,
        {
          params: { memberId, page, size },
        }
      );
      return response.data;
    } catch (error) {
      console.error("북마크 플랜 조회 오류:", error);
      throw error;
    }
  },
};

// 상위 5개 관광지 목록
export const TopTourApi = {
  getTop5Travelspots: async () => {
    try {
      const response = await AxiosInstance.get(`/api/travelspotTop5`);
      return response.data;
    } catch (error) {
      console.error("상위 5개 관광지 조회 오류: ", error);
      throw error;
    }
  },
};

// 상위 3개 플래닝 목록
export const TopPlanApi = {
  getTop3Plans: async () => {
    try {
      const response = await AxiosInstance.get(`/bookmarkPlanner/plannersTop3`);
      return response.data;
    } catch (error) {
      console.error("상위 3개 플래닝 조회 오류: ", error);
      throw error;
    }
  },
};

// 내가 작성한 플래닝 목록 조회
export const MyPlannerApi = {
  getPlannersByOwner: async (memberId, page = 0, size = 5) => {
    try {
      const response = await AxiosInstance.get(`/planner/myPlanners`, {
        params: { memberId, page, size },
      });
      return response.data;
    } catch (error) {
      console.error("플래너 조회 오류:", error);
      throw error;
    }
  },
};

// 다른 사람이 작성한 플래닝 목록 조회
export const UserPlannerApi = {
  getuserPlannersByOwner: async (memberId, page = 0, size = 5) => {
    try {
      const response = await AxiosInstance.get(`/planner/userPlanners`, {
        params: { memberId, page, size },
      });
      return response.data;
    } catch (error) {
      console.error("플래너 조회 오류:", error);
      throw error;
    }
  },
};

// 내가 작성, 포함된 플래닝 목록 조회
export const InPlannerApi = {
  getIncludePlan: async (memberId, page = 0, size = 5) => {
    try {
      const response = await AxiosInstance.get(`/planner/inPlanners`, {
        params: { memberId, page, size },
      });
      return response.data;
    } catch (error) {
      console.error("플래너 조회 오류:", error);
      throw error;
    }
  },
};

// 공휴일 목록 불러오기
export const HolidayApi = {
  getHolidaysByMonth: async (year, month) => {
    try {
      const response = await AxiosInstance.get("/holidays", {
        params: { year, month },
      });
      return response.data; // 공휴일 목록 반환
    } catch (error) {
      console.error("공휴일 조회 오류:", error);
      throw error;
    }
  },
};
