[![Build Status](https://travis-ci.org/cdelmoral/microposts-ui.svg?branch=master)](https://travis-ci.org/cdelmoral/microposts-ui)

# MicropostsUi

Install dependencies with `npm install`. Before starting the application for development the environments file `src/app/environments/environment.ts` needs to be created:

```
export const environment = {
  production: false,
  serverUrl: 'http://127.0.0.1:8000/api' // Backend server URL
};
```

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
