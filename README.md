
# Fake or real new edition
## Technology
This is a Veu CLi project, see below the usefull comand fro development and build.
## Data
All text content goes into the `content` directory and must be Markdown with YAMl frontmatter. All changes in the content directory on the content branch will trigger a Markdown-to-JSON transformation using a Gitlab job as defined in `.gitlab-ci.yml` and make the content available on our Content API in the namespace `for`:
Api URL:
https://api.ttc.io/for/
## Media Files
All content images must be uploaded to our CDN server in the directory `fake-or-real-news-edition` and are served like this:
https://cdn.ttc.io/src/fake-or-real-news-edition/test.jpg
Please do not add content images to GIT!
## Localisation
The localisation of the app is aquired by requesting from the json api server the the app interface message keys that are located in the ```./content/en/app_interface.md``` for the english setup. For more details see files:
```
./src/app.vue
./src/vue.config.js
./src/store/index.js
./src/i18n.js
```
## Development
Please add all application code to the `src` directory.

### Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
  App start and run at:
  - Local:   http://localhost:8080/ 
  - Network: http://192.168.178.97:8080/
## Deployment
### Compiles and minifies for production
```
npm run build
```
### Customize configuration
```
See [Configuration Reference](https://cli.vuejs.org/config/).
```
## Testing
### Run your unit tests
```
npm run test:unit
```
### Lints and fixes files
```
npm run lint
```

