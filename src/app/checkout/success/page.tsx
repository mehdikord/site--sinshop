import type { Metadata } from "next";
import Invoice from "@/components/cart/Invoice";

export const metadata: Metadata = { title: "فاکتور سفارش" };
export default function SuccessPage() { return <Invoice />; }
