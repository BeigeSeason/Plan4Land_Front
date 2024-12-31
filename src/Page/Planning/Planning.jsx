import {
  MainContainer,
  Info,
  Users,
  UserProfile,
  UserName,
  ContentContainer,
  MainPlanning,
  KakaoMapContainer,
  MemoContainer,
  ModalOverlay,
  ModalContainer,
} from "../../Style/PlanningStyled";
import { KakaoMap } from "../../Component/KakaoMapComponent";
import { useState } from "react";

export const Planning = () => {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  return (
    <>
      <MainContainer>
        <Info>
          <h1>플래닝 제목</h1>
          <h3>지역 / 테마</h3>
          <h3>2024.01.10 ~ 2024.02.10</h3>
        </Info>
        <Users>
          <UserProfile />
          <UserName>사용자명</UserName>
          {[...Array(6)].map((_, index) => (
            <UserProfile key={index} onClick={() => setIsUserModalOpen(true)} />
          ))}
        </Users>
        <ContentContainer>
          <MainPlanning>여기는 플래닝</MainPlanning>
          <KakaoMapContainer>
            <KakaoMap />
          </KakaoMapContainer>
        </ContentContainer>
      </MainContainer>
      <MemoContainer>여기는 메모</MemoContainer>
      {isUserModalOpen && (
        <ModalOverlay>
          <ModalContainer>
            <h2>모달창입니댜</h2>
            <p>임시로 만들어논거에요</p>
            <button onClick={() => setIsUserModalOpen(false)}>확인</button>
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
};
