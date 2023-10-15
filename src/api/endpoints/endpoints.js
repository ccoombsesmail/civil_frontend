/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
// export const BACKEND_DEV = 'http://civil_backend.deployments.local:8090/api/v1'
// export const UPLOAD_SERVICE = 'http://civil_upload_service.deployments.local:8091/api/v1'

export const BACKEND_DEV = `https://backend.staging.civil-beta.civil-beta.xyz/api/v1`
export const UPLOAD_SERVICE = `https://misc.staging.civil-beta.civil-beta.xyz/multi-api/v1`
export const NOTIFICATIONS_SERVICE = `https://notifications.staging.civil-beta.civil-beta.xyz/notifications-api/v1`

export const ENDPOINTS = {
  production: {
    BACKEND: `https://backend.staging.civil-beta.civil-beta.xyz/api/v1`,
    UPLOAD_SERVICE: `https://misc.staging.civil-beta.civil-beta.xyz/multi-api/v1`,
    NOTIFICATIONS_SERVICE: `https://notifications.staging.civil-beta.civil-beta.xyz/notifications-api/v1`,
    NOTIFICATIONS_SERVICE_WS: `https://notifications.staging.civil-beta.civil-beta.xyz/notifications`,
    WEB_SCRAPER_SERVICE: `https://web-scraper.staging.civil-beta.civil-beta.xyz/web-scraper-api/v1`,

  },
  development: {
    BACKEND: `http://${window.location.hostname}:8090/api/v1`,
    UPLOAD_SERVICE: `http://${window.location.hostname}:8091/multi-api/v1`,
    NOTIFICATIONS_SERVICE: `http://${window.location.hostname}:8093/notifications-api/v1`,
    NOTIFICATIONS_SERVICE_WS: `http://${window.location.hostname}:8093`,
    WEB_SCRAPER_SERVICE: `http://${window.location.hostname}:8094/web-scraper-api/v1`,

  },
}

export const selectedEndpoints = ENDPOINTS[process.env.NODE_ENV]

export default selectedEndpoints
