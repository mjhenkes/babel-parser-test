# babel-parser-test

This repo was created to recreate issue:

To re-create the issue:

To get 7.11.0 output:

Update package json dependencies to:

```json
{
  "dependencies": {
    "@babel/core": "7.11.0",
    "@babel/parser": "7.11.0"
  }
}
```

```bash
npm run clean
npm install
npm run start
```

To get 7.10.5 output:

Update package json dependencies to:

```json
{
  "dependencies": {
    "@babel/core": "7.10.5",
    "@babel/parser": "7.10.5"
  }
}
```

```bash
npm run clean
npm install
npm run start
```
