import type {Metadata} from "next";
import "../globals.css";
import {Noto_Sans} from "next/font/google";
import Header from "../components/Header";


const noto = Noto_Sans({subsets: ['latin'], weight: ['200', '300', '400', '700']});

export const metadata: Metadata = {
    title: "Calenmix",
    description: "Meeting Booking App created from iammix",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={noto.className}>
                <main className={"container"}>
                    <Header/>
                    {children}
                </main>
            </body>
        </html>
    );
}
