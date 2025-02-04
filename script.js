let currentIndex = 0;
let visiblePokemons = [];
let originalPokemons = [];


function load() {
  location.reload();
}


function render() {
  renderMainContent();
}


function renderMainContent() {
  setTimeout(() => {
    let content = document.getElementById('content');
    for (let i = currentIndex; i < currentIndex + 30 && i < pokemons.length; i++) {
      visiblePokemons.push(pokemons[i]);
      content.innerHTML += mainContent(i);
    }
    toggleLoadingScreen();
    toggleLogoVisibility(false);
  }, 2500);
}


function renderFullScreen(i) {
  currentIndex = i;
  let content = document.getElementById('full-screen');
  content.innerHTML = '';
  content.innerHTML += fullScreenContent(i);
  toggleOverflowHidden();
  fullScreenVisible();
}


function fullScreenVisible() {
  const element = document.getElementById('full-screen');
  element.classList.replace('d-none', 'fullscreen-overlay');
  updateImage();
}


function closeFullScreen() {
  const element = document.getElementById('full-screen');
  element.classList.replace('fullscreen-overlay', 'd-none');
  toggleOverflowHidden();
  updateCurrentIndex();
}


function updateCurrentIndex() {
  if (visiblePokemons.length === 30) {
    currentIndex = 0;
  } else if (visiblePokemons.length > 30) {
    currentIndex = visiblePokemons.length - 30;
  }
}


function slideForward() {
  let nextIndex = currentIndex + 1;

  while (nextIndex < visiblePokemons.length && visiblePokemons[nextIndex] === null) {
    nextIndex++;
  }

  if (nextIndex >= visiblePokemons.length) {
    nextIndex = 0;
    while (nextIndex < visiblePokemons.length && visiblePokemons[nextIndex] === null) {
      nextIndex++;
    }
  }
  updateDisplay(nextIndex);
}


function slideBackward() {
  let prevIndex = currentIndex - 1;

  while (prevIndex >= 0 && visiblePokemons[prevIndex] === null) {
    prevIndex--;
  }

  if (prevIndex < 0) {
    prevIndex = visiblePokemons.length - 1;
    while (prevIndex >= 0 && visiblePokemons[prevIndex] === null) {
      prevIndex--;
    }
  }
  updateDisplay(prevIndex);
}


function updateDisplay(index) {
  if (index >= 0 && index < visiblePokemons.length && visiblePokemons[index] !== null) {
    currentIndex = index;
    let content = document.getElementById('full-screen');
    content.innerHTML = '';
    content.innerHTML += fullScreenContent(currentIndex);
  } else {
    console.log("Ungültiger Index oder null-Eintrag gefunden.");
  }
}


function updateImage() {
  let currentImage = visiblePokemons[currentIndex];
  document.querySelector('.fullscreen-card .img-container img').src = currentImage['Image'];
}


function searchPokemon() {
  const input = getInputValue();
  if (!isValidInput(input)) return;
  const content = document.getElementById('content');
  content.innerHTML = '';
  visiblePokemons = [];
  originalPokemons = [];
  const foundPokemon = filterPokemons(input, content);
  updateUI(foundPokemon);
}


function getInputValue() {
  return document.getElementById("myInput").value.trim().toLowerCase();
}


function isValidInput(input) {
  if (input.length < 3) {
    alert("Bitte gib mindestens 3 Buchstaben ein!");
    return false;
  }
  return true;
}


function filterPokemons(input, content) {
  let foundPokemon = false;
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].Name.toLowerCase().startsWith(input)) {
      content.innerHTML += mainContent(i);
      visiblePokemons.push(pokemons[i]);
      foundPokemon = true;
    } else {
      visiblePokemons.push(null);
      originalPokemons.push(pokemons[i]);
    }
  }
  return foundPokemon;
}


function updateUI(foundPokemon) {
  if (!foundPokemon) {
    visableNoPokemon();
  } else {
    invisableNoPokemon();
  }
  visableBackButton();
}


function visableBackButton() {
  let footer = document.getElementById('footer');
  footer.classList.remove("d-none");
  loadMoreButton();
}


function invisableBackButton() {
  let footer = document.getElementById('footer');
  footer.classList.add("d-none");
}


function reloadPage() {
  let input = document.getElementById('myInput');
  input.value = '';
  load();
  invisableBackButton();
  invisableNoPokemon();
}


function visableNoPokemon() {
  let noFind = document.getElementById('no-pokemon');
  noFind.classList.remove("d-none");
  visablePadding();
}


function invisableNoPokemon() {
  let noFind = document.getElementById('no-pokemon');
  noFind.classList.add("d-none");
  invisablePadding();
}


function visablePadding() {
  let padding = document.getElementById('padding');
  padding.classList.remove("d-none");
}


function invisablePadding() {
  let padding = document.getElementById('padding');
  padding.classList.add("d-none");
}


function loadMore() {
  toggleLoadingScreen();
  const loadingScreen = document.getElementById('loadingScreen');
  currentIndex += 30;
  renderMainContent();
  nextButtonVisable();
}


function nextButtonVisable() {
  if (currentIndex >= pokemons.length - 30) {
    loadMoreButton();
  }
}


function loadMoreButton() {
  let loadMoreButton = document.getElementById('load-more');
  loadMoreButton.classList.add("d-none");
}


function toggleOverflowHidden() {
  const body = document.getElementById('body');
  body.classList.toggle('o-hidden');
}


function toggleLoadingScreen() {
  const loadingScreen = document.getElementById('loadingScreen');
  loadingScreen.style.display = loadingScreen.style.display === 'none' ? 'flex' : 'none';
}


function toggleLogoVisibility(isVisible) {
  const loadingScreen = document.getElementById('logo-container');
  loadingScreen.style.display = isVisible ? 'flex' : 'none';
}
