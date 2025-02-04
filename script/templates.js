// Hauptfunktion zur Erstellung des Karteninhalts
function mainContent(i) {
  const pokemon = pokemons[i];
  const primaryType = getPrimaryType(pokemon);
  const color = getBackgroundColor(primaryType);
  const typesHtml = generateTypesHtml(pokemon);

  return createCardHtml(pokemon, i, color, typesHtml);
}

// Holt den primären Typ des Pokémon
function getPrimaryType(pokemon) {
  return pokemon.Typ[0];
}

// Ermittelt die Hintergrundfarbe basierend auf dem Typ
function getBackgroundColor(primaryType) {
  return typeColors[primaryType] || "#FFFFFF";
}

// Generiert die HTML-Darstellung der Typen
function generateTypesHtml(pokemon) {
  return pokemon.Typ.map(type => `<div class="text-center typ">${type}</div>`).join('');
}

// Erstellt die vollständige HTML-Karte
function createCardHtml(pokemon, i, color, typesHtml) {
  return `
    <div class="card" style="background-color: ${color};" id="card-${i}" onclick="renderFullScreen(${i})">
      <div class="name" id="name">${pokemon['Name']}</div>
      <div class="img-div">
        <img src="${pokemon['Image']}" alt="${pokemon['Alt']}">
      </div>
      <div class="text-center typ-contain" id="typ-container">${typesHtml}</div>
    </div>
  `;
}


// Hauptfunktion zur Erstellung des Vollbildinhalts
function fullScreenContent(i) {
  const pokemon = visiblePokemons[i];
  const primaryType = getPrimaryType(pokemon);
  const color = getBackgroundColor(primaryType);
  const typesHtml = generateTypesHtml(pokemon);
  const statsHtml = generateStatsHtml(pokemon);

  return createFullScreenHtml(pokemon, color, typesHtml, statsHtml);
}

// Holt den primären Typ des Pokémon
function getPrimaryType(pokemon) {
  return pokemon.Typ[0];
}

// Ermittelt die Hintergrundfarbe basierend auf dem Typ
function getBackgroundColor(primaryType) {
  return typeColors[primaryType] || "#FFFFFF";
}

// Generiert die HTML-Darstellung der Typen
function generateTypesHtml(pokemon) {
  return pokemon.Typ.map(type => `<div class="text-center typ">${type}</div>`).join('');
}

// Generiert die HTML-Darstellung der Statistiken
function generateStatsHtml(pokemon) {
  return `
    <table>
      <tr><td>National-Dex:</td><td>${pokemon['Number']}</td></tr>
      <tr><td>Hp:</td><td>${pokemon['Hp']}</td></tr>
      <tr><td>Attack:</td><td>${pokemon['Attack']}</td></tr>
      <tr><td>Defense:</td><td>${pokemon['Defense']}</td></tr>
    </table>
  `;
}

// Erstellt die vollständige HTML-Darstellung im Vollbildmodus
function createFullScreenHtml(pokemon, color, typesHtml, statsHtml) {
  return `
    <div class="close-fullscreen" onclick="closeFullScreen()">
      <img src="./img/close.png" alt="">
    </div>
    <div class="fullscreen-card" style="background-color: ${color};">
      <div class="img-container" style="background-color: ${color};">
        <img src="${pokemon['Image']}" alt="${pokemon['Alt']}">
      </div>
      <div class="full-card-name text-center">${pokemon['Name']}</div>
      <div class="data-container">
        <div class="type-container" id="typ-fullscreen">
          ${typesHtml}
        </div>
        ${statsHtml}
      </div>
      <div class="chevron-container">
        <div id="chevron-left">
          <img src="./img/Chevron-left.png" onclick="slideBackward()">
        </div>
        <div id="chevron-right">
          <img src="./img/chevron_right.png" onclick="slideForward()">
        </div>
      </div>
    </div>
  `;
}