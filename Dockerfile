FROM node:lts-alpine AS build
WORKDIR /app
EXPOSE 80
EXPOSE 443
COPY . /app/
ARG configuration=production
RUN npm ci
RUN npm run build --configuration=${configuration}

FROM nginx:alpine
COPY --from=build /app/dist/sophos-solutions-overtimes-frontend /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

#docker build . -t sophos-solutions-overtimes-frontend-image:1.0.0 --build-arg configuration="production"
#docker run -d --name sophos-solutions-overtimes-frontend-app -p 8080:80 sophos-solutions-overtimes-frontend-image:1.0.0
