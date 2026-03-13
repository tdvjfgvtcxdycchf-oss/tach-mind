import type { NextConfig } from "next";

const securityHeaders = [
  // Запрет встраивания сайта в <iframe> на чужих доменах
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Браузер не угадывает тип файла — берёт только то, что сервер сказал
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Не передаёт реферер при переходе на внешние сайты
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Отключает доступ к камере, микрофону, геолокации
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  // Базовая защита от XSS в старых браузерах
  { key: "X-XSS-Protection", value: "1; mode=block" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
