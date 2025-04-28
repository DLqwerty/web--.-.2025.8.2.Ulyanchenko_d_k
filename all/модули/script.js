
const modulesData = [
    // Двигатели
    {
        id: 1,
        name: "Жесткач",
        image: "https://crossoutdb.com/img/items/90/engine_heavy.png",
        faction: "Мусорщики",
        factionIcon: "https://crossoutdb.com/img/factions/scavengers.png",
        rarity: "Редкий",
        description: "Базовый двигатель с хорошим балансом характеристик.",
        stats: ["Энергия: 1", "Скорость: +15 км/ч", "Мощность: +2000 кг"],
        type: "Двигатель"
    },
    {
        id: 2,
        name: "Саврас",
        image: "https://crossoutdb.com/img/items/90/engine_heavy.png",
        faction: "Степные волки",
        factionIcon: "https://crossoutdb.com/img/factions/steppenwolfs.png",
        rarity: "Эпический",
        description: "Мощный двигатель для тяжелых машин.",
        stats: ["Энергия: 2", "Скорость: +10 км/ч", "Мощность: +4000 кг"],
        type: "Двигатель"
    },
    {
        id: 3,
        name: "Работяга",
        image: "https://crossoutdb.com/img/items/90/engine_light.png",
        faction: "Мусорщики",
        factionIcon: "https://crossoutdb.com/img/factions/scavengers.png",
        rarity: "Обычный",
        description: "Надежный двигатель для начинающих.",
        stats: ["Энергия: 1", "Скорость: +10 км/ч", "Мощность: +1500 кг"],
        type: "Двигатель"
    },
    {
        id: 4,
        name: "Беркут",
        image: "https://crossoutdb.com/img/items/90/engine_epic.png",
        faction: "Степные волки",
        factionIcon: "https://crossoutdb.com/img/factions/steppenwolfs.png",
        rarity: "Легендарный",
        description: "Элитный двигатель с выдающимися характеристиками.",
        stats: ["Энергия: 2", "Скорость: +20 км/ч", "Мощность: +3500 кг"],
        type: "Двигатель"
    },
    {
        id: 5,
        name: "Гепард",
        image: "https://crossoutdb.com/img/items/90/engine_light.png",
        faction: "Лунатики",
        factionIcon: "https://crossoutdb.com/img/factions/lunatics.png",
        rarity: "Эпический",
        description: "Двигатель для скоростных машин.",
        stats: ["Энергия: 1", "Скорость: +25 км/ч", "Мощность: +1000 кг"],
        type: "Двигатель"
    },
    {
        id: 6,
        name: "Четкий",
        image: "https://crossoutdb.com/img/items/90/engine_medium.png",
        faction: "Кочевники",
        factionIcon: "https://crossoutdb.com/img/factions/nomads.png",
        rarity: "Редкий",
        description: "Сбалансированный двигатель для средних машин.",
        stats: ["Энергия: 1", "Скорость: +15 км/ч", "Мощность: +2500 кг"],
        type: "Двигатель"
    },
    {
        id: 7,
        name: "Исполин",
        image: "https://crossoutdb.com/img/items/90/engine_heavy.png",
        faction: "Степные волки",
        factionIcon: "https://crossoutdb.com/img/factions/steppenwolfs.png",
        rarity: "Легендарный",
        description: "Сверхмощный двигатель для самых тяжелых машин.",
        stats: ["Энергия: 3", "Скорость: +5 км/ч", "Мощность: +6000 кг"],
        type: "Двигатель"
    },
    {
        id: 8,
        name: "Пегас",
        image: "https://crossoutdb.com/img/items/90/engine_epic.png",
        faction: "Дети Рассвета",
        factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
        rarity: "Эпический",
        description: "Высокотехнологичный двигатель с улучшенными характеристиками.",
        stats: ["Энергия: 2", "Скорость: +18 км/ч", "Мощность: +3000 кг"],
        type: "Двигатель"
    },
    {
        id: 9,
        name: "Финвал",
        image: "https://crossoutdb.com/img/items/90/engine_medium.png",
        faction: "Поджигатели",
        factionIcon: "https://crossoutdb.com/img/factions/firestarters.png",
        rarity: "Редкий",
        description: "Специальный двигатель для огненных машин.",
        stats: ["Энергия: 1", "Скорость: +12 км/ч", "Мощность: +2200 кг"],
        type: "Двигатель"
    },
    {
        id: 10,
        name: "Оябун",
        image: "https://crossoutdb.com/img/items/90/engine_legendary.png",
        faction: "Кочевники",
        factionIcon: "https://crossoutdb.com/img/factions/nomads.png",
        rarity: "Легендарный",
        description: "Эксклюзивный двигатель с уникальными характеристиками.",
        stats: ["Энергия: 2", "Скорость: +22 км/ч", "Мощность: +2800 кг"],
        type: "Двигатель"
    },

    // Генераторы
    {
        id: 11,
        name: "Тенка",
        image: "https://crossoutdb.com/img/items/90/generator_basic.png",
        faction: "Мусорщики",
        factionIcon: "https://crossoutdb.com/img/factions/scavengers.png",
        rarity: "Обычный",
        description: "Базовый генератор энергии.",
        stats: ["Доп. энергия: +1", "Прочность: 75", "Вес: 300 кг"],
        type: "Генератор"
    },
    {
        id: 12,
        name: "IT Агрегат",
        image: "https://crossoutdb.com/img/items/90/generator_advanced.png",
        faction: "Дети Рассвета",
        factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
        rarity: "Редкий",
        description: "Улучшенный генератор энергии.",
        stats: ["Доп. энергия: +2", "Прочность: 90", "Вес: 400 кг"],
        type: "Генератор"
    },
    {
        id: 13,
        name: "Ампер",
        image: "https://crossoutdb.com/img/items/90/generator_epic.png",
        faction: "Дети Рассвета",
        factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
        rarity: "Эпический",
        description: "Высокотехнологичный генератор энергии.",
        stats: ["Доп. энергия: +3", "Прочность: 110", "Вес: 500 кг"],
        type: "Генератор"
    },
    {
        id: 14,
        name: "ЭУ-1 Заряд",
        image: "https://crossoutdb.com/img/items/90/generator_compact.png",
        faction: "Поджигатели",
        factionIcon: "https://crossoutdb.com/img/factions/firestarters.png",
        rarity: "Редкий",
        description: "Компактный генератор энергии.",
        stats: ["Доп. энергия: +1", "Прочность: 65", "Вес: 250 кг"],
        type: "Генератор"
    },
    {
        id: 15,
        name: "Газген",
        image: "https://crossoutdb.com/img/items/90/generator_basic.png",
        faction: "Кочевники",
        factionIcon: "https://crossoutdb.com/img/factions/nomads.png",
        rarity: "Обычный",
        description: "Генератор на газовом топливе.",
        stats: ["Доп. энергия: +1", "Прочность: 80", "Вес: 350 кг"],
        type: "Генератор"
    },
    {
        id: 16,
        name: "Бутстрел",
        image: "https://crossoutdb.com/img/items/90/generator_light.png",
        faction: "Лунатики",
        factionIcon: "https://crossoutdb.com/img/factions/lunatics.png",
        rarity: "Редкий",
        description: "Легкий генератор для скоростных машин.",
        stats: ["Доп. энергия: +2", "Прочность: 70", "Вес: 300 кг"],
        type: "Генератор"
    },
    {
        id: 17,
        name: "Аполлон IV",
        image: "https://crossoutdb.com/img/items/90/generator_legendary.png",
        faction: "Дети Рассвета",
        factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
        rarity: "Легендарный",
        description: "Мощнейший генератор энергии.",
        stats: ["Доп. энергия: +4", "Прочность: 150", "Вес: 700 кг"],
        type: "Генератор"
    },
    {
        id: 18,
        name: "Top-6C",
        image: "https://crossoutdb.com/img/items/90/generator_heavy.png",
        faction: "Степные волки",
        factionIcon: "https://crossoutdb.com/img/factions/steppenwolfs.png",
        rarity: "Эпический",
        description: "Надежный генератор для тяжелых машин.",
        stats: ["Доп. энергия: +3", "Прочность: 130", "Вес: 600 кг"],
        type: "Генератор"
    },
    {
        id: 19,
        name: "Один",
        image: "https://crossoutdb.com/img/items/90/generator_special.png",
        faction: "Поджигатели",
        factionIcon: "https://crossoutdb.com/img/factions/firestarters.png",
        rarity: "Легендарный",
        description: "Экспериментальный генератор с уникальными характеристиками.",
        stats: ["Доп. энергия: +3", "Прочность: 100", "Вес: 450 кг"],
        type: "Генератор"
    },

    // Ускорители
    {
        id: 20,
        name: "Y-1 Авиатор",
        image: "https://crossoutdb.com/img/items/90/booster_basic.png",
        faction: "Кочевники",
        factionIcon: "https://crossoutdb.com/img/factions/nomads.png",
        rarity: "Редкий",
        description: "Базовый ускоритель для кратковременного рывка.",
        stats: ["Энергия: 1", "Длительность: 3с", "Ускорение: +50%", "Перезарядка: 15с"],
        type: "Ускоритель"
    },
    {
        id: 21,
        name: "Разгон",
        image: "https://crossoutdb.com/img/items/90/booster_simple.png",
        faction: "Лунатики",
        factionIcon: "https://crossoutdb.com/img/factions/lunatics.png",
        rarity: "Обычный",
        description: "Простой ускоритель для начинающих.",
        stats: ["Энергия: 1", "Длительность: 2.5с", "Ускорение: +40%", "Перезарядка: 12с"],
        type: "Ускоритель"
    },
    {
        id: 22,
        name: "Гермес",
        image: "https://crossoutdb.com/img/items/90/booster_epic.png",
        faction: "Дети Рассвета",
        factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
        rarity: "Эпический",
        description: "Продвинутый ускоритель с улучшенными характеристиками.",
        stats: ["Энергия: 2", "Длительность: 4с", "Ускорение: +60%", "Перезарядка: 18с"],
        type: "Ускоритель"
    },

    // Радары
    {
        id: 23,
        name: "РУ-1 Рубин",
        image: "https://crossoutdb.com/img/items/90/radar_basic.png",
        faction: "Дети Рассвета",
        factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
        rarity: "Редкий",
        description: "Базовый радар для обнаружения врагов.",
        stats: ["Энергия: 1", "Дальность: +300м", "Прочность: 60", "Вес: 100 кг"],
        type: "Радар"
    },
    {
        id: 24,
        name: "РЛО-1 Слухач",
        image: "https://crossoutdb.com/img/items/90/radar_simple.png",
        faction: "Мусорщики",
        factionIcon: "https://crossoutdb.com/img/factions/scavengers.png",
        rarity: "Обычный",
        description: "Простой радар с базовой дальностью.",
        stats: ["Энергия: 1", "Дальность: +200м", "Прочность: 50", "Вес: 80 кг"],
        type: "Радар"
    },
    {
        id: 25,
        name: "РЛО-2 Чуткий",
        image: "https://crossoutdb.com/img/items/90/radar_improved.png",
        faction: "Мусорщики",
        factionIcon: "https://crossoutdb.com/img/factions/scavengers.png",
        rarity: "Редкий",
        description: "Улучшенная версия радара Слухач.",
        stats: ["Энергия: 1", "Дальность: +250м", "Прочность: 70", "Вес: 120 кг"],
        type: "Радар"
    },
    {
        id: 26,
        name: "Максвелл",
        image: "https://crossoutdb.com/img/items/90/radar_advanced.png",
        faction: "Дети Рассвета",
        factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
        rarity: "Эпический",
        description: "Продвинутый радар с увеличенной дальностью.",
        stats: ["Энергия: 2", "Дальность: +400м", "Прочность: 90", "Вес: 150 кг"],
        type: "Радар"
    },
    {
        id: 27,
        name: "Доллер",
        image: "https://crossoutdb.com/img/items/90/radar_compact.png",
        faction: "Кочевники",
        factionIcon: "https://crossoutdb.com/img/factions/nomads.png",
        rarity: "Редкий",
        description: "Компактный радар для легких машин.",
        stats: ["Энергия: 1", "Дальность: +220м", "Прочность: 55", "Вес: 70 кг"],
        type: "Радар"
    },
    {
        id: 28,
        name: "Окулус VI",
        image: "https://crossoutdb.com/img/items/90/radar_legendary.png",
        faction: "Дети Рассвета",
        factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
        rarity: "Легендарный",
        description: "Сверхчувствительный радар с максимальной дальностью.",
        stats: ["Энергия: 3", "Дальность: +500м", "Прочность: 120", "Вес: 200 кг"],
        type: "Радар"
    },
    {
        id: 29,
        name: "Верификатор",
        image: "https://crossoutdb.com/img/items/90/radar_special.png",
        faction: "Поджигатели",
        factionIcon: "https://crossoutdb.com/img/factions/firestarters.png",
        rarity: "Эпический",
        description: "Радар с функцией обнаружения невидимых целей.",
        stats: ["Энергия: 2", "Дальность: +350м", "Обнаружение невидимок: Да", "Прочность: 100", "Вес: 180 кг"],
        type: "Радар"
    }
];


