'use client'

import Link from "next/link"
import { Button } from "../ui/button"

export default function Navbar() {
    return (
        <nav className="sticky top-0 bg-white w-full border-b-4 border-black py-5">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <h1 className="font-bold text-2xl">
                    <Link href={'/'}>Game Lab</Link>
                </h1>

                {/* navigation links in desktop */}
                <ul className="space-x-12 flex items-center font-base text-base">
                    <li className="hover:underline">
                        <Link href={'/games'}>Games</Link>
                    </li>
                    <li className="hover:underline">
                        <Link href={'/events'}>Events</Link>
                    </li>
                    <li>
                        <Button asChild>
                            <Link href={'/events'}>Contact Us</Link>
                        </Button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}