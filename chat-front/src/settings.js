const isDev = process.env.NODE_ENV === 'development';

const devSettings = {
    api: 'http://localhost:3004',
    backendUrl: 'http://localhost:3027/api'
}

const prodSettings = {
    api: 'http://localhost:3004',
    backendUrl: 'http://localhost:3027/api'
}

export default isDev ? devSettings : prodSettings;