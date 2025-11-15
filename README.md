# docker compose for mastra 


  mastra-app:
    build:
      context: .
      dockerfile: Dockerfile.mastra
    ports:
      - "3020:4111"
    #env_file:
     # - .env
    environment:
      # to dev - NODE_ENV=development
      - NODE_ENV=production
    restart: unless-stopped
    depends_on:
      - ve-app
      