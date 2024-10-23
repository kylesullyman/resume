// next.config.js
module.exports = {
    output: 'export',  // Use this for static export
    basePath: '/resume',
    images: {
        unoptimized: true, // Disable image optimization
    },
    // Optionally, set basePath if deploying to a subdirectory
    // basePath: '/your-repo-name',
};
