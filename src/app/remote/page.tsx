"use client";
import { MDXRemote } from "next-mdx-remote/rsc";
import MDXComponents from "@/components/MDXComponents";
import Image from "next/image";

async function getMDXContent() {
    const res = await fetch("/test.mdx");
    const markdown = await res.text();
    return markdown;
}

export default async function ArticlePage() {
    let environment;
    environment = "SERVING";
    // Uncomment the following line to see the Remote Latex error
    // environment = "TEST";

    if (environment === "TEST") {
        const content = await getMDXContent();

        return (
            <div className="">
                <article className="flex flex-col items-center">
                    <MDXRemote source={content} components={MDXComponents} />
                </article>
            </div>
        );
    } else {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Image
                    src="/LatexCrash.png"
                    alt="Latex Crash"
                    width={800}
                    height={600}
                    className="max-w-full h-auto"
                />
            </div>
        );
    }
}
