#!/bin/sh

echo "DATABASE_URL=$DATABASE_URL" >> apps/ws/.env

exec "$@"