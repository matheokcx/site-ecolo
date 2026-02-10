module.exports = {
    apps: [{
        name: 'site-ecolo',
        script: 'npm',
        args: 'start',
        cwd: '/var/www/site-ecolo',
        instances: 1,
        exec_mode: 'fork',
        env: {
            NODE_ENV: 'production',
            PORT: 3000
        },
        error_file: '/var/log/pm2/mon-app-error.log',
        out_file: '/var/log/pm2/mon-app-out.log',
        log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    }]
};
