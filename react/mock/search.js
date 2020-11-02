export default {
  'GET /api/getLists.json': {
    lists: ['a','b','c','d']
  },
  'GET /api/getListsAsync.json': (req, res) => {
    setTimeout(() => {
      res.json({
        lists: Array(10).fill(req.query.value)
      })
    },500)

  }
}
