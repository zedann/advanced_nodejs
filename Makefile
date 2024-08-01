composeup:
	@docker compose up -d
composedown:
	@docker compose down -d
postgres:
	@psql -h localhost -p 5434 -U root -d adv_node