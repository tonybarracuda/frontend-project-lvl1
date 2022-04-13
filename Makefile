# Makefile
install: #инициализация
	nmp ci

brain-games: #запуск файла brain-games.js
	node bin/brain-games.js

publish: # выполняет код
	npm publish --dry-run

askname: # we ask name of the player
	node src/cli.js
