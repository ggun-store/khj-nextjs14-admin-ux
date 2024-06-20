'use client';

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { NextPage } from "next"
import React from "react";
import { useDispatch } from "react-redux";
import { GrayButton, MoveButton } from "@/atoms/button/MoveButton";
import SandMail from "./sendMail/sendMail";
import { XIcon } from "../../public/icons/icons";
import { PG } from "./common/enums/PG";


const Login: NextPage = () => {

    const [isWrongId, setIsWrongId] = useState('');
    const [isWrongPw, setIsWrongPw] = useState('');

    const [len, setLen] = useState(false);
    const [msg, setMsg] = useState('');
    const [send, setSend] = useState(false);

    const formRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    const dispatch = useDispatch();
    const [userinfo, setUserinfo] = useState({ username: '', password:'' });


    const handleUsername = (e: any) => {
        const ID_CHECK = /^[a-zA-Z][a-zA-Z0-9]{5,11}$/g;
        ID_CHECK.test(userinfo.username + "") ? setIsWrongId('false') : setIsWrongId('true');
        setUserinfo({
            ...userinfo,
            username: e.target.value
        })
        console.log('username : ' + JSON.stringify(userinfo))
        setLen(false)
    }


    const handlePassword = (e: any) => {
        const PW_CHECK = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,15}$/g;
        PW_CHECK.test(userinfo.password + "") ? setIsWrongPw('false') : setIsWrongPw('true');
        setUserinfo({
            ...userinfo,
            password: e.target.value
        })
        setLen(false)
    }

    const forgetPw = () => {
        console.log("forgetPw")
        alert('권한 담당자에게 연락 부탁드립니다.\n' +
            '담당자 : 인사팀 김현주\n' +
            'Tel : 2046')
    }

    return (
        <div className="flex justify-center content-center w-screen items-center h-screen ">
            <div className=" flex rounded-lg shadow-lg border w-[70%] h-[80%] ">
                <div
                    className="hidden md:block lg:w-1/2 bg-cover bg-indigo-950"
                    style={{
                        backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
                    }}></div>
                <div className="w-full p-8 lg:w-1/2">
                    <p className="text-xl text-gray-600 text-center">관리자 페이지</p>

                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            ID
                            <br />
                        </label>
                        <input
                            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:   outline-2 focus:outline-blue-700"
                            type="text" name="username" onChange={handleUsername}
                            required />


                        {len === false ?
                            userinfo.username == '' || userinfo.username === undefined ? <pre></pre> :
                                (isWrongId === 'true' ?
                                    (<pre><h6 className='text-red-500 text-sm'>* Wrong username form.</h6></pre>) :
                                    (<pre><h6 className='text-green-500 text-sm'>* good username form.</h6></pre>)
                                )
                            : <pre><h6 className='text-red-500'>{msg}</h6></pre>}

                    </div>
                    <div className="mt-4 flex flex-col justify-between">
                        <div className="flex justify-between">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Password
                                <br />
                            </label>
                        </div>
                        <input
                            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                            type="password" name="password" onChange={handlePassword} ref={formRef}
                        />
                        {len === false ?
                            userinfo.password == '' || userinfo.password === undefined ? <pre></pre> :
                                (isWrongPw === 'true' ?
                                    (<pre>
                                        <h6 className='text-red-500 text-sm'>* Wrong password form.<br /> 영어 소문자, 대문자, #?!@$ %^&*- 포함 6자이상</h6></pre>) :
                                    (<pre><h6 className='text-green-500 text-sm'>* good password form.</h6></pre>)
                                )
                            : <pre><h6 className='text-red-500'>{msg}</h6></pre>}


                        <div className="h-[30px] mt-5">
                            <MoveButton text="Sign In" path={() => router.push(`/dashboard`)} />
                        </div>

                        <button
                            className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2" onClick={() => forgetPw()}>
                            Forget Password?
                        </button>

                        <div className="p-3 text-xs text-gray-500">
                            신규 생성은 관리자에게 문의 부탁드립니다. <br />
                            <div className="w-[50%] h-[30px] mt-2">
                                <GrayButton text="관리자 문의" path={() => setSend(!send)} />
                            </div>
                            {send == true ?
                                <div className="absolute top-8 left-[25%] rounded-lg h-auto w-[50%] bg-white text-black border shadow-lg pl-8 flex justify-start">
                                    <div className="w-full my-3">
                                        <SandMail />
                                    </div>
                                    <button className="bg-white left-[50%] h-[40px] w-[30px] rounded-lg" onClick={() => setSend(false)}>
                                        <XIcon color="gray" />
                                    </button>
                                </div>
                                : <div></div>}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;