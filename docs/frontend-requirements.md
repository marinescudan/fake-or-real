# General frontend requirements for Tactical Tech applications

## Software architecture

- We accept static sites consisting of HTML or Javascript single page applications if there is an additional `lite` version which works with JS disabled in the browser.

- Content is preferably served and pushed to our Content API.

- The software architecture must be decided in accordance with Tactical Techs Product Team Dev Lead.

- Single page applications requiring a Javascript server f.e. Express are not accepted.

- All external libraries as well as assets like fonts, styles etc must be served from the same domain the app is hosted.

- We expect that you develop using the lastest stable version of the programming language and/or framework.


## Coding standards

- Avoid global project dependencies whenever possible.

- We expect that you write tests for your code and prefer are test driven coding style.

- Code must be consistently formatted and free of unsued code. Projects must include liniting information.
 

## Directory and file structure

- Output build result into ```_site``` and gitignore this directory.

- Add Markdown files to  ```content``` directory at the root level of your project. These files must only contain content in Markdown format.


## Production pipeline and repository requirements

- All code must be hosted in our [Gitlab instance](https://git.tacticaltech.org).

- Our deploy setup for Node projects expects a ```build``` script: ```npm run build``` should build the entire application.

- The ```master``` branch is the main branch and pushes to master trigger deploy to production.

- The ```content``` or ```preview``` branches are the reference for Markdown content.


## License

- Use the GPLv3 license for code.


## Documentation

- Add ```README.md``` file with documentation for how to build your app.


## Accessibility, HTML

- You must use valid HTML5. Non valid HTML5 tags are acceptable if introduced intentionally to improve a certain feature.

- We expect that different viewport sizes and mobile browsers are supported and tested.

- We expect that the application is running on modern browsers as well as Internet Explorer 11.


## Stylesheets

- Your project must use a CSS methodology. We prefer [Tachyons](https://tachyons.io/) as methodology and library.


## Data

- Content must be in Markdown and must have a mimimum set of YAML frontmatter as defined in our specification. See the [data specifications](https://git.tacticaltech.org/ttc/mothership-documentation/tree/master/db).

- The Markdown body text must not include markup such as HTML or similar and must purely consist of Markdown markup.

- The app itself must only consume content as JSON as specified in the [schema.json](https://git.tacticaltech.org/ttc/mothership-documentation/blob/master/db/schema.json) which might be provided by our Content API api.ttc.io.

## Media

- Images and other files referenced in Markdown and not related to the layout should not be tracked by GIT but must be hosted on our CDN server cdn.ttc.io.
