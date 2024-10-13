import Link from "next/link";

console.log(process.env.NEXT_PUBLIC_CLIENT_URL);

export default function Home() {
    return (
        <div className="max-w-prose mx-auto">
            {" "}
            {/* This limits width to ~70 characters */}
            <div className="space-y-8">
                <Link href={`/plain`} className="block">
                    <h1 className="text-2xl sm:text-3xl font-bold my-3 sm:my-4 text-green-400">
                        Plain markdown article, latex suceeds, footnotes
                        don&apos;t.
                    </h1>
                </Link>
                <Link href={`/imported`} className="block">
                    <h1 className="text-2xl sm:text-3xl font-bold my-3 sm:my-4 text-green-400">
                        Importing a markdown article, latex suceeds, footnotes
                        don&apos;t.
                    </h1>
                </Link>
                <Link href={`/remote`} className="block">
                    <h1 className="text-2xl sm:text-3xl font-bold my-3 sm:my-4 text-red-400">
                        Using `next-mdx-remote`, both latex and footnotes fail
                    </h1>
                </Link>
            </div>
        </div>
    );
}
