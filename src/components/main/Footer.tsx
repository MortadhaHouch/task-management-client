import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex flex-row justify-center items-center gap-1 bg-slate-900 p-2 fixed bottom-0 left-0 w-[100vw] h-auto z-30">
            <Link href={"/"}>Link</Link>
        </footer>
    )
}
