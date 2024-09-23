'use server';
import DashboardNav from "@/app/components/DashboardNav";
import mongoose from "mongoose";
import { EventTypeModel } from "@/models/EventType";
import { session } from "@/libs/session";
import EventTypeForm from "@/app/components/EventTypeForm";
import Link from "next/link";
import { Plus } from "lucide-react";



export default async function EventTypesPage() {
    await mongoose.connect(process.env.MONGODB_URI);
    const email = await session().get('email');
    const eventTypes = await EventTypeModel.find({ email })
    return (

        <div>
            <DashboardNav />
            hello from event types
            {JSON.stringify(eventTypes)}
            <br />
            <Link className="btn-gray" href="/dashboard/event-types/new">
                <Plus size={16} />
                New Event Type

            </Link>



        </div>
    );
}