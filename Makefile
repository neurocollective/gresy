server/start:
	source server/bin/activate
	python3 -m flask start;
server/venv:
	python3 -m venv ./server
