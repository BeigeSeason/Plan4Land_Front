import { MainPlanning, DayToggleContainer } from "../../Style/PlanningStyled";
import { Button } from "../ButtonComponent";
import { themes } from "../../Util/Common";
import { ProfileImg } from "../ProfileImg";
import MemoIcon from "../../Img/memo-icon.png";
import { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import _ from "lodash";

export const PlannerInfoEditComponent = ({
  ws,
  socketConnected,
  plannerInfo,
  editPlannerInfo,
  setEditPlannerInfo,
  selectedThemes,
  setSelectedThemes,
  isEditting,
  plans,
  plannerId,
  sender,
}) => {
  const handleInfoInputChange = (e) => {
    const { name, value } = e.target;
    const byteLength = new TextEncoder().encode(value).length;

    // 한글 기준 20글자 제한 (20자 * 2바이트 = 40바이트 이하)
    if (byteLength <= 40) {
      setEditPlannerInfo((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleThemeClick = (theme) => {
    if (selectedThemes.includes(theme)) {
      // Remove theme from selection
      const updatedThemes = selectedThemes.filter((t) => t !== theme);
      setSelectedThemes(updatedThemes);
      console.log("여기서 출력한거임 : ", editPlannerInfo);
      setEditPlannerInfo((prev) => ({
        ...prev,
        theme: updatedThemes.join(", "),
      }));
    } else if (selectedThemes.length < 3) {
      // Add theme to selection
      const updatedThemes = [...selectedThemes, theme];
      setSelectedThemes(updatedThemes);
      setEditPlannerInfo((prev) => ({
        ...prev,
        theme: updatedThemes.join(", "),
      }));
    }
  };

  useEffect(() => {
    if (socketConnected && editPlannerInfo) {
      const message = {
        type: "PLANNER",
        plannerId: plannerId,
        sender: sender,
        data: {
          plannerInfo: [editPlannerInfo],
          plans: plans,
          isEditting: isEditting,
        },
      };
      ws.current.send(JSON.stringify(message));
      console.log("여기서 보냄", message);
    }
  }, [editPlannerInfo]);

  return (
    <>
      <div className="planner-thumbnail">
        <ProfileImg
          // file={`/img/${plannerInfo.thumbnail}`}
          file={"/img/planning-pic/planningth1.jpg"}
        />
      </div>
      <div>
        <input
          type="text"
          name="title"
          className="planner-edit-title"
          value={editPlannerInfo.title}
          onChange={handleInfoInputChange}
        />
        <div className="theme-buttons">
          {themes.map((theme) => (
            <button
              key={theme}
              onClick={() => handleThemeClick(theme)}
              className={`theme-button ${
                selectedThemes.includes(theme) ? "selected" : ""
              }`}
              disabled={
                selectedThemes.length >= 3 && !selectedThemes.includes(theme)
              }
            >
              {theme}
            </button>
          ))}
        </div>
        <input
          type="text"
          name="theme"
          value={plannerInfo.theme}
          onChange={handleInfoInputChange}
        />
        <input
          type="date"
          name="startDate"
          value={plannerInfo.startDate.split("T")[0]}
          onChange={(e) =>
            handleInfoInputChange({
              target: {
                name: "startDate",
                value: `${e.target.value}T00:00:00`,
              },
            })
          }
        />
        <input
          type="date"
          name="endDate"
          value={plannerInfo.endDate.split("T")[0]}
          onChange={(e) =>
            handleInfoInputChange({
              target: {
                name: "endDate",
                value: `${e.target.value}T00:00:00`,
              },
            })
          }
        />
      </div>
    </>
  );
};

export const PlansComponent = ({
  travelInfo,
  setTravelInfo,
  groupPlans,
  setGroupPlans,
  setSelectedPlan,
  setCurrentAddedPlace,
  memoState,
  setMemoState,
  plansEx,
  plans,
  plannerInfo,
  setModals,
  isEditting,
  editor,
}) => {
  const { user } = useAuth();
  const toggleDay = (index) => {
    setTravelInfo((prev) => ({
      ...prev,
      arrowDirections: prev.arrowDirections.map((dir, i) =>
        i === index ? (dir === "▼" ? "▲" : "▼") : dir
      ),
      dayToggle: prev.dayToggle.map((toggle, i) =>
        i === index ? !toggle : toggle
      ),
    }));
  };

  // 클릭한 메모 열기
  const handleMemoClick = (e, date, planIndex, plan) => {
    setMemoState((prevState) => ({
      ...prevState,
      isClicked: {
        ...prevState.isClicked,
        [date]: {
          ...prevState.isClicked[date],
          [planIndex]: !prevState.isClicked[date]?.[planIndex],
        },
      },
      updatedMemo: plan.memo ? plan.memo + "\n" : "",
      isOpened: !prevState.isOpened,
    }));
    setSelectedPlan({ date, planIndex, plan });
  };

  const updateMemo = (date, planIndex, updatedMemo) => {
    setGroupPlans((prevPlans) => ({
      ...prevPlans,
      [date]: prevPlans[date].map((plan, idx) =>
        idx === planIndex ? { ...plan, memo: updatedMemo } : plan
      ),
    }));
  };

  const insertText = (newText, date, planIndex) => {
    setMemoState((prev) => ({ ...prev, updatedMemo: newText }));
    updateMemo(date, planIndex, newText);
  };

  useEffect(() => {
    setTravelInfo((prev) => ({
      ...prev,
      arrowDirections: Array(travelInfo.days).fill("▼"),
      dayToggle: Array(travelInfo.days).fill(false),
    }));
    setMemoState((prev) => ({
      ...prev,
      isClicked: Array(travelInfo.days).fill(false),
      isOpened: false,
    }));
  }, [travelInfo.days]);

  useEffect(() => {
    const startDate = new Date(plannerInfo.startDate);
    const endDate = new Date(plannerInfo.endDate);
    const timeDiff = endDate.getTime() - startDate.getTime();
    const diffInDays = timeDiff / (1000 * 3600 * 24);
    setTravelInfo((prevState) => ({
      ...prevState,
      days: diffInDays + 1, // 여행 기간 설정
    }));

    const generateTravelDates = (start, end) => {
      const dates = [];
      let currentDate = new Date(start);
      let lastDate = new Date(end);
      currentDate.setDate(currentDate.getDate());
      lastDate.setDate(lastDate.getDate());
      while (currentDate <= lastDate) {
        dates.push(new Date(currentDate).toISOString().split("T")[0]); // YYYY-MM-DD 포맷
        // dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1); // 하루씩 증가
      }
      return dates;
    };
    const travelDates = generateTravelDates(
      plannerInfo.startDate,
      plannerInfo.endDate
    );
    setTravelInfo((prevState) => ({
      ...prevState,
      dates: travelDates, // 여행 날짜 설정
    }));

    const groupPlansByDate = () => {
      // 1. 날짜별로 그룹화
      const groupedPlans = plans.reduce((acc, plan) => {
        // console.log(plan);
        const dateKey = plan.date; // "2025-01-10" 형태로 날짜만 추출
        if (!acc[dateKey]) {
          acc[dateKey] = [];
        }
        if (!plan.seq) {
          const maxSeq =
            acc[dateKey].length > 0
              ? Math.max(...acc[dateKey].map((p) => p.seq || 0)) // seq가 없는 경우 기본값 0
              : 0;
          plan.seq = maxSeq + 1;
        }
        acc[dateKey].push(plan);
        return acc;
      }, {});

      // 2. 각 날짜 그룹 내에서 seq 순으로 정렬
      Object.keys(groupedPlans).forEach((date) => {
        groupedPlans[date].sort((a, b) => a.seq - b.seq);
      });
      return groupedPlans;
    };
    const groupedPlans = groupPlansByDate();
    console.log(groupedPlans);
    setGroupPlans(groupedPlans); // 정렬된 일정
  }, [plannerInfo, plans]);

  return (
    <MainPlanning>
      {travelInfo.dates.map((date, index) => (
        <div key={index}>
          <div
            className="planning-day"
            onClick={() => {
              toggleDay(index);
              console.log(travelInfo);
            }}
          >
            <span>{index + 1}일차</span>&nbsp;&nbsp;/&nbsp;&nbsp;
            <span>{date}</span>
            <span className="arrow">{travelInfo.arrowDirections[index]}</span>
          </div>
          {travelInfo.dayToggle[index] && (
            <DayToggleContainer>
              {groupPlans[date] && groupPlans[date].length > 0 ? (
                groupPlans[date].map((plan, planIndex) => (
                  <div
                    key={`${date}-${planIndex}`}
                    className="plan-place-container"
                  >
                    <div className="plan-place">
                      <p className="place-name">
                        {plan.spotName || plan.content}
                      </p>
                      <p className="place-category">{plan.category}</p>
                    </div>
                    <div className="memo-container">
                      <img
                        className="memo-icon"
                        src={MemoIcon}
                        alt="메모"
                        style={{
                          cursor: memoState.isOpened ? "default" : "pointer",
                        }}
                        onClick={(e) => {
                          if (memoState.isOpened) {
                            return;
                          }
                          setSelectedPlan({ date, planIndex, plan });
                          handleMemoClick(e, date, planIndex, plan);
                          e.stopPropagation();
                        }}
                      />
                      {memoState.isClicked[date]?.[planIndex] && (
                        <div className="memo-input">
                          <textarea
                            id="memo"
                            value={memoState.updatedMemo}
                            onChange={(e) =>
                              insertText(e.target.value, date, planIndex)
                            }
                            onClick={(e) => {
                              if (memoState.isOpened) {
                                e.stopPropagation();
                                return;
                              }
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-plans">일정이 없습니다.</p>
              )}
              {isEditting && editor === user.nickname && (
                <Button
                  className="add-place-button"
                  $margin="1.5% 0"
                  $width="60%"
                  $height="30px"
                  onClick={() => {
                    setModals((prev) => ({ ...prev, addPlaceModal: true }));
                    setCurrentAddedPlace((prev) => ({
                      ...prev,
                      date: date,
                    }));
                  }}
                >
                  + 장소 추가
                </Button>
              )}
            </DayToggleContainer>
          )}
        </div>
      ))}
    </MainPlanning>
  );
};
