# C6 Inventory

## Roles:

- Injug, Anakin | PM | Full-stack

- Albeos, Kyle | Admin DB | Backend

- Pitogo, JB | DB Assist | Backend, Document Manager

- Fuentes, Rodlie | Mobile Dev | Frontend

# Description

Welcome to the QR based inventory system! We, the devs, are excited to get this up and running to improve the inventory experience and remove any hassle for this tedious job.

## Key Features

- QR Code based scanning of items
- Database Creation
- Database Customization
- Mobile for scanning, Desktop website for monitoring

## GIT stuff

### Do these before you code **ANYTHING**, This is the way

1. Make sure your local repo \(your cloned one in your device\) is up to date
2. Create a new branch and name it whatever feature you're making. Ex: `Login`

```bash
git branch Login
```

3. Update your `Login` branch if it already exists

```bash
git pull origin main
```

### After checking that, you can now attempt adding code, and follow these steps

1. Test your code
2. Commit Changes

```bash
git add <filename>
git commit -m "Message"
```

3. Change to branch `Login`

```bash
git checkout Login
```

4. Push changes to origin `Login`

```bash
git push origin Login
```

5. Open GitHub and open the repo
6. Find Compare & pull request in `Login` branch
7. Click it, select:
   - base branch = main
   - compare branch = `Login`
8. Wait for review
9. If approved: Click Merge pull request
10. Delete branch after merging

### `git commit`

After you finish creating something, you would usually do something like a commit to save your progress, these are the following steps

Firstly you will stage your commits, what this means is, you will add the files you WANT to commit, this is called "staging"

How to stage:

```bash
git add <filename>
// to add your specific file
```

then you commit it

```bash
git commit -m "I added a login feature"
// you have to be very specific on what you added, or removed, or modified, to be clear for the other members in the team
```

Why isn't `git add .` recommended?

```bash
git add .
aka git add (all)
```

will stage all files you modified for commit, this will commit all your files by bulk, and if you do, adding `-m "Message"` will typically result in very vague descriptions, making the team constantly ask questions on "What you modified" in these commits, even the author can forget about what they add in these commits because of the sheer magnitude of the project.

### `git checkout`

So ur a developer in this team, and Anakin (me, hehe) asked you to only commit changes in "branch: testing". This is how we do it:

In your bash (console), execute:

```bash
git checkout testing
```

this transfers you to the testing branch, and not to branch main.

Why do this? So you don't accidentally **_~~fuck~~ up_** our hard work of course! Great j\*b team~ ✨

## Errors

## Error regarding `npm run dev`

This happens when you try to run this command for the first time in bash

```bash
npm run dev
```

it usually means that there's something wrong with the setup

then this error stack shows:

```bash
npm error Missing script: "dev"
npm error
npm error To see a list of scripts, run:
npm error   npm run
npm error A complete log of this run can be found in: C:\Users\Anakin\AppData\Local\npm-cache\_logs\2026-02-01T03_26_31_265Z-debug-0.log
```

### Solution

Just `cd` to your project 💀, stupid right? Anyways, sometimes we name a folder the same name as our project, so its often gonna look like `projects/Inventory/Inventory` in directory

```bash
projectFolder/Project/ActualReactApp
project/Inventory/Inventory
```

so when an error occurs, it's usually because you're in

```bash
project/Inventory
```

and not accessing your React-app

## Error regarding ```Module not found: @tailwindcss/vite

This happens when you forget some initial configuration on setup, for instance, forgetting to install @tailwindcss module

### Solution

```bash
run
npm install -D tailwindcss @tailwindcss/vite
```

That's it, you can now `npm run dev` just fine now✨
