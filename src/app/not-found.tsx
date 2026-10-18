import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-x py-28 text-center">
      <div className="text-7xl animate-wiggle inline-block">🧸</div>
      <h1 className="mt-4 text-3xl font-black">این صفحه گم شده!</h1>
      <p className="mt-2 text-muted">شاید اسباب‌بازی‌ها قایمش کردن.</p>
      <Link href="/" className="btn-primary mt-6">بازگشت به خانه</Link>
    </div>
  );
}
