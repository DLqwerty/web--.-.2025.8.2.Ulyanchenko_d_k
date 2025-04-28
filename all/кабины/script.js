const marketData = [
    { item: "Деталь 'Кабан'", price: 150, quantity: 10 },
    { item: "Деталь 'Молот'", price: 200, quantity: 5 },
    { item: "Деталь 'Коготь'", price: 300, quantity: 2 },
    { item: "Деталь 'Щит'", price: 100, quantity: 20 },
];


function renderMarketData(data) {
    const tableBody = document.querySelector("#market-table tbody");
    tableBody.innerHTML = ""; 

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


document.addEventListener("DOMContentLoaded", () => {
    renderMarketData(marketData);
});