"use client";

import Link from "next/link";
import {useEffect, useState} from "react";
import {Play} from "lucide-react";


export default function Hero() {
    const [showLine, setShowLine] = useState(false)

    useEffect(() => {
        setShowLine(true);
    }, []);
    return(
    <section className="text-center mt-24">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
            Scheduling...{' '}
             <span className={"text-blue-600 cool-underline show-underline"+(showLine?'show-underline':' ')}>
                 make it free
            </span>
            <br/>
            and it is simple
        </h1>
        <p className={"text-gray-600"}>
            Most scheduling apps are pricy. This is free. <br/>
            Also, it is open source!
        </p>
        <div className={"mt-4 flex gap-4 justify-center"}>
            <Link href={'/'} className={"bg-black text-white py-2 px-4 rounded-full"}>Get started for free</Link>
            <Link href={'/'} className={"border border-gray-300 rounded-full py-2 px-4 inline-flex gap-1 items-center text-gray-800"}>
                <Play size={16}/>
                Watch Video
            </Link>
        </div>
    </section>
    )
}