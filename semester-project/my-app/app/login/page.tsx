import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: 'User login page',
}

export default function Login() {
    return (
     <p>Login page, will change depending on user logged in status.</p>
    )
  }
  