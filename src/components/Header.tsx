import {Logo} from "./logo"
import { Modes } from "./modes"

export const Header = () =>{
    return (
        <>
            <div className="main w-[100%] h-27 bg-black  shadow-lg shadow-[#4600D0]">   {/* #322DDD, #4600D0 */}
                <div className="menu w-[1200px] h-[100%] flex justify-between items-center  mx-auto bg-black ">
                    <Logo/>
                    <Modes/>
                </div>
            </div>
        </>
    )
}