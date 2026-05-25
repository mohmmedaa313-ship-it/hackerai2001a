import { NextResponse } from "next/server";
export async function POST(req: Request) {
  return NextResponse.json({ message: "Stripe disabled" });
}
export async function GET(req: Request) {
  return NextResponse.json({ message: "Stripe disabled" });
}
