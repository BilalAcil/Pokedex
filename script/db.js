let pokemons = [
  {
    Number: "#001",
    Name: "Bisasam",
    Typ: ["Pflanze", "Gift"],
    Hp: 70,
    Attack: "Rasierblatt",
    Defense: 20,
    Image: "https://www.pokewiki.de/images/thumb/d/d3/Hauptartwork_001.png/258px-Hauptartwork_001.png",
    Alt: "Bisasam"
  },
  {
    Number: "#002",
    Name: "Bisaknosp",
    Typ: ["Pflanze", "Gift"],
    Hp: 90,
    Attack: "Rankenhieb",
    Defense: 40,
    Image: "https://www.pokewiki.de/images/thumb/c/c7/Hauptartwork_002.png/258px-Hauptartwork_002.png",
    Alt: "Bisaknosp"
  },
  {
    Number: "#003",
    Name: "Bisaflor",
    Typ: ["Pflanze", "Gift"],
    Hp: 120,
    Attack: "Solarstrahl",
    Defense: 60,
    Image: "https://www.pokewiki.de/images/thumb/1/1a/Hauptartwork_003.png/310px-Hauptartwork_003.png",
    Alt: "Bisaflor"
  },
  {
    Number: "#004",
    Name: "Glumanda",
    Typ: ["Feuer"],
    Hp: 60,
    Attack: "Glut",
    Defense: 15,
    Image: "https://www.pokewiki.de/images/thumb/0/09/Hauptartwork_004.png/212px-Hauptartwork_004.png",
    Alt: "Glumanda"
  },
  {
    Number: "#005",
    Name: "Glutexo",
    Typ: ["Feuer"],
    Hp: 80,
    Attack: "Flammenwurf",
    Defense: 30,
    Image: "https://www.pokewiki.de/images/thumb/0/08/Hauptartwork_005.png/204px-Hauptartwork_005.png",
    Alt: "Glutexo"
  },
  {
    Number: "#006",
    Name: "Glurak",
    Typ: ["Feuer", "Flug"],
    Hp: 150,
    Attack: "Feuersturm",
    Defense: 50,
    Image: "https://www.pokewiki.de/images/thumb/d/de/Hauptartwork_006.png/306px-Hauptartwork_006.png",
    Alt: "Glurak"
  },
  {
    Number: "#007",
    Name: "Schiggy",
    Typ: ["Wasser"],
    Hp: 50,
    Attack: "Aquaknarre",
    Defense: 20,
    Image: "https://www.pokewiki.de/images/thumb/7/7f/Hauptartwork_007.png/232px-Hauptartwork_007.png",
    Alt: "Schiggy"
  },
  {
    Number: "#008",
    Name: "Schillok",
    Typ: ["Wasser"],
    Hp: 70,
    Attack: "Blubber",
    Defense: 40,
    Image: "https://www.pokewiki.de/images/thumb/8/80/Hauptartwork_008.png/236px-Hauptartwork_008.png",
    Alt: "Schillok"
  },
  {
    Number: "#009",
    Name: "Turtok",
    Typ: ["Wasser"],
    Hp: 100,
    Attack: "Hydropumpe",
    Defense: 80,
    Image: "https://www.pokewiki.de/images/thumb/2/22/Hauptartwork_009.png/221px-Hauptartwork_009.png",
    Alt: "Turtok"
  },
  {
    Number: "#010",
    Name: "Raupy",
    Typ: ["Käfer"],
    Hp: 40,
    Attack: "Fadenschuss",
    Defense: 10,
    Image: "https://www.pokewiki.de/images/thumb/a/a1/Hauptartwork_010.png/240px-Hauptartwork_010.png",
    Alt: "Raupy"
  },
  {
    Number: "#011",
    Name: "Safcon",
    Typ: ["Käfer"],
    Hp: 50,
    Attack: "Härtner",
    Defense: 25,
    Image: "https://www.pokewiki.de/images/thumb/e/ee/Hauptartwork_011.png/240px-Hauptartwork_011.png",
    Alt: "Safcon"
  },
  {
    Number: "#012",
    Name: "Smettbo",
    Typ: ["Käfer", "Flug"],
    Hp: 60,
    Attack: "Psywelle",
    Defense: 50,
    Image: "https://www.pokewiki.de/images/5/5c/Hauptartwork_012.png",
    Alt: "Smettbo"
  },
  {
    Number: "#013",
    Name: "Hornliu",
    Typ: ["Käfer", "Gift"],
    Hp: 40,
    Attack: "Giftstachel",
    Defense: 10,
    Image: "https://www.pokewiki.de/images/thumb/e/ee/Hauptartwork_013.png/188px-Hauptartwork_013.png",
    Alt: "Hornliu"
  },
  {
    Number: "#014",
    Name: "Kokuna",
    Typ: ["Käfer", "Gift"],
    Hp: 50,
    Attack: "Härtner",
    Defense: 25,
    Image: "https://www.pokewiki.de/images/thumb/e/ee/Hauptartwork_014.png/128px-Hauptartwork_014.png",
    Alt: "Kokuna"
  },
  {
    Number: "#015",
    Name: "Bibor",
    Typ: ["Käfer", "Gift"],
    Hp: 65,
    Attack: "Gifthieb",
    Defense: 40,
    Image: "https://www.pokewiki.de/images/thumb/0/08/Hauptartwork_015.png/198px-Hauptartwork_015.png",
    Alt: "Bibor"
  },
  {
    Number: "#016",
    Name: "Taubsi",
    Typ: ["Normal", "Flug"],
    Hp: 40,
    Attack: "Windstoß",
    Defense: 10,
    Image: "https://www.pokewiki.de/images/thumb/d/da/Hauptartwork_016.png/225px-Hauptartwork_016.png",
    Alt: "Taubsi"
  },
  {
    Number: "#017",
    Name: "Tauboga",
    Typ: ["Normal", "Flug"],
    Hp: 63,
    Attack: "Ruckzuckhieb",
    Defense: 30,
    Image: "https://www.pokewiki.de/images/thumb/7/78/Hauptartwork_017.png/207px-Hauptartwork_017.png",
    Alt: "Tauboga"
  },
  {
    Number: "#018",
    Name: "Tauboss",
    Typ: ["Normal", "Flug"],
    Hp: 83,
    Attack: "Aero-Ass",
    Defense: 55,
    Image: "https://www.pokewiki.de/images/thumb/1/18/Hauptartwork_018.png/229px-Hauptartwork_018.png",
    Alt: "Tauboss"
  },
  {
    Number: "#019",
    Name: "Rattfratz",
    Typ: ["Normal"],
    Hp: 30,
    Attack: "Biss",
    Defense: 15,
    Image: "https://www.pokewiki.de/images/thumb/7/7a/Hauptartwork_019.png/273px-Hauptartwork_019.png",
    Alt: "Rattfratz"
  },
  {
    Number: "#020",
    Name: "Rattikarl",
    Typ: ["Normal"],
    Hp: 55,
    Attack: "Hyperzahn",
    Defense: 30,
    Image: "https://www.pokewiki.de/images/thumb/f/f3/Hauptartwork_020.png/245px-Hauptartwork_020.png",
    Alt: "Rattikarl"
  },
  {
    Number: "#021",
    Name: "Habitak",
    Typ: ["Normal", "Flug"],
    Hp: 40,
    Attack: "Schnabel",
    Defense: 30,
    Image: "https://www.pokewiki.de/images/thumb/6/6c/Hauptartwork_021.png/234px-Hauptartwork_021.png",
    Alt: "Habitak"
  },
  {
    Number: "#022",
    Name: "Ibitak",
    Typ: ["Normal", "Flug"],
    Hp: 65,
    Attack: "Bohrschnabel",
    Defense: 55,
    Image: "https://www.pokewiki.de/images/thumb/7/7a/Hauptartwork_022.png/259px-Hauptartwork_022.png",
    Alt: "Ibitak"
  },
  {
    Number: "#023",
    Name: "Rettan",
    Typ: ["Gift"],
    Hp: 35,
    Attack: "Wickel",
    Defense: 30,
    Image: "https://www.pokewiki.de/images/thumb/5/5e/Hauptartwork_023.png/243px-Hauptartwork_023.png",
    Alt: "Rettan"
  },
  {
    Number: "#024",
    Name: "Arbok",
    Typ: ["Gift"],
    Hp: 60,
    Attack: "Giftstachel",
    Defense: 55,
    Image: "https://www.pokewiki.de/images/thumb/a/a0/Hauptartwork_024.png/214px-Hauptartwork_024.png",
    Alt: "Arbok"
  },
  {
    Number: "#025",
    Name: "Pikachu",
    Typ: ["Elektro"],
    Hp: 35,
    Attack: "Donnerschock",
    Defense: 40,
    Image: "https://www.pokewiki.de/images/thumb/9/9e/Hauptartwork_025.png/256px-Hauptartwork_025.png",
    Alt: "Pikachu"
  },
  {
    Number: "#026",
    Name: "Raichu",
    Typ: ["Elektro"],
    Hp: 60,
    Attack: "Donnerblitz",
    Defense: 50,
    Image: "https://www.pokewiki.de/images/thumb/d/da/Hauptartwork_026.png/271px-Hauptartwork_026.png",
    Alt: "Raichu"
  },
  {
    Number: "#027",
    Name: "Sandan",
    Typ: ["Boden"],
    Hp: 50,
    Attack: "Kratzer",
    Defense: 40,
    Image: "https://www.pokewiki.de/images/thumb/1/1b/Hauptartwork_027.png/219px-Hauptartwork_027.png",
    Alt: "Sandan"
  },
  {
    Number: "#028",
    Name: "Sandamer",
    Typ: ["Boden"],
    Hp: 75,
    Attack: "Schaufler",
    Defense: 60,
    Image: "https://www.pokewiki.de/images/thumb/1/17/Hauptartwork_028.png/252px-Hauptartwork_028.png",
    Alt: "Sandamer"
  },
  {
    Number: "#029",
    Name: "Nidoran♀",
    Typ: ["Gift"],
    Hp: 55,
    Attack: "Kratzer",
    Defense: 40,
    Image: "https://www.pokewiki.de/images/thumb/6/62/Hauptartwork_029.png/250px-Hauptartwork_029.png",
    Alt: "Nidoran Weiblich"
  },
  {
    Number: "#030",
    Name: "Nidorina",
    Typ: ["Gift"],
    Hp: 70,
    Attack: "Doppelkick",
    Defense: 50,
    Image: "https://www.pokewiki.de/images/thumb/7/76/Hauptartwork_030.png/212px-Hauptartwork_030.png",
    Alt: "Nidorina"
  },
  {
    Number: "#031",
    Name: "Nidoqueen",
    Typ: ["Gift", "Boden"],
    Hp: 90,
    Attack: "Bodyslam",
    Defense: 80,
    Image: "https://www.pokewiki.de/images/thumb/b/bc/Hauptartwork_031.png/232px-Hauptartwork_031.png",
    Alt: "Nidoqueen"
  },
  {
    Number: "#032",
    Name: "Nidoran♂",
    Typ: ["Gift"],
    Hp: 46,
    Attack: "Giftstachel",
    Defense: 40,
    Image: "https://www.pokewiki.de/images/thumb/7/7a/Hauptartwork_032.png/216px-Hauptartwork_032.png",
    Alt: "Nidoran Männlich"
  },
  {
    Number: "#033",
    Name: "Nidorino",
    Typ: ["Gift"],
    Hp: 61,
    Attack: "Hornattacke",
    Defense: 57,
    Image: "https://www.pokewiki.de/images/thumb/7/7c/Hauptartwork_033.png/215px-Hauptartwork_033.png",
    Alt: "Nidorino"
  },
  {
    Number: "#034",
    Name: "Nidoking",
    Typ: ["Gift", "Boden"],
    Hp: 81,
    Attack: "Erdbeben",
    Defense: 77,
    Image: "https://www.pokewiki.de/images/thumb/d/d4/Hauptartwork_034.png/313px-Hauptartwork_034.png",
    Alt: "Nidoking"
  },
  {
    Number: "#035",
    Name: "Piepi",
    Typ: ["Fee"],
    Hp: 70,
    Attack: "Metronom",
    Defense: 48,
    Image: "https://www.pokewiki.de/images/thumb/b/bb/Hauptartwork_035.png/240px-Hauptartwork_035.png",
    Alt: "Piepi"
  },
  {
    Number: "#036",
    Name: "Pixi",
    Typ: ["Fee"],
    Hp: 95,
    Attack: "Mondschein",
    Defense: 73,
    Image: "https://www.pokewiki.de/images/thumb/6/68/Hauptartwork_036.png/243px-Hauptartwork_036.png",
    Alt: "Pixi"
  },
  {
    Number: "#037",
    Name: "Vulpix",
    Typ: ["Feuer"],
    Hp: 38,
    Attack: "Feuerwirbel",
    Defense: 35,
    Image: "https://www.pokewiki.de/images/thumb/c/c6/Hauptartwork_037.png/271px-Hauptartwork_037.png",
    Alt: "Vulpix"
  },
  {
    Number: "#038",
    Name: "Vulnona",
    Typ: ["Feuer"],
    Hp: 73,
    Attack: "Flammenwurf",
    Defense: 75,
    Image: "https://www.pokewiki.de/images/thumb/2/20/Hauptartwork_038.png/249px-Hauptartwork_038.png",
    Alt: "Vulnona"
  },
  {
    Number: "#039",
    Name: "Pummeluff",
    Typ: ["Normal", "Fee"],
    Hp: 115,
    Attack: "Gesang",
    Defense: 20,
    Image: "https://www.pokewiki.de/images/thumb/e/ee/Hauptartwork_039.png/254px-Hauptartwork_039.png",
    Alt: "Pummeluff"
  },
  {
    Number: "#040",
    Name: "Knuddeluff",
    Typ: ["Normal", "Fee"],
    Hp: 140,
    Attack: "Bodycheck",
    Defense: 45,
    Image: "https://www.pokewiki.de/images/thumb/f/fa/Hauptartwork_040.png/197px-Hauptartwork_040.png",
    Alt: "Knuddeluff"
  },
  {
    Number: "#041",
    Name: "Zubat",
    Typ: ["Gift", "Flug"],
    Hp: 40,
    Attack: "Blutsauger",
    Defense: 35,
    Image: "https://www.pokewiki.de/images/thumb/1/1f/Hauptartwork_041.png/254px-Hauptartwork_041.png",
    Alt: "Zubat"
  },
  {
    Number: "#042",
    Name: "Golbat",
    Typ: ["Gift", "Flug"],
    Hp: 75,
    Attack: "Biss",
    Defense: 70,
    Image: "https://www.pokewiki.de/images/thumb/6/60/Hauptartwork_042.png/280px-Hauptartwork_042.png",
    Alt: "Golbat"
  },
  {
    Number: "#043",
    Name: "Myrapla",
    Typ: ["Pflanze", "Gift"],
    Hp: 45,
    Attack: "Absorber",
    Defense: 35,
    Image: "https://www.pokewiki.de/images/thumb/c/cb/Hauptartwork_043.png/216px-Hauptartwork_043.png",
    Alt: "Myrapla"
  },
  {
    Number: "#044",
    Name: "Duflor",
    Typ: ["Pflanze", "Gift"],
    Hp: 60,
    Attack: "Giftpuder",
    Defense: 50,
    Image: "https://www.pokewiki.de/images/thumb/e/e9/Hauptartwork_044.png/295px-Hauptartwork_044.png",
    Alt: "Duflor"
  },
  {
    Number: "#045",
    Name: "Giflor",
    Typ: ["Pflanze", "Gift"],
    Hp: 75,
    Attack: "Solarstrahl",
    Defense: 65,
    Image: "https://www.pokewiki.de/images/thumb/8/8d/Hauptartwork_045.png/265px-Hauptartwork_045.png",
    Alt: "Giflor"
  },
  {
    Number: "#046",
    Name: "Paras",
    Typ: ["Pflanze", "Käfer"],
    Hp: 35,
    Attack: "Krabbler",
    Defense: 55,
    Image: "https://www.pokewiki.de/images/thumb/d/d4/Hauptartwork_046.png/293px-Hauptartwork_046.png",
    Alt: "Paras"
  },
  {
    Number: "#047",
    Name: "Parasek",
    Typ: ["Pflanze", "Käfer"],
    Hp: 60,
    Attack: "Pilzspore",
    Defense: 80,
    Image: "https://www.pokewiki.de/images/thumb/3/34/Hauptartwork_047.png/255px-Hauptartwork_047.png",
    Alt: "Parasek"
  },
  {
    Number: "#048",
    Name: "Bluzuk",
    Typ: ["Käfer", "Gift"],
    Hp: 50,
    Attack: "Puder",
    Defense: 55,
    Image: "https://www.pokewiki.de/images/thumb/5/5f/Hauptartwork_048.png/204px-Hauptartwork_048.png",
    Alt: "Bluzuk"
  },
  {
    Number: "#049",
    Name: "Omot",
    Typ: ["Käfer", "Gift"],
    Hp: 70,
    Attack: "Psywelle",
    Defense: 60,
    Image: "https://www.pokewiki.de/images/thumb/b/b4/Hauptartwork_049.png/320px-Hauptartwork_049.png",
    Alt: "Omot"
  },
  {
    Number: "#050",
    Name: "Digda",
    Typ: ["Boden"],
    Hp: 10,
    Attack: "Schaufler",
    Defense: 25,
    Image: "https://www.pokewiki.de/images/thumb/8/88/Hauptartwork_050.png/260px-Hauptartwork_050.png",
    Alt: "Digda"
  },
  {
    Number: "#051",
    Name: "Digdri",
    Typ: ["Boden"],
    Hp: 35,
    Attack: "Erdkraft",
    Defense: 50,
    Image: "https://www.pokewiki.de/images/thumb/6/6e/Hauptartwork_051.png/249px-Hauptartwork_051.png",
    Alt: "Digdri"
  },
  {
    Number: "#052",
    Name: "Mauzi",
    Typ: ["Normal"],
    Hp: 40,
    Attack: "Kratzfurie",
    Defense: 35,
    Image: "https://www.pokewiki.de/images/thumb/c/cf/Hauptartwork_052.png/182px-Hauptartwork_052.png",
    Alt: "Mauzi"
  },
  {
    Number: "#053",
    Name: "Snobilikat",
    Typ: ["Normal"],
    Hp: 65,
    Attack: "Biss",
    Defense: 60,
    Image: "https://www.pokewiki.de/images/thumb/d/db/Hauptartwork_053.png/269px-Hauptartwork_053.png",
    Alt: "Snobilikat"
  },
  {
    Number: "#054",
    Name: "Enton",
    Typ: ["Wasser"],
    Hp: 50,
    Attack: "Aquaknarre",
    Defense: 40,
    Image: "https://www.pokewiki.de/images/thumb/3/3a/Hauptartwork_054.png/184px-Hauptartwork_054.png",
    Alt: "Enton"
  },
  {
    Number: "#055",
    Name: "Entoron",
    Typ: ["Wasser"],
    Hp: 80,
    Attack: "Hydropumpe",
    Defense: 65,
    Image: "https://www.pokewiki.de/images/thumb/2/29/Hauptartwork_055.png/244px-Hauptartwork_055.png",
    Alt: "Entoron"
  },
  {
    Number: "#056",
    Name: "Menki",
    Typ: ["Kampf"],
    Hp: 40,
    Attack: "Karateschlag",
    Defense: 35,
    Image: "https://www.pokewiki.de/images/thumb/7/77/Hauptartwork_056.png/320px-Hauptartwork_056.png",
    Alt: "Menki"
  },
  {
    Number: "#057",
    Name: "Rasaff",
    Typ: ["Kampf"],
    Hp: 65,
    Attack: "Nahkampf",
    Defense: 60,
    Image: "https://www.pokewiki.de/images/thumb/d/dc/Hauptartwork_057.png/231px-Hauptartwork_057.png",
    Alt: "Rasaff"
  },
  {
    Number: "#058",
    Name: "Fukano",
    Typ: ["Feuer"],
    Hp: 55,
    Attack: "Flammenwurf",
    Defense: 45,
    Image: "https://www.pokewiki.de/images/thumb/0/0b/Hauptartwork_058.png/167px-Hauptartwork_058.png",
    Alt: "Fukano"
  },
  {
    Number: "#059",
    Name: "Arkani",
    Typ: ["Feuer"],
    Hp: 90,
    Attack: "Flammensturm",
    Defense: 80,
    Image: "https://www.pokewiki.de/images/thumb/e/e2/Hauptartwork_059.png/256px-Hauptartwork_059.png",
    Alt: "Arkani"
  },
  {
    Number: "#060",
    Name: "Quapsel",
    Typ: ["Wasser"],
    Hp: 40,
    Attack: "Aquaknarre",
    Defense: 30,
    Image: "https://www.pokewiki.de/images/thumb/f/f7/Hauptartwork_060.png/306px-Hauptartwork_060.png",
    Alt: "Quapsel"
  },
  {
    Number: "#061",
    Name: "Quaputzi",
    Typ: ["Wasser"],
    Hp: 65,
    Attack: "Blubber",
    Defense: 50,
    Image: "https://www.pokewiki.de/images/thumb/c/c1/Hauptartwork_061.png/275px-Hauptartwork_061.png",
    Alt: "Quaputzi"
  },
  {
    Number: "#062",
    Name: "Quappo",
    Typ: ["Wasser", "Kampf"],
    Hp: 90,
    Attack: "Wasserdüse",
    Defense: 85,
    Image: "https://www.pokewiki.de/images/thumb/6/63/Hauptartwork_062.png/320px-Hauptartwork_062.png",
    Alt: "Quappo"
  },
  {
    Number: "#063",
    Name: "Abra",
    Typ: ["Psycho"],
    Hp: 25,
    Attack: "Teleport",
    Defense: 15,
    Image: "https://www.pokewiki.de/images/thumb/0/06/Hauptartwork_063.png/320px-Hauptartwork_063.png",
    Alt: "Abra"
  },
  {
    Number: "#064",
    Name: "Kadabra",
    Typ: ["Psycho"],
    Hp: 40,
    Attack: "Psywelle",
    Defense: 30,
    Image: "https://www.pokewiki.de/images/thumb/b/b0/Hauptartwork_064.png/204px-Hauptartwork_064.png",
    Alt: "Kadabra"
  },
  {
    Number: "#065",
    Name: "Simsala",
    Typ: ["Psycho"],
    Hp: 55,
    Attack: "Psychokinese",
    Defense: 45,
    Image: "https://www.pokewiki.de/images/f/fd/Hauptartwork_065.png?20190516074701",
    Alt: "Simsala"
  },
  {
    Number: "#066",
    Name: "Machollo",
    Typ: ["Kampf"],
    Hp: 50,
    Attack: "Karateschlag",
    Defense: 40,
    Image: "https://www.pokewiki.de/images/thumb/0/00/Hauptartwork_066.png/199px-Hauptartwork_066.png",
    Alt: "Machollo"
  },
  {
    Number: "#067",
    Name: "Maschock",
    Typ: ["Kampf"],
    Hp: 80,
    Attack: "Armstoß",
    Defense: 60,
    Image: "https://www.pokewiki.de/images/thumb/c/cf/Hauptartwork_067.png/200px-Hauptartwork_067.png",
    Alt: "Maschock"
  },
  {
    Number: "#068",
    Name: "Machomei",
    Typ: ["Kampf"],
    Hp: 90,
    Attack: "Kreuzhieb",
    Defense: 80,
    Image: "https://www.pokewiki.de/images/thumb/d/d0/Hauptartwork_068.png/210px-Hauptartwork_068.png",
    Alt: "Machomei"
  },
  {
    Number: "#069",
    Name: "Knofensa",
    Typ: ["Pflanze", "Gift"],
    Hp: 35,
    Attack: "Rankenhieb",
    Defense: 30,
    Image: "https://www.pokewiki.de/images/thumb/d/d8/Hauptartwork_069.png/205px-Hauptartwork_069.png",
    Alt: "Knofensa"
  },
  {
    Number: "#070",
    Name: "Ultrigaria",
    Typ: ["Pflanze", "Gift"],
    Hp: 60,
    Attack: "Schlafpuder",
    Defense: 50,
    Image: "https://www.pokewiki.de/images/thumb/2/21/Hauptartwork_070.png/313px-Hauptartwork_070.png",
    Alt: "Ultrigaria"
  },
  {
    Number: "#071",
    Name: "Sarzenia",
    Typ: ["Pflanze", "Gift"],
    Hp: 80,
    Attack: "Säure",
    Defense: 65,
    Image: "https://www.pokewiki.de/images/thumb/1/1a/Hauptartwork_071.png/284px-Hauptartwork_071.png",
    Alt: "Sarzenia"
  },
  {
    Number: "#072",
    Name: "Tentacha",
    Typ: ["Wasser", "Gift"],
    Hp: 40,
    Attack: "Blubber",
    Defense: 35,
    Image: "https://www.pokewiki.de/images/thumb/6/62/Hauptartwork_072.png/295px-Hauptartwork_072.png",
    Alt: "Tentacha"
  },
  {
    Number: "#073",
    Name: "Tentoxa",
    Typ: ["Wasser", "Gift"],
    Hp: 80,
    Attack: "Hydropumpe",
    Defense: 70,
    Image: "https://www.pokewiki.de/images/thumb/a/a3/Hauptartwork_073.png/312px-Hauptartwork_073.png",
    Alt: "Tentoxa"
  },
  {
    Number: "#074",
    Name: "Kleinstein",
    Typ: ["Gestein", "Boden"],
    Hp: 40,
    Attack: "Steinwurf",
    Defense: 55,
    Image: "https://www.pokewiki.de/images/thumb/7/71/Hauptartwork_074.png/320px-Hauptartwork_074.png",
    Alt: "Kleinstein"
  },
  {
    Number: "#075",
    Name: "Georok",
    Typ: ["Gestein", "Boden"],
    Hp: 55,
    Attack: "Schaufler",
    Defense: 70,
    Image: "https://www.pokewiki.de/images/thumb/c/cd/Hauptartwork_075.png/320px-Hauptartwork_075.png",
    Alt: "Georok"
  },
  {
    Number: "#076",
    Name: "Geowaz",
    Typ: ["Gestein", "Boden"],
    Hp: 80,
    Attack: "Erdbeben",
    Defense: 95,
    Image: "https://www.pokewiki.de/images/thumb/8/8b/Hauptartwork_076.png/257px-Hauptartwork_076.png",
    Alt: "Geowaz"
  },
  {
    Number: "#077",
    Name: "Ponita",
    Typ: ["Feuer"],
    Hp: 50,
    Attack: "Flammenwurf",
    Defense: 40,
    Image: "https://www.pokewiki.de/images/thumb/0/05/Hauptartwork_077.png/186px-Hauptartwork_077.png",
    Alt: "Ponita"
  },
  {
    Number: "#078",
    Name: "Gallopa",
    Typ: ["Feuer"],
    Hp: 85,
    Attack: "Nitroladung",
    Defense: 70,
    Image: "https://www.pokewiki.de/images/thumb/d/d7/Hauptartwork_078.png/206px-Hauptartwork_078.png",
    Alt: "Gallopa"
  },
  {
    Number: "#079",
    Name: "Flegmon",
    Typ: ["Wasser", "Psycho"],
    Hp: 90,
    Attack: "Aquaknarre",
    Defense: 65,
    Image: "https://www.pokewiki.de/images/thumb/8/81/Hauptartwork_079.png/299px-Hauptartwork_079.png",
    Alt: "Flegmon"
  },
  {
    Number: "#080",
    Name: "Lahmus",
    Typ: ["Wasser", "Psycho"],
    Hp: 95,
    Attack: "Psychokinese",
    Defense: 75,
    Image: "https://www.pokewiki.de/images/thumb/b/b2/Hauptartwork_080.png/217px-Hauptartwork_080.png",
    Alt: "Lahmus"
  },
  {
    Number: "#081",
    Name: "Magnetilo",
    Typ: ["Elektro", "Stahl"],
    Hp: 25,
    Attack: "Donnerschock",
    Defense: 70,
    Image: "https://www.pokewiki.de/images/thumb/d/d9/Hauptartwork_081.png/320px-Hauptartwork_081.png",
    Alt: "Magnetilo"
  },
  {
    Number: "#082",
    Name: "Magneton",
    Typ: ["Elektro", "Stahl"],
    Hp: 50,
    Attack: "Donnerblitz",
    Defense: 95,
    Image: "https://www.pokewiki.de/images/thumb/1/18/Hauptartwork_082.png/263px-Hauptartwork_082.png",
    Alt: "Magneton"
  },
  {
    Number: "#083",
    Name: "Porenta",
    Typ: ["Normal", "Flug"],
    Hp: 52,
    Attack: "Schlag",
    Defense: 55,
    Image: "https://www.pokewiki.de/images/thumb/0/0e/Hauptartwork_083.png/201px-Hauptartwork_083.png",
    Alt: "Porenta"
  },
  {
    Number: "#084",
    Name: "Dodu",
    Typ: ["Normal", "Flug"],
    Hp: 35,
    Attack: "Ruckzuckhieb",
    Defense: 45,
    Image: "https://www.pokewiki.de/images/thumb/1/16/Hauptartwork_084.png/145px-Hauptartwork_084.png",
    Alt: "Dodu"
  },
  {
    Number: "#085",
    Name: "Dodri",
    Typ: ["Normal", "Flug"],
    Hp: 60,
    Attack: "Bohrschnabel",
    Defense: 70,
    Image: "https://www.pokewiki.de/images/thumb/0/0e/Hauptartwork_085.png/196px-Hauptartwork_085.png",
    Alt: "Dodri"
  },
  {
    Number: "#086",
    Name: "Jurob",
    Typ: ["Wasser"],
    Hp: 65,
    Attack: "Eisstrahl",
    Defense: 55,
    Image: "https://www.pokewiki.de/images/thumb/f/ff/Hauptartwork_086.png/263px-Hauptartwork_086.png",
    Alt: "Jurob"
  },
  {
    Number: "#087",
    Name: "Jugong",
    Typ: ["Wasser", "Eis"],
    Hp: 90,
    Attack: "Aurorastrahl",
    Defense: 80,
    Image: "https://www.pokewiki.de/images/thumb/8/86/Hauptartwork_087.png/242px-Hauptartwork_087.png",
    Alt: "Jugong"
  },
  {
    Number: "#088",
    Name: "Sleima",
    Typ: ["Gift"],
    Hp: 50,
    Attack: "Schlammbad",
    Defense: 40,
    Image: "https://www.pokewiki.de/images/thumb/f/fc/Hauptartwork_088.png/320px-Hauptartwork_088.png",
    Alt: "Sleima"
  },
  {
    Number: "#089",
    Name: "Sleimok",
    Typ: ["Gift"],
    Hp: 105,
    Attack: "Matschbombe",
    Defense: 75,
    Image: "https://www.pokewiki.de/images/thumb/0/0f/Hauptartwork_089.png/320px-Hauptartwork_089.png",
    Alt: "Sleimok"
  },
  {
    Number: "#090",
    Name: "Muschas",
    Typ: ["Wasser"],
    Hp: 30,
    Attack: "Aquaknarre",
    Defense: 65,
    Image: "https://www.pokewiki.de/images/thumb/f/fa/Hauptartwork_090.png/246px-Hauptartwork_090.png",
    Alt: "Muschas"
  },
  {
    Number: "#091",
    Name: "Austos",
    Typ: ["Wasser", "Eis"],
    Hp: 50,
    Attack: "Eisstrahl",
    Defense: 180,
    Image: "https://www.pokewiki.de/images/thumb/9/99/Hauptartwork_091.png/252px-Hauptartwork_091.png",
    Alt: "Austos"
  },
  {
    Number: "#092",
    Name: "Nebulak",
    Typ: ["Geist", "Gift"],
    Hp: 30,
    Attack: "Spukball",
    Defense: 30,
    Image: "https://www.pokewiki.de/images/thumb/e/ee/Hauptartwork_092.png/241px-Hauptartwork_092.png",
    Alt: "Nebulak"
  },
  {
    Number: "#093",
    Name: "Alpollo",
    Typ: ["Geist", "Gift"],
    Hp: 45,
    Attack: "Finte",
    Defense: 45,
    Image: "https://www.pokewiki.de/images/thumb/a/ad/Hauptartwork_093.png/275px-Hauptartwork_093.png",
    Alt: "Alpollo"
  },
  {
    Number: "#094",
    Name: "Gengar",
    Typ: ["Geist", "Gift"],
    Hp: 60,
    Attack: "Traumfresser",
    Defense: 60,
    Image: "https://www.pokewiki.de/images/thumb/4/46/Hauptartwork_094.png/234px-Hauptartwork_094.png",
    Alt: "Gengar"
  },
  {
    Number: "#095",
    Name: "Onix",
    Typ: ["Gestein", "Boden"],
    Hp: 35,
    Attack: "Steinwurf",
    Defense: 160,
    Image: "https://www.pokewiki.de/images/thumb/9/98/Hauptartwork_095.png/228px-Hauptartwork_095.png",
    Alt: "Onix"
  },
  {
    Number: "#096",
    Name: "Traumato",
    Typ: ["Psycho"],
    Hp: 60,
    Attack: "Hypnose",
    Defense: 30,
    Image: "https://www.pokewiki.de/images/thumb/a/ab/Hauptartwork_096.png/179px-Hauptartwork_096.png",
    Alt: "Traumato"
  },
  {
    Number: "#097",
    Name: "Hypno",
    Typ: ["Psycho"],
    Hp: 85,
    Attack: "Psychokinese",
    Defense: 70,
    Image: "https://www.pokewiki.de/images/thumb/f/fc/Hauptartwork_097.png/224px-Hauptartwork_097.png",
    Alt: "Hypno"
  },
  {
    Number: "#098",
    Name: "Krabby",
    Typ: ["Wasser"],
    Hp: 30,
    Attack: "Blubbstrahl",
    Defense: 50,
    Image: "https://www.pokewiki.de/images/thumb/5/50/Hauptartwork_098.png/320px-Hauptartwork_098.png",
    Alt: "Krabby"
  },
  {
    Number: "#099",
    Name: "Kingler",
    Typ: ["Wasser"],
    Hp: 55,
    Attack: "Krabbhammer",
    Defense: 115,
    Image: "https://www.pokewiki.de/images/thumb/6/62/Hauptartwork_099.png/320px-Hauptartwork_099.png",
    Alt: "Kingler"
  },
  {
    Number: "#100",
    Name: "Voltobal",
    Typ: ["Elektro"],
    Hp: 40,
    Attack: "Ladungsstoß",
    Defense: 50,
    Image: "https://www.pokewiki.de/images/thumb/0/01/Hauptartwork_100.png/247px-Hauptartwork_100.png",
    Alt: "Voltobal"
  }
];


