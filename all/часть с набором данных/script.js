$(document).ready(function() {
  
    const rarityOrder = {
        "Реликтовая": 0,
        "Легендарная": 1,
        "Эпическая": 2,
        "Необычная": 3,
        "Редкая": 4,
        "Обычная": 5
    };

    // Данные о кабинах
    const data = [
        {
            name: "Медведь",
            image: "https://static.wikia.nocookie.net/crossout/images/6/60/Медведь.png/revision/latest/scale-to-width-down/30?cb=20170714072403&path-prefix=ru",
            price: 500,
            rarity: "Обычная",
            type: "Лёгкая"
        },
        {
            name: "Рык",
            image: "https://static.wikia.nocookie.net/crossout/images/2/23/Рык.png/revision/latest/scale-to-width-down/30?cb=20181010102333&path-prefix=ru",
            price: 1500,
            rarity: "Эпическая",
            type: "Средняя"
        },
        {
            name: "Ярость",
            image: "https://static.wikia.nocookie.net/crossout/images/1/15/Ярость.png/revision/latest/scale-to-width-down/30?cb=20170718055310&path-prefix=ru",
            price: 800,
            rarity: "Редкая",
            type: "Лёгкая"
        },
        {
            name: "Жокей",
            image: "https://static.wikia.nocookie.net/crossout/images/f/f8/Жокей.png/revision/latest/scale-to-width-down/30?cb=20180423120851&path-prefix=ru",
            price: 600,
            rarity: "Обычная",
            type: "Лёгкая"
        },
        {
            name: "Панцирь",
            image: "https://static.wikia.nocookie.net/crossout/images/d/dc/Панцирь.png/revision/latest/scale-to-width-down/30?cb=20170718055246&path-prefix=ru",
            price: 700,
            rarity: "Обычная",
            type: "Тяжёлая"
        },
        {
            name: "Хот-род",
            image: "https://static.wikia.nocookie.net/crossout/images/7/79/Хот-род.png/revision/latest/scale-to-width-down/30?cb=20201014172626&path-prefix=ru",
            price: 1200,
            rarity: "Редкая",
            type: "Лёгкая"
        },
        {
            name: "Нетопырь",
            image: "https://static.wikia.nocookie.net/crossout/images/f/fb/Нетопырь.png/revision/latest/scale-to-width-down/30?cb=20201014172723&path-prefix=ru",
            price: 2000,
            rarity: "Легендарная",
            type: "Средняя"
        },
        {
            name: "Пилигрим",
            image: "https://static.wikia.nocookie.net/crossout/images/5/5e/Пилигрим.png/revision/latest/scale-to-width-down/30?cb=20170922133841&path-prefix=ru",
            price: 900,
            rarity: "Редкая",
            type: "Тяжёлая"
        },
        {
            name: "Зубодробитель",
            image: "https://static.wikia.nocookie.net/crossout/images/5/5b/Зубодробитель.png/revision/latest/scale-to-width-down/30?cb=20170718055224&path-prefix=ru",
            price: 1000,
            rarity: "Редкая",
            type: "Тяжёлая"
        },
        {
            name: "Горбун",
            image: "https://static.wikia.nocookie.net/crossout/images/2/27/Горбун.png/revision/latest/scale-to-width-down/30?cb=20170718055159&path-prefix=ru",
            price: 750,
            rarity: "Обычная",
            type: "Средняя"
        },
        {
            name: "Каракурт",
            image: "https://static.wikia.nocookie.net/crossout/images/6/66/Каракурт.png/revision/latest/scale-to-width-down/30?cb=20180204221542&path-prefix=ru",
            price: 1800,
            rarity: "Эпическая",
            type: "Средняя"
        },
        {
            name: "Квант",
            image: "https://static.wikia.nocookie.net/crossout/images/b/b5/Квант.png/revision/latest/scale-to-width-down/30?cb=20190312180856&path-prefix=ru",
            price: 2200,
            rarity: "Легендарная",
            type: "Лёгкая"
        },
        {
            name: "Оборотень",
            image: "https://static.wikia.nocookie.net/crossout/images/d/de/Оборотень.png/revision/latest/scale-to-width-down/30?cb=20180423121356&path-prefix=ru",
            price: 1300,
            rarity: "Редкая",
            type: "Средняя"
        },
        {
            name: "Холодильник",
            image: "https://static.wikia.nocookie.net/crossout/images/f/f1/Холодильник.png/revision/latest/scale-to-width-down/30?cb=20180204221627&path-prefix=ru",
            price: 850,
            rarity: "Обычная",
            type: "Тяжёлая"
        },
        {
            name: "Цербер",
            image: "https://static.wikia.nocookie.net/crossout/images/e/e3/Цербер.png/revision/latest/scale-to-width-down/30?cb=20180423121454&path-prefix=ru",
            price: 950,
            rarity: "Редкая",
            type: "Средняя"
        },
        {
            name: "Бивень",
            image: "https://static.wikia.nocookie.net/crossout/images/3/35/Бивень.png/revision/latest/scale-to-width-down/30?cb=20180423103820&path-prefix=ru",
            price: 2500,
            rarity: "Легендарная",
            type: "Тяжёлая"
        },
        {
            name: "Призрак",
            image: "https://static.wikia.nocookie.net/crossout/images/0/0b/Призрак.png/revision/latest/scale-to-width-down/30?cb=20220422202934&path-prefix=ru",
            price: 1700,
            rarity: "Эпическая",
            type: "Лёгкая"
        },
        {
            name: "Торреро",
            image: "https://static.wikia.nocookie.net/crossout/images/f/f3/Торреро.png/revision/latest/scale-to-width-down/30?cb=20180709152955&path-prefix=ru",
            price: 1400,
            rarity: "Редкая",
            type: "Средняя"
        }
    ];

  
    $.fn.dataTable.ext.type.order['rarity-order-pre'] = function(data) {
        return rarityOrder[data] || 6;
    };

   
    const table = $('#cabsTable').DataTable({
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.11.5/i18n/ru.json"
        },
        "data": data,
        "columns": [
            { "data": "name" },
            { 
                "data": "image",
                "render": function(data) {
                    return `<img src="${data}" alt="Кабина" style="max-width: 100px; height: auto;">`;
                }
            },
            { "data": "price" },
            { 
                "data": "rarity",
                "render": function(data) {
                    
                    return `<span class="${data.toLowerCase()}">${data}</span>`;
                },
                "type": "rarity-order" 
            },
            { "data": "type" }
        ],
        "columnDefs": [
            { "orderable": true, "targets": [0, 2, 3, 4] }, 
            { "orderable": false, "targets": [1] } 
        ]
    });
});