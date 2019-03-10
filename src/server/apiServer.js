const ipMap = {}

export default (app) => {
  app.get('/ssr/news', (req, res) => {
    console.log('get news')
    res.json(new Array(5).fill(1).map((v, idx) => ({
      id: idx,
      news: idx
    })))
  })

  app.get('/ssr/login', (req, res) => {
    console.log(req.ip)
    ipMap[req.ip] = true
    res.json({
      success: true
    })
  })
  app.get('/ssr/logout', (req, res) => {
    console.log(req.ip)
    ipMap[req.ip] = false
    res.json({
      success: true
    })
  })

  app.get('/ssr/isLogin', (req, res) => {
    console.log('ssr isLogin', !!ipMap[req.ip])
    res.json({
      success: true,
      isLogin: !!ipMap[req.ip]
    })
  })

  app.get('/ssr/trans', (req, res) => {
    console.log('ssr trans')
    if (!ipMap[req.ip]) return res.json({
      success: false
    })
    res.json({
      success: true,
      list: [
        {id: 1, text: 1},
        {id: 2, text: 2},
        {id: 3, text: 3},
      ]
    })
  })
}
