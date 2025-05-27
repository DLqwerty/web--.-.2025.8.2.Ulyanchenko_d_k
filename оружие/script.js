
        const cabinsData = [
            
            {
                id: 1,
                name: "Аккорд",
                image: "https://static.wikia.nocookie.net/crossout/images/4/43/Партизан.png/revision/latest/scale-to-width-down/30?cb=20191227091945&path-prefix=ru",
                faction: "Скитальцы",
                factionIcon: "https://crossoutdb.com/img/factions/scavengers.png",
                rarity: "Обычный",
                description: "Самый распространенный пулемёт в наших пустошах",
                stats: ["Энергия: 4", "Масса: 35кг", "Урон: 21"],
                type: "Легкий"
            },
            {
                id: 2,
                name: "Синтез",
                image: "https://static.wikia.nocookie.net/crossout/images/9/9a/Синтез.png/revision/latest/scale-to-width-down/50?cb=20170531174612&path-prefix=ru",
                faction: "Огненная печать",
                fractionIcon: "https://crossoutdb.com/img/factions/firestarters.png",
                rarity: "Эпическое",
                description: "Лазерное оружие, наносящее урон с течением времени.",
                stats: ["Урон в секунду: 75", "Дальность: 150 м", "Вес: 450 кг", "Энергопотребление: 4"],
                type: "Лазерное оружие"
              },
              {
                id: 3,
                name: "М-37 Пьерсер",
                image: "https://static.wikia.nocookie.net/crossout/images/3/3f/М-37_Пьерсер.png/revision/latest/scale-to-width-down/50?cb=20170531174602&path-prefix=ru",
                faction: "Инженеры",
                fractionIcon: "https://crossoutdb.com/img/factions/engineers.png",
                rarity: "Обычное",
                description: "Автоматическая пушка с высокой скорострельностью.",
                stats: ["Урон за выстрел: 12", "Дальность: 100 м", "Вес: 180 кг", "Энергопотребление: 2"],
                type: "Автоматическая пушка"
              },
              {
                id: 4,
                name: "Циклон",
                image: "https://static.wikia.nocookie.net/crossout/images/1/1e/Циклон.png/revision/latest/scale-to-width-down/50?cb=20170531174622&path-prefix=ru",
                faction: "Огненная печать",
                fractionIcon: "https://crossoutdb.com/img/factions/firestarters.png",
                rarity: "Легендарное",
                description: "Миниган с экстремальной скорострельностью.",
                stats: ["Урон за выстрел: 8", "Дальность: 120 м", "Вес: 600 кг", "Энергопотребление: 5"],
                type: "Миниган"
              },
              {
                id: 5,
                name: "Исповедь",
                image: "https://static.wikia.nocookie.net/crossout/images/4/4a/Исповедь.png/revision/latest/scale-to-width-down/50?cb=20170531174632&path-prefix=ru",
                faction: "Огненная печать",
                fractionIcon: "https://crossoutdb.com/img/factions/firestarters.png",
                rarity: "Эпическое",
                description: "Плазменная пушка с накопительным выстрелом.",
                stats: ["Урон: 250", "Дальность: 180 м", "Вес: 480 кг", "Энергопотребление: 4"],
                type: "Плазменное оружие"
              }
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