#!/bin/sh

echo "DATABASE_URL=$DATABASE_URL" >> apps/backend/.env

exec "$@"