module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    apiCloseUrl: "http://localhost:5000",
    // apiCloseUrl: "http://172.18.141.41:3131",
    endpointAD: "/login/",
    endpointCreateAlert: "/createAlert/",
    endpointEsbGet: "/esbGet/",
    endpointFetchService: "/fetchService/",
    endpointUpdateCache: "/updateCacheESB/",
    endpointAuditTrail: "/audit/",
  },
};
