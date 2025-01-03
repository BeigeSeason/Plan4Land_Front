import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Header, Footer } from "../../Component/GlobalComponent";
import { Center, SignupContainer, InputBox, Button } from "../../Component/SignupComponent";
import { FindUserIdModal, ResultUserIdModal, FindPwModal, ResultPwModal } from "../../Component/SignupModalComponent"

// icon
import { GoLock, GoEye, GoEyeClosed } from "react-icons/go";
import { VscAccount } from "react-icons/vsc";

export const Login = () => {
  const [inputUserId, setInputUserId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [textMessage, setTextMessage] = useState("");
  const [isPwShow, setIsPwShow] = useState(false);

  const [findIdModalOpen, setFindIdModalOpen] = useState(false);
  const [findIdResultModalOpen, setFindIdResultModalOpen] = useState(false);
  const [pwModalOpen, setPwModalOpen] = useState(false);
  const [pwResultModalOpen, setPwResultModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };

  const onClickLogin = async () => {
    // 로그인 기능 구현해야함
  };

  // 비밀번호 보이기
  const onClickPwEye = () => {
    setIsPwShow((prev) => !prev);
  };

  // 모달 열고 닫기
  const openModal = (modal, state) => {
    modal(state);
  }

  return (
    <>
      <Header />
      <Center>
        <SignupContainer>
          <h1 className="title">로그인</h1>
          <div className="input-container">
            <div className="textMessage">{textMessage}</div>
            <InputBox>
            <div className="iconBox-left"><VscAccount /></div>
              <div className="inputBox">
                <input
                  type="text" 
                  placeholder="아이디 입력"
                  value={inputUserId}
                  onChange={(e) => handleInputChange(e, setInputUserId)}
                />
              </div>
            </InputBox>

            <InputBox>
              <div className="iconBox-left"><GoLock /></div>
              <div className="inputBox">
                <input
                  type={isPwShow ? "text" : "password"} 
                  placeholder="비밀번호 입력"
                  value={inputPw}
                  onChange={(e) => handleInputChange(e, setInputPw)}
                />
                <div
                  className="iconBox-right"
                  onClick={onClickPwEye}
                >
                  {isPwShow ? <GoEye /> : <GoEyeClosed />}
                </div>
              </div>
            </InputBox>
          </div>

          <div className="linkBox">
            <div className="linkBox-left">
              <p onClick={()=>openModal(setFindIdModalOpen, true)}>아이디 찾기</p>
              <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
              <p onClick={()=>openModal(setPwModalOpen, true)}>비밀번호 찾기</p>
            </div>
            <div className="linkBox-right">
              <p onClick={()=>navigate("/signup")}>회원가입</p>
            </div>
          </div>

          <Button onClick={()=>onClickLogin}>
            로그인
          </Button>

          <button className="kakaoBtn">카카오 로그인</button>

          {/* 아이디 찾기 모달 */}
          <FindUserIdModal
            open={findIdModalOpen}
            close={()=>openModal(setFindIdModalOpen, false)}
            openResult={()=>openModal(setFindIdResultModalOpen, true)}
          />

          {/* 아이디 찾기 결과 모달 */}
          <ResultUserIdModal
            open={findIdResultModalOpen}
            close={()=>openModal(setFindIdResultModalOpen, false)}
            userId="test123" // 나중에 아이디 넣어야 함.
            openFindPw={()=>openModal(setPwModalOpen, true)}
          />
          
          {/* 비밀번호 찾기 모달 */}
          <FindPwModal
            open={pwModalOpen}
            close={()=>openModal(setPwModalOpen, false)}
            openResult={()=>openModal(setPwResultModalOpen, true)}
            openFindUserId={()=>openModal(setFindIdModalOpen, true)}
          />

          {/* 비밀번호 찾기 결과 모달 */}
          <ResultPwModal
            open={pwResultModalOpen}
            close={()=>openModal(setPwResultModalOpen, false)}
            email="test123@gmail.com" // 나중에 이메일 넣어야 함.
          />

        </SignupContainer>
      </Center>
      <Footer />
    </>
  );
};
export default Login;