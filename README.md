# سین شاپ — Sin Shop

فروشگاه استاتیک (mock) سیسمونی و لوازم کودک با Next.js 16 + Tailwind v4 + Motion.

## اجرا

```bash
npm install
npm run build
npm start          # پیش‌فرض روی پورت 3000
PORT=8080 npm start
```

برای اجرا به‌صورت سرویس لینوکس (systemd):

```ini
[Unit]
Description=Sin Shop
After=network.target

[Service]
WorkingDirectory=/opt/sinshop
Environment=PORT=3000
Environment=NODE_ENV=production
ExecStart=/usr/bin/npm start
Restart=always
User=www-data

[Install]
WantedBy=multi-user.target
```

## ساختار

- `src/data/products.ts` — ۵۰ محصول mock (عنوان، تصاویر، توضیحات، نظرات، امتیاز). قیمت‌ها و تخفیف‌ها اینجا ویرایش می‌شوند.
- `src/data/categories.ts` — دسته‌بندی‌ها.
- `src/data/site.ts` — نام، تلفن، آدرس، هزینه ارسال، مالیات.
- `public/products/` — تصاویر محصولات.
- سبد خرید در `localStorage` و فاکتور در `sessionStorage` نگهداری می‌شود (بدون دیتابیس).

## صفحات

`/` خانه · `/products` لیست با فیلتر و مرتب‌سازی · `/products/[id]` جزئیات · `/cart` · `/checkout` · `/checkout/success` فاکتور · `/about` · `/contact` · `/terms`
