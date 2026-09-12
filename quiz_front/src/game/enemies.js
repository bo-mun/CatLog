// 적 스프라이트는 재배포 금지 라이선스 에셋이라 저장소에 커밋하지 않는다.
// 그래서 이 디렉터리는 비어 있는 것이 기본 상태다 — 자세히는
// src/assets/enemies/README.md
//
// import.meta.glob 은 Vite 가 빌드 시점에 경로 패턴과 맞는 모듈을 모아 주는 기능이다.
// eager:true 면 동적 import 가 아니라 정적으로 인라인되므로 번들 결과는
// 기존의 개별 import 와 같다. 차이는 '파일이 없을 때'다 —
// 개별 import 는 빌드가 실패하지만 glob 은 빈 객체가 될 뿐이다.
const SHEETS = import.meta.glob("@/assets/enemies/*.png", {
  eager: true,
  import: "default",
})

// glob 키는 "/src/assets/enemies/slime.png" 같은 전체 경로라 파일명으로 찾는다.
// 없으면 null 을 반환하고, ActionSheet 가 도형 플레이스홀더로 대신 그린다.
const sheetOf = (fileName) =>
  Object.entries(SHEETS).find(([path]) => path.endsWith(`/${fileName}.png`))?.[1] ?? null


// ✅ 적마다 애니메이션 맵이 다를 수 있으니 enemyAnims를 함께 둠
const SLIME_ANIMS = {
  idle:   { row: 0, start: 0, frames: 6, fps: 8, loop: true },
  hit:    { row: 4, start: 0, frames: 4, fps: 12, loop: false },
  attack: { row: 3, start: 0, frames: 12, fps: 14, loop: false },
  death: { row: 5, start: 0, frames: 4, fps: 14, loop: false },
  walk: { row: 1, start: 0, frames: 8, fps: 14, loop: true },
}

const AXEMAN_ANIMS = {
  idle:   { row: 0, start: 0, frames: 6, fps: 10, loop: true },
  hit:    { row: 5, start: 0, frames: 4, fps: 14, loop: false },
  attack: { row: 4, start: 0, frames: 12, fps: 16, loop: false },
  death: { row: 6, start: 0, frames: 4, fps: 16, loop: false },
  walk: { row: 1, start: 0, frames: 8, fps: 14, loop: true },
}

const ARMOREDORC_ANIMS = {
  idle:   { row: 0, start: 0, frames: 6, fps: 10, loop: true },
  hit:    { row: 6, start: 0, frames: 4, fps: 14, loop: false },
  attack: { row: 3, start: 0, frames: 8, fps: 16, loop: false },
  death: { row: 7, start: 0, frames: 4, fps: 16, loop: false },
  walk: { row: 1, start: 0, frames: 8, fps: 14, loop: true },
}

const ORC_ANIMS = {
  idle:   { row: 0, start: 0, frames: 6, fps: 10, loop: true },
  hit:    { row: 4, start: 0, frames: 4, fps: 14, loop: false },
  attack: { row: 3, start: 0, frames: 6, fps: 16, loop: false },
  death: { row: 5, start: 0, frames: 4, fps: 16, loop: false },
  walk: { row: 1, start: 0, frames: 8, fps: 14, loop: true },
}

const ELETEORC_ANIMS = {
  idle:   { row: 0, start: 0, frames: 6, fps: 10, loop: true },
  attack: { row: 4, start: 0, frames: 9, fps: 16, loop: false },
  hit:   { row: 5, start: 0, frames: 4, fps: 14, loop: false },
  death: { row: 6, start: 0, frames: 4, fps: 16, loop: false },
  walk: { row: 1, start: 0, frames: 8, fps: 14, loop: true },
}

const ARMOREDSKELETON_ANIMS = {
  idle:   { row: 0, start: 0, frames: 6, fps: 10, loop: true },
  hit:    { row: 4, start: 0, frames: 4, fps: 14, loop: false },
  attack: { row: 3, start: 0, frames: 9, fps: 16, loop: false },
  death: { row: 5, start: 0, frames: 4, fps: 16, loop: false },
  walk: { row: 1, start: 0, frames: 8, fps: 14, loop: true },
}

const SKELETON_ANIMS = {
  idle:   { row: 0, start: 0, frames: 6, fps: 10, loop: true },
  hit:    { row: 5, start: 0, frames: 4, fps: 14, loop: false },
  attack: { row: 3, start: 0, frames: 7, fps: 16, loop: false },
  death: { row: 6, start: 0, frames: 4, fps: 16, loop: false },
  walk: { row: 1, start: 0, frames: 8, fps: 14, loop: true },
}

const SKELETONARCHER_ANIMS = {
  idle:   { row: 0, start: 0, frames: 6, fps: 10, loop: true },
  hit:    { row: 3, start: 0, frames: 4, fps: 14, loop: false },
  attack: { row: 2, start: 0, frames: 9, fps: 16, loop: false },
  death: { row: 4, start: 0, frames: 4, fps: 16, loop: false },
  walk: { row: 1, start: 0, frames: 8, fps: 14, loop: true },
}

