import styled from "styled-components";
import { colors } from "./GlobalStyle";

export const TrafficBox = styled.div`
  min-height: 700px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 70vw;
  height: 100%;
  margin: 20px auto;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 15px;
  padding: 0 10px;
  .menu-box {
    display: flex;
    padding: 10px 0 10px 0;
    width: 100%;
    margin: auto;
    border-bottom: 1px solid #ddd;
    /* @media (max-width: 768px) {
      padding: 7px 0;
    }
    @media (max-width: 400px) {
      padding: 5px 0;
    } */
    .menu-title {
      padding: 5px 0;
      min-width: 150px;
      border-right: 1px solid #ddd;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      /* @media (max-width: 768px) {
        min-width: 100px;
        font-size: 15px;
      }
      @media (max-width: 400px) {
        min-width: 80px;
        font-size: 14px;
      } */
    }
    .select-content {
      min-width: 100%;
      padding: 5px 0;
      flex-direction: row;
    }
  }
  .datepicker {
    display: flex;
    align-items: center;
    .datepicker-component {
      min-width: 250px;
      width: 50%;
      height: 80%;
      /* @media (max-width: 768px) {
        scale: 0.8;
        min-width: 180px;
      } */
    }
  }
  .search-button {
    width: 80%;
    margin: 10px auto;
    border: none;
    :disabled {
    }
    /* @media (max-width: 768px) {
      font-size: 15px;
    } */
  }
  @media (max-width: 768px) {
    min-width: 80%;
    font-size: 13px;
    .menu-title {
      min-width: 80px !important;
      margin-right: 0 !important;
    }
    .menu-box {
      padding: 5px 0;
      .select-content {
        min-width: 0%;
      }
    }
    .search-button {
      scale: 0.7;
    }
    .datepicker {
      display: flex;
      width: 80%;
      margin: auto;
      .datepicker-component {
        width: 100%;
        scale: 0.8;
      }
    }
  }
  @media (max-width: 400px) {
    .datepicker {
      display: flex;
      width: 90%;
      .datepicker-component {
        min-width: 200px;
      }
      .input-date-picker {
        width: 100px !important;
      }
    }
  }
`;

export const VehicleKindContainer = styled.div`
  display: flex;
  width: 90%;
  /* @media (max-width: 768px) {
    width: 100%;
  } */

  .checkbox-container {
    padding-left: 10px;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  label {
    display: flex;
    width: 120px;
    button {
      all: unset;
    }
    /* @media (max-width: 768px) {
      width: 115px;
      font-size: 14px;
    } */
  }
  @media (max-width: 768px) {
    width: 100%;
    label {
      width: 100px;
    }
  }
`;
export const SelectStationContainer = styled.div`
  display: flex;
`;

export const SelectStation = styled.div`
  width: 100%;
  .select-wrapper {
    display: flex;
    flex-wrap: wrap;
    row-gap: 5px;
    select {
      min-width: 150px;
      padding: 5px;
      font-size: 14px;
      border: 1px solid #ddd;
      border-radius: 5px;
      background-color: white;
      color: #333;
      cursor: pointer;
      transition: all 0.3s ease;
      height: 30px;
      margin-right: 20px;
      &:focus {
        outline: none;
        border-color: ${colors.colorA};
      }
      /* @media (max-width: 990px) {
        min-width: 120px;
      }
      @media (max-width: 768px) {
        min-width: 80px;
        padding: 2px;
        margin-right: 10px;
        font-size: 12px;
      } */
      option {
        padding: 10px;
        background-color: white;
        color: #333;
      }
    }
  }
  @media (max-width: 768px) {
    .select-wrapper {
      flex-direction: column;
      flex-wrap: nowrap;
      select {
        height: 25px;
        min-width: 80px;
        margin: 0 10px !important;
        font-size: 12px;
      }
    }
  }
`;

export const ScheduleResult = styled.div`
  padding-bottom: 20px;
  width: 70vw;
  margin: 0 auto;
  .inform {
    color: gray;
    /* white-space: nowrap; */
  }
  .result-table {
    min-width: 100%;
    margin: 0px auto;
    border: 1px solid #ddd;
    border-radius: 8px;
    table {
      width: 100%;
      border-collapse: collapse;
    }
    thead {
      width: 80vw;
      background-color: #f3f4f6;
    }
    th,
    td {
      padding: 12px 16px;
      text-align: center;
      border-bottom: 1px solid #ddd;
      white-space: nowrap;
      /* @media (max-width: 768px) {
        padding: 6px 9px;
      } */
    }

    th {
      font-weight: bold;
      color: #333;
      /* @media (max-width: 768px) {
        font-size: 13.9px;
      }
      @media (max-width: 400px) {
        font-size: 12.6px;
      } */
    }
    td:nth-child(1) {
      font-weight: bold;
    }
    tbody tr:nth-child(even) {
      background-color: #f9fafb;
    }

    tbody tr:hover {
      background-color: #f1f5f9;
    }

    td {
      font-size: 14px;
      color: #555;
      /* @media (max-width: 768px) {
        font-size: 12.8px;
      }
      @media (max-width: 400px) {
        font-size: 11.8px;
      }
    }
    @media (max-width: 400px) {
      td .currency {
        display: none !important;
      } */
    }
  }

  .inform {
    margin: 0 auto;
    padding: 10px 0;
    /* width: 90vw; */
    min-width: 100%;
    font-size: 14px;
    @media (max-width: 768px) {
      font-size: 9px;
    }
  }
  @media (max-width: 768px) {
    width: 90vw;
    .result-table {
      th {
        font-size: 11px;
        padding: 6px 0;
      }
      td {
        font-size: 11px;
      }
      th:nth-child(2),
      th:nth-child(3),
      td:nth-child(2),
      td:nth-child(3) {
        display: none;
      }
    }
  }
`;
