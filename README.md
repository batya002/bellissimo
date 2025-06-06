# 🍕 Bellissimo - Pizza Delivery App

**Bellissimo** — это современное веб-приложение для заказа пиццы. Удобный интерфейс, широкий выбор пицц и невероятно быстрая доставка.

![Bellissimo Banner](src/assets/images/icons/icon.webp)

**Основные возможности**:
- **Выбор пицц**: Каталог с разнообразными пиццами на любой вкус.
- **Кастомизация заказа**: Возможность выбора дополнительных ингредиентов.
- **Корзина**: Удобное управление заказами.
- **Оформление заказа**: Быстрое и интуитивно понятное оформление.

**Используемые технологии**:
- **[Vite](https://vitejs.dev/)** — Быстрый инструмент для сборки проекта.
- **[React](https://reactjs.org/)** — Библиотека для создания пользовательских интерфейсов.
- **[json-server](https://github.com/typicode/json-server)** — Фейковый REST API для разработки и тестирования.

**Установка и запуск проекта**:
1. Клонируйте репозиторий:
    ```bash
    git clone https://github.com/batya002/bellissimo.git
    ```
2. Перейдите в директорию проекта:
    ```bash
    cd bellissimo
    ```
3. Установите зависимости с помощью `yarn` или `npm`:
    ```bash
    # Using yarn
    yarn

    # Using npm
    npm install
    ```
4. Запустите json-server:
    ```bash
    # Using yarn
    yarn json-server ./src/data/main.json

    # Using npm
    npx json-server ./src/data/main.json
    ```
5. Запустите приложение:
    ```bash
    # Using yarn
    yarn dev

    # Using npm
    npm run dev
    ```

Приложение будет доступно по адресу: [http://localhost:5173](http://localhost:5173).


