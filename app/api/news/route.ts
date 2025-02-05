import { NextResponse } from "next/server";
import client from "@/lib/mongoclient";

export async function GET() {
  try {
  const db = client.db("veritas-news");
  const news = await db.collection("News").find().sort({ createdAt: -1 }).toArray();
  return NextResponse.json({ news: news });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, message: "Internal Server Error" });
  }
}
