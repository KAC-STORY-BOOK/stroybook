# KAC 모노레포

React 컴포넌트 라이브러리, Storybook 통합, 그리고 웹 애플리케이션을 포함하는 모노레포입니다.

---

## **필수 조건**

- Node.js v18.19.1
- Yarn (권장 패키지 관리자)

---

## **프로젝트 구조**

```plaintext
kac-monorepo/
├── packages/
│   ├── components/   # 재사용 가능한 React 컴포넌트 라이브러리
│   ├── storybook/    # Storybook 설정 및 스토리
│   └── web/          # React 웹 애플리케이션
├── package.json      # 루트 패키지 매니저 설정 (워크스페이스 포함)
└── yarn.lock         # Yarn 의존성 관리 파일
```

---

### **설명**

- **`components/`**:
  재사용 가능한 React 컴포넌트를 개발 및 관리합니다. 이 라이브러리는 Storybook과 웹 애플리케이션에서 사용됩니다.

- **`storybook/`**:
  Storybook을 사용해 `components`의 컴포넌트를 문서화하고 테스트할 수 있습니다.

- **`web/`**:
  React를 기반으로 한 웹 애플리케이션으로, `components` 라이브러리를 활용합니다.

---

## **시작하기**

### 1. **프로젝트 클론**

```bash
git clone https://github.com/your-repo/kac-monorepo.git
cd kac-monorepo
```

### 2. **의존성 설치**

```bash
yarn install
```

### 3. **개발 서버 실행**

- **웹 애플리케이션**:
  ```bash
  yarn workspace @kac-monorepo/web start
  ```
- **Storybook**:
  ```bash
  yarn workspace @kac-monorepo/storybook dev
  ```

---

## **스크립트**

- `yarn build:components`: `components` 라이브러리를 빌드합니다.
- `yarn dev:components`: `components` 라이브러리 개발 모드로 실행합니다.
- `yarn dev:storybook`: Storybook을 실행합니다.
- `yarn dev:web`: 웹 애플리케이션 개발 서버를 실행합니다.

---
