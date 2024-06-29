import {NextRequest, NextResponse} from "next/server";
// import biconomy from "@/lib/biconomy";

export async function GET(request: NextRequest) {
    const params = request.nextUrl.searchParams
    params.set('status', 'publish')
    // const res = await biconomy.get('products', params)
    // return NextResponse.json(await res.json())
}