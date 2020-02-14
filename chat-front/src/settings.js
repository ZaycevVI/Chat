const isDev = process.env.NODE_ENV === 'development';

const devSettings = {
    api: 'http://localhost:3004'
}

const prodSettings = {
    api: 'http://localhost:3004'
}

export default isDev ? devSettings : prodSettings;