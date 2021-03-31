echo "Login to container"
heroku container:login || exit 1

echo "Push migration"
heroku container:push release -a thewooley-devbox || exit 1
echo "Release migration"
heroku container:release release -a thewooley-devbox || exit 1

cd dist/apps/api
echo "Push api"
heroku container:push web -a the-wooley-devbox
echo "Release api"
heroku container:release web -a the-wooley-devbox
