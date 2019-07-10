const cors = () => {
  return (req, res, next) => {
    if (req.get('Origin')) {
      res.setHeader('Access-Control-Allow-Origin', req.get('Origin'))
      res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, POST, PUT, DELETE, PATCH')
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Client-Id, X-Request-Id')
      res.setHeader('Access-Control-Expose-Headers', 'WWW-Authenticate')
      // Cache pre-flight check result for 10 minutes, that is max that Chromium will take.
      res.setHeader('Access-Control-Max-Age', 600)
    }
    if (req.method === 'OPTIONS') {
      res.end()
      return
    }
    next()
  }
}

export default cors
