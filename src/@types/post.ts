export interface Post {
  html_url: string
  created_at: string
  title: string
  number: number
  body: string
  id: number
  comments: number
  user: {
    login: string
    html_url: string
  }
}

export interface PostsResponse {
  items: Post[]
}
