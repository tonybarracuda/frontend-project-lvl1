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

even: # launch even game
	node bin/brain-even.js

calc: # launch calc game
	node bin/brain-calc.js

gcd: # launch greatest common devisor game
	node bin/brain-gcd.js
