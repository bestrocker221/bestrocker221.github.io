#!/bin/sh

COMMIT=$1

if [ $# -ne "1" ]; then
	echo "<commit text>"
	exit 1
fi

bundle exec jekyll build

if [ $? -ne 0 ]; then
	echo "Error building.. "
	exit 1
fi

cd _site
git add *
git commit -m "${COMMIT}"
echo -e "\nPushing to prod..\n"
git push origin master

# to set remote url git to ssh instead of https
# git remote set-url origin git@github.com:url..

#cp -r _site/* ../bestrocker221.github.io
