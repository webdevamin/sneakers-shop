# Setup

After cloning this project, run these commands to make it work on your local machine.

First install the needed packages:

```bash
npm install
```

You can also make a copy of .env.example file to .env.local to load certain environment variables. This is optional because there is a file app.ts that provides default values in case certain environment variables are not found (e.g. no .env.local file):

```bash
cp .env.example .env.local
```

After the commands above, run this:

```bash
yarn dev
```