const SWORDSKELETON_ANIMS = {
  idle:   { row: 0, start: 0, frames: 6, fps: 10, loop: true },
  hit:    { row: 5, start: 0, frames: 4, fps: 14, loop: false },
  attack: { row: 3, start: 0, frames: 12, fps: 16, loop: false },
  death:  { row: 6, start: 0, frames: 4, fps: 16, loop: false },
  walk: { row: 1, start: 0, frames: 8, fps: 14, loop: true },
}
const SOLDIER_ANIMS = {
  idle:   { row: 0, start: 0, frames: 6, fps: 10, loop: true },
  hit:    { row: 5, start: 0, frames: 4, fps: 14, loop: false },
  attack: { row: 2, start: 0, frames: 6, fps: 16, loop: false },
  death:  { row: 6, start: 0, frames: 4, fps: 16, loop: false },
  walk: { row: 1, start: 0, frames: 8, fps: 14, loop: true },
}

const TEMPLER_ANIMS = {
  idle:   { row: 0, start: 0, frames: 6, fps: 10, loop: true },
  hit:    { row: 7, start: 0, frames: 4, fps: 14, loop: false },
  attack: { row: 5, start: 0, frames: 12, fps: 16, loop: false },
  death:  { row: 8, start: 0, frames: 4, fps: 16, loop: false },
  walk: { row: 1, start: 0, frames: 8, fps: 14, loop: true },
}

const KNIGHT_ANIMS = {
  idle:   { row: 0, start: 0, frames: 6, fps: 10, loop: true },
  hit:    { row: 6, start: 0, frames: 4, fps: 14, loop: false },
  attack: { row: 4, start: 0, frames: 11, fps: 16, loop: false },
  death:  { row: 7, start: 0, frames: 4, fps: 16, loop: false },
  walk: { row: 1, start: 0, frames: 8, fps: 14, loop: true },
}

const LANCER_ANIMS = {
  idle:   { row: 0, start: 0, frames: 6, fps: 10, loop: true },
  hit:    { row: 6, start: 0, frames: 4, fps: 14, loop: false },
  attack: { row: 4, start: 0, frames: 9, fps: 16, loop: false },
  death:  { row: 7, start: 0, frames: 4, fps: 16, loop: false },
  walk: { row: 1, start: 0, frames: 8, fps: 14, loop: true },
}

const ORCRIDER_ANIMS = {
  idle:   { row: 0, start: 0, frames: 6, fps: 10, loop: true },
  hit:    { row: 6, start: 0, frames: 4, fps: 14, loop: false },
  attack: { row: 4, start: 0, frames: 11, fps: 16, loop: false },
  death:  { row: 7, start: 0, frames: 4, fps: 16, loop: false },
  walk: { row: 1, start: 0, frames: 8, fps: 14, loop: true },
}

const SWORDMAN_ANIMS  = {
  idle:   { row: 0, start: 0, frames: 6, fps: 10, loop: true },
  hit:    { row: 5, start: 0, frames: 4, fps: 14, loop: false },
  attack: { row: 3, start: 0, frames: 15, fps: 16, loop: false },
  death:  { row: 6, start: 0, frames: 4, fps: 16, loop: false },
  walk: { row: 1, start: 0, frames: 8, fps: 14, loop: true },
}

const WEREBERE_ANIMS  = {
  idle:   { row: 0, start: 0, frames: 6, fps: 10, loop: true },
  hit:    { row: 5, start: 0, frames: 4, fps: 14, loop: false },
  attack: { row: 3, start: 0, frames: 13, fps: 16, loop: false },
  death:  { row: 6, start: 0, frames: 4, fps: 16, loop: false },
  walk: { row: 1, start: 0, frames: 8, fps: 14, loop: true },
}

const WEREWOLF_ANIMS  = {
  idle:   { row: 0, start: 0, frames: 6, fps: 10, loop: true },
  hit:    { row: 4, start: 0, frames: 4, fps: 14, loop: false },
  attack: { row: 3, start: 0, frames: 13, fps: 16, loop: false },
  death:  { row: 5, start: 0, frames: 4, fps: 16, loop: false },
  walk: { row: 1, start: 0, frames: 8, fps: 14, loop: true },
}


export const ENEMIES = {
  slime: {
    id: "slime",
    sheet: sheetOf("slime"),
    frameWidth: 100,
    frameHeight: 100,
    cols: 12,
    scale: 3,
    flipX: true,
    offsetX: -30,
    offsetY: 30,
    anims: SLIME_ANIMS,
  },

  axeman: {
    id: "axeman",
    sheet: sheetOf("armored_axeman"),
    frameWidth: 100,
    frameHeight: 100,
    cols: 12,
    scale: 2.8,
    flipX: true,
    offsetX: -30,
    offsetY: 30,
    anims: AXEMAN_ANIMS,
  },

  armored_orc: {
    id: "armored_orc",
    sheet: sheetOf("armored_orc"),
    frameWidth: 100,
    frameHeight: 100,
    cols: 12,
    scale: 2.8,
    flipX: true,
    offsetX: -30,
    offsetY: 30,
    anims: ARMOREDORC_ANIMS,
  },

  orc: {
    id: "orc",
    sheet: sheetOf("orc"),
    frameWidth: 100,
    frameHeight: 100,
    cols: 12,
    scale: 2.8,
    flipX: true,
    offsetX: -10,
    offsetY: 30,
    anims: ORC_ANIMS,
  },

  elite_orc: {
    id: "elite_orc",
    sheet: sheetOf("elite_orc"),
    frameWidth: 100,
    frameHeight: 100,
    cols: 12,
    scale: 3.0,
    flipX: true,
    offsetX: -30,
    offsetY: 30,
    anims: ELETEORC_ANIMS,
  },

  armored_skeleton: {
    id: "armored_skeleton",
    sheet: sheetOf("armored_skeleton"),
    frameWidth: 100,
    frameHeight: 100,
    cols: 12,
    scale: 2.8,
    flipX: true,
    offsetX: -30,
    offsetY: 30,
    anims: ARMOREDSKELETON_ANIMS,
  },

  skeleton: {
    id: "skeleton",
    sheet: sheetOf("skeleton"),
    frameWidth: 100,
    frameHeight: 100,
    cols: 12,
    scale: 2.8,
    flipX: true,
    offsetX: -30,
    offsetY: 30,
    anims: SKELETON_ANIMS,
  },

  skeleton_archer: {
    id: "skeleton_archer",
    sheet: sheetOf("skeleton_archer"),
    frameWidth: 100,
    frameHeight: 100,
    cols: 12,
    scale: 2.8,
    flipX: true,
    offsetX: -30,
    offsetY: 30,
    anims: SKELETONARCHER_ANIMS,
  },

  greatsword_skeleton: {
    id: "greatsword_skeleton",
    sheet: sheetOf("greatsword_skeleton"),
    frameWidth: 100,
    frameHeight: 100,
    cols: 12,
    scale: 3.0,
    flipX: true,
    offsetX: -30,
    offsetY: 30,
    anims: SWORDSKELETON_ANIMS,
  },

  knight_templer: {
    id: "knight_templer",
    sheet: sheetOf("knight_templar"),
    frameWidth: 100,
    frameHeight: 100,
    cols: 12,
    scale: 3.0,
    flipX: true,
    offsetX: -30,
    offsetY: 30,
    anims: TEMPLER_ANIMS,
  },

  knight: {
    id: "knight",
    sheet: sheetOf("knight"),
    frameWidth: 100,
    frameHeight: 100,
    cols: 12,
    scale: 3.0,
    flipX: true,
    offsetX: -30,
    offsetY: 30,
    anims: KNIGHT_ANIMS,
  },

  lancer: {
    id: "lancer",
    sheet: sheetOf("lancer"),
    frameWidth: 100,
    frameHeight: 100,
    cols: 12,
    scale: 3.0,
    flipX: true,
    offsetX: -30,
    offsetY: 30,
    anims: LANCER_ANIMS,
  },

  orc_rider: {
    id: "orc_rider",
    sheet: sheetOf("orc_rider"),
    frameWidth: 100,
    frameHeight: 100,
    cols: 12,
    scale: 3.2,
    flipX: true,
    offsetX: -30,
    offsetY: 30,
    anims: ORCRIDER_ANIMS ,
  },

  swordman: {
    id: "swordman",
    sheet: sheetOf("swordsman"),
    frameWidth: 100,
    frameHeight: 100,
    cols: 12,
    scale: 3.0,
    flipX: true,
    offsetX: -30,
    offsetY: 30,
    anims: SWORDMAN_ANIMS ,
  },

  soldier: {
    id: "soldier",
    sheet: sheetOf("soldier"),
    frameWidth: 100,
    frameHeight: 100,
    cols: 12,
    scale: 3.0,
    flipX: true,
    offsetX: -30,
    offsetY: 30,
    // ✅ soldier는 애님 정의가 없어서 일단 swordman 애님 재사용(나중에 교체)
    anims: SOLDIER_ANIMS,
  },

  werebear: {
    id: "werebear",
    sheet: sheetOf("werebear"),
    frameWidth: 100,
    frameHeight: 100,
    cols: 12,
    scale: 3.2,
    flipX: true,
    offsetX: -30,
    offsetY: 30,
    anims: WEREBERE_ANIMS ,
  },

  werewolf: {
    id: "werewolf",
    sheet: sheetOf("werewolf"),
    frameWidth: 100,
    frameHeight: 100,
    cols: 12,
    scale: 3.2,
    flipX: true,
    offsetX: -30,
    offsetY: 30,
    anims: WEREWOLF_ANIMS ,
  },
}