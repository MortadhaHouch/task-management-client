import { NavigationMenuDemo } from "./NavigationMenu";
import Avatar from "./Avatar";

export default function Header() {
    return (
        <header className="w-full h-auto flex flex-row justify-center items-center bg-slate-900 fixed top-0 left-0 shadow-slate-600 backdrop-blur-2xl z-50 p-2 g-2">
            <NavigationMenuDemo/>
            <Avatar/>
        </header>
    )
}
