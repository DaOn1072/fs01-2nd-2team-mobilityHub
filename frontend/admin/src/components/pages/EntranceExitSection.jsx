import "../style/EntranceExitSection.css";
import { useEffect, useState } from "react";
import LicenseModal from "./LicenseModal";
import { getTodayEntry, getTodayExit } from "../../api/EntranceAPI";

export default function EntranceExitSection() {
  const [entryList, setEntryList] = useState([]);
  const [exitList, setExitList] = useState([]);
  const [selected, setSelected] = useState(null);

  const loadAll = async () => {
    try {
      const [entry, exit] = await Promise.all([getTodayEntry(), getTodayExit()]);
      setEntryList(entry);
      setExitList(exit);
    } catch (e) {
      console.error("입출차 데이터 로딩 실패", e);
    }
  };

  useEffect(() => {
    loadAll();
  }, []);

  return (
    <div className="entrance-page">
      {/* ================= 헤더 ================= */}
      <div className="page-header">
        <h2>구역 관리: 입출구</h2>
        <p>실시간 모니터링 및 관리</p>
      </div>

      {/* ================= CCTV + 최근 인식 ================= */}
      <div className="top-grid">
        {/* CCTV */}
        <div className="card cctv-card">
          <h4>입구 CCTV</h4>
          <div className="cctv-box">
            <img
              src="http://192.168.14.124:8080/stream"
              alt="입구 CCTV"
              className="cctv-stream"
              onError={(e) => (e.target.style.display = "none")}
            />
            <div className="cctv-placeholder">카메라 연결 대기중</div>
          </div>
        </div>

        {/* 최근 인식 */}
        <div className="card recent-card">
          <h4>최근 인식 번호판</h4>
          <p className="empty-text">아직 인식된 차량 없음</p>
          <button className="btn-edit" disabled>
            수정
          </button>
        </div>
      </div>

      {/* ================= 입차 / 출차 ================= */}
      <div className="bottom-grid">
        {/* 입차 */}
        <div className="card table-card">
          <h4>입차 차량 기록</h4>
          <table>
            <thead>
              <tr>
                <th>차량번호</th>
                <th>시간</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              {entryList.length === 0 && (
                <tr>
                  <td colSpan={3} className="empty-row">
                    데이터 없음
                  </td>
                </tr>
              )}
              {entryList.map((e) => (
                <tr key={e.id} onClick={() => setSelected(e)}>
                  <td>{e.carNumber}</td>
                  <td>{format(e.entryTime)}</td>
                  <td>입차</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 출차 */}
        <div className="card table-card">
          <h4>출차 차량 기록</h4>
          <table>
            <thead>
              <tr>
                <th>차량번호</th>
                <th>시간</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              {exitList.length === 0 && (
                <tr>
                  <td colSpan={3} className="empty-row">
                    데이터 없음
                  </td>
                </tr>
              )}
              {exitList.map((e) => (
                <tr key={e.id}>
                  <td>{e.carNumber}</td>
                  <td>{format(e.exitTime)}</td>
                  <td>출차</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= 번호판 수정 ================= */}
      {selected && (
        <LicenseModal
          workInfoId={selected.id}
          initialValue={selected.carNumber}
          onClose={() => setSelected(null)}
          onUpdated={async () => {
            setSelected(null);
            await loadAll();
          }}
        />
      )}
    </div>
  );
}

function format(time) {
  return time ? new Date(time).toLocaleString() : "-";
}
