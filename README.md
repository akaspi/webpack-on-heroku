# Prerequisites:
- [Heroku](https://www.heroku.com/) user.
- [Heroku Toolbelt](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up) installed.
- A [clean remote repository](https://github.com/new).

## Installation Guide:

## Creating the project
<b>- Clone the project</b>
```bash
git clone git@github.com:akaspi/webpack-on-heroku.git <your-folder>
cd <your-folder>
npm i
```
<b>- Clean .git</b>
```bash
rm -rf .git
```
<b>- Initialize .git and push to new repository</b> ([Link](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/))

## Sync with Heroku
<b>- Login to Heroku:</b>
```bash
heroku login
```
<b>- Create an Heroku application:</b>
```bash
heroku create
```
<b>- Set 'production' environment variable:</b>
```bash
heroku config:set NODE_ENV=production
```
<b>- Deploy the app:</b>
```bash
git push heroku master
```
<br>
<b>Inspired by [Ditrospecta](http://ditrospecta.com/javascript/react/es6/webpack/heroku/2015/08/08/deploying-react-webpack-heroku.html) and [Heroku: Getting Stared With Node](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction).</b>