function loadModules() {
    const container = document.getElementById('modules-container');
    container.innerHTML = ''; 
    
    modulesData.forEach(module => {
        const rarityClass = getRarityClass(module.rarity);
        
        const moduleHTML = `
            <div class="col-md-6 col-lg-4">
                <div class="card module-card ${rarityClass} h-100">
                    <div class="card-body">
                        <div class="d-flex">
                            <img src="${module.image}" alt="${module.name}" class="module-icon" 
                                 onerror="this.onerror=null;this.src='https://via.placeholder.com/80/333333/FFFFFF?text=No+Image'">
                            <div>
                                <h5 class="card-title">${module.name}</h5>
                                <div class="d-flex align-items-center mb-2">
                                    <img src="${module.factionIcon}" alt="${module.faction}" class="faction-icon" 
                                         onerror="this.onerror=null;this.src='https://via.placeholder.com/30/333333/FFFFFF?text=F'">
                                    <span class="badge ${getRarityBadgeClass(module.rarity)}">${module.rarity}</span>
                                </div>
                                <p class="card-text">${module.description}</p>
                                <ul class="list-group list-group-flush">
                                    ${module.stats.map(stat => `<li class="list-group-item">${stat}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer bg-transparent">
                        <button class="btn btn-sm btn-outline-primary">Подробности</button>
                        <button class="btn btn-sm btn-outline-success">Добавить в сборку</button>
                    </div>
                </div>
            </div>
        `;
        
        container.innerHTML += moduleHTML;
    });
}


function getRarityClass(rarity) {
    const rarities = {
        'Обычный': 'rarity-common',
        'Редкий': 'rarity-rare',
        'Эпический': 'rarity-epic',
        'Легендарный': 'rarity-legendary'
    };
    return rarities[rarity] || '';
}

function getRarityBadgeClass(rarity) {
    const badges = {
        'Обычный': 'bg-secondary',
        'Редкий': 'bg-info',
        'Эпический': 'bg-purple',
        'Легендарный': 'bg-warning'
    };
    return badges[rarity] || 'bg-secondary';
}


document.addEventListener('DOMContentLoaded', loadModules);