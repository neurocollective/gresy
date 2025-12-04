server/start:
	python3 -m flask run
server/venv:
	python3 -m venv ./server
db/create:
	docker run -p 5432:5432 --name local-postgres -e POSTGRES_PASSWORD=postgres -d postgres
psql:
	docker exec -it local-postgres psql "postgresql://postgres:postgres@localhost:5432/postgres"
db/seed:
	psql -f db/create.sql "postgresql://postgres:postgres@localhost:5432/postgres"
	psql -f db/seed.sql "postgresql://postgres:postgres@localhost:5432/postgres"
db/kill:
	docker stop local-postgres && docker rm local-postgres
db/recycle:
	make db/kill
	make db/create
	sleep 2
	make db/seed
tf/apply:
	terraform apply -var db_password=$$RDS_PASSWORD
image/build:
	docker build -t gresy ./server
image/run:
	docker run -p 5000:5000 --network="host" gresy
ui/build:
	npm run build --prefix ./ui
	cp ./ui/build/static ./server/static
	cp ./ui/build/index.html ./server/templates
ui/run:
	npm run start --prefix ./ui
