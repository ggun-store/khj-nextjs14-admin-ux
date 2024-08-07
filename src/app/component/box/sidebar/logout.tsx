import { logoutAdmin } from "@/app/api/admin/route";
import { destroyCookie, parseCookies } from "nookies";

const LogoutBox = () => {

    // const logoutRedux = (id: number) => {
    //     console.log('logout 적용 전' + parseCookies().accessToken);
    //     dispatch(fetchLogoutAdmin())
    //         .then((res: any) => {
    //             destroyCookie(null, 'accessToken');

    //             token.current = "";
    //             location.replace('/');
    //             console.log('logout 적용 후' + parseCookies().accessToken);
    //             alert("로그아웃 되었습니다. ")
    //         })
    //         .catch((err: any) => {
    //             console.log('logout error' + err);
    //         });
    // }

    const logoutFetch = () => {
        logoutAdmin()
            .then((res:object) => {
                console.log('logout 적용 전' + parseCookies().accessToken);
                destroyCookie(null, 'accessToken');

                // token.current = "";
                location.replace('/login');
                console.log('logout 적용 후' + parseCookies().accessToken);
                alert("로그아웃 되었습니다. ")
            })
            .catch((err: any) => {
                console.log('logout error' + err);
            });
    }

    return (

        <div className="">
            <button onClick={() => logoutFetch()}>Logout</button>
        </div>
    )
};
export default LogoutBox;