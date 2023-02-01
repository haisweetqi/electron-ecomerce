type Role = 'User' | 'Admin'

export interface User {
  id: string
  name?: string
  age?: number
  gender?: string // ISO 8610
  phone?: string
  email: string
  address?: string
  user_image?: string
  created_at: string
  updated_at: string
}
