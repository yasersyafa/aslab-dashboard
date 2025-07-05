'use client'

import Link from "next/link"
import ContactForm from "./home/contact-form"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Button } from "../ui/button"
import { useState } from "react"

export default function Navbar() {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white w-full border-b-4 border-black py-5">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <h1 className="font-bold text-2xl">
                    <Link href={'/'}>GameTech Lab</Link>
                </h1>

                <ul className="space-x-12 flex items-center font-base text-base">
                    <li>
                        <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger asChild>
                                <Button>Contact Us</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Contact Form</DialogTitle>
                                </DialogHeader>
                                <ContactForm onSuccess={() => setOpen(false)} />
                            </DialogContent>
                        </Dialog>
                    </li>
                </ul>
            </div>
        </nav>
    )
}