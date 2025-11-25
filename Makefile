server/start:
	source server/bin/activate
	python3 -m flask start;
server/venv:
	python3 -m venv ./server
db/create:
	docker run -p 5432:5432 --name local-postgres -e POSTGRES_PASSWORD=postgres -d postgres
db/psql:
	docker exec -it local-postgres psql "postgresql://postgres:postgres@localhost:5432/postgres"
db/seed:
	psql -f db/create.sql "postgresql://postgres:postgres@localhost:5432/postgres"
	psql -f db/seed.sql "postgresql://postgres:postgres@localhost:5432/postgres"
db/kill:
	docker stop local-postgres && docker rm local-postgres
db/recycle:
	make kill
	make db/create
	sleep 2
	make db/seed
