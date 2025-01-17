import styled from "styled-components";
import { colors } from "./GlobalStyle";

export const MainBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr); // 2행
  gap: 20px; // 상자 간 간격
  margin: 20px;
  height: 1000px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
  }
`;

export const GridItem = styled.div`
  display: flex;
  height: 100%;
`;
//         {/* 미니 검색창!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
export const QuickSearch = styled(GridItem)`
  grid-column: span 2;
  display: flex;
  flex-direction: column;

  .QuickSelect {
    display: flex;
    padding: 10px;
    border-radius: 8px;

    button {
      cursor: pointer;
      background-color: transparent;
      border: none;
      width: 100%;
      height: 30px;
      margin: 0 20px 20px;
      transition: all 0.3s ease;
      font-size: 16px;
      color: ${colors.colorA};
      &:hover {
        opacity: 0.7;
      }
      &.active {
        background-color: ${colors.colorC};
      }
    }
  }

  .SearchBox {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    .RegionSearch {
      display: flex;
      flex-direction: column;
      button {
        background-color: white;
        color: ${colors.colorA};
        height: 40px;
        width: 30%;
        margin: 5px;
        transition: all 0.3s ease;
        &:hover {
          background-color: ${colors.colorB};
          color: white;
          transform: translateY(-3px);
        }
      }
    }

    .SelectCategory {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      width: 100%;
      .Category {
        margin: 10px;
        text-align: center;
      }
    }
  }
  @media (max-width: 768px) {
    button {
      font-size: 12px;
      padding: 5px;
    }
  }
`;

//         {/* 상위 관광지 n개 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
export const RecommItem = styled(GridItem)`
  grid-column: span 2;
  height: 500px;

  .topTourItem {
    overflow: hidden;
    text-align: center;
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .topTourItem img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    transition: transform 0.3s ease;
  }

  .topTourItem h3,
  .topTourItem p {
    position: absolute;
    z-index: 10;
    color: white;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 10px;
    transition: opacity 0.5s ease;
    opacity: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  }

  .topTourItem h3 {
    bottom: 50px;
    right: 10px;
    font-size: 30px;
    transition: bottom 1.5s ease, opacity 1.5s ease;
  }

  .topTourItem p {
    bottom: 20px;
    right: 10px;
    font-size: 18px;
    transition: bottom 3s ease, opacity 3s ease;
  }

  /* 슬라이드가 변경될 때 글자가 나타나는 애니메이션 */
  .swiper-slide-active .topTourItem h3,
  .swiper-slide-active .topTourItem p {
    opacity: 1;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: white !important;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 24px;
    font-weight: bold;
  }

  .swiper-pagination-bullet-active {
    background-color: #0d5231; /* 활성화된 페이지 점 색상 (빨간색) */
  }
  @media (max-width: 768px) {
    height: 350px;
  }
`;

//         {/* 상위 플래닝 3개!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
export const RecommPlan = styled(GridItem)`
  grid-column: span 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    margin: 0;
    color: ${colors.colorA};
  }
`;
export const PlanBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 100%;

  .planitem {
    border: 1px solid black;
    border-radius: 20px;
    margin: 10px;
    overflow: hidden;
    cursor: pointer;
    img {
      min-height: 75%;
    }
  }
  @media (max-width: 768px) {
    height: 300px;
  }
`;
//         {/* 미니 캘린더!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
export const Festive = styled(GridItem)`
  grid-column: span 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  @media (max-width: 768px) {
    grid-column: span 2;
  }

  .react-calendar {
    width: 100%;
    height: 400px;
    border-radius: 10px;
    border: 1px solid #ddd;
  }

  .react-calendar__tile {
    position: relative;
    height: 45px;
    padding: 0;
    border-radius: 10px;
  }

  .react-calendar__tile--now {
    background: ${colors.colorD} !important;
  }

  .red-dot {
    width: 5px;
    height: 5px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    bottom: 8px;
    left: 45%;
  }

  .react-calendar__month-view__days__day {
    background-color: transparent;
    color: #333;
  }

  .react-calendar__month-view__weekdays__weekday--sunday {
    color: red;
    font-weight: bold;
  }

  .react-calendar__month-view__weekdays__weekday--saturday {
    color: blue;
    font-weight: bold;
  }

  .react-calendar__tile--inactive {
    color: #d3d3d3;
    pointer-events: none;
    background-color: transparent !important;
  }
`;

export const HolidayList = styled.div`
  margin: 20px;
  width: 100%;
  height: 180px;
  overflow-y: auto;
  border: 1px solid #ddd;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 15px;

  ul {
    margin: 0;
    padding-left: 20px;
  }

  li {
    padding: 5px 0;
    font-size: 16px;
    line-height: 1.6;
    color: #555;
  }
`;
