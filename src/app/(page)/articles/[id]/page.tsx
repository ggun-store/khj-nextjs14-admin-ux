'use client'

import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllArticles } from "@/app/redux/silce/article.slice";
import { fetchMyArticleList } from "@/app/redux/service/article.service";
import { IArticle } from "@/app/redux/model/article.model";
import Pagination from "@/app/component/navigation/pagination";

const Articles: NextPage = ({ params }: any) => {

    const dispatch = useDispatch();
    const articlesList: IArticle[] = useSelector(getAllArticles);

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const offset = (page - 1) * limit;

    useEffect(() => {
        dispatch(fetchMyArticleList(params.id))
            .then((res: any) =>
               console.log(res)
            )
        .catch((error: any) =>
            console.log("articles err!!! : " + error))
}, [params.id, dispatch]);

return (
    <div className="w-full h-full">
        <div className="fixed z-[1] top-0 left-0 right-0 m-auto bg-pebble-200 text-[32px] rounded-b-lg text-center w-[80%] pb-1">
            사내 공지사항</div>
        <div className="absolute top-[43px] left-0 right-0 m-auto w-[80%] bg-white">
            <table className="sticky z-[0] p-4">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>내용</th>
                        <th>borad id</th>
                        <th>작성일</th>
                        <th>처리완료일</th>
                    </tr>
                </thead>
                <tbody>
                    {articlesList.slice(offset, offset + limit).map((v: any, i: any) =>
                        <tr key={v.id}>
                            <td>{v.id}</td>
                            <td>{v.title}</td>
                            <td>{v.writer_id}</td>
                            <td>{v.content}</td>
                            <td>{v.board_id}</td>
                            <td>{v.regDate}</td>
                            <td>{v.modDate}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="w-full items-center flex justify-center h-[50px]">
                <Pagination total={articlesList.length} limit={10} page={page} setPage={setPage} />
            </div>
        </div>
    </div>
)
};

export default Articles;
