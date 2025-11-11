# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
src/
│
├── assets/                     # 🖼️ Static files (images, icons, logos)
│   ├── logo.svg
│   ├── illustrations/
│   └── icons/
│
├── components/                 # 🧩 Reusable UI components
│   ├── captions/
│   │   ├── CaptionCard.tsx
│   │   └── CaptionList.tsx
│   ├── tone/
│   │   ├── ToneSelector.tsx
│   │   └── ToneButton.tsx
│   ├── scheduler/
│   │   ├── SchedulerModal.tsx
│   │   ├── ReminderForm.tsx
│   │   └── TimePicker.tsx
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       └── Modal.tsx
│
├── config/                     # ⚙️ Environment, constants, API URLs, etc.
│   ├── appConfig.ts
│   ├── theme.ts
│   └── constants.ts
│
├── hooks/                      # 🪝 Custom React hooks
│   ├── useGenerateCaptions.ts
│   ├── useScheduleReminder.ts
│   └── useToast.ts
│
├── pages/                      # 📄 Route-based pages
│   ├── Home.tsx
│   └── About.tsx
│
├── store/                      # 🧠 State management (Zustand / Redux / Context)
│   ├── useAppStore.ts
│   └── useCaptionStore.ts
│
├── styles/                     # 🎨 Global or module styles
│   ├── globals.css             # Contains Tailwind directives
│   └── variables.css           # Optional custom variables
│
├── types/                      # 🧾 Shared TypeScript types/interfaces
│   ├── caption.ts
│   ├── tone.ts
│   ├── reminder.ts
│   └── api.ts
│
├── utils/                      # 🧠 Helper functions (formatting, date, etc.)
│   ├── api.ts
│   ├── dateUtils.ts
│   ├── validation.ts
│   └── formatText.ts
│
├── App.tsx                     # App entry component
├── main.tsx                    # React DOM render entry
└── vite-env.d.ts               # Vite environment declarations
