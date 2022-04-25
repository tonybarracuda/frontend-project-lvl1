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

even: # launch even number game
	node bin/brain-even.js

calc: # launch calc game
	node bin/brain-calc.js

gcd: # launch greatest common devisor game
	node bin/brain-gcd.js

prog: # launch progression game
	node bin/brain-progression.js

prime: # launch prime number game
	node bin/brain-prime.js