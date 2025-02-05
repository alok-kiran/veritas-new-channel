import { NextResponse } from "next/server";
import client from "@/lib/mongoclient";
import { ObjectId } from "mongodb"; // Ensure ObjectId is imported

interface RequestParams {
    params: {
        id: string;
    };
}

interface NewsItem {
    _id: ObjectId;
    title: string;
    content: string;
    // Add other fields as necessary
}

export async function GET(request: Request, { params }: RequestParams) {
    try {
        const { id } = params;

        if (!ObjectId.isValid(id)) {
            return NextResponse.json({ status: 400, message: "Invalid ID format" });
        }

        const db = client.db("veritas-news");
        const news = await db.collection<NewsItem>("News").findOne({ _id: new ObjectId(id) });

        if (!news) {
            return NextResponse.json({ status: 404, message: "News not found" });
        }

        return NextResponse.json({ news });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500, message: "Internal Server Error" });
    }
}
