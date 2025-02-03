import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function GET() {
  const all_news = await prisma.news.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return NextResponse.json({ news: all_news });
}
