Simple-CRUD-API

first npm install

second use commands:

example: npm run start:multi

    "start:multi": "npm run build && npm run multi",
    "start:prod": "npm run build && npm run prod",
    "start:dev": "nodemon src/index.ts",
    "prod": "cross-env NODE_ENV=production node dist/index.js",
    "multi": "cross-env NODE_ENV=production node dist/multi.js",
    "build": "tsc"
