FROM nginx:alpine
COPY entrypoint.sh /
COPY nginx-site.conf /etc/nginx/conf.d/default.conf
COPY out /usr/share/nginx/html
ENTRYPOINT [ "/entrypoint.sh" ]
CMD ["nginx", "-g", "daemon off;"]
