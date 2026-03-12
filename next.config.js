/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  async redirects() {
    const domainRedirects = [
      // Core brand domains
      { host: 'chicagolandstumpgrinding.com', dest: '/' },
      { host: 'chicagostumpremoval.com', dest: '/stump-removal-chicago' },
      { host: 'chicagotreespecialists.com', dest: '/tree-service-chicago' },
      // Stump grinding suburb domains
      { host: 'napervillestumpgrinding.com', dest: '/service-areas/naperville-stump-grinding' },
      { host: 'napervillestumpremoval.com', dest: '/service-areas/naperville-stump-grinding' },
      { host: 'hinsdalestumpgrinding.com', dest: '/service-areas/hinsdale-stump-grinding' },
      { host: 'downersgrovestumpgrinding.com', dest: '/service-areas/downers-grove-stump-grinding' },
      { host: 'glenellynstumpgrinding.com', dest: '/service-areas/glen-ellyn-stump-grinding' },
      { host: 'oakbrookstumpgrinding.com', dest: '/service-areas/oak-brook-stump-grinding' },
      { host: 'westernspringsstumpgrinding.com', dest: '/service-areas/western-springs-stump-grinding' },
      { host: 'lagrangestumpgrinding.com', dest: '/service-areas/la-grange-stump-grinding' },
      { host: 'burrridgestumpgrinding.com', dest: '/service-areas/burr-ridge-stump-grinding' },
      { host: 'elmhurststumpgrinding.com', dest: '/service-areas/elmhurst-stump-grinding' },
      { host: 'wheatonstumpgrinding.com', dest: '/service-areas/wheaton-stump-grinding' },
      { host: 'darienstumpgrinding.com', dest: '/service-areas/darien-stump-grinding' },
      { host: 'lemontstumpgrinding.com', dest: '/service-areas/lemont-stump-grinding' },
      { host: 'homerglenstumpgrinding.com', dest: '/service-areas/homer-glen-stump-grinding' },
      // Tree service suburb domains
      { host: 'hinsdaletreeservice.com', dest: '/service-areas/hinsdale-tree-service' },
      { host: 'glenellyntreeservice.com', dest: '/service-areas/glen-ellyn-tree-service' },
      { host: 'oakbrooktreeservice.com', dest: '/service-areas/oak-brook-tree-service' },
      { host: 'westernspringstreeservice.com', dest: '/service-areas/western-springs-tree-service' },
      { host: 'burrridgetreeservice.com', dest: '/service-areas/burr-ridge-tree-service' },
      { host: 'elmhursttreeservice.com', dest: '/service-areas/elmhurst-tree-service' },
      { host: 'wheatontreeservice.com', dest: '/service-areas/wheaton-tree-service' },
      { host: 'lemonttreeservice.com', dest: '/service-areas/lemont-tree-service' },
      { host: 'homerglentreeservice.com', dest: '/service-areas/homer-glen-tree-service' },
    ];

    const redirects = [];
    for (const { host, dest } of domainRedirects) {
      // Root domain
      redirects.push({
        source: '/:path*',
        has: [{ type: 'host', value: host }],
        destination: `https://chicagostumpgrinding.com${dest}`,
        permanent: true,
      });
      // www subdomain
      redirects.push({
        source: '/:path*',
        has: [{ type: 'host', value: `www.${host}` }],
        destination: `https://chicagostumpgrinding.com${dest}`,
        permanent: true,
      });
    }
    return redirects;
  },
};

module.exports = nextConfig;
