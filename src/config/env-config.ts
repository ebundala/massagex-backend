export enum AppConfigurationKeys {
    POSTGRES_TAG = "POSTGRES_TAG",
    POSTGRES_PASSWORD = "POSTGRES_PASSWORD",
    POSTGRES_USER = "POSTGRES_USER",
    POSTGRES_PORT = "POSTGRES_PORT",
    POSTGRES_DATA_VOLUME = "POSTGRES_DATA_VOLUME",
    POSTGRES_DB = "POSTGRES_DB",
    PGDATA = "PGDATA",
    DATABASE_URL = "DATABASE_URL",

    PGBOUNCER_PORT = "PGBOUNCER_PORT",
    PGBOUNCER_BIND_ADDRESS = "PGBOUNCER_BIND_ADDRESS",
    NODE_TAG = "NODE_TAG",

    APP_PORT = "APP_PORT",
    // google credentials,
    GOOGLE_APPLICATION_CREDENTIALS = "GOOGLE_APPLICATION_CREDENTIALS",
    FIREBASE_API_KEY = "FIREBASE_API_KEY",
    STORAGE_BUCKET = "STORAGE_BUCKET",
    FIREBASE_PROJECT_ID = "FIREBASE_PROJECT_ID",

    //sendgrid email,
    SENDGRID_API_KEY = "SENDGRID_API_KEY",
    SENDGRID_SENDER_EMAIL = "SENDGRID_SENDER_EMAIL",
    SENDGRID_ACCOUNT_ACTIVATION_TEMPLATE = "SENDGRID_ACCOUNT_ACTIVATION_TEMPLAT",
    SENDGRID_ACCOUNT_DEACTIVATION_TEMPLATE = "SENDGRID_ACCOUNT_DEACTIVATION_TEMPLATE",
    SENDGRID_ACCOUNT_ADMIN_ACTIVATION_TEMPLATE = "SENDGRID_ACCOUNT_ADMIN_ACTIVATION_TEMPLATE",
    SENDGRID_ACCOUNT_ADMIN_DEACTIVATION_TEMPLATE = "SENDGRID_ACCOUNT_ADMIN_DEACTIVATION_TEMPLATE",

    //CERTBOT,
    DOMAINS = "DOMAINS",
    DOMAINS_EMAIL = "DOMAINS_EMAIL",
    CERTBOT_ENV = "CERTBOT_ENV",

    //redis ,
    REDIS_HOST = "REDIS_HOST",
    REDIS_PORT = "REDIS_PORT",
    //mpesa tz new,
    MPESA_ORG_SHORTCODE = "MPESA_ORG_SHORTCODE",
    MPESA_BASE_URL = "MPESA_BASE_URL",
    MPESA_API_KEY = "MPESA_API_KEY",
    MPESA_PUB_KEY = "MPESA_PUB_KEY",
    MPESA_SESSION_TTL = "MPESA_SESSION_TTL",
    DEFAULT_USER_PHOTO_URL = "DEFAULT_USER_PHOTO_URL",
    GOOGLE_MAPS_API_KEY = "GOOGLE_MAPS_API_KEY"
}
