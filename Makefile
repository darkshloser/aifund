.PHONY: build up down logs test

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

logs:
	docker-compose logs -f

test:
	@echo "Testing frontend..."
	cd frontend && npm test
	@echo "Testing backend..."
	cd backend && python manage.py test

kafka-up:
	cd kafka && docker-compose up -d

kafka-down:
	cd kafka && docker-compose down