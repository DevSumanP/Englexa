import { client } from './client'

export async function getServices()     { return client.fetch(`*[_type == "service"] | order(order asc)`) }
export async function getProjects()     { return client.fetch(`*[_type == "project"] | order(completedAt desc)`) }
export async function getTestimonials() { return client.fetch(`*[_type == "testimonial" && approved == true]`) }
export async function getFAQs()         { return client.fetch(`*[_type == "faq"] | order(order asc)`) }
