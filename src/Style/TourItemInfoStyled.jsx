import styled from "styled-components";
import { colors } from "./GlobalStyle";
import { ScrollBar } from "../Component/ButtonComponent";

export const TourItemInfoBox = styled.div`
  width: 80%;
  margin: 50px auto;
  padding: 20px;
  border-radius: 10px;
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr); */

  .tour-title,
  .info-item {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 15px;
    strong {
      margin-right: 5px;
    }
  }
  .tour-image {
    width: 100%;
    height: 450px;
    margin: auto;
    border-radius: 10px;
  }
  .tour-details {
    padding: 30px;
    height: 450px;
    position: relative;
    .bookmark {
      color: ${colors.colorA};
      font-size: 2em;
      position: absolute;
      top: 58px;
      right: 10px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .bookmark:hover {
      opacity: 0.7;
    }
    h3 {
      margin-bottom: 10px;
      margin-top: 0;
      color: ${colors.colorA};
    }
    .nearby-travelspot {
      width: 95%;
      height: 50%;
      padding: 5px 15px 5px 15px;
      overflow-y: scroll;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
      ${ScrollBar}
      .nearbyspot {
        text-decoration: none;
        color: black;
        h4 {
          color: ${colors.colorA};
        }
      }
      .nearbyspot:visited,
      .nearbyspot:hover,
      .nearbyspot:active {
        color: inherit;
      }
    }
    .nearbybox {
      border-bottom: 1px solid #ddd;
      h4,
      p {
        margin: 10px 0;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      p {
        margin-bottom: 10px;
      }
    }
  }
  .item-map {
    margin: 20px auto;
    grid-column: span 2;
    width: 100%;
    height: 500px;
  }
  @media (max-width: 768px) {
    .container {
      grid-template-columns: 2fr; /* 한 열로 표시 */
    }

    .item:nth-child(1) {
      order: 2;
    }

    .item:nth-child(2) {
      order: 1; /* 두 번째 항목을 첫 번째로 배치 */
    }

    .item:nth-child(3) {
      order: 3; /* 세 번째 항목은 그대로 */
    }
  }
`;
