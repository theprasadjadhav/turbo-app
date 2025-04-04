FROM oven/bun:latest

WORKDIR /app

COPY ./packages ./packages
COPY ./package.json ./package.json
COPY ./apps/ws/package.json ./apps/ws/package.json
COPY ./turbo.json ./turbo.json
COPY ./bun.lock ./bun.lock
COPY ./docker/entrypoint-ws.sh ./entrypoint.sh


RUN bun install

COPY ./apps/ws ./apps/ws

RUN cd packages/db && bunx prisma generate && cd ..

EXPOSE 3002

RUN chmod +x ./entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]
CMD [ "bun", "run", "start", "--filter=ws" ]

