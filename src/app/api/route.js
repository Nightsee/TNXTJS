import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({data: 'data from next api'})
}