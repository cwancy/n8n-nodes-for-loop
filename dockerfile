# Testing Env for Docker
FROM n8nio/n8n:latest

# Copy only the built custom node files into n8n's custom extensions folder
COPY dist /home/node/.n8n/custom

# Tell n8n where to load custom nodes from
ENV N8N_CUSTOM_EXTENSIONS=/home/node/.n8n/custom
