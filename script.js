// === DATA ===

const WALK_UP_SONGS = [
  { player: "Adam W", label: "Anderson .Paak - Bubblin", file: "bubblin.mp3" },
  {
    player: "Conner W",
    label: "D-Generation X - Are You Ready?",
    file: "are-you-ready.mp3",
  },
  {
    player: "Carver H",
    label: "Gente De Zona - Hablame de Miami",
    file: "hablame-de-miami.mp3",
  },
  {
    player: "Ben M",
    label: "Young Stoner Life & Young Thug - Superstar",
    file: "superstar.mp3",
  },
  {
    player: "Max E",
    label: "Jon Pardi - Dirt on my Boots",
    file: "dirt-on-my-boots.mp3",
  },
  {
    player: "Taydan S",
    label: "Ella Langley - Choosin' Texas",
    file: "choosin-texas.mp3",
  },
  {
    player: "Sam E",
    label: "Damian Marley - Welcome to Jamrock",
    file: "welcome-to-jamrock.mp3",
  },
  {
    player: "Adam N",
    label: "Skrillex, Sleepnet, and Joker - TEARS",
    file: "tears.mp3",
  },
  {
    player: "Malik W",
    label: "Fat Joe and Remy Ma - All the Way Up",
    file: "all-the-way-up.mp3",
  },
  {
    player: "Matt B",
    label: "Phil Collins - In the Air Tonight",
    file: "in-the-air-tonight.mp3",
  },
  {
    player: "Oliver L",
    label: "Boston - Don't Look Back",
    file: "dont-look-back.mp3",
  },
  {
    player: "Pierce C",
    label: "Styx - Renegade",
    file: "renegade.mp3",
  },
  {
    player: "Andrew R",
    label: "Beastie Boys - Sabotage",
    file: "sabotage.mp3",
  },
  {
    player: "Isaac B",
    label: "Howard Shore - Lighting of the Beacons",
    file: "lighting-of-the-beacons.mp3",
  },
  {
    player: "Henry O",
    label: "WWE - Fatu Samoan Destroyer",
    file: "fatu-samoan-destroyer.mp3",
  },
  { player: "Peyton R", label: "Shaggy - Boombastic", file: "boombastic.mp3" },
  {
    player: "Ray R",
    label: "WWE - Roman Reigns Theme",
    file: "roman-reigns.mp3",
  },
  {
    player: "Josh C",
    label: "Drake - Ran to Atlanta",
    file: "ran-to-atlanta.mp3",
  },
];

const SOUND_EFFECTS = [{ name: "name", file: "file.mp3" }];

const UNCLAIMED_SONGS = [
  { name: "Justin Beiber - Beauty And A Beat", file: "beauty-and-a-beat.mp3" },
  { name: "Counterparts - Bound to the Burn", file: "bound-to-the-burn.mp3" },
  { name: "Gucci Mane - Both", file: "both.mp3" },
  { name: "The Weeknd - Blinding Lights", file: "blinding-lights.mp3" },
  { name: "Katy Perry - California Gurls", file: "california-gurls.mp3" },
  { name: "MC Hammer - Cant Touch This", file: "cant-touch-this.mp3" },
  { name: "LazyTown - Cooking By The Book", file: "cooking-by-the-book.mp3" },
  { name: "Popp Hunna - Corvette Corvette", file: "corvette-corvette.mp3" },
  { name: "N64 - Dk Rap", file: "dk-rap.mp3" },
  { name: "Chris Brown - Five More Hours", file: "five-more-hours.mp3" },
  { name: "Flo Rida - GDFR", file: "gdfr.mp3" },
  { name: "Gergie Among Us Sus", file: "gergie-among-us-sus.mp3" },
  { name: "Olivia Rodrigo - Good 4 U", file: "good-4-u.mp3" },
  { name: "Harlem Shake", file: "harlem-shake.mp3" },
  { name: "Oukast - Hey Ya", file: "hey-ya.mp3" },
  { name: "KYLE - I Spy", file: "i-spy.mp3" },
  { name: "Dua Lipa - Levitating", file: "levitating.mp3" },
  { name: "Flo Rida - Low", file: "low.mp3" },
  { name: "T-Wayne - Nasty Freestyle", file: "nasty-freestyle.mp3" },
  { name: "Wocka Flocka Flame - No Hands", file: "no-hands.mp3" },
  { name: "Lil Nas X - Old Town Road", file: "old-town-road.mp3" },
  { name: "Travis Scott - Out West", file: "out-west.mp3" },
  { name: "Soulja Boy - Pretty Boy Swag", file: "pretty-boy-swag.mp3" },
  { name: "Jess Glynne - Rather Be", file: "rather-be.mp3" },
  { name: "Katy Perry - Roar", file: "roar.mp3" },
  { name: "The Chainsmokers - Selfie", file: "selfie.mp3" },
  { name: "Justin Timberlake - Sexyback", file: "sexyback.mp3" },
  { name: "Becky G - Shower", file: "shower.mp3" },
  { name: "Pitbull - Time Of Our Lives 1", file: "time-of-our-lives-1.mp3" },
  { name: "Pitbull - Time Of Our Lives 2", file: "time-of-our-lives-2.mp3" },
  { name: "Migos - Walk It Talk It", file: "walk-it-talk-it.mp3" },
  { name: "Jason Derulo - Whatcha Say", file: "whatcha-say.mp3" },
  { name: "Lil Jon - Yeah", file: "yeah.mp3" },
  { name: "WWE - Jacob Fatu Theme", file: "main-event-ish.mp3" },
];

