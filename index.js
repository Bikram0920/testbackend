require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const githubData = {
  "login": "Bikram0920",
  "id": 112681116,
  "node_id": "U_kgDOBrdgnA",
  "avatar_url": "https://avatars.githubusercontent.com/u/112681116?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Bikram0920",
  "html_url": "https://github.com/Bikram0920",
  "followers_url": "https://api.github.com/users/Bikram0920/followers",
  "following_url": "https://api.github.com/users/Bikram0920/following{/other_user}",
  "gists_url": "https://api.github.com/users/Bikram0920/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Bikram0920/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Bikram0920/subscriptions",
  "organizations_url": "https://api.github.com/users/Bikram0920/orgs",
  "repos_url": "https://api.github.com/users/Bikram0920/repos",
  "events_url": "https://api.github.com/users/Bikram0920/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Bikram0920/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Bikram Dangua",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Student",
  "twitter_username": null,
  "public_repos": 9,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2022-09-02T05:19:39Z",
  "updated_at": "2024-01-25T14:57:38Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req,res) =>{
  res.send("<h1>Login Page</h1>");
})

app.get('/youtube',(req,res)=>{
  res.send("<h2 style = color:red>Welocme To Youtube</h2>")
})

app.get('/github',(req,res) =>{
  res.json(githubData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})