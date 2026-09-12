# 적 스프라이트 — 저장소에 커밋하지 않는다

> **이 디렉터리는 비어 있는 게 정상이다.** 루트 `.gitignore` 가 이 안의 그림 파일을
> 전부 막고 있다. **그림이 없어도 클론 → 설치 → 실행이 그대로 된다** — 적이
> 도형 플레이스홀더로 그려질 뿐이다.

## 왜

여기 쓰는 에셋 팩의 라이선스가 이렇다.

| | |
|---|---|
| ✅ 허용 | 개인·상업 프로젝트에 **사용** / 프로젝트에 맞게 **수정** |
| ❌ 금지 | **재배포·재판매·재업로드 (수정본 포함)** / AI 학습 / NFT |

`CatLog` 는 **공개 저장소**다. 커밋하면 누구나 파일을 내려받을 수 있고 — 그게 곧
재업로드다. 금지 조항이 "**수정본 포함**"이라 색만 바꾼 변형본도 마찬가지로 못 올린다.

한번 커밋되면 나중에 지워도 **git 히스토리에 영구히 남는다.** 히스토리 재작성 +
강제 푸시가 아니면 지워지지 않는다. 그래서 애초에 안 들어가게 막았다.

**게임에 쓰는 것 자체는 허용이다.** 배포본(<https://catlog.bomun.dev>)이 브라우저에
스프라이트를 내려주는 건 "게임에 사용"이지 "에셋 재배포"가 아니다. 막아야 하는 건
저장소뿐이다.

## 없으면 어떻게 되나

[`src/game/enemies.js`](../../game/enemies.js) 가 `import.meta.glob` 으로 이
디렉터리를 훑는다. 파일이 없으면 `sheet` 가 `null` 이 되고,
[`ActionSheet.vue`](../../components/ActionSheet.vue) 의 `drawPlaceholder()` 가
적 id 로 색을 정한 도형을 대신 그린다.

애니메이션 타이밍과 `finished` 이벤트는 그림 유무와 무관하게 돌기 때문에,
**`hit → death → respawn` 체인과 세션 종료 처리가 정상 동작한다.**

## 받는 법

1. 비공개 저장소 `bo-mun/catlog-assets` 에서 받는다.
2. 압축을 풀어 이 디렉터리에 png 를 그대로 넣는다.
3. 개발 서버를 재시작한다 (`npm run dev`).

파일명이 곧 참조 키다. `enemies.js` 의 `sheetOf("armored_orc")` 는
`armored_orc.png` 를 찾는다. **이름이 다르면 조용히 플레이스홀더로 뜬다** — 에러가
나지 않으니 그림이 안 나오면 파일명부터 확인할 것.

**참조하지 않는 png 는 넣지 말 것.** `import.meta.glob` 은 패턴에 맞는 파일을 전부
번들에 넣기 때문에, 안 쓰는 그림도 빌드 산출물에 그대로 포함되어 배포 용량만 늘어난다.
(기존의 개별 `import` 방식에는 없던 차이다.)

현재 코드가 참조하는 파일은 17개다.

```
slime          skeleton            skeleton_archer      armored_skeleton
orc            armored_orc         armored_axeman       elite_orc
orc_rider      greatsword_skeleton knight               knight_templar
lancer         swordsman           soldier              werebear
werewolf
```
