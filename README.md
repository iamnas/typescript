
# TypeScript Setup

## Step 1
Initialize a new Node.js project:

```bash
npm init -y
```

## Step 2
Install TypeScript as a development dependency:
```bash
npm install --save-dev typescript
```

## Step 3
Initialize a TypeScript configuration file:
```bash
npx tsc --init
```

## Step 4
Create your project files.

## Converting TypeScript to JavaScript

To compile a TypeScript file to JavaScript:
```bash
npx tsc script.ts
node script.js
```

To compile with error checking but without emitting output on error:
```bash
npx tsc script.ts --noEmitOnError
```

## Using TypeScript with a Bundler

Create a new Vite project:
```bash
npm create vite@latest .
```

## Useful Links

- [TypeScript Configuration Options](https://www.typescriptlang.org/tsconfig#strict)
- [TypeScript Configurations on GitHub](https://github.com/tsconfig/bases)