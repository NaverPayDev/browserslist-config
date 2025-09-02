# @naverpay/browserslist-config

> @naverpay/frontend의 공식 [Browserslist](https://browsersl.ist) 공유 설정 패키지

## 소개

이 패키지는 NAVERPAY 프론트엔드가 개발한 서비스에서 사용할 **공식 지원 브라우저/Node.js 버전** 목록을 일관되게 관리할 수 있는 환경을 제공합니다.

**Current support range:**  
[>0.2%, not dead, not op_mini all, not ie >= 0, not ios_saf < 15, ios_saf >= 15, node >= 18.18.0, Chrome >= 106](https://browsersl.ist/#q=%3E0.2%25%2Cnot+dead%2Cnot+op_mini+all%2Cnot+ie%3E%3D0%2Cnot+ios_saf%3C15%2Cios_saf%3E%3D15%2Cnode%3E%3D18.18.0%2CChrome%3E%3D106&region=KR)

## 설치

```bash
npm install --save-dev @naverpay/browserslist-config
# 또는
yarn add -D @naverpay/browserslist-config
# 또는
pnpm add -D @naverpay/browserslist-config
```

## 사용법

### `package.json`에서 사용

```json
{
  "browserslist": ["extends @naverpay/browserslist-config"]
}
```

### `.browserslistrc`파일에서 사용

```
extends @naverpay/browserslist-config
```

## Targets

- 전 세계 점유율 0.2% 이상 브라우저
- 사용량이 거의 없는(dead) 브라우저 제외
- Internet Explorer, Opera Mini, iOS Safari 15 미만 제외
- iOS Safari 15 이상 포함
- Node.js 18.18.0 이상
- Chrome 106 이상

최신 지원 브라우저 전체 리스트는 아래에서 확인할 수 있습니다.  
[browsersl.ist 쿼리 (KR)](https://browsersl.ist/#q=%3E0.2%25%2Cnot+dead%2Cnot+op_mini+all%2Cnot+ie%3E%3D0%2Cnot+ios_saf%3C15%2Cios_saf%3E%3D15%2Cnode%3E%3D18.18.0%2CChrome%3E%3D106&region=KR)

## 자주 묻는 질문

**Q: 왜 공유 설정을 사용하나요?**  
A: 모든 NAVERPAY 프론트엔드가 동일한 브라우저 정책을 따르도록 보장하며, 설정 중복과 실수를 방지합니다.

**Q: 업데이트 주기는?**  
A: 비즈니스/프로젝트의 요구나 브라우저의 시장환경 변화에 따라 변경됩니다. 자세한 변경사항은 CHANGELOG를 참고하세요.

**Q: 실제 지원 브라우저를 확인하려면?**  
A:

```bash
npx browserslist
```

또는 위 링크의 [browsersl.ist](https://browsersl.ist)에서 직접 확인할 수 있습니다.

## 라이선스

ISC
