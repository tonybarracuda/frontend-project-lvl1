# Makefile
install: #инициализация
	npm ci

brain-games: #запуск файла brain-games.js
	node bin/brain-games.js

publish: # выполняет код
	npm publish --dry-run

askname: # we ask name of the player
	node src/cli.js

lint: # launch eslint
	npx eslint .

even: # launch eslint
	node bin/brain-even.js

