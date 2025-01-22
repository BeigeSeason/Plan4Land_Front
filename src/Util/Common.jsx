import axios from "axios";

const Common = {
  PLAN_DOMAIN: "http://localhost:8111",
  PLAN_SOCKET_URL: "ws://localhost:8111/ws/planner",

  getAccessToken: () => {
    return localStorage.getItem("accessToken");
  },
  setAccessToken: (token) => {
    localStorage.setItem("accessToken", token);
  },
  getAccessTokenExpiresIn: () => {
    return localStorage.getItem("accessTokenExpiresIn");
  },
  setAccessTokenExpiresIn: (time) => {
    localStorage.setItem("accessTokenExpiresIn", time);
  },
  getRefreshToken: () => {
    return localStorage.getItem("refreshToken");
  },
  setRefreshToken: (token) => {
    localStorage.setItem("refreshToken", token);
  },
  getRefreshTokenExpiresIn: () => {
    return localStorage.getItem("refreshTokenExpiresIn");
  },
  setRefreshTokenExpiresIn: (time) => {
    localStorage.setItem("refreshTokenExpiresIn", time);
  },

  // 401 에러 처리 함수
  handleUnauthorized: async () => {
    const accessToken = Common.getAccessToken();
    const refreshToken = Common.getRefreshToken();
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      const rsp = await axios.post(
        `${Common.PLAN_DOMAIN}/auth/refresh`,
        refreshToken,
        config
      );
      console.log(rsp.data);
      Common.setAccessToken(rsp.data);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  },
};
export default Common;

export const themes = [
  "가족",
  "친구",
  "연인",
  "액티비티",
  "힐링",
  "맛집투어",
  "문화탐방",
  "배낭여행",
  "인생샷",
];

export const cats = [""];

export const types = [
  {
    code: "100",
    name: "관광지",
  },
  {
    code: "200",
    name: "숙소",
  },
  {
    code: "300",
    name: "음식점",
  },
];

