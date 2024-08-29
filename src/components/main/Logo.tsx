import { useEffect, useRef } from "react"
import Image from "next/image"
export default function Logo() {
    return (
        <div>
            <Image src={"/time-management.png"} alt="logo" width={50} height={50}/>
        </div>
    )
}
