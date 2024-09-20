import type { Metadata } from "next";
import { Gruppo, Raleway } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const gruppo = Gruppo({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-gruppo",
});
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

export const metadata: Metadata = {
    title: "shebecoding",
    description: "A coding blog by Hebe",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${gruppo.variable} ${raleway.variable} font-raleway bg-blues-bright text-blue-900`}
            >
                <header className="bg-blues-dark text-blues-bright">
                    <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
                        <Link href="/" className="text-2xl font-gruppo">
                            s
                            <span className="font-bold text-blues-white">
                                hebe
                            </span>
                            coding
                        </Link>
                        <ul className="flex space-x-4 items-center">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-reds-bright"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-reds-bright"
                                >
                                    About Me
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/hebehh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-reds-bright"
                                >
                                    <Image
                                        src="/layout/github.svg"
                                        alt="GitHub"
                                        width={24}
                                        height={24}
                                    />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main className="container mx-auto px-2 py-8">{children}</main>
                <footer className="bg-blue-100 text-blue-600 py-4">
                    <div className="container mx-auto px-4 text-center">
                        © 2024 shebecoding. All rights reserved.
                    </div>
                </footer>
            </body>
        </html>
    );
}
