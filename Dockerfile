FROM node:20-alpine
ENV PNPM_HOME="/var/lib/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build



CMD ["pnpm", "start", "-p", "3001"]

# docker build . -t nextjs-baemin-img --network=host
# docker run -d -p 3000:3000 --name nextjs-baemin-container nextjs-baemin-img