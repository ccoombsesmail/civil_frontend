/* eslint-disable import/prefer-default-export */
// export const BACKEND_DEV = 'http://civil_backend.deployments.local:8090/api/v1'
// export const UPLOAD_SERVICE = 'http://civil_upload_service.deployments.local:8091/api/v1'

export const BACKEND_DEV = `http://${window.location.hostname}:8090/api/v1`
export const UPLOAD_SERVICE = `http://${window.location.hostname}:8091/api/v1`
