// Anyiko Production Configuration
// Environment based configuration foundation

module.exports = {
  environment: process.env.NODE_ENV || 'development',
  database: {
    url: process.env.DATABASE_URL || ''
  },
  storage: {
    provider: process.env.STORAGE_PROVIDER || 'local',
    bucket: process.env.STORAGE_BUCKET || ''
  },
  security: {
    sessionSecret: process.env.SESSION_SECRET || '',
    adminProtection: true
  },
  logging: {
    enabled: true
  }
};
