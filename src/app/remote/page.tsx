import { MDXRemote } from "next-mdx-remote/rsc";
import MDXComponents from "@/components/MDXComponents";
import fs from "fs";
import path from "path";

async function getMDXContent() {
    const filePath = path.join(process.cwd(), "src", "markdown", `test.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    return fileContent;
}

export default async function ArticlePage() {
    const content = await getMDXContent();

    return (
        <div className="">
            <article className="flex flex-col items-center ">
                {/* <article className="prose lg:prose-xl"> */}
                <MDXRemote source={content} components={MDXComponents} />
            </article>
        </div>
    );
}
