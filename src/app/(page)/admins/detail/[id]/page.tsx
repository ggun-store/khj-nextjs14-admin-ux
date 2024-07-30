
import Image from 'next/image';
import React, { Suspense } from "react";
import { WhiteBox } from '@/app/common/box/whiteBox';
import AdminsDetailReadonly from '@/app/component/box/admins/detail/detailReadonly';
import { adminDummy } from '@/app/common/dummy/admin.dummy';

export default async function AdminDetail({ params }: {params : object}) {

    const myinfo = adminDummy[0]

    return (
        <div className='w-full h-[150px]'>
            <div className='pb-10'> <WhiteBox children={"조회모드"} style="text-center" /></div>
            <div className='w-full h-auto flex'>
                <div className='w-[10%]'>
                    <Image src='/imgs/user.gif' width="100" height="100" alt="adminPic" className='w-full h-auto rounded-lg' />
                </div>
                <Suspense>
                <AdminsDetailReadonly props={myinfo}/>
                </Suspense>
            </div>
        </div>
    )
};


