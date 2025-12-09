import React from "react";
import "../style/MaintenanceSection.css";

const MaintenanceSection = () => {
  return (
    <div className="main-page">
      {/* ---- 통계 카드 ---- */}

      {/* 현재 작업정보 */}
      <div className="current-work-conatiner">
        {/* 작업차 번호 */}
        <div className="working-box">
          <div className="between-position">
            <div>
              <p className="working-info">현재 작업차량</p>
              <p className="info-details insert">(차량번호)</p>
            </div>
            <div className="icon-box" style={{ backgroundColor: "#dbeafe" }}>
              {/* icon들어갈 자리, class=icon color:#2563eb*/}
            </div>
          </div>
        </div>
        {/* 대기중 */}
        <div className="working-box">
          <div className="between-position">
            <div>
              <p className="working-info">대기중</p>
              <p className="info-details insert">(대기 차량 건수)건</p>
            </div>
            <div className="icon-box" style={{ backgroundColor: "#fef9c3" }}>
              {/* icon 들어갈 자리, class=icon color:#ca8a04 */}
            </div>
          </div>
        </div>
        {/* 리프트 상태 */}
        <div className="working-box">
          <div className="between-position">
            <div>
              <p className="working-info">리프트 상태</p>
              <p className="info-details insert">(리프트상태)</p>
            </div>
            <div className="icon-box" style={{ backgroundColor: "#fee2e2" }}>
              {/* icon 들어갈 자리, class=icon color:#dc2626 */}
            </div>
          </div>
        </div>
      </div>

      {/* ---- CCTV 영역 + 이용 현황 ---- */}
      <div className="usage-status-container">
        {/* CCTV부분 */}
        <div className="insert">cctv추가</div>

        {/* 이용 현황 패널 */}
        <div className="use-status-box">
          <div className="h3-tag">
            <h3>이용 현황</h3>
          </div>
          <div className="status-box insert">{/* 이용 차량 .map 이용해서 추가 */}</div>
        </div>
      </div>

      {/* ---- 체크리스트 + 재고 현황 ---- */}
      <div className="checklist-stock-container">
        {/* 체크리스트 */}
        <div className="checklist-conatiner insert">
          <div className="checklist-box">
            <h3 className="checklist-header">정비 체크리스트</h3>
            {/* 체크리스트 넣기 */}
          </div>
        </div>

        {/* 재고 현황 */}
        <div className="stockStatus-container insert">
          {/* 재고현황 헤더 */}
          <div className="stockStatus-box">
            <div className="stockStatus-header">
              <h3>부품 재고 현황</h3>
              <span className="outOfStock">
                {/* {parts.filter((p) => p.stock < p.minStock).length}개 항목 재고 부족 */}
              </span>
            </div>
          </div>

          {/* 부품별 재고현황 메인 */}
          <div style={{ overflowX: "auto" }}>
            <table className="stockStatus-table">
              <thead>
                <tr>
                  <th className="stock-category text-left">부품명</th>
                  <th className="stock-category text-left">카테고리</th>
                  <th className="stock-category text-center">현재 재고</th>
                  <th className="stock-category text-center">최소 재고</th>
                  <th className="stock-category text-center">상태</th>
                </tr>
              </thead>
              <tbody>
                {/* db에서 재고 가져와야함 */}
                {/* 참고는 피그마로 만든 tbody부분 확인 */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceSection;
