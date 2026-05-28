# ── Updated to match Playwright version ──
FROM mcr.microsoft.com/playwright:v1.59.1-jammy

# ── Set working directory ──
WORKDIR /app

# ── Copy package files ──
COPY package*.json ./

# ── Install dependencies ──
RUN npm ci

# ── Copy all project files ──
COPY . .

# ── Set environment ──
ENV ENV_NAME=demo

# ── Run tests ──
CMD ["npx", "playwright", "test", \
     "--project=chromium", \
     "--project=firefox"]