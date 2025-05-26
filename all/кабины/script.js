
        const cabinsData = [
            
            {
                id: 1,
                name: "Партизан",
                image: "https://static.wikia.nocookie.net/crossout/images/4/43/Партизан.png/revision/latest/scale-to-width-down/30?cb=20191227091945&path-prefix=ru",
                faction: "Мусорщики",
                factionIcon: "https://crossoutdb.com/img/factions/scavengers.png",
                rarity: "Обычный",
                description: "Базовая кабина с хорошим балансом характеристик.",
                stats: ["Энергия: 11", "Масса: 400 кг", "Прочность: 120"],
                type: "Легкий"
            },
            {
                id: 2,
                name: "WWT1",
                image: "https://static.wikia.nocookie.net/crossout/images/0/0f/WWT1.png/revision/latest/scale-to-width-down/30?cb=20170718055437&path-prefix=ru",
                faction: "Мусорщики",
                factionIcon: "https://crossoutdb.com/img/factions/scavengers.png",
                rarity: "Обычный",
                description: "Кабина с повышенной прочностью.",
                stats: ["Энергия: 10", "Масса: 600 кг", "Прочность: 150"],
                type: "Средний"
            },
            {
                id: 3,
                name: "Докер",
                image: "https://static.wikia.nocookie.net/crossout/images/b/b2/Докер.png/revision/latest/scale-to-width-down/30?cb=20170718055457&path-prefix=ru",
                faction: "Мусорщики",
                factionIcon: "https://crossoutdb.com/img/factions/scavengers.png",
                rarity: "Редкий",
                description: "Кабина с увеличенным запасом энергии.",
                stats: ["Энергия: 12", "Масса: 450 кг", "Прочность: 130"],
                type: "Легкий"
            },
            {
                id: 4,
                name: "Егерь",
                image: "https://static.wikia.nocookie.net/crossout/images/6/64/Егерь.png/revision/latest/scale-to-width-down/30?cb=20191227092015&path-prefix=ru",
                faction: "Степные волки",
                factionIcon: "https://crossoutdb.com/img/factions/steppenwolfs.png",
                rarity: "Редкий",
                description: "Кабина для средних машин с хорошей защитой.",
                stats: ["Энергия: 11", "Масса: 550 кг", "Прочность: 140"],
                type: "Средний"
            },
            {
                id: 5,
                name: "Кастет",
                image: "https://static.wikia.nocookie.net/crossout/images/b/b7/Крепыш.png/revision/latest/scale-to-width-down/30?cb=20170810083935&path-prefix=ru",
                faction: "Степные волки",
                factionIcon: "https://crossoutdb.com/img/factions/steppenwolfs.png",
                rarity: "Необычный",
                description: "Кабина с повышенной прочностью для ближнего боя.",
                stats: ["Энергия: 10", "Масса: 650 кг", "Прочность: 160"],
                type: "Средний"
            },
            {
                id: 6,
                name: "Крепыш",
                image: "https://static.wikia.nocookie.net/crossout/images/b/b7/Крепыш.png/revision/latest/scale-to-width-down/30?cb=20170810083935&path-prefix=ru",
                faction: "Степные волки",
                factionIcon: "https://crossoutdb.com/img/factions/steppenwolfs.png",
                rarity: "Редкий",
                description: "Очень прочная кабина для тяжелых машин.",
                stats: ["Энергия: 9", "Масса: 800 кг", "Прочность: 180"],
                type: "Тяжелый"
            },
            {
                id: 7,
                name: "Спрингер",
                image: "https://static.wikia.nocookie.net/crossout/images/d/da/Спринтер.png/revision/latest/scale-to-width-down/30?cb=20210209075758&path-prefix=ru",
                faction: "Бешеные",
                factionIcon: "https://crossoutdb.com/img/factions/nomads.png",
                rarity: "Редкий",
                description: "Легкая кабина для скоростных машин.",
                stats: ["Энергия: 11", "Масса: 350 кг", "Прочность: 110"],
                type: "Легкий"
            },
            {
                id: 8,
                name: "Виверна",
                image: "https://static.wikia.nocookie.net/crossout/images/e/eb/Виверна.png/revision/latest/scale-to-width-down/30?cb=20181003082554&path-prefix=ru",
                faction: "Бешеные",
                factionIcon: "https://crossoutdb.com/img/factions/nomads.png",
                rarity: "Необычный",
                description: "Кабина с уникальным дизайном и характеристиками.",
                stats: ["Энергия: 12", "Масса: 400 кг", "Прочность: 125"],
                type: "Легкий"
            },
            {
                id: 9,
                name: "Дальнобой",
                image: "https://static.wikia.nocookie.net/crossout/images/d/d0/Дальнобой.png/revision/latest/scale-to-width-down/30?cb=20170718055333&path-prefix=ru",
                faction: "Огнепоклонники",
                factionIcon: "https://crossoutdb.com/img/factions/firestarters.png",
                rarity: "Редкий",
                description: "Кабина для дальнобойных машин.",
                stats: ["Энергия: 11", "Масса: 500 кг", "Прочность: 135"],
                type: "Средний"
            },
            {
                id: 10,
                name: "Медведь",
                image: "https://static.wikia.nocookie.net/crossout/images/6/60/Медведь.png/revision/latest/scale-to-width-down/30?cb=20170714072403&path-prefix=ru",
                faction: "Степные волки",
                factionIcon: "https://crossoutdb.com/img/factions/steppenwolfs.png",
                rarity: "Эпический",
                description: "Мощная кабина для тяжелых машин.",
                stats: ["Энергия: 12", "Масса: 700 кг", "Прочность: 200"],
                type: "Тяжелый"
            },
            {
                id: 11,
                name: "Рык",
                image: "https://static.wikia.nocookie.net/crossout/images/2/23/Рык.png/revision/latest/scale-to-width-down/30?cb=20181010102333&path-prefix=ru",
                faction: "Огнепоклонники",
                factionIcon: "https://crossoutdb.com/img/factions/firestarters.png",
                rarity: "Эпический",
                description: "Кабина с уникальным перком для огненных орудий.",
                stats: ["Энергия: 11", "Масса: 550 кг", "Прочность: 160"],
                type: "Средний"
            },
            {
                id: 12,
                name: "Ярость",
                image: "https://static.wikia.nocookie.net/crossout/images/1/15/Ярость.png/revision/latest/scale-to-width-down/30?cb=20170718055310&path-prefix=ru",
                faction: "Огнепоклонники",
                factionIcon: "https://crossoutdb.com/img/factions/firestarters.png",
                rarity: "Эпический",
                description: "Кабина для агрессивного стиля игры.",
                stats: ["Энергия: 12", "Масса: 600 кг", "Прочность: 170"],
                type: "Средний"
            },
            {
                id: 13,
                name: "Жокей",
                image: "https://static.wikia.nocookie.net/crossout/images/f/f8/Жокей.png/revision/latest/scale-to-width-down/30?cb=20180423120851&path-prefix=ru",
                faction: "Бешеные",
                factionIcon: "https://crossoutdb.com/img/factions/nomads.png",
                rarity: "Необычный",
                description: "Компактная кабина для маневренных машин.",
                stats: ["Энергия: 11", "Масса: 380 кг", "Прочность: 115"],
                type: "Легкий"
            },
            {
                id: 14,
                name: "Панцирь",
                image: "https://static.wikia.nocookie.net/crossout/images/d/dc/Панцирь.png/revision/latest/scale-to-width-down/30?cb=20170718055246&path-prefix=ru",
                faction: "Степные волки",
                factionIcon: "https://crossoutdb.com/img/factions/steppenwolfs.png",
                rarity: "Необычный",
                description: "Очень прочная кабина с хорошей защитой.",
                stats: ["Энергия: 10", "Масса: 750 кг", "Прочность: 190"],
                type: "Тяжелый"
            },
            {
                id: 15,
                name: "Хот-род",
                image: "https://static.wikia.nocookie.net/crossout/images/7/79/Хот-род.png/revision/latest/scale-to-width-down/30?cb=20201014172626&path-prefix=ru",
                faction: "Бешеные",
                factionIcon: "https://crossoutdb.com/img/factions/nomads.png",
                rarity: "Эпический",
                description: "Кабина для скоростных машин с уникальным перком.",
                stats: ["Энергия: 11", "Масса: 400 кг", "Прочность: 120"],
                type: "Легкий"
            },
            {
                id: 16,
                name: "Нетопырь",
                image: "https://static.wikia.nocookie.net/crossout/images/f/fb/Нетопырь.png/revision/latest/scale-to-width-down/30?cb=20201014172723&path-prefix=ru",
                faction: "Дети Рассвета",
                factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
                rarity: "Эпический",
                description: "Кабина с технологией невидимости.",
                stats: ["Энергия: 12", "Масса: 450 кг", "Прочность: 130"],
                type: "Легкий"
            },
            {
                id: 17,
                name: "Пилигрим",
                image: "https://static.wikia.nocookie.net/crossout/images/5/5e/Пилигрим.png/revision/latest/scale-to-width-down/30?cb=20170922133841&path-prefix=ru",
                faction: "Дети Рассвета",
                factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
                rarity: "Легендарный",
                description: "Продвинутая кабина с уникальными характеристиками.",
                stats: ["Энергия: 13", "Масса: 500 кг", "Прочность: 140"],
                type: "Средний"
            },
            {
                id: 18,
                name: "Зубодробитель",
                image: "https://static.wikia.nocookie.net/crossout/images/5/5b/Зубодробитель.png/revision/latest/scale-to-width-down/30?cb=20170718055224&path-prefix=ru",
                faction: "Степные волки",
                factionIcon: "https://crossoutdb.com/img/factions/steppenwolfs.png",
                rarity: "Легендарный",
                description: "Мощная кабина для таранных машин.",
                stats: ["Энергия: 12", "Масса: 800 кг", "Прочность: 220"],
                type: "Тяжелый"
            },
            {
                id: 19,
                name: "Горбун",
                image: "https://static.wikia.nocookie.net/crossout/images/2/27/Горбун.png/revision/latest/scale-to-width-down/30?cb=20170718055159&path-prefix=ru",
                faction: "Мусорщики",
                factionIcon: "https://crossoutdb.com/img/factions/scavengers.png",
                rarity: "Эпический",
                description: "Кабина с уникальным дизайном и характеристиками.",
                stats: ["Энергия: 11", "Масса: 600 кг", "Прочность: 150"],
                type: "Средний"
            },
            {
                id: 20,
                name: "Каракурт",
                image: "https://static.wikia.nocookie.net/crossout/images/6/66/Каракурт.png/revision/latest/scale-to-width-down/30?cb=20180204221542&path-prefix=ru",
                faction: "Дети Рассвета",
                factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
                rarity: "Легендарный",
                description: "Кабина с технологией паука.",
                stats: ["Энергия: 12", "Масса: 550 кг", "Прочность: 160"],
                type: "Средний"
            },
            {
                id: 21,
                name: "Квант",
                image: "https://static.wikia.nocookie.net/crossout/images/b/b5/Квант.png/revision/latest/scale-to-width-down/30?cb=20190312180856&path-prefix=ru",
                faction: "Дети Рассвета",
                factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
                rarity: "Реликтовый",
                description: "Экспериментальная кабина с уникальными характеристиками.",
                stats: ["Энергия: 14", "Масса: 450 кг", "Прочность: 140"],
                type: "Специальный"
            },
            // Оборотень
            {
                id: 22,
                name: "Оборотень",
                image: "https://static.wikia.nocookie.net/crossout/images/d/de/Оборотень.png/revision/latest/scale-to-width-down/30?cb=20180423121356&path-prefix=ru",
                faction: "Огнепоклонники",
                factionIcon: "https://crossoutdb.com/img/factions/firestarters.png",
                rarity: "Легендарный",
                description: "Кабина с режимом трансформации.",
                stats: ["Энергия: 12", "Масса: 600 кг", "Прочность: 170"],
                type: "Средний"
            },
            {
                id: 23,
                name: "Холодильник",
                image: "https://static.wikia.nocookie.net/crossout/images/f/f1/Холодильник.png/revision/latest/scale-to-width-down/30?cb=20180204221627&path-prefix=ru",
                faction: "Мусорщики",
                factionIcon: "https://crossoutdb.com/img/factions/scavengers.png",
                rarity: "Обычный",
                description: "Прочная кабина для начинающих.",
                stats: ["Энергия: 10", "Масса: 650 кг", "Прочность: 150"],
                type: "Средний"
            },
            {
                id: 24,
                name: "Цербер",
                image: "https://static.wikia.nocookie.net/crossout/images/e/e3/Цербер.png/revision/latest/scale-to-width-down/30?cb=20180423121454&path-prefix=ru",
                faction: "Огнепоклонники",
                factionIcon: "https://crossoutdb.com/img/factions/firestarters.png",
                rarity: "Эпический",
                description: "Кабина с перком для огненных орудий.",
                stats: ["Энергия: 11", "Масса: 550 кг", "Прочность: 160"],
                type: "Средний"
            },
            {
                id: 25,
                name: "Бивень",
                image: "https://static.wikia.nocookie.net/crossout/images/3/35/Бивень.png/revision/latest/scale-to-width-down/30?cb=20180423103820&path-prefix=ru",
                faction: "Степные волки",
                factionIcon: "https://crossoutdb.com/img/factions/steppenwolfs.png",
                rarity: "Редкий",
                description: "Кабина для таранных машин.",
                stats: ["Энергия: 10", "Масса: 700 кг", "Прочность: 170"],
                type: "Тяжелый"
            },
            {
                id: 26,
                name: "Призрак",
                image: "https://static.wikia.nocookie.net/crossout/images/0/0b/Призрак.png/revision/latest/scale-to-width-down/30?cb=20220422202934&path-prefix=ru",
                faction: "Дети Рассвета",
                factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
                rarity: "Легендарный",
                description: "Кабина с технологией невидимости.",
                stats: ["Энергия: 12", "Масса: 450 кг", "Прочность: 130"],
                type: "Легкий"
            },
            {
                id: 27,
                name: "Торреро",
                image: "https://static.wikia.nocookie.net/crossout/images/f/f3/Торреро.png/revision/latest/scale-to-width-down/30?cb=20180709152955&path-prefix=ru",
                faction: "Бешеные",
                factionIcon: "https://crossoutdb.com/img/factions/nomads.png",
                rarity: "Эпический",
                description: "Кабина для скоростных машин.",
                stats: ["Энергия: 11", "Масса: 400 кг", "Прочность: 120"],
                type: "Легкий"
            },
            {
                id: 28,
                name: "Фаворит",
                image: "https://static.wikia.nocookie.net/crossout/images/0/01/Фаворит.png/revision/latest/scale-to-width-down/30?cb=20201014174014&path-prefix=ru",
                faction: "Бешеные",
                factionIcon: "https://crossoutdb.com/img/factions/nomads.png",
                rarity: "Необычный",
                description: "Кабина с хорошим балансом характеристик.",
                stats: ["Энергия: 11", "Масса: 450 кг", "Прочность: 130"],
                type: "Легкий"
            },
            {
                id: 29,
                name: "Эхо",
                image: "https://static.wikia.nocookie.net/crossout/images/0/0b/Эхо.png/revision/latest/scale-to-width-down/30?cb=20190307082931&path-prefix=ru",
                faction: "Дети Рассвета",
                factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
                rarity: "Легендарный",
                description: "Кабина с уникальным перком для импульсного оружия.",
                stats: ["Энергия: 12", "Масса: 500 кг", "Прочность: 140"],
                type: "Средний"
            },
            {
                id: 30,
                name: "Гарпия",
                image: "https://static.wikia.nocookie.net/crossout/images/0/08/Гарпия.png/revision/latest/scale-to-width-down/30?cb=20190429181535&path-prefix=ru",
                faction: "Огнепоклонники",
                factionIcon: "https://crossoutdb.com/img/factions/firestarters.png",
                rarity: "Эпический",
                description: "Кабина для огненных машин.",
                stats: ["Энергия: 11", "Масса: 550 кг", "Прочность: 150"],
                type: "Средний"
            },
            {
                id: 31,
                name: "Фотон",
                image: "https://static.wikia.nocookie.net/crossout/images/e/e4/Фотон.png/revision/latest/scale-to-width-down/30?cb=20190429181523&path-prefix=ru",
                faction: "Дети Рассвета",
                factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
                rarity: "Легендарный",
                description: "Кабина с перком для энергетического оружия.",
                stats: ["Энергия: 13", "Масса: 450 кг", "Прочность: 130"],
                type: "Легкий"
            },
            {
                id: 32,
                name: "Бастион",
                image: "https://static.wikia.nocookie.net/crossout/images/3/3a/Бастион.png/revision/latest/scale-to-width-down/30?cb=20190429181547&path-prefix=ru",
                faction: "Степные волки",
                factionIcon: "https://crossoutdb.com/img/factions/steppenwolfs.png",
                rarity: "Легендарный",
                description: "Сверхпрочная кабина для тяжелых машин.",
                stats: ["Энергия: 11", "Масса: 900 кг", "Прочность: 250"],
                type: "Тяжелый"
            },
            {
                id: 33,
                name: "Зов",
                image: "https://static.wikia.nocookie.net/crossout/images/f/fa/Зов.png/revision/latest/scale-to-width-down/30?cb=20190429181452&path-prefix=ru",
                faction: "Огнепоклонники",
                factionIcon: "https://crossoutdb.com/img/factions/firestarters.png",
                rarity: "Эпический",
                description: "Кабина с перком для огненных орудий.",
                stats: ["Энергия: 11", "Масса: 550 кг", "Прочность: 160"],
                type: "Средний"
            },
            {
                id: 34,
                name: "Вой",
                image: "https://static.wikia.nocookie.net/crossout/images/9/9a/Вой.png/revision/latest/scale-to-width-down/30?cb=20190612130240&path-prefix=ru",
                faction: "Огнепоклонники",
                factionIcon: "https://crossoutdb.com/img/factions/firestarters.png",
                rarity: "Эпический",
                description: "Кабина для агрессивного стиля игры.",
                stats: ["Энергия: 12", "Масса: 600 кг", "Прочность: 170"],
                type: "Средний"
            },
            {
                id: 35,
                name: "Мор",
                image: "https://static.wikia.nocookie.net/crossout/images/a/ab/Мор.png/revision/latest/scale-to-width-down/30?cb=20190910203027&path-prefix=ru",
                faction: "Огнепоклонники",
                factionIcon: "https://crossoutdb.com/img/factions/firestarters.png",
                rarity: "Легендарный",
                description: "Кабина с уникальным перком для огненных орудий.",
                stats: ["Энергия: 12", "Масса: 650 кг", "Прочность: 180"],
                type: "Средний"
            },
            {
                id: 36,
                name: "Омнибокс",
                image: "https://static.wikia.nocookie.net/crossout/images/1/13/Омнибокс.png/revision/latest/scale-to-width-down/30?cb=20200201114628&path-prefix=ru",
                faction: "Дети Рассвета",
                factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
                rarity: "Реликтовый",
                description: "Экспериментальная кабина с уникальными характеристиками.",
                stats: ["Энергия: 14", "Масса: 500 кг", "Прочность: 150"],
                type: "Специальный"
            },
            {
                id: 37,
                name: "Кокпит",
                image: "https://static.wikia.nocookie.net/crossout/images/8/82/Кокпит.png/revision/latest/scale-to-width-down/30?cb=20200810065904&path-prefix=ru",
                faction: "Бешеные",
                factionIcon: "https://crossoutdb.com/img/factions/nomads.png",
                rarity: "Редкий",
                description: "Кабина для скоростных машин.",
                stats: ["Энергия: 11", "Масса: 400 кг", "Прочность: 120"],
                type: "Легкий"
            },
            {
                id: 38,
                name: "Сумрак",
                image: "https://static.wikia.nocookie.net/crossout/images/a/ab/Сумрак.png/revision/latest/scale-to-width-down/30?cb=20201019202059&path-prefix=ru",
                faction: "Дети Рассвета",
                factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
                rarity: "Эпический",
                description: "Кабина с технологией невидимости.",
                stats: ["Энергия: 12", "Масса: 450 кг", "Прочность: 130"],
                type: "Легкий"
            },
            {
                id: 39,
                name: "Джаннаби",
                image: "https://static.wikia.nocookie.net/crossout/images/a/a9/Джаннаби.png/revision/latest/scale-to-width-down/30?cb=20210210162416&path-prefix=ru",
                faction: "Бешеные",
                factionIcon: "https://crossoutdb.com/img/factions/nomads.png",
                rarity: "Легендарный",
                description: "Кабина с уникальным перком для скоростных машин.",
                stats: ["Энергия: 13", "Масса: 400 кг", "Прочность: 120"],
                type: "Легкий"
            },
            {
                id: 40,
                name: "Агрессор",
                image: "https://static.wikia.nocookie.net/crossout/images/c/cd/Агрессор.png/revision/latest/scale-to-width-down/30?cb=20210622091750&path-prefix=ru",
                faction: "Огнепоклонники",
                factionIcon: "https://crossoutdb.com/img/factions/firestarters.png",
                rarity: "Эпический",
                description: "Кабина для агрессивного стиля игры.",
                stats: ["Энергия: 12", "Масса: 600 кг", "Прочность: 170"],
                type: "Средний"
            },
            {
                id: 41,
                name: "Ермак",
                image: "https://static.wikia.nocookie.net/crossout/images/3/35/Ермак.png/revision/latest/scale-to-width-down/30?cb=20220525084257&path-prefix=ru",
                faction: "Степные волки",
                factionIcon: "https://crossoutdb.com/img/factions/steppenwolfs.png",
                rarity: "Легендарный",
                description: "Сверхпрочная кабина для тяжелых машин.",
                stats: ["Энергия: 12", "Масса: 850 кг", "Прочность: 230"],
                type: "Тяжелый"
            },
            {
                id: 42,
                name: "Каталина",
                image: "https://static.wikia.nocookie.net/crossout/images/2/24/Каталина.png/revision/latest/scale-to-width-down/30?cb=20221116123823&path-prefix=ru",
                faction: "Бешеные",
                factionIcon: "https://crossoutdb.com/img/factions/nomads.png",
                rarity: "Легендарный",
                description: "Кабина с уникальным перком для скоростных машин.",
                stats: ["Энергия: 13", "Масса: 450 кг", "Прочность: 130"],
                type: "Легкий"
            },
            {
                id: 43,
                name: "Спаситель",
                image: "https://static.wikia.nocookie.net/crossout/images/7/72/Спаситель.png/revision/latest/scale-to-width-down/30?cb=20221218091407&path-prefix=ru",
                faction: "Степные волки",
                factionIcon: "https://crossoutdb.com/img/factions/steppenwolfs.png",
                rarity: "Реликтовый",
                description: "Экспериментальная кабина с уникальными характеристиками.",
                stats: ["Энергия: 14", "Масса: 700 кг", "Прочность: 200"],
                type: "Специальный"
            },
            // Хугин
            {
                id: 44,
                name: "Хугин",
                image: "https://static.wikia.nocookie.net/crossout/images/0/01/Хугин.png/revision/latest/scale-to-width-down/30?cb=20230208104303&path-prefix=ru",
                faction: "Дети Рассвета",
                factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
                rarity: "Легендарный",
                description: "Кабина с технологией сканирования.",
                stats: ["Энергия: 12", "Масса: 500 кг", "Прочность: 140"],
                type: "Средний"
            },
            {
                id: 45,
                name: "Маниту",
                image: "https://static.wikia.nocookie.net/crossout/images/1/19/Маниту.png/revision/latest/scale-to-width-down/30?cb=20231031125506&path-prefix=ru",
                faction: "Огнепоклонники",
                factionIcon: "https://crossoutdb.com/img/factions/firestarters.png",
                rarity: "Эпический",
                description: "Кабина с перком для огненных орудий.",
                stats: ["Энергия: 11", "Масса: 550 кг", "Прочность: 160"],
                type: "Средний"
            },
            {
                id: 46,
                name: "Кэнсей",
                image: "https://static.wikia.nocookie.net/crossout/images/5/50/Кэнсэй.png/revision/latest/scale-to-width-down/30?cb=20240428001904&path-prefix=ru",
                faction: "Дети Рассвета",
                factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
                rarity: "Легендарный",
                description: "Кабина с перком для энергетического оружия.",
                stats: ["Энергия: 13", "Масса: 450 кг", "Прочность: 130"],
                type: "Легкий"
            },
            {
                id: 47,
                name: "Маяк 11",
                image: "https://static.wikia.nocookie.net/crossout/images/9/99/Маяк_11.png/revision/latest/scale-to-width-down/30?cb=20241018111218&path-prefix=ru",
                faction: "Дети Рассвета",
                factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
                rarity: "Редкий",
                description: "Кабина с улучшенным радаром.",
                stats: ["Энергия: 11", "Масса: 450 кг", "Прочность: 130"],
                type: "Легкий"
            },
            {
                id: 48,
                name: "Инферно",
                image: "https://static.wikia.nocookie.net/crossout/images/c/ce/Инферно.png/revision/latest/scale-to-width-down/30?cb=20241029131917&path-prefix=ru",
                faction: "Огнепоклонники",
                factionIcon: "https://crossoutdb.com/img/factions/firestarters.png",
                rarity: "Легендарный",
                description: "Кабина с уникальным перком для огненных орудий.",
                stats: ["Энергия: 12", "Масса: 650 кг", "Прочность: 180"],
                type: "Средний"
            },
            {
                id: 49,
                name: "Грифон",
                image: "https://static.wikia.nocookie.net/crossout/images/6/61/Грифон.png/revision/latest/scale-to-width-down/30?cb=20200602084735&path-prefix=ru",
                faction: "Степные волки",
                factionIcon: "https://crossoutdb.com/img/factions/steppenwolfs.png",
                rarity: "Эпический",
                description: "Кабина для тяжелых машин.",
                stats: ["Энергия: 11", "Масса: 700 кг", "Прочность: 190"],
                type: "Тяжелый"
            },
            {
                id: 50,
                name: "Соратник",
                image: "https://static.wikia.nocookie.net/crossout/images/a/a3/Соратник.png/revision/latest/scale-to-width-down/30?cb=20200602085053&path-prefix=ru",
                faction: "Степные волки",
                factionIcon: "https://crossoutdb.com/img/factions/steppenwolfs.png",
                rarity: "Редкий",
                description: "Кабина с хорошим балансом характеристик.",
                stats: ["Энергия: 11", "Масса: 550 кг", "Прочность: 140"],
                type: "Средний"
            },
            {
                id: 51,
                name: "Нова",
                image: "https://static.wikia.nocookie.net/crossout/images/7/78/Нова.png/revision/latest/scale-to-width-down/30?cb=20200602085045&path-prefix=ru",
                faction: "Дети Рассвета",
                factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
                rarity: "Реликтовый",
                description: "Экспериментальная кабина с уникальными характеристиками.",
                stats: ["Энергия: 14", "Масса: 500 кг", "Прочность: 150"],
                type: "Специальный"
            },
            {
                id: 52,
                name: "Созерцатель",
                image: "https://static.wikia.nocookie.net/crossout/images/b/b1/Созерцатель.png/revision/latest/scale-to-width-down/30?cb=20200923104317&path-prefix=ru",
                faction: "Дети Рассвета",
                factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
                rarity: "Легендарный",
                description: "Кабина с технологией сканирования.",
                stats: ["Энергия: 12", "Масса: 500 кг", "Прочность: 140"],
                type: "Средний"
            },
            {
                id: 53,
                name: "Ёкодзуна",
                image: "https://static.wikia.nocookie.net/crossout/images/d/df/Ёкодзуна.png/revision/latest/scale-to-width-down/30?cb=20210210162310&path-prefix=ru",
                faction: "Степные волки",
                factionIcon: "https://crossoutdb.com/img/factions/steppenwolfs.png",
                rarity: "Легендарный",
                description: "Сверхпрочная кабина для тяжелых машин.",
                stats: ["Энергия: 12", "Масса: 850 кг", "Прочность: 230"],
                type: "Тяжелый"
            },
            {
                id: 54,
                name: "Машинист",
                image: "https://static.wikia.nocookie.net/crossout/images/6/68/Машинист.png/revision/latest/scale-to-width-down/30?cb=20210622091846&path-prefix=ru",
                faction: "Мусорщики",
                factionIcon: "https://crossoutdb.com/img/factions/scavengers.png",
                rarity: "Редкий",
                description: "Кабина с хорошим балансом характеристик.",
                stats: ["Энергия: 11", "Масса: 500 кг", "Прочность: 135"],
                type: "Средний"
            },
            {
                id: 55,
                name: "Мастер",
                image: "https://static.wikia.nocookie.net/crossout/images/3/32/Мастер.png/revision/latest/scale-to-width-down/30?cb=20211224151721&path-prefix=ru",
                faction: "Степные волки",
                factionIcon: "https://crossoutdb.com/img/factions/steppenwolfs.png",
                rarity: "Эпический",
                description: "Кабина для тяжелых машин.",
                stats: ["Энергия: 11", "Масса: 700 кг", "Прочность: 190"],
                type: "Тяжелый"
            },
            {
                id: 56,
                name: "Адрон",
                image: "https://static.wikia.nocookie.net/crossout/images/a/a8/Адрон.png/revision/latest/scale-to-width-down/30?cb=20220228092945&path-prefix=ru",
                faction: "Дети Рассвета",
                factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
                rarity: "Легендарный",
                description: "Кабина с перком для энергетического оружия.",
                stats: ["Энергия: 13", "Масса: 450 кг", "Прочность: 130"],
                type: "Легкий"
            },
            {
                id: 57,
                name: "Ками",
                image: "https://static.wikia.nocookie.net/crossout/images/c/c6/Ками.png/revision/latest/scale-to-width-down/30?cb=20220823120557&path-prefix=ru",
                faction: "Дети Рассвета",
                factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
                rarity: "Эпический",
                description: "Кабина с технологией невидимости.",
                stats: ["Энергия: 12", "Масса: 450 кг", "Прочность: 130"],
                type: "Легкий"
            },
            {
                id: 58,
                name: "Мунин",
                image: "https://static.wikia.nocookie.net/crossout/images/9/93/Мунин.png/revision/latest/scale-to-width-down/30?cb=20230208104552&path-prefix=ru",
                faction: "Дети Рассвета",
                factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
                rarity: "Легендарный",
                description: "Кабина с технологией сканирования.",
                stats: ["Энергия: 12", "Масса: 500 кг", "Прочность: 140"],
                type: "Средний"
            },
            {
                id: 59,
                name: "Кронос",
                image: "https://static.wikia.nocookie.net/crossout/images/6/63/Кронос.png/revision/latest/scale-to-width-down/30?cb=20230620113643&path-prefix=ru",
                faction: "Дети Рассвета",
                factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
                rarity: "Реликтовый",
                description: "Экспериментальная кабина с уникальными характеристиками.",
                stats: ["Энергия: 14", "Масса: 500 кг", "Прочность: 150"],
                type: "Специальный"
            },
            {
                id: 60,
                name: "Гиппогриф",
                image: "https://static.wikia.nocookie.net/crossout/images/7/77/Гиппогриф.png/revision/latest/scale-to-width-down/30?cb=20231031124451&path-prefix=ru",
                faction: "Степные волки",
                factionIcon: "https://crossoutdb.com/img/factions/steppenwolfs.png",
                rarity: "Легендарный",
                description: "Кабина для тяжелых машин.",
                stats: ["Энергия: 12", "Масса: 800 кг", "Прочность: 220"],
                type: "Тяжелый"
            },
            {
                id: 61,
                name: "Марс",
                image: "https://static.wikia.nocookie.net/crossout/images/0/08/Марс.png/revision/latest/scale-to-width-down/30?cb=20240724075247&path-prefix=ru",
                faction: "Дети Рассвета",
                factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
                rarity: "Легендарный",
                description: "Кабина с перком для дронов.",
                stats: ["Энергия: 12", "Масса: 550 кг", "Прочность: 160"],
                type: "Средний"
            },
            {
                id: 62,
                name: "Китобой",
                image: "https://static.wikia.nocookie.net/crossout/images/3/34/Китобой.png/revision/latest/scale-to-width-down/30?cb=20240216131202&path-prefix=ru",
                faction: "Степные волки",
                factionIcon: "https://crossoutdb.com/img/factions/steppenwolfs.png",
                rarity: "Реликтовый",
                description: "Экспериментальная кабина с уникальными характеристиками.",
                stats: ["Энергия: 14", "Масса: 700 кг", "Прочность: 200"],
                type: "Специальный"
            },
            {
                id: 63,
                name: "Воин",
                image: "https://static.wikia.nocookie.net/crossout/images/a/a8/КБШ_Воин.png/revision/latest/scale-to-width-down/30?cb=20241006113613&path-prefix=ru",
                faction: "Дети Рассвета",
                factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
                rarity: "Легендарный",
                description: "Кабина с перком для энергетического оружия.",
                stats: ["Энергия: 13", "Масса: 450 кг", "Прочность: 130"],
                type: "Легкий"
            },
            {
                id: 64,
                name: "Сатори",
                image: "https://static.wikia.nocookie.net/crossout/images/d/db/Сатори.png/revision/latest/scale-to-width-down/30?cb=20250106205943&path-prefix=ru",
                faction: "Дети Рассвета",
                factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
                rarity: "Реликтовый",
                description: "Экспериментальная кабина с уникальными характеристиками.",
                stats: ["Энергия: 14", "Масса: 450 кг", "Прочность: 140"],
                type: "Специальный"
            },
            {
                id: 65,
                name: "Мейнфрейм",
                image: "https://static.wikia.nocookie.net/crossout/images/f/f8/Мейнфрейм.png/revision/latest/scale-to-width-down/30?cb=20250327212703&path-prefix=ru",
                faction: "Дети Рассвета",
                factionIcon: "https://crossoutdb.com/img/factions/dawnschildren.png",
                rarity: "Реликтовый",
                description: "Экспериментальная кабина с уникальными характеристиками.",
                stats: ["Энергия: 14", "Масса: 500 кг", "Прочность: 150"],
                type: "Специальный"
            },
        ];

        
        function loadCabins() {
            const container = document.getElementById('modules-container');
            container.innerHTML = ''; 
            
            cabinsData.forEach(cabin => {
                const rarityClass = getRarityClass(cabin.rarity);
                
                const cabinHTML = `
                    <div class="col-md-6 col-lg-4 mb-4">
                        <div class="card module-card ${rarityClass} h-100">
                            <div class="card-body">
                                <div class="d-flex">
                                    <img src="${cabin.image}" alt="${cabin.name}" class="module-icon" data-name="${cabin.name}"
                                         onerror="this.onerror=null;this.src='https://via.placeholder.com/80/333333/FFFFFF?text=No+Image'">
                                    <div>
                                        <h5 class="card-title">${cabin.name}</h5>
                                        <div class="d-flex align-items-center mb-2">
                                            <img src="${cabin.factionIcon}" alt="${cabin.faction}" class="faction-icon" 
                                                 onerror="this.onerror=null;this.src='https://via.placeholder.com/30/333333/FFFFFF?text=F'">
                                            <span class="badge ${getRarityBadgeClass(cabin.rarity)}">${cabin.rarity}</span>
                                        </div>
                                        <p class="card-text">${cabin.description}</p>
                                        <ul class="list-group list-group-flush">
                                            ${cabin.stats.map(stat => `<li class="list-group-item">${stat}</li>`).join('')}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer bg-transparent">
                                <button class="btn btn-sm btn-outline-orange">Подробности</button>
                                <button class="btn btn-sm btn-orange">Добавить в сборку</button>
                            </div>
                        </div>
                    </div>
                `;
                
                container.innerHTML += cabinHTML;
            });
        }
        
        
        function getRarityClass(rarity) {
            const rarities = {
                'Обычный': 'rarity-common',
                'Редкий': 'rarity-rare',
                'Необычный': 'rarity-special',
                'Эпический': 'rarity-epic',
                'Легендарный': 'rarity-legendary',
                'Реликтовый': 'rarity-relic'
            };
            return rarities[rarity] || '';
        }
        
    
        function getRarityBadgeClass(rarity) {
            const badges = {
                'Обычный': 'bg-secondary',
                'Редкий': 'bg-primary',
                'Необычный': 'bg-info',
                'Эпический': 'bg-purple',
                'Легендарный': 'bg-warning',
                'Реликтовый': 'bg-danger'
            };
            return badges[rarity] || 'bg-secondary';
        }
        
        
        document.addEventListener('DOMContentLoaded', function() {
           
            loadCabins();
            
           
            const factionFilter = document.getElementById('factionFilter');
            const rarityFilter = document.getElementById('rarityFilter');
            const typeFilter = document.getElementById('typeFilter');
            const applyBtn = document.getElementById('applyFilters');
            const resetBtn = document.getElementById('resetFilters');
            const searchInput = document.getElementById('searchInput');
            const searchButton = document.getElementById('searchButton');
            
           
            applyBtn.addEventListener('click', applyFilters);
            resetBtn.addEventListener('click', resetFilters);
            searchButton.addEventListener('click', applyFilters);
            searchInput.addEventListener('keyup', function(e) {
                if (e.key === 'Enter') applyFilters();
            });
            
          
            function applyFilters() {
                const factionValue = factionFilter.value;
                const rarityValue = rarityFilter.value;
                const typeValue = typeFilter.value;
                const searchValue = searchInput.value.toLowerCase();
                
                const filteredCabins = cabinsData.filter(cabin => {
                    
                    const factionMatch = factionValue === 'all' || cabin.faction === factionValue;
                    
                    
                    const rarityMatch = rarityValue === 'all' || cabin.rarity === rarityValue;
                    
                   
                    const typeMatch = typeValue === 'all' || cabin.type === typeValue;
                    
                    
                    const searchMatch = searchValue === '' || 
                        cabin.name.toLowerCase().includes(searchValue) || 
                        cabin.description.toLowerCase().includes(searchValue);
                    
                    return factionMatch && rarityMatch && typeMatch && searchMatch;
                });
                
                displayFilteredCabins(filteredCabins);
            }
            
            
            function resetFilters() {
                factionFilter.value = 'all';
                rarityFilter.value = 'all';
                typeFilter.value = 'all';
                searchInput.value = '';
                loadCabins(); 
            }
            
            
            function displayFilteredCabins(filteredCabins) {
                const container = document.getElementById('modules-container');
                container.innerHTML = '';
                
                if (filteredCabins.length === 0) {
                    container.innerHTML = `
                        <div class="col-12 text-center py-5">
                            <h4>Ничего не найдено</h4>
                            <p>Попробуйте изменить параметры поиска</p>
                        </div>
                    `;
                    return;
                }
                
                filteredCabins.forEach(cabin => {
                    const rarityClass = getRarityClass(cabin.rarity);
                    
                    const cabinHTML = `
                        <div class="col-md-6 col-lg-4 mb-4">
                            <div class="card module-card ${rarityClass} h-100">
                                <div class="card-body">
                                    <div class="d-flex">
                                        <img src="${cabin.image}" alt="${cabin.name}" class="module-icon" data-name="${cabin.name}"
                                             onerror="this.onerror=null;this.src='https://via.placeholder.com/80/333333/FFFFFF?text=No+Image'">
                                        <div>
                                            <h5 class="card-title">${cabin.name}</h5>
                                            <div class="d-flex align-items-center mb-2">
                                                <img src="${cabin.factionIcon}" alt="${cabin.faction}" class="faction-icon" 
                                                     onerror="this.onerror=null;this.src='https://via.placeholder.com/30/333333/FFFFFF?text=F'">
                                                <span class="badge ${getRarityBadgeClass(cabin.rarity)}">${cabin.rarity}</span>
                                            </div>
                                            <p class="card-text">${cabin.description}</p>
                                            <ul class="list-group list-group-flush">
                                                ${cabin.stats.map(stat => `<li class="list-group-item">${stat}</li>`).join('')}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer bg-transparent">
                                    <button class="btn btn-sm btn-outline-orange">Подробности</button>
                                    <button class="btn btn-sm btn-orange">Добавить в сборку</button>
                                </div>
                            </div>
                        </div>
                    `;
                    
                    container.innerHTML += cabinHTML;
                });
            }
        });