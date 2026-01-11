'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setMessage('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setStatus('success')
        setMessage('Message sent successfully.')
        ;(e.target as HTMLFormElement).reset()
      } else {
        setStatus('error')
        setMessage('Failed to send message. Please try again or use email directly.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Failed to send message. Please try again or use email directly.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded bg-background text-foreground focus:outline-none focus:border-foreground transition-all"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded bg-background text-foreground focus:outline-none focus:border-foreground transition-all"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded bg-background text-foreground focus:outline-none focus:border-foreground transition-all"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-4 py-2 border border-gray-300 rounded bg-background text-foreground focus:outline-none focus:border-foreground transition-all resize-y"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="px-6 py-2 bg-foreground text-background hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'Sending...' : 'Send message'}
        </button>
      </div>

      {message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-sm p-3 rounded ${
            status === 'success' ? 'text-green-700 bg-green-50' : 'text-red-700 bg-red-50'
          }`}
        >
          {message}
        </motion.div>
      )}
    </form>
  )
}
