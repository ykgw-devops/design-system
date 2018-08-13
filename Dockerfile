FROM abiosoft/caddy:no-stats

ADD Caddyfile /etc/Caddyfile
ADD .docz/dist/ /srv

EXPOSE 2015
