export type Service = {
  _id: string; title: string; slug: string
  description: string; icon: string; image: string
}

export type Project = {
  _id: string; title: string; slug: string; category: string
  duration: string; description: string; image: string
  testimonial?: { review: string; author: string; avatar: string }
}

export type Testimonial = {
  _id: string; name: string; review: string
  avatar: string; service: string; rating: number
}

export type FAQ = { _id: string; question: string; answer: string }
