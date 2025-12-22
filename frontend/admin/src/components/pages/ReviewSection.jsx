import { ChevronLeft, ChevronRight, Droplets, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import "../style/ReviewSection.css";


export function ReviewSection(){

    // 리뷰 데이터
    const [reviews, setReviews] = useState([    {
      id: '1',
      userName: '김철수',
      rating: 5,
      date: '2024-12-08',
      service: '세차',
      plateNumber: '12가3456',
      content: '세차 서비스가 정말 깔끔하고 좋았습니다. 직원분들도 친절하시고 차량 관리를 꼼꼼히 해주셔서 만족스러웠습니다. 다음에도 이용하겠습니다!',
      adminReply: '좋은 후기 감사합니다! 항상 최선을 다하는 스마트 주차장이 되겠습니다.',
    },])

    // 모달에서 선택된 리뷰 상태
    const [selectedReview, setSelectedReview] = useState(null);

    // 모달에서 작성 중인 관리자 답변
    const [replyText, setReplyText] = useState("");

    // 현재 페이지 상태
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerpage = 5    // 페이지 제한 수

    // 페이지 계산
    const totalPages = Math.ceil(reviews.length / reviewsPerpage);
    const startIndex = (currentPage - 1) * reviewsPerpage;
    const endIndex = startIndex + reviewsPerpage;

    // 현재 페이지에 보여줄 리뷰 배열
    const currentReviews = reviews.slice(startIndex, endIndex)

    return(
        <div className="page">

      <div className="status-card">
        <div className="status-component">
          <div className="card-item">
            <div>
              <p className="text">전체 리뷰</p>
              <p className="count">{reviews.length} 개</p>
            </div>
            <div className="card-icon" style={{ backgroundColor: "#dbeafe" }}>
              <MessageSquare className="icon" style={{ color: "blue" }} />
            </div>
          </div>
        </div>

        <div className="status-component">
          <div className="card-item">
            <div>
              <p className="text">답변 완료</p>
              <p className="count">개</p>
            </div>
            <div className="card-icon" style={{ backgroundColor: "#fef9c2" }}>
              <Send className="icon" style={{ color: "orange" }} />
            </div>
          </div>
        </div>

        <div className="status-component">
          <div className="card-item">
            <div>
              <p className="text">답변 대기</p>
              <p className="count">개</p>
            </div>
            <div className="card-icon" style={{ backgroundColor: "#dbfce7" }}>
              <MessageSquare className="icon" style={{ color: "green" }} />
            </div>
          </div>
        </div>
      </div>
      {/* 리뷰 목록 */}
      <div className="review-list">
        <div className="review-header"> 
            <h3>고객 리뷰</h3> 
            </div>
        {currentReviews.map((review) => {
            return(
            <button key={review.id}
            className="review-itme"
            onClick={() => setSelectedReview(review)} // 클릭 시 모달 열기
            >
                <div className="review-header">
                    <div>
                        <span>유저이름</span>
                        <span>게시글 번호</span>
                    </div>
                    <div>
                        <span>리뷰 작성 날짜</span>
                        {/* <span className={`reply-status ${review.adminReply ? 'done' : 'pending'}`}>
                            {review.adminReply ? "답변완료" : "답변대기"}
                        </span> */}
                        <span>답변 상태</span>
                    </div>
                </div>
                <p className="review-content">리뷰 내용ssadfdasdfsdfdsfdsafdasdfsd</p>
            </button>
            )
        })}

        {/* 페이지 넘기기 버튼 */}
        {totalPages > 1 && (
            <div className="pagination">
                <button onClick={() => setCurrentPage(prev => Math.max(prev-1, 1))}>
                    <ChevronLeft />
                </button>
                {Array.from({length: totalPages}, (_, i) => i+1).map(page => (
                    <button 
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={currentPage===page ? 'active' : ''}>
                            {page}
                        </button>
                ))}
                <button onClick={() => setCurrentPage(prev => Math.min(prev+1, totalPages))}>
                    <ChevronRight />
                </button>
                </div>
        )}
      </div>
        </div>
    )
}