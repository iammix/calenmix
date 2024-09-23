import { BookingTimes } from '@/libs/types';
import mongoose from 'mongoose';

const FromToSchema = new mongoose.Schema({
    from: String,
    to: String
})



const EventTypeSchema = new mongoose.Schema({
    email: String,
    title: String,
    description: String,
    length: Number,
    bookingTimes: new mongoose.Schema({
        monday: FromToSchema,
        tuesday: FromToSchema,
        wednesday: FromToSchema,
        thursday: FromToSchema,
        friday: FromToSchema,
        saturday: FromToSchema,
        sunday: FromToSchema,
    }),
}, {
    timestamps: true,
});

type EventType = {
    email: string;
    title: string;
    description: string;
    length: number;
    bookingTimes: BookingTimes;
}

export const EventTypeModel =mongoose.models?.EventType || mongoose.model<EventType>('EventType', EventTypeSchema);
