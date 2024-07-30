
import { Search } from "@/app/component/search/search";
import { MoveButton } from "@/app/common/button/MoveButton";
import Link from "next/link";
import { Suspense } from "react";
import BoardMenu from "@/app/component/navigation/boardMenu";
import Articles from "@/app/component/box/articles/Articles";

export default async function ArticlesList({ params }: any) {

    function handleTitle() {
        const enums: any = {
            1: "사내 공지사항",
            2: "관리자 문의게시판",
        };
        return enums[params.id]
    };

    return (

        <div className="w-full h-full flex justify-center">
            <div className="w-[80%] ">
                <div className="sticky left-0 top-0 z-10">
                    <BoardMenu />
                </div>
                <div className="bg-pebble-100 ">
                    <div className="content-center iflex-col h-[120px]">
                        <div className="space-x-5 justify-center flex">
                            <div className="text-[35px] text-center content-center text-white w-[20%]">{handleTitle()}</div>
                            <div className=" w-[70%] h-full">
                                <Search text={`${handleTitle()} 검색`} style="" />
                                <div className="space-x-3 py-3 hover:text-white">
                                    <span className="bold text-[20px] text-white">추천검색어</span>
                                    <span className="text-pebble-200">비밀번호 초기화</span>
                                    <span className="text-pebble-200">계좌개설</span>
                                    <span className="text-pebble-200">공모주 신청방법</span>
                                    <span className="text-pebble-200">금융사기 예방</span>
                                    <span className="text-pebble-200">사이트 이용 가이드</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-auto my-10">
                    <Suspense>
                        <Articles prop={params.id} />
                    </Suspense>
                </div>
                <div className="w-[70%] grid grid-cols-5 gap-3 m-auto   ">
                    <Search text="Search.." style="col-span-3" /> <MoveButton text="검색" />
                    <Link href={`/articles/save/${params.id}`}><MoveButton text="게시글 작성하기" /></Link>
                </div>
            </div>
        </div>

    )
};
