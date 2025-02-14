import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Header, Footer } from "../../Component/GlobalComponent";
import {
  Center,
  SignupContainer,
  Terms,
} from "../../Component/SignupComponents/SignupComponent";
import { Button } from "../../Component/ButtonComponent";

// icon
import { GoCheckCircle } from "react-icons/go";

export const TermsOfService = () => {
  const [isCheckedTotal, setIsCheckedTotal] = useState(false);
  const [isCheckedFst, setIsCheckedFst] = useState(false);
  const [isCheckedScd, setIsCheckedScd] = useState(false);

  const location = useLocation();
  const { social_id, sso } = location.state || {};
  const [socialId, setSocialId] = useState(social_id || null);
  const [ssoState, setSsoState] = useState(sso || null);

  const navigate = useNavigate();

  useEffect(() => {
    setSocialId(social_id || null);
    setSsoState(sso || null);
  }, [social_id, sso]);

  // 전체 동의 버튼
  const handleClickTotal = () => {
    setIsCheckedTotal((prev) => !prev);
    if (!isCheckedTotal) {
      setIsCheckedFst(true);
      setIsCheckedScd(true);
    } else {
      setIsCheckedFst(false);
      setIsCheckedScd(false);
    }
  };

  // 이용약관 버튼
  const handleClickFst = () => {
    setIsCheckedFst((prev) => !prev);
  };

  // 개인정보 수집 버튼
  const handleClickScd = () => {
    setIsCheckedScd((prev) => !prev);
  };

  // 전체동의 자동 활성화
  useEffect(() => {
    if (isCheckedFst && isCheckedScd) {
      setIsCheckedTotal(true);
    } else {
      setIsCheckedTotal(false);
    }
  }, [isCheckedFst, isCheckedScd]);

  const toSignup = () => {
    navigate("/signup", {
      state: { social_id: socialId, sso: ssoState },
    });
  };

  const isButtonOn = isCheckedFst && isCheckedScd;

  return (
    <>
      {/* <Header /> */}
      <Center>
        <SignupContainer>
          <Terms>
            <div className="terms-label" onClick={handleClickTotal}>
              <div
                className={
                  isCheckedTotal ? "iconBox-left checked" : "iconBox-left"
                }
              >
                <GoCheckCircle className="circle" />
              </div>
              <div className="inputBox-big">전체 동의하기</div>
            </div>
          </Terms>
          <Terms>
            <div className="terms-label" onClick={handleClickFst}>
              <div
                className={
                  isCheckedFst ? "iconBox-left checked" : "iconBox-left"
                }
              >
                <GoCheckCircle className="circle" />
              </div>
              <div className="inputBox">PLAN4LAND 이용약관</div>
            </div>
            <div className="terms-content">
              <h3>PLAN4LAND 이용약관</h3>
              <p>
                이 약관은 PLAN4LAND(이하 "당사")가 제공하는 여행 정보
                서비스(이하 "서비스")를 사용할 때 필요한 기본 규칙을 정리한
                내용입니다. 서비스를 사용하시기 전에 꼭 읽어봐 주세요. 약관에
                동의하지 않으신다면 서비스를 이용하실 수 없습니다.
              </p>
              <h4>제1조 (목적)</h4>
              <p>
                이 약관은 당사가 제공하는 서비스의 이용 조건과 절차, 그리고
                당사와 사용자 간의 권리와 책임을 정하는 것을 목적으로 합니다.
              </p>
              <h4>제2조 (정의)</h4>
              <p>1. "서비스"는 당사가 제공하는 여행 정보 플랫폼을 뜻합니다.</p>
              <p>
                2. "이용자"는 이 약관에 동의하고 서비스를 사용하는 개인이나
                단체를 말합니다.
              </p>
              <h4>제3조 (약관의 게시 및 변경)</h4>
              <p>1. 이 약관은 서비스 화면이나 연결된 페이지에 게시됩니다.</p>
              <p>
                2. 필요할 경우, 관련 법령을 위반하지 않는 범위에서 약관이 변경될
                수 있습니다. 변경된 내용은 서비스 내 공지하거나 개별적으로
                알려드립니다.
              </p>
              <p>
                3. 변경된 약관에 동의하지 않으시면 서비스 이용을 중단하고 회원
                탈퇴를 하실 수 있습니다.
              </p>
              <h4>제4조 (서비스의 제공 및 변경)</h4>
              <p>1. 당사는 여행 정보와 관련된 다양한 서비스를 제공합니다.</p>
              <p>
                2. 서비스 품질 향상이나 운영상 필요한 경우, 서비스의 일부가
                변경될 수 있으며, 이 경우 미리 공지해 드립니다.
              </p>
              <h4>제5조 (서비스 이용 제한)</h4>
              <p>
                1. 이용자는 법령과 이 약관을 준수하며 아래와 같은 행동을 하지
                말아야 합니다:
              </p>
              <li>다른 사람의 개인정보를 도용하는 행위</li>
              <li>서비스 운영을 방해하는 행위</li>
              <li>법에 어긋나는 불법적인 목적의 사용</li>
              <p>
                2. 위와 같은 행위가 발생할 경우, 당사는 서비스 이용을 제한하거나
                계약을 해지할 수 있습니다.
              </p>
              <h4>제6조 (개인정보 보호)</h4>
              <p>
                1. 당사는 최소한의 개인정보만 수집하며, 이를 안전하게
                관리합니다.
              </p>
              <p>
                2. 개인정보 보호와 관련된 자세한 내용은 "개인정보처리방침"에서
                확인하실 수 있습니다.
              </p>
              <h4>제7조 (환불 정책)</h4>
              <p>
                본 서비스는 정보 제공을 목적으로 하며, 유료 서비스의 경우
                원칙적으로 환불되지 않습니다. 다만, 관련 법령에 따라 환불이
                필요한 경우에는 이를 따릅니다.
              </p>
              <h4>제8조 (책임의 제한)</h4>
              <p>
                1. 당사는 이용자가 제공받은 정보를 바탕으로 내린 판단이나 행동에
                대해 책임지지 않습니다.
              </p>
              <p>
                2. 고의나 중대한 과실이 없는 한, 당사는 서비스 제공과 관련된
                책임을 면합니다.
              </p>
              <h4>제9조 (준거법 및 관할)</h4>
              <p>
                이 약관은 대한민국 법률을 따르며, 분쟁이 발생할 경우 당사 본사가
                위치한 지역의 법원이 관할권을 가집니다.
              </p>
              <h4>부칙</h4>
              <p>1. 이 약관은 2025년 1월 7일부터 적용됩니다.</p>
              <p>
                2. 약관에 명시되지 않은 사항은 관련 법령이나 일반적인 상관례를
                따릅니다.
              </p>
            </div>
          </Terms>
          <Terms>
            <div className="terms-label" onClick={handleClickScd}>
              <div
                className={
                  isCheckedScd ? "iconBox-left checked" : "iconBox-left"
                }
              >
                <GoCheckCircle className="circle" />
              </div>
              <div className="inputBox">개인정보 수집 및 이용</div>
            </div>
            <div className="terms-content">
              <h3>개인정보 수집 및 이용약관</h3>
              <h4>1. 수집하는 개인정보 항목</h4>
              <p>
                당사는 서비스를 제공하기 위해 아래와 같은 개인정보를 수집합니다:
              </p>
              <ul>
                <li>
                  이메일 주소: 서비스 가입 및 이메일 인증을 위해 필수로
                  수집합니다.
                </li>
                <li>
                  카카오 고유 ID: 카카오 소셜 로그인 사용자의 인증 및 계정
                  관리를 위해 수집됩니다.
                </li>
              </ul>

              <h4>2. 개인정보의 수집 및 이용 목적</h4>
              <p>
                이메일 주소는 유저 인증, 계정 관리, 서비스 이용에 관한 중요한
                정보를 전달하기 위해 사용됩니다.
              </p>
              <p>
                카카오 고유 ID는 카카오 소셜 로그인 사용자 인증을 위한 계정 식별
                용도로 사용됩니다.
              </p>

              <h4>3. 개인정보의 보유 및 이용 기간</h4>
              <p>
                이메일 주소와 카카오 고유 ID는 서비스 이용 기간 동안 보유됩니다.
              </p>
              <p>
                법적 요구사항에 따라 일정 기간 보유해야 하는 경우 해당 기간 동안
                보관됩니다.
              </p>

              <h4>4. 개인정보 수집 및 이용 동의를 거부할 권리</h4>
              <p>
                이용자는 개인정보의 수집 및 이용에 대한 동의를 거부할 권리가
                있습니다.
              </p>
              <p>
                회원가입 시 수집되는 최소한의 개인정보, 즉 필수 항목에 대한 수집
                및 이용 동의를 거부할 경우, 회원가입이 어려울 수 있습니다.
              </p>

              <h4>5. 개인정보의 제3자 제공</h4>
              <p>
                당사는 이용자의 이메일 주소와 카카오 고유 ID를 제3자에게
                제공하지 않습니다. (단, 법적 의무가 있을 경우 제공할 수
                있습니다.)
              </p>

              <h4>6. 개인정보 보호</h4>
              <p>
                개인정보 보호를 위해 불법적인 접근을 방지하는 보안 시스템을
                적용합니다.
              </p>

              <h4>7. 이용자의 권리</h4>
              <p>이용자는 언제든지 이메일 주소를 조회할 수 있습니다.</p>
              <p>
                이메일 주소 수정은 '내 정보 수정' 메뉴에서 가능하며, 카카오 고유
                ID와 관련된 문의는 고객센터로 연락해주시기 바랍니다.
              </p>

              <h4>8. 개인정보 처리방침의 변경</h4>
              <p>
                개인정보 처리방침을 변경할 경우, 변경 사항은 웹사이트에
                공지하거나 개별 통지를 통해 안내됩니다.
              </p>
            </div>
          </Terms>
          <Button
            onClick={toSignup}
            disabled={!isButtonOn}
            className="nextButton"
          >
            다음
          </Button>
        </SignupContainer>
      </Center>
      {/* <Footer /> */}
    </>
  );
};
export default TermsOfService;
