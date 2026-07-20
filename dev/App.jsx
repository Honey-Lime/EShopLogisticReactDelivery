import EShopLogistic from "../EShopLogistic.jsx";

export default function App() {
  const requiredEnv = {
    VITE_DADATA_TOKEN: import.meta.env.VITE_DADATA_TOKEN,
    VITE_ESHOPLOGISTIC_TOKEN: import.meta.env.VITE_ESHOPLOGISTIC_TOKEN,
    VITE_YANDEX_API_KEY: import.meta.env.VITE_YANDEX_API_KEY,
  };

  const missingEnv = Object.entries(requiredEnv)
    .filter(([, value]) => !value)
    .map(([name]) => name);

  if (missingEnv.length) {
    return (
      <div style={{ maxWidth: 900, margin: "0 auto", padding: 24, fontFamily: "Arial, sans-serif" }}>
        <h1>Тест EShopLogistic</h1>
        <p>Перед запуском компонента заполните локальные переменные окружения.</p>

        <ol>
          <li>Скопируйте файл <code>.env.local.example</code> в <code>.env.local</code>.</li>
          <li>Заполните токены DaData, EShopLogistic и Яндекс.Карт.</li>
          <li>Перезапустите <code>npm run dev</code>.</li>
        </ol>

        <p>Сейчас не заполнены:</p>
        <pre>{missingEnv.join("\n")}</pre>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: 24 }}>
      <h1>Тест EShopLogistic</h1>

      <EShopLogistic
        DADATA_TOKEN={requiredEnv.VITE_DADATA_TOKEN}
        ESHOPLOGISTIC_TOKEN={requiredEnv.VITE_ESHOPLOGISTIC_TOKEN}
        YANDEX_API_KEY={requiredEnv.VITE_YANDEX_API_KEY}
        orderWeight={1000}
        onDeliveryConfirm={(deliveryData) => {
          console.log("Выбрана доставка:", deliveryData);
        }}
      />
    </div>
  );
}
