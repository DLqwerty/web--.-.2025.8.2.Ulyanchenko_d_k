const marketData = [
    { item: "Деталь 'Кабан'", price: 150, quantity: 10 },
    { item: "Деталь 'Молот'", price: 200, quantity: 5 },
    { item: "Деталь 'Коготь'", price: 300, quantity: 2 },
    { item: "Деталь 'Щит'", price: 100, quantity: 20 },
];

// Функция для отображения данных в таблице
function renderMarketData(data) {
    const tableBody = document.querySelector("#market-table tbody");
    tableBody.innerHTML = ""; // Очищаем таблицу перед обновлением

    data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.item}</td>
            <td>${item.price} монет</td>
            <td>${item.quantity}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Инициализация данных при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
    renderMarketData(marketData);
});