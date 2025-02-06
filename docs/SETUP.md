# Setting Up E-Sikshya for Development

This guide will help you set up E-Sikshya for local development.

## System Requirements

- Node.js (v18 or higher)
- npm (v7 or higher) or yarn
- Git
- A modern web browser
- A code editor (VS Code recommended)

## Development Environment Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/e-sikshya.git
   cd e-sikshya
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_APP_TITLE=E-Sikshya
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Starts development server
- `npm run build` - Creates production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Editor Setup

### VS Code

Recommended extensions:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin (Volar)

### Editor Config

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Testing

1. **Unit Tests**
   ```bash
   npm run test
   ```

2. **E2E Tests**
   ```bash
   npm run test:e2e
   ```

## Building for Production

1. **Create Production Build**
   ```bash
   npm run build
   ```

2. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Troubleshooting

Common issues and solutions:

1. **Node Version Issues**
   ```bash
   nvm use 18
   ```

2. **Dependency Issues**
   ```bash
   rm -rf node_modules
   npm install
   ```

3. **Port Already in Use**
   ```bash
   kill -9 $(lsof -ti:5173)
   ```

## Additional Resources

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide)