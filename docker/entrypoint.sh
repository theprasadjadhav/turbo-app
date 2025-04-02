#!/bin/sh

echo "DATABASE_URL=$DATABASE_URL" >> apps/web/.env

exec "$@"