# React APP

First, let's create the front-end:

```bash
npx create-react-app front --use-npm
```

deconstruction:

* `npx`: a software that can download packages and use them directly
* `create-react-app`: an npm package that allows fast setup of a React App
* `front`: the name of the directory we want to work in
* `--use-npm`: otherwise, `create-react-app` defaults to `yarn`. `yarn` is completely fine, but in this exercise, we'll use `npm`.

Feel free to edit `package.json` to change the name and version of your front-end

Personally, I can't stand the browser opening on its own, so in `package.json`, I change the line

```javascript
"start": "react-scripts start",
```

to

```javascript
"start": "BROWSER=none react-scripts start",
```

Finally, let's delete the file `README.md` that `create-react-app` creates for us.

