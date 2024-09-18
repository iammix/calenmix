'use client';
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function DashboardNav() {
    const pathname = usePathname()
    const isEventTypePage = pathname.includes('event-types');
    return (
        <div className={"flex gap-4 justify-center"}>
            <Link
                //className={clsx()}
                className={"rounded-full px-4 py-2 " + (isEventTypePage ? "bg-gray-200" : 'bg-blue-600 text-white')}
                href={'/dashboard'}>
                Booked events
            </Link>
            <Link
                className={"rounded-full px-4 py-2 " + (isEventTypePage ? "bg-blue-600 text-white" : "bg-gray-200")}
                href={'/dashboard/event-types'}>
                Event types
            </Link>
        </div>
    )
}