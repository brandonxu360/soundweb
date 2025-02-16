#!/bin/sh

#Run migrations
echo "Running Migrations"
python manage.py makemigrations
python manage.py migrate

# Create superuser
echo "Creating superuser"
if [ -n "$DJANGO_SUPERUSER_USERNAME" ] && [ -n "$DJANGO_SUPERUSER_EMAIL" ] && [ -n "$DJANGO_SUPERUSER_PASSWORD" ]; then
    python manage.py createsuperuser \
        --noinput \
        --username="$DJANGO_SUPERUSER_USERNAME" \
        --email="$DJANGO_SUPERUSER_EMAIL"
else
    echo "Environment variables not set properly, could not create superuser"
fi

echo "Loading Song Data"
python manage.py shell << EOF
from server.soundweb.load import load
load()
EOF

echo "Starting server"
exec "$@"