#!/bin/sh
set -e

USER_NAME="${SITE_USER:-horas}"
PASSWORD="${SITE_PASSWORD:-horas-concept}"

if [ -z "$SITE_PASSWORD" ]; then
  echo "SITE_PASSWORD non défini : identifiants par défaut horas / horas-concept."
  echo "Définis SITE_USER et SITE_PASSWORD dans Coolify (runtime) pour les changer."
fi

htpasswd -bc /etc/nginx/.htpasswd "$USER_NAME" "$PASSWORD"
echo "Authentification HTTP activée pour l'utilisateur ${USER_NAME}."
