import styled from "styled-components";
import { colors } from "./GlobalStyle";

export const List = styled.div`
  display: flex;
  width: 80%;
  min-height: 1000px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 50px;
  /* gap: 50px; */
  justify-content: center;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const SelectTrafficItem = styled.div`
  /* width: 350px; */
  padding-top: 40px;
  position: relative;
  margin-right: 90px;
  width: 470px;
  .title {
    width: 100%;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
    h3 {
      font-size: 15px;
      margin-bottom: 5px;
      margin-left: 10px;
    }
  }
  .buttons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
  }
  button {
    font-size: 11px;
    font-weight: bold;
    background-color: white;
    color: ${colors.colorA};
    height: 30px;
    width: 85%;
    margin: 1px;
    border: 1px solid ${colors.colorC};

    &.load {
      width: 97%;
    }

    &:hover {
      opacity: 0.7;
    }
    &.selected {
      background-color: ${colors.colorB};
      color: white;
    }
    &:disabled {
      background-color: #f0f0f0;
      color: #b0b0b0;
    }
  }

  .reset-button {
    width: 80px;
    height: 20px;
    font-size: 10px;
    padding: 0;
    background-color: #f3f3f3;
    border: none;
    border-radius: 50px;
    color: gray;
    position: absolute;
    top: 10px;
    right: 30px;

    &:hover {
      cursor: pointer;
      background-color: #f3f3f3;
      opacity: 0.7;
      color: gray;
    }
    @media (max-width: 768px) {
      top: 4px;
      scale: 80%;
    }
  }
  .toggle-button {
    font-size: 16px;
    cursor: pointer;
    background: transparent;
    border: none;
    color: ${colors.colorA};
  }

  .toggle-button:hover {
    color: ${colors.colorB};
  }
  @media (max-width: 1024px) {
    width: 310px;
    .buttons {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  /* SelectTourItem 기본 상태 숨기기 (모바일 화면) */
  @media (max-width: 768px) {
    visibility: hidden;
    opacity: 0;
    transform: translateX(-100%);
    transition: all 0.3s ease;

    &.open {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
    }

    position: fixed; /* 화면에 고정된 위치 */
    z-index: 10;
    background-color: white;
    top: 90px;
    left: 40px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

    max-height: 72%;
    overflow-y: auto;

    .buttons {
      width: 80%;
      grid-template-columns: repeat(3, 1fr);
    }

    button {
      font-size: 9px;
      width: 90px;
      height: 28px;
    }

    h3 {
      font-size: 15px;
      margin: 15px 0 5px 10px;
      &.title {
        margin-left: 0;
      }
    }
  }
`;

export const SelectTourItem = styled.div`
  /* width: 350px; */
  padding-top: 40px;
  position: relative;
  margin-right: 30px;
  width: 450px;
  .title {
    width: 100%;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
    h3 {
      font-size: 15px;
      margin-bottom: 5px;
      margin-left: 10px;
    }
  }
  .buttons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
  }
  button {
    font-size: 11px;
    font-weight: bold;
    background-color: white;
    color: ${colors.colorA};
    height: 30px;
    width: 90%;
    margin: 3px;
    border: 1px solid ${colors.colorC};

    &.load {
      width: 97%;
    }

    &:hover {
      opacity: 0.7;
    }
    &.selected {
      background-color: ${colors.colorB};
      color: white;
    }
    &:disabled {
      background-color: #f0f0f0;
      color: #b0b0b0;
    }
  }

  .reset-button {
    width: 80px;
    height: 20px;
    font-size: 10px;
    padding: 0;
    background-color: #f3f3f3;
    border: none;
    border-radius: 50px;
    color: gray;
    position: absolute;
    top: 10px;
    right: 30px;

    &:hover {
      cursor: pointer;
      background-color: #f3f3f3;
      opacity: 0.7;
      color: gray;
    }
    @media (max-width: 768px) {
      top: 4px;
      scale: 80%;
    }
  }
  .toggle-button {
    font-size: 16px;
    cursor: pointer;
    background: transparent;
    border: none;
    color: ${colors.colorA};
  }

  .toggle-button:hover {
    color: ${colors.colorB};
  }
  @media (max-width: 1024px) {
    width: 300px;
    .buttons {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  /* SelectTourItem 기본 상태 숨기기 (모바일 화면) */
  @media (max-width: 768px) {
    visibility: hidden;
    opacity: 0;
    transform: translateX(-100%);
    transition: all 0.3s ease;

    &.open {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
    }

    position: absolute;
    z-index: 10;
    background-color: white;
    top: 90px;
    left: 40px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    .buttons {
      width: 80%;
      grid-template-columns: repeat(3, 1fr);
    }
    button {
      font-size: 9px;
      width: 90px;
      height: 28px;
    }
    h3 {
      font-size: 15px;
      margin: 15px 0 5px 10px;
      &.title {
        margin-left: 0;
      }
    }
  }
`;

export const LoadBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const FilterButton = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    text-align: center;
    width: 20px;
    padding: 20px 0 0 20px;
    background-color: transparent;
    color: gray;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      opacity: 0.7;
    }
  }
`;
export const SearchSt = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  align-items: center;

  .search-wrapper {
    position: relative;
    flex-grow: 0.9;
    display: flex;
    align-items: center;
  }

  .search {
    font-size: 14px;
    height: 40px;
    border-radius: 50px;
    border: 2px solid ${colors.colorB};
    padding-left: 20px;
    outline: none;
    width: 100%;
    box-sizing: border-box;
  }

  .search-button {
    position: absolute;
    right: 15px;
    top: 10%;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    color: ${colors.colorB};
    width: 20px;

    &:hover {
      background: transparent;
      color: ${colors.colorA};
      border: none;
      transform: none;
    }
  }
  button.search-button:hover {
    background: transparent;
    color: ${colors.colorA};
    border: none;
    transform: none;
  }
  @media (max-width: 768px) {
    margin-top: 20px;
    .search {
      height: 30px;
      font-size: 10px;
    }
    .search-button {
      top: 0%;
      scale: 0.8;
    }
  }
`;

export const CalenderSt = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  align-items: center;

  .search-wrapper {
    position: relative;
    flex-grow: 0.9;
    display: flex;
    align-items: center;
  }

  .search {
    font-size: 14px;
    height: 40px;
    border-radius: 50px;
    border: 2px solid ${colors.colorB};
    padding-left: 20px;
    outline: none;
    width: 100%;
    box-sizing: border-box;
  }

  .search-button {
    position: absolute;
    right: 15px;
    top: 10%;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    color: ${colors.colorB};
    width: 20px;

    &:hover {
      background: transparent;
      color: ${colors.colorA};
      border: none;
      transform: none;
    }
  }
  button.search-button:hover {
    background: transparent;
    color: ${colors.colorA};
    border: none;
    transform: none;
  }
  @media (max-width: 768px) {
    margin-top: 20px;
    .search {
      height: 30px;
      font-size: 10px;
    }
    .search-button {
      top: 0%;
      scale: 0.8;
    }
  }
`;

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 40vw;
  .totalCount {
    align-self: flex-start;
    font-size: 25px;
    font-weight: bolder;
    border-bottom: 1px solid #ddd;
    width: 100%;
    color: ${colors.colorA};
    padding: 10px 0 15px 0;
    position: relative;
    button {
      position: absolute;
      right: 0;
      height: 35px;
    }
    @media (max-width: 768px) {
      font-size: 20px;
      button {
        scale: 0.7;
      }
    }
  }
  .itemBox {
    border-bottom: 1px solid #ddd;
  }
  .tour-list,
  .plannerList {
    padding: 0;
  }
  .selectMenu {
    width: 95%;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const SortSelect = styled.select`
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: white;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 150px;
  height: 30px;
  &:focus {
    outline: none;
    border-color: ${colors.colorA};
  }

  option {
    padding: 10px;
    background-color: white;
    color: #333;
  }
  @media (max-width: 768px) {
    scale: 0.7;
    margin-left: -15%;
  }
`;

export const Table = styled.table`
  width: 80vw;
  min-width: 800px; /* 최소 테이블 너비 */
  max-width: 850px;
  border-collapse: collapse;
  text-align: center;
  table-layout: fixed; /* 고정된 레이아웃 설정 */

  th,
  td {
    padding: 13px;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f4f4f4;
  }

  @media (max-width: 768px) {
    width: 103%;
    min-width: auto;
    th,
    td {
      padding: 10px;
    }
  }
`;
