'use client'

import { NextPage } from "next";

const ArticlesList2: NextPage = () => {


const articles = [
{id:1, title: "관리자 권한 문의", content: "관리자 권한 설정에 관한 문의...", writer: "홍길동", answar : "답변완료", modDate: "24-04-10"},
{id:2, title: "로그인이 안돼요", content: "어제는 됐는데 오늘하려고 하니까...", writer: "김이박", answar : "답변완료", modDate: "24-04-12"},
{id:3, title: "비번 초기화", content: "비밀번호 초기화 문의 드립니...", writer: "박하나", answar : "답변완료", modDate: "24-04-14"},
{id:4, title: "사내 동아리 양식 문의", content: "사내 동아리 개설 관련한 문서 양식은 어디서 다운받아야 하나요?", writer: "김현식", answar : "답변완료", modDate: "24-04-16"},
{id:5, title: "사내 공지사항에 오타", content: "사내 공지사항 [내부 보안 설정에 관한 공지]에 오타를 발견하여...", writer: "권상무", answar : "답변완료", modDate: "24-04-25"},
{id:6, title: "비밀번호 초기화 부탁드립니다", content: "빠른 처리 부탁드립니다.", writer: "한이솝", answar : "답변완료", modDate: "24-05-06"},
{id:7, title: "비밀번호 초기화", content: "ㅠㅠ 초기화 부탁드립니다..", writer: "한두리", answar : "답변완료", modDate: "24-05-10"},
{id:8, title: "데이터 초기화 여부", content: "어제 오후 5시 23분경 지웠던 내용 백업 있을까요ㅠ", writer: "양대리", answar : "답변완료", modDate: "24-05-17"},
{id:9, title: "금일 발령자 공지사항 수정", content: "아래 공문 참고하여 공지사항 수정 하려는데...", writer: "회계팀", answar : "처리중", modDate: "24-05-19"},
{id:10, title: "관리자 페이지 오류", content: "대쉬보드에서 다른 페이지로 넘어가려는데...", writer: "이민수", answar : "처리중", modDate: "24-06-02"},
{id:11, title: "비번 바꿔주세요", content: "비번 너무 많이 틀려서 로그인이 안됩니다..", writer: "엄나라", answar : "처리중", modDate: "24-06-05"},
{id:12, title: "자택 근무자 접속 안돼요", content: "방화벽 낮춰도 접속 막혀져 있는데 어떻게 해야 하나요?", writer: "한영희", answar : "처리중", modDate: "24-06-10"},
]
    return (

        <div className="w-full h-full">
            <div className="fixed z-[1] top-0 left-0 right-0 m-auto bg-pebble-200 text-[32px] rounded-b-lg text-center w-[80%] pb-1">관리자 문의 </div>
            <div className="absolute top-[43px] left-0 right-0 m-auto w-[80%] bg-white">
                <table className="sticky z-[0] p-4">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>제목</th>
                            <th>내용</th>
                            <th>작성자</th>
                            <th>처리상태</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {articles.map((i: any) =>
                            <tr key={i.id}>
                                <td>{i.id}</td>
                                <td>{i.title}</td>
                                <td>{i.content}</td>
                                <td>{i.writer}</td>
                                <td>{i.answer}</td>
                                <td>{i.modDate}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            <div className="w-full h-[80px]">
            </div>
            </div>
        </div>
    )
}

export default ArticlesList2
