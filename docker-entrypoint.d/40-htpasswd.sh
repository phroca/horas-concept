#!/bin/sh
set -e

if [ -z "$SITE_PASSWORD" ]; then
  echo "SITE_PASSWORD est obligatoire pour protéger la maquette."
  exit 1
fi

htpasswd -bc /etc/nginx/.htpasswd "${SITE_USER:-horas}" "$SITE_PASSWORD"
echo "Authentification HTTP activée pour l'utilisateur ${SITE_USER:-horas}."
