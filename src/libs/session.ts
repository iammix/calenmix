import nextAppSession from 'next-app-session';

type MySessionData = {
    grandId?: string;
    email?: string;
}


export const session = nextAppSession<MySessionData>({
    name: 'calenmix_session',
    secret: process.env.SECRET,
});