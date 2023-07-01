/** @type {import('next').NextConfig} */
const nextConfig = {
    /* if we using external domain we need to add this function */
images:{
    domains:[
        "images.pexels.com",
        "cdn.stocksnap.io",
        "cdn-icons-png.flaticon.com"
    ],
    typescript:{
        ignoreBuildErrors:true,
    }
}

}

module.exports = nextConfig
