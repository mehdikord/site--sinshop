import type { Metadata } from "next";
import CheckoutForm from "@/components/cart/CheckoutForm";

export const metadata: Metadata = { title: "پرداخت" };
export default function CheckoutPage() { return <CheckoutForm />; }
