
# Fake or real new edition

All content goes into the `content` directory and must be Markdown with YAMl frontmatter. All changes in the content directory on the content branch will trigger a Markdown-to-JSON transformation using a Gitlab job as defined in `.gitlab-ci.yml` and make the content available on our Content API in the namespace `for`:

https://api.ttc.io/for/

Please add all application code to the `src` directory.