export const areas = [
  {
    code: "1",
    name: "서울",
    subAreas: [
      { code: "1", name: "강남구" },
      { code: "2", name: "강동구" },
      { code: "3", name: "강북구" },
      { code: "4", name: "강서구" },
      { code: "5", name: "관악구" },
      { code: "6", name: "광진구" },
      { code: "7", name: "구로구" },
      { code: "8", name: "금천구" },
      { code: "9", name: "노원구" },
      { code: "10", name: "도봉구" },
      { code: "11", name: "동대문구" },
      { code: "12", name: "동작구" },
      { code: "13", name: "마포구" },
      { code: "14", name: "서대문구" },
      { code: "15", name: "서초구" },
      { code: "16", name: "성동구" },
      { code: "17", name: "성북구" },
      { code: "18", name: "송파구" },
      { code: "19", name: "양천구" },
      { code: "20", name: "영등포구" },
      { code: "21", name: "용산구" },
      { code: "22", name: "은평구" },
      { code: "23", name: "종로구" },
      { code: "24", name: "중구" },
      { code: "25", name: "중랑구" },
    ],
  },
  {
    code: "2",
    name: "인천",
    subAreas: [
      { code: "1", name: "강화군" },
      { code: "2", name: "계양구" },
      { code: "3", name: "미추홀구" },
      { code: "4", name: "남동구" },
      { code: "5", name: "동구" },
      { code: "6", name: "부평구" },
      { code: "7", name: "서구" },
      { code: "8", name: "연수구" },
      { code: "9", name: "옹진군" },
      { code: "10", name: "중구" },
    ],
  },
  {
    code: "3",
    name: "대전",
    subAreas: [
      { code: "1", name: "대덕구" },
      { code: "2", name: "동구" },
      { code: "3", name: "서구" },
      { code: "4", name: "유성구" },
      { code: "5", name: "중구" },
    ],
  },
  {
    code: "4",
    name: "대구",
    subAreas: [
      { code: "1", name: "남구" },
      { code: "2", name: "달서구" },
      { code: "3", name: "달성군" },
      { code: "4", name: "동구" },
      { code: "5", name: "북구" },
      { code: "6", name: "서구" },
      { code: "7", name: "수성구" },
      { code: "8", name: "중구" },
      { code: "9", name: "군위군" },
    ],
  },
  {
    code: "5",
    name: "광주",
    subAreas: [
      { code: "1", name: "광산구" },
      { code: "2", name: "남구" },
      { code: "3", name: "동구" },
      { code: "4", name: "북구" },
      { code: "5", name: "서구" },
    ],
  },
  {
    code: "6",
    name: "부산",
    subAreas: [
      { code: "1", name: "강서구" },
      { code: "2", name: "금정구" },
      { code: "3", name: "기장군" },
      { code: "4", name: "남구" },
      { code: "5", name: "동구" },
      { code: "6", name: "동래구" },
      { code: "7", name: "부산진구" },
      { code: "8", name: "북구" },
      { code: "9", name: "사상구" },
      { code: "10", name: "사하구" },
      { code: "11", name: "서구" },
      { code: "12", name: "수영구" },
      { code: "13", name: "연제구" },
      { code: "14", name: "영도구" },
      { code: "15", name: "중구" },
      { code: "16", name: "해운대구" },
    ],
  },
  {
    code: "7",
    name: "울산",
    subAreas: [
      { code: "1", name: "중구" },
      { code: "2", name: "남구" },
      { code: "3", name: "동구" },
      { code: "4", name: "북구" },
      { code: "5", name: "울주군" },
    ],
  },
  {
    code: "8",
    name: "세종특별자치시",
    subAreas: [{ code: "1", name: "세종특별자치시" }],
  },
  {
    code: "31",
    name: "경기도",
    subAreas: [
      { code: "1", name: "가평군" },
      { code: "2", name: "고양시" },
      { code: "3", name: "과천시" },
      { code: "4", name: "광명시" },
      { code: "5", name: "광주시" },
      { code: "6", name: "구리시" },
      { code: "7", name: "군포시" },
      { code: "8", name: "김포시" },
      { code: "9", name: "남양주시" },
      { code: "10", name: "동두천시" },
      { code: "11", name: "부천시" },
      { code: "12", name: "성남시" },
      { code: "13", name: "수원시" },
      { code: "14", name: "시흥시" },
      { code: "15", name: "안산시" },
      { code: "16", name: "안성시" },
      { code: "17", name: "안양시" },
      { code: "18", name: "양주시" },
      { code: "19", name: "양평군" },
      { code: "20", name: "여주시" },
      { code: "21", name: "연천군" },
      { code: "22", name: "오산시" },
      { code: "23", name: "용인시" },
      { code: "24", name: "의왕시" },
      { code: "25", name: "의정부시" },
      { code: "26", name: "이천시" },
      { code: "27", name: "파주시" },
      { code: "28", name: "평택시" },
      { code: "29", name: "포천시" },
      { code: "30", name: "하남시" },
      { code: "31", name: "화성시" },
    ],
  },
  {
    code: "32",
    name: "강원특별자치도",
    subAreas: [
      { code: "1", name: "강릉시" },
      { code: "2", name: "고성군" },
      { code: "3", name: "동해시" },
      { code: "4", name: "삼척시" },
      { code: "5", name: "속초시" },
      { code: "6", name: "양구군" },
      { code: "7", name: "양양군" },
      { code: "8", name: "영월군" },
      { code: "9", name: "원주시" },
      { code: "10", name: "인제군" },
      { code: "11", name: "정선군" },
      { code: "12", name: "철원군" },
      { code: "13", name: "춘천시" },
      { code: "14", name: "태백시" },
      { code: "15", name: "평창군" },
      { code: "16", name: "홍천군" },
      { code: "17", name: "화천군" },
      { code: "18", name: "횡성군" },
    ],
  },
  {
    code: "33",
    name: "충청북도",
    subAreas: [
      { code: "1", name: "괴산군" },
      { code: "2", name: "단양군" },
      { code: "3", name: "보은군" },
      { code: "4", name: "영동군" },
      { code: "5", name: "옥천군" },
      { code: "6", name: "음성군" },
      { code: "7", name: "제천시" },
      { code: "8", name: "진천군" },
      { code: "9", name: "청원군" },
      { code: "10", name: "청주시" },
      { code: "11", name: "충주시" },
      { code: "12", name: "증평군" },
    ],
  },
  {
    code: "34",
    name: "충청남도",
    subAreas: [
      { code: "1", name: "공주시" },
      { code: "2", name: "금산군" },
      { code: "3", name: "논산시" },
      { code: "4", name: "당진시" },
      { code: "5", name: "보령시" },
      { code: "6", name: "부여군" },
      { code: "7", name: "서산시" },
      { code: "8", name: "서천군" },
      { code: "9", name: "아산시" },
      { code: "11", name: "예산군" },
      { code: "12", name: "천안시" },
      { code: "13", name: "청양군" },
      { code: "14", name: "태안군" },
      { code: "15", name: "홍성군" },
      { code: "16", name: "계룡시" },
    ],
  },
  {
    code: "35",
    name: "경상북도",
    subAreas: [
      { code: "1", name: "경산시" },
      { code: "2", name: "경주시" },
      { code: "3", name: "고령군" },
      { code: "4", name: "구미시" },
      { code: "6", name: "김천시" },
      { code: "7", name: "문경시" },
      { code: "8", name: "봉화군" },
      { code: "9", name: "상주시" },
      { code: "10", name: "성주군" },
      { code: "11", name: "안동시" },
      { code: "12", name: "영덕군" },
      { code: "13", name: "영양군" },
      { code: "14", name: "영주시" },
      { code: "15", name: "영천시" },
      { code: "16", name: "예천군" },
      { code: "17", name: "울릉군" },
      { code: "18", name: "울진군" },
      { code: "19", name: "의성군" },
      { code: "20", name: "청도군" },
      { code: "21", name: "청송군" },
      { code: "22", name: "칠곡군" },
      { code: "23", name: "포항시" },
    ],
  },
  {
    code: "36",
    name: "경상남도",
    subAreas: [
      { code: "1", name: "거제시" },
      { code: "2", name: "거창군" },
      { code: "3", name: "고성군" },
      { code: "4", name: "김해시" },
      { code: "5", name: "남해군" },
      { code: "6", name: "마산시" },
      { code: "7", name: "밀양시" },
      { code: "8", name: "사천시" },
      { code: "9", name: "산청군" },
      { code: "10", name: "양산시" },
      { code: "12", name: "의령군" },
      { code: "13", name: "진주시" },
      { code: "14", name: "진해시" },
      { code: "15", name: "창녕군" },
      { code: "16", name: "창원시" },
      { code: "17", name: "통영시" },
      { code: "18", name: "하동군" },
      { code: "19", name: "함안군" },
      { code: "20", name: "함양군" },
      { code: "21", name: "합천군" },
    ],
  },
  {
    code: "37",
    name: "전북특별자치도",
    subAreas: [
      { code: "1", name: "고창군" },
      { code: "2", name: "군산시" },
      { code: "3", name: "김제시" },
      { code: "4", name: "남원시" },
      { code: "5", name: "무주군" },
      { code: "6", name: "부안군" },
      { code: "7", name: "순창군" },
      { code: "8", name: "완주군" },
      { code: "9", name: "익산시" },
      { code: "10", name: "임실군" },
      { code: "11", name: "장수군" },
      { code: "12", name: "전주시" },
      { code: "13", name: "정읍시" },
      { code: "14", name: "진안군" },
    ],
  },
  {
    code: "38",
    name: "전라남도",
    subAreas: [
      { code: "1", name: "강진군" },
      { code: "2", name: "고흥군" },
      { code: "3", name: "곡성군" },
      { code: "4", name: "광양시" },
      { code: "5", name: "구례군" },
      { code: "6", name: "나주시" },
      { code: "7", name: "담양군" },
      { code: "8", name: "목포시" },
      { code: "9", name: "무안군" },
      { code: "10", name: "보성군" },
      { code: "11", name: "순천시" },
      { code: "12", name: "신안군" },
      { code: "13", name: "여수시" },
      { code: "16", name: "영광군" },
      { code: "17", name: "영암군" },
      { code: "18", name: "완도군" },
      { code: "19", name: "장성군" },
      { code: "20", name: "장흥군" },
      { code: "21", name: "진도군" },
      { code: "22", name: "함평군" },
      { code: "23", name: "해남군" },
      { code: "24", name: "화순군" },
    ],
  },
  {
    code: "39",
    name: "제주도",
    subAreas: [
      { code: "1", name: "남제주군" },
      { code: "2", name: "북제주군" },
      { code: "3", name: "서귀포시" },
      { code: "4", name: "제주시" },
    ],
  },
];
