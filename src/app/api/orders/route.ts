import {NextRequest, NextResponse} from "next/server";
import { createInvoiceLink } from "@/lib/bot";
// import biconomy from "@/lib/biconomy";
import telegramCurrencies from "@/lib/telegram-currencies";

export async function POST(request: NextRequest) {

    // const body = await request.json();

    // const line_items = Array.from(body.items).map((item: any) => {
    //     return {
    //         product_id: item.id,
    //         quantity: item.count
    //     }
    // });

    // const order = await biconomy.createOrder(line_items, body.comment)

    // // @ts-ignore
    // const telegramCurrency = telegramCurrencies[order.currency]

    // console.log(JSON.stringify(order))
    // const prices = order.line_items.map((item: any) => {
    //     return {
    //         label: `${item.name} (x${item.quantity})`,
    //         amount: parseFloat(item.total) * Math.pow(10, telegramCurrency.exp)
    //     }
    // });

    // const invoiceLink = await createInvoiceLink(order.id, order.order_key,telegramCurrency.code , prices, body.shippingZone);
    // return NextResponse.json({"invoice_link": invoiceLink});
}
