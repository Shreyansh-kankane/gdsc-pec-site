import { supabaseClient } from './supabaseClient';

export const getEvents = async ({ userId, token }) => {
    const supabase = await supabaseClient(token);
    const { data: events } = await supabase.from("Events").select("*").eq("user_id", userId);
    return events;
}

export const addEvent = async ({ event, token }) => {
    const supabase = await supabaseClient(token);
    // const { data: event } = await supabase.from("Events").insert({
    //     "user_id": myevent.userId,
    //     "title": event.title,
    //     "description": event.description,
    //     "date": event.date,
    //     "organiser_1": event.organiser[0],
    //     "venue": event.venue,
    //     "status": event.status,
    // });
    return event;
}