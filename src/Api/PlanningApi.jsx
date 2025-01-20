import AxiosInstance from "./AxiosInstance";

const PlanningApi = {
  makePlanning: async (
    title,
    theme,
    id,
    startDate,
    endDate,
    area,
    subArea,
    thumbnail,
    isPublic
  ) => {
    // const date = new Date(plan.date);
    // date.setHours(10, 0, 0, 0);
    // const startDateSetHour = startDate.setHours(10, 0, 0, 0);
    // console.log(new Date(startDate.setHours(10, 0, 0, 0)));
    // console.log(startDate);
    // console.log(new Date(startDate));
    // console.log(new Date(startDate).setHours(10, 0, 0, 0));
    const plannerInfo = {
      title: title,
      theme: theme,
      id: id,
      startDate: new Date(startDate.setHours(10, 0, 0, 0)),
      endDate: new Date(endDate.setHours(10, 0, 0, 0)),
      area: area,
      subArea: subArea,
      thumbnail: thumbnail,
      isPublic: isPublic,
    };
    return await AxiosInstance.post(`/planner/insert`, plannerInfo);
  },
  editPlannerInfo: async (editPlannerInfo, plannerId) => {
    const plannerInfo = {
      title: editPlannerInfo.title,
      theme: editPlannerInfo.theme,
      id: editPlannerInfo.ownerId,
      startDate: new Date(
        new Date(editPlannerInfo.startDate).setHours(10, 0, 0, 0)
      ),
      endDate: new Date(
        new Date(editPlannerInfo.endDate).setHours(10, 0, 0, 0)
      ),
      area: editPlannerInfo.area,
      subArea: editPlannerInfo.subArea,
      thumbnail: editPlannerInfo.thumbnail,
      plannerId: plannerId,
    };
    return await AxiosInstance.post(
      `/planner/update?plannerId=${plannerId}`,
      plannerInfo
    );
  },
  getPlan: async (plannerId) => {
    return (await AxiosInstance.get(`/planner/getPlan?plannerId=${plannerId}`))
      .data;
  },
  editPlan: async (plannerId, newPlans) => {
    const planInfo = newPlans.map((plan) => {
      const date = new Date(plan.date);
      date.setHours(10, 0, 0, 0);

      return {
        category: plan.category,
        date: date, // 수정된 Date 객체 사용
        latitude: plan.position?.lat || plan.latitude,
        longitude: plan.position?.lng || plan.longitude,
        seq: plan.seq,
        spotName: plan.content || plan.spotName,
      };
    });
    return await AxiosInstance.post(`/planner/updatePlan`, planInfo, {
      params: { plannerId },
    });
  },
  getPlanning: async (plannerId) => {
    return (await AxiosInstance.get(`/planner/${plannerId}`)).data;
  },
  getIsBookmarked: async (memberId, plannerId) => {
    const params = {
      memberId,
      plannerId,
    };
    return (await AxiosInstance.get(`/bookmarkPlanner`, { params })).data;
  },
  putBookmarked: async (memberId, plannerId) => {
    const params = {
      memberId,
      plannerId,
    };
    return (await AxiosInstance.put(`/bookmarkPlanner`, null, { params })).data;
  },
  deleteBookmarked: async (memberId, plannerId) => {
    const params = {
      memberId,
      plannerId,
    };
    return (await AxiosInstance.delete(`/bookmarkPlanner`, { params })).data;
  },
  getChatMsgs: async (plannerId) => {
    return (await AxiosInstance.get(`/chat/msg/${plannerId}`)).data;
  },
  // chatDetail: async (plannerId) => {
  //   return (await AxiosInstance.get(`/chat/room/${plannerId}`)).data;
  // },
  inviteMember: async (memberId, plannerId) => {
    const params = {
      memberId,
      plannerId,
    };
    return await AxiosInstance.post(`/planner/invite`, null, { params });
  },
  findInvitedPlanners: async (memberId) => {
    return (await AxiosInstance.get(`/planner/invite/${memberId}`)).data;
  },
  acceptInvitation: async (memberId, plannerId) => {
    const params = {
      memberId,
      plannerId,
    };
    return await AxiosInstance.post(`/planner/invite/accept`, null, { params });
  },
  rejectInvitation: async (memberId, plannerId) => {
    console.log(memberId, plannerId);
    const params = {
      memberId,
      plannerId,
    };
    return await AxiosInstance.delete(`/planner/invite/reject`, { params });
  },
};

export default PlanningApi;
