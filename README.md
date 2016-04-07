# Prerequisites:
- [Heroku](https://www.heroku.com/) user.
- [Heroku Toolbelt](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up) installed.
- A [clean remote repository](https://github.com/new).

## Installation Guide:

### Creating the project
1. Clone the project
```bash
git clone git@github.com:akaspi/webpack-on-heroku.git <your-folder>
cd <your-folder>
npm i
```

2. Clean .git
```bash
rm -rf .git
```

3. Initialize .git and push to new repository ([Link](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/))

### Sync with Heroku
4. Login to Heroku:
```bash
heroku login
```

5. Create an Heroku application:
```bash
heroku create
```
6. Set 'production' environment variable:
```bash
heroku config:set NODE_ENV=production
```

7. Deploy the app:
```bash
git push heroku master
```

<br>

<b>Inspired by [Ditrospecta](http://ditrospecta.com/javascript/react/es6/webpack/heroku/2015/08/08/deploying-react-webpack-heroku.html) and [Heroku: Getting Stared With Node](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction).</b>
