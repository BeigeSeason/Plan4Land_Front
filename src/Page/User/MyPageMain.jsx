import { Header, Footer } from "../../Component/GlobalComponent";
import { UserMenu } from "../../Component/UserComponent";
import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, Link, Navigate } from "react-router-dom";
import { Button, CancelButton } from "../../Component/ButtonComponent";
import {
  MyPageMainContainer,
  UserMain,
  UserInfo,
  UserPlanning,
  FollowList,
  InvitePlanning,
} from "../../Style/MyPageMainStyled";
import UserInfoValidate from "./UserInfoValidate";
import { MyBookmarkTourItem } from "./MyBookmarkTourItem";
import { CheckModal } from "../../Util/Modal";
import { useAuth } from "../../Context/AuthContext";
import { MyBookmarkPlanItem } from "./MyBookmarkPlanItem";
import RequestPayment from "../Payment/RequestPayment";
import { MyPlannerApi } from "../../Api/ItemApi";
import { areas } from "../../Util/Common";

export const MyPageMain = () => {
  const [isFollowModalOpen, setIsFollowModalOpen] = useState(false);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("followings");
  const [planners, setPlanners] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [size] = useState(5);
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();

  const [followings, setFollowings] = useState(["사용자1", "사용자2"]);
  const [followers, setFollowers] = useState(["사용자4", "사용자5"]);
  const { user } = useAuth();
  const [invitedPlannings, setInvitedPlannings] = useState([
    { title: "전주 여행", owner: "aaa" },
    { title: "대전 여행", owner: "bbb" },
  ]);

  const openFollowModal = () => {
    setIsFollowModalOpen(true);
  };
  const closeFollowModal = () => {
    setIsFollowModalOpen(false);
  };

  const openInviteModal = () => {
    setIsInviteModalOpen(true);
  };
  const closeInviteModal = () => {
    setIsInviteModalOpen(false);
  };
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  const handleApproval = (title, owner) => {
    console.log(`플래닝 "${title}"을(를) 승인했습니다.`);
    // 플래닝 승인
  };

  const handleRejection = (title, owner) => {
    console.log(`플래닝 "${title}"을(를) 거절했습니다.`);
    // 플래닝 거절
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // URL에서 menu 값을 가져옴
  const menuFromUrl = queryParams.get("menu");
  const [selectedMenu, setSelectedMenu] = useState(menuFromUrl || "");

  useEffect(() => {
    setSelectedMenu(menuFromUrl || "");
  }, [menuFromUrl]);

  useEffect(() => {
    if (selectedMenu) {
      navigate(`?menu=${selectedMenu}`, { replace: true });
    } else {
      navigate("/mypage", { replace: true });
    }
  }, [selectedMenu, navigate]);

  const fetchPlanners = async () => {
    try {
      if (loading) return; // 중복 호출 방지
      setLoading(true);
      const data = await MyPlannerApi.getPlannersByOwner(user.id, page, size);
      setPlanners((prevPlanners) => [...prevPlanners, ...data.content]);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error("플래너 조회 오류:", error);
      setLoading(false);
    }
  };

  const planHandleClick = (id) => {
    navigate(`/planning/${id}`);
  };

  // 페이지가 변경될 때마다 플래너를 불러옴
  useEffect(() => {
    fetchPlanners();
  }, [page]);

  // 가로 스크롤 끝에 도달했을 때 페이지를 증가시키는 함수
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (
      container.scrollLeft + container.offsetWidth >=
      container.scrollWidth - 10
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <Header />
      <MyPageMainContainer>
        <div className="menu">
          <UserMenu
            setSelectedMenu={setSelectedMenu}
            selectedMenu={selectedMenu}
          />
        </div>
        <div className="MyPageMenu">
          {!selectedMenu && (
            <UserMain>
              <UserInfo>
                <div className="user">
                  <div
                    className="ProfileImg"
                    style={{
                      backgroundImage: `url(${user.imgPath})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="UserExplain">
                    <p>닉네임: {user.nickname}</p>
                    <p>아이디: {user.id}</p>
                    <div className="follow" onClick={openFollowModal}>
                      <p>팔로잉: 숫자 팔로워: 숫자</p>
                    </div>
                  </div>
                </div>
                <div className="Button">
                  <Link to={"/makeplanning"}>
                    <Button>플래닝 만들기</Button>
                  </Link>
                  <Button onClick={openInviteModal}>초대 확인</Button>
                </div>
              </UserInfo>
              <UserPlanning>
                <div
                  ref={scrollContainerRef}
                  className="scrollContainerRef"
                  onScroll={handleScroll}
                >
                  {loading && <p>로딩 중...</p>}
                  {planners.map((planner) => {
                    const areaName =
                      areas.find((area) => area.code === planner.area)?.name ||
                      "알 수 없는 지역";
                    const subAreaName =
                      areas
                        .find((area) => area.code === planner.area)
                        ?.subAreas.find(
                          (subArea) => subArea.code === planner.subArea
                        )?.name || "알 수 없는 하위 지역";
                    return (
                      <div
                        key={planner.id}
                        className="myPlanning"
                        onClick={() => planHandleClick(planner.id)}
                      >
                        <img
                          src={
                            planner.thumbnail || "/planning-pic/planningth1.jpg"
                          }
                          alt={planner.title}
                        />
                        <h3>{planner.title}</h3>
                        <p>{planner.theme}</p>
                        <p>{`${areaName} - ${subAreaName}`}</p>
                      </div>
                    );
                  })}
                </div>
              </UserPlanning>
            </UserMain>
          )}
          {selectedMenu === "내 플래닝"}
          {selectedMenu === "북마크 관광지" && <MyBookmarkTourItem />}
          {selectedMenu === "북마크 플래닝" && <MyBookmarkPlanItem />}
          {selectedMenu === "내 정보 수정" && <UserInfoValidate />}
          {selectedMenu === "멤버십" && <RequestPayment />}
        </div>
      </MyPageMainContainer>

      <CheckModal isOpen={isFollowModalOpen} onClose={closeFollowModal}>
        <FollowList>
          <div className="tabs">
            <button
              onClick={() => handleTabClick("followings")}
              className={selectedTab === "followings" ? "active" : ""}
            >
              팔로잉
            </button>
            <button
              onClick={() => handleTabClick("followers")}
              className={selectedTab === "followers" ? "active" : ""}
            >
              팔로워
            </button>
          </div>
          <div className="tab-content">
            {selectedTab === "followings" && (
              <div className="list">
                {followings.map((following, index) => (
                  <div key={index} className="list-item">
                    {following}
                  </div>
                ))}
              </div>
            )}

            {selectedTab === "followers" && (
              <div className="list">
                {followers.map((follower, index) => (
                  <div key={index} className="list-item">
                    {follower}
                  </div>
                ))}
              </div>
            )}
          </div>
        </FollowList>
      </CheckModal>

      <CheckModal isOpen={isInviteModalOpen} onClose={closeInviteModal}>
        <InvitePlanning>
          <h2>플래닝 초대</h2>
          {invitedPlannings.length > 0 ? (
            <div className="invited-planning-list">
              {invitedPlannings.map((planning, index) => (
                <div key={index} className="invited-planning-item">
                  <div className="planning-details">
                    <span className="label">플래닝: {planning.title}</span>{" "}
                    <br />
                    <span className="owner">
                      {planning.owner} 님이 초대하였습니다.
                    </span>
                  </div>
                  <div className="buttons">
                    <Button
                      onClick={() =>
                        handleApproval(planning.title, planning.owner)
                      }
                    >
                      승인
                    </Button>
                    <CancelButton
                      onClick={() =>
                        handleRejection(planning.title, planning.owner)
                      }
                    >
                      거절
                    </CancelButton>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>초대된 플래닝이 없습니다.</p>
          )}
        </InvitePlanning>
      </CheckModal>
      <Footer />
    </>
  );
};

export default MyPageMain;
