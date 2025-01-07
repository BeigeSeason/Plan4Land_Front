import { Header, Footer } from "../../Component/GlobalComponent";
import { useState, useEffect } from "react";
import { areas, themes } from "../../Util/Common";
import { useParams, useLocation } from "react-router-dom";
import { Button } from "../../Component/ButtonComponent";
import { SelectTourItem } from "../../Style/TourListStyled";

export const TourList = () => {
  const { areaCode, subAreaCode } = useParams();
  const location = useLocation();
  const [selectedAreaCode, setSelectedAreaCode] = useState("");
  const [selectedSubAreaCode, setSelectedSubAreaCode] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setSelectedAreaCode(areaCode || "");
    setSelectedSubAreaCode(queryParams.get("subarea") || "");
    setSelectedTheme(queryParams.get("theme") || "");
    setSelectedCategory(queryParams.get("category") || "");
  }, [areaCode, location.search]);

  // 모든 선택 초기화
  const handleResetSelections = () => {
    setSelectedAreaCode(""); // 지역 초기화
    setSelectedSubAreaCode(""); // 세부지역 초기화
    setSelectedTheme(""); // 테마 초기화
    setSelectedCategory(""); // 카테고리 초기화
    window.history.replaceState({}, "", "/tourlist"); // URL 초기화
  };

  // 지역 선택
  const handleAreaChange = (areaCode) => {
    if (selectedAreaCode === areaCode) {
      setSelectedAreaCode("");
      setSelectedSubAreaCode("");
      window.history.replaceState(
        {},
        "",
        `/tourlist${selectedTheme ? `?theme=${selectedTheme}` : ""}${
          selectedCategory ? `&category=${selectedCategory}` : ""
        }`
      );
    } else {
      setSelectedAreaCode(areaCode);
      setSelectedSubAreaCode(""); // 지역 선택 시 세부지역 초기화
      window.history.pushState(
        {},
        "",
        `/tourlist/${areaCode}${
          selectedTheme ? `?theme=${selectedTheme}` : ""
        }${selectedCategory ? `&category=${selectedCategory}` : ""}`
      );
    }
  };

  // 세부지역 선택
  const handleSubAreaChange = (subAreaCode) => {
    const queryParams = new URLSearchParams();
    if (selectedTheme) queryParams.append("theme", selectedTheme);
    if (selectedCategory) queryParams.append("category", selectedCategory);

    if (selectedSubAreaCode === subAreaCode) {
      // 세부지역 취소
      setSelectedSubAreaCode("");
      const queryString = queryParams.toString();
      window.history.replaceState(
        {},
        "",
        `/tourlist${queryString ? `?${queryString}` : ""}` // 지역이 없으면 / 제거
      );
    } else {
      setSelectedSubAreaCode(subAreaCode);
      queryParams.append("subarea", subAreaCode);
      const queryString = queryParams.toString();
      window.history.pushState(
        {},
        "",
        `/tourlist${selectedAreaCode ? `/${selectedAreaCode}` : ""}${
          queryString ? `?${queryString}` : ""
        }`
      );
    }
  };

  // 테마 선택
  const handleThemeChange = (theme) => {
    const queryParams = new URLSearchParams();
    if (selectedSubAreaCode) queryParams.append("subarea", selectedSubAreaCode);
    if (selectedCategory) queryParams.append("category", selectedCategory);

    if (selectedTheme === theme) {
      // 테마 취소
      setSelectedTheme("");
      const queryString = queryParams.toString();
      window.history.replaceState(
        {},
        "",
        `/tourlist${selectedAreaCode ? `/${selectedAreaCode}` : ""}${
          queryString ? `?${queryString}` : ""
        }`
      );
    } else {
      setSelectedTheme(theme);
      queryParams.append("theme", theme);
      const queryString = queryParams.toString();
      window.history.pushState(
        {},
        "",
        `/tourlist${selectedAreaCode ? `/${selectedAreaCode}` : ""}${
          queryString ? `?${queryString}` : ""
        }`
      );
    }
  };

  // 카테고리 선택
  const handleCategoryChange = (category) => {
    const queryParams = new URLSearchParams();
    if (selectedSubAreaCode) queryParams.append("subarea", selectedSubAreaCode);
    if (selectedTheme) queryParams.append("theme", selectedTheme);

    if (selectedCategory === category) {
      // 카테고리 취소
      setSelectedCategory("");
      const queryString = queryParams.toString();
      window.history.replaceState(
        {},
        "",
        `/tourlist${selectedAreaCode ? `/${selectedAreaCode}` : ""}${
          queryString ? `?${queryString}` : ""
        }`
      );
    } else {
      setSelectedCategory(category);
      queryParams.append("category", category);
      const queryString = queryParams.toString();
      window.history.pushState(
        {},
        "",
        `/tourlist${selectedAreaCode ? `/${selectedAreaCode}` : ""}${
          queryString ? `?${queryString}` : ""
        }`
      );
    }
  };

  const selectedAreaData = areas.find((area) => area.code === selectedAreaCode);

  return (
    <>
      <Header />
      <Button onClick={handleResetSelections} style={{ marginBottom: "10px" }}>
        선택 초기화
      </Button>
      <SelectTourItem>
        <div className="mainarea">
          <h3>지역 선택</h3>
          {areas.map((area) => (
            <Button
              key={area.code}
              onClick={() => handleAreaChange(area.code)}
              className={`area-button ${
                selectedAreaCode === area.code ? "selected" : ""
              }`}
            >
              {area.name}
            </Button>
          ))}
        </div>
        {selectedAreaData && (
          <div className="subarea">
            <h3>세부 지역 선택</h3>
            {selectedAreaData.subAreas.map((subArea) => (
              <Button
                key={subArea.code}
                onClick={() => handleSubAreaChange(subArea.code)}
                className={`subarea-button ${
                  selectedSubAreaCode === subArea.code ? "selected" : ""
                }`}
              >
                {subArea.name}
              </Button>
            ))}
          </div>
        )}
        <div className="theme">
          <h3>테마 선택</h3>
          {themes.map((theme) => (
            <Button
              key={theme}
              onClick={() => handleThemeChange(theme)}
              className={`theme-button ${
                selectedTheme === theme ? "selected" : ""
              }`}
            >
              {theme}
            </Button>
          ))}
        </div>
        <div className="category">
          <h3>카테고리 선택</h3>
          {["관광지", "숙소", "음식점"].map((category) => (
            <Button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`category-button ${
                selectedCategory === category ? "selected" : ""
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </SelectTourItem>
      <Footer />
    </>
  );
};
