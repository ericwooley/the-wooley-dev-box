cd dist/apps/api
heroku container:login
heroku container:push web -a the-wooley-devbox
heroku container:release web -a the-wooley-devbox
