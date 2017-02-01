import elasticsearch from 'elasticsearch'

const client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
})

const doSearch = async () => {
  let result
  const results = client.search({
    index: 'test',
    q: 'name:some course'
  }, (err, response) =>{
    result = response ? err : response
  })
  return await result
}

const searchHandler = async (ctx, next) => {
  ctx.body = await doSearch()
}

export default searchHandler