const ARCHIVE_SONGS = [
  {
    player: "Teagan Y",
    label: "Future - Life is Good",
    file: "life-is-good.mp3",
  },
];

// === PLAYER STATE ===

const audio = document.getElementById("audio-player");
const playerTitle = document.getElementById("player-title");
const lpLabel = document.getElementById("last-played-label");
const btnPlay = document.getElementById("btn-play");
const btnStop = document.getElementById("btn-stop");
const progressEl = document.getElementById("player-progress");

let currentFile = null;
let currentTitle = null;

// === LOCALSTORAGE ===

function getOrder() {
  try {
    return JSON.parse(localStorage.getItem("walkupOrder"));
  } catch {
    return null;
  }
}

function saveOrder(files) {
  localStorage.setItem("walkupOrder", JSON.stringify(files));
}

function getLastPlayed() {
  try {
    return JSON.parse(localStorage.getItem("lastPlayed"));
  } catch {
    return null;
  }
}

function saveLastPlayed(file, title) {
  localStorage.setItem("lastPlayed", JSON.stringify({ file, title }));
}

// === HELPERS ===

function findItem(file) {
  for (const li of document.querySelectorAll(".song-list li")) {
    if (li.dataset.file === file) return li;
  }
  return null;
}

function updateLastPlayedUI() {
  const lp = getLastPlayed();
  document
    .querySelectorAll(".song-list li.last-played")
    .forEach((li) => li.classList.remove("last-played"));

  if (lp) {
    lpLabel.textContent = "↩ " + lp.title;
    const item = findItem(lp.file);
    if (item) item.classList.add("last-played");
  } else {
    lpLabel.textContent = "";
  }
}

// === PLAYER CONTROLS ===

function selectSong(file, title, tracksLastPlayed) {
  currentFile = file;
  currentTitle = title;

  audio.src = "./sfx/" + file.split("/").map(encodeURIComponent).join("/");
  playerTitle.textContent = title;

  document
    .querySelectorAll(".song-list li.selected")
    .forEach((li) => li.classList.remove("selected"));
  const item = findItem(file);
  if (item) item.classList.add("selected");

  audio.play().catch(() => {});

  if (tracksLastPlayed) {
    saveLastPlayed(file, title);
    updateLastPlayedUI();
  }
}

audio.addEventListener("play", () => {
  btnPlay.textContent = "⏸ Pause";
});
audio.addEventListener("pause", () => {
  btnPlay.textContent = "▶ Play";
});
audio.addEventListener("ended", () => {
  btnPlay.textContent = "▶ Play";
  progressEl.style.width = "0%";
});
audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    progressEl.style.width = (audio.currentTime / audio.duration) * 100 + "%";
  }
});

btnPlay.addEventListener("click", () => {
  if (!currentFile) return;
  if (audio.paused) audio.play().catch(() => {});
  else audio.pause();
});

btnStop.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
});

// === RENDERING ===

function makeItem(file, text, tracksLastPlayed, draggable) {
  const li = document.createElement("li");
  li.dataset.file = file;

  if (draggable) {
    const handle = document.createElement("span");
    handle.className = "drag-handle";
    handle.textContent = "⠿";
    handle.setAttribute("aria-hidden", "true");
    li.appendChild(handle);
  }

  const a = document.createElement("a");
  a.href = "#";
  a.className = "selectme";
  a.textContent = text;
  a.addEventListener("click", (e) => {
    e.preventDefault();
    selectSong(file, text, tracksLastPlayed);
  });
  li.appendChild(a);

  return li;
}

function renderWalkUpList() {
  const list = document.getElementById("walkup-list");
  const savedOrder = getOrder();

  let songs = [...WALK_UP_SONGS];
  if (savedOrder) {
    const idx = Object.fromEntries(savedOrder.map((f, i) => [f, i]));
    songs.sort((a, b) => (idx[a.file] ?? Infinity) - (idx[b.file] ?? Infinity));
  }

  for (const song of songs) {
    list.appendChild(
      makeItem(song.file, `⚾ ${song.player}: ${song.label}`, true, true),
    );
  }
}

// === TABS ===

function initTabs() {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".tab-btn")
        .forEach((b) => b.classList.remove("active"));
      document
        .querySelectorAll(".tab-content")
        .forEach((c) => c.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById("tab-" + btn.dataset.tab).classList.add("active");
    });
  });
}

// === DRAG-DROP ===

function initDragDrop() {
  if (typeof Sortable === "undefined") return;
  const list = document.getElementById("walkup-list");
  Sortable.create(list, {
    animation: 150,
    handle: ".drag-handle",
    delay: 150,
    delayOnTouchOnly: true,
    onEnd: () => {
      const order = [...list.querySelectorAll("li")].map(
        (li) => li.dataset.file,
      );
      saveOrder(order);
    },
  });
}

// === INIT ===

document.addEventListener("DOMContentLoaded", () => {
  renderWalkUpList();

  const unclaimedList = document.getElementById("unclaimed-list");
  for (const song of UNCLAIMED_SONGS) {
    unclaimedList.appendChild(
      makeItem(`unclaimed/${song.file}`, song.name, true, false),
    );
  }

  const archiveList = document.getElementById("archive-list");
  for (const song of ARCHIVE_SONGS) {
    archiveList.appendChild(
      makeItem(song.file, `${song.player}: ${song.label}`, false, false),
    );
  }

  const sfxList = document.getElementById("sfx-list");
  for (const sfx of SOUND_EFFECTS) {
    sfxList.appendChild(makeItem(sfx.file, sfx.name, false, false));
  }

  initTabs();
  initDragDrop();
  updateLastPlayedUI();
});
