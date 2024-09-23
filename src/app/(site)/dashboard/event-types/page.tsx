'use server';
import DashboardNav from "@/app/components/DashboardNav";
import mongoose from "mongoose";
import { EventTypeModel } from "@/models/EventType";
import { session } from "@/libs/session";
import TimeSelect from "@/app/components/TimeSelect";


const weekdayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


export default async function EventTypesPage() {
    await mongoose.connect(process.env.MONGODB_URI);
    const email = await session().get('email');
    const eventTypes = await EventTypeModel.find({ email })
    return (

        <div>
            <DashboardNav />
            hello from event types
            {JSON.stringify(eventTypes)}

            <form className={"gap-4 p-2 bg-gray-200 rounded-lg"}>
                create new event type:
                <div className="grid grid-cols-2">
                    <div>
                        <label>
                            <span>title</span>
                            <input type={"text"} placeholder={"title"} />
                        </label>
                        <label>
                            <span>description</span>
                            <textarea placeholder={"description"} />
                        </label>

                        <label>
                            <span>event length (minutes)</span>
                            <input type={"number"} placeholder={"30m"} />
                        </label>
                    </div>
                    <div>
                        <span className="label">availability:</span>
                        <div className="grid grid-cols-2 gap-2 items-center">
                            {weekdayNames.map(day => (
                                <>
                                    {day}
                                    <div className="inline-flex gap-2 items-center ml-2">
                                        <TimeSelect step={30} />
                                        <span>-</span>
                                        <TimeSelect step={30} />
                                    </div>
                                </>
                            ))}
                        </div>


                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="bg-blue-600 text-white px-8 py-2 rounded-full">Save</button>
                </div>

            </form>
        </div>
    );
}