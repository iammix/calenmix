'use server';
import DashboardNav from "@/app/components/DashboardNav";
import mongoose from "mongoose";
import {EventTypeModel} from "@/models/EventType";
import {session} from "@/libs/session";
import TimeSelect from "@/app/components/TimeSelect";

export default async function EventTypesPage() {
    await mongoose.connect(process.env.MONGODB_URI);
    const email = await session().get('email');
    const eventTypes = await EventTypeModel.find({email})
    return (

        <div>
            <DashboardNav/>
            hello from event types
            {JSON.stringify(eventTypes)}
            create new event type:
            <form className={"grid grid-cols-2 gap-4"}>
                <div>
                    <label>
                        title
                        <input type={"text"} placeholder={"title"}/>
                    </label>

                    <textarea placeholder={"description"}/>
                    length: <input type={"number"} placeholder={"30m"}/>min
                </div>
                <div>
                    availability: <br/>
                    monday:
                    from:
                    <TimeSelect step={30}/>
                    to:
                    <TimeSelect step={30}/>

                </div>

            </form>
        </div>
    );
}