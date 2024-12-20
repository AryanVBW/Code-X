'use client'

import Link from 'next/link'
import {
  BookOpenIcon,
  CodeBracketIcon,
  BeakerIcon,
  CubeIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  CommandLineIcon,
  WrenchIcon,
} from '@heroicons/react/24/outline'

const sections = [
  {
    title: 'Getting Started',
    icon: RocketLaunchIcon,
    items: [
      { name: 'Quick Start Guide', href: '/docs/quickstart' },
      { name: 'Installation', href: '/docs/installation' },
      { name: 'Basic Configuration', href: '/docs/configuration' },
      { name: 'Authentication Setup', href: '/docs/auth' },
    ],
  },
  {
    title: 'AI Integration',
    icon: BeakerIcon,
    items: [
      { name: 'ChatGPT 4.0 Setup', href: '/docs/chatgpt' },
      { name: 'Gemini 2.0 Integration', href: '/docs/gemini' },
      { name: 'Code-X AI Features', href: '/docs/code-x-ai' },
      { name: 'AI Model Configuration', href: '/docs/ai-models' },
    ],
  },
  {
    title: 'Development Tools',
    icon: CodeBracketIcon,
    items: [
      { name: 'Code Generation', href: '/docs/code-generation' },
      { name: 'AI-Powered Testing', href: '/docs/ai-testing' },
      { name: 'VR Development', href: '/docs/vr-dev' },
      { name: '3D Asset Integration', href: '/docs/3d-assets' },
    ],
  },
  {
    title: 'Security & Infrastructure',
    icon: ShieldCheckIcon,
    items: [
      { name: 'Security Best Practices', href: '/docs/security' },
      { name: 'API Authentication', href: '/docs/api-auth' },
      { name: 'Data Protection', href: '/docs/data-protection' },
      { name: 'Compliance Guide', href: '/docs/compliance' },
    ],
  },
  {
    title: 'API Reference',
    icon: CommandLineIcon,
    items: [
      { name: 'REST API', href: '/docs/rest-api' },
      { name: 'GraphQL API', href: '/docs/graphql' },
      { name: 'WebSocket API', href: '/docs/websocket' },
      { name: 'Rate Limits', href: '/docs/rate-limits' },
    ],
  },
  {
    title: 'Advanced Topics',
    icon: WrenchIcon,
    items: [
      { name: 'Custom AI Models', href: '/docs/custom-models' },
      { name: 'Enterprise Integration', href: '/docs/enterprise' },
      { name: 'Performance Optimization', href: '/docs/performance' },
      { name: 'Scaling Guide', href: '/docs/scaling' },
    ],
  },
]

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#1a1a1a]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#000000]/80 backdrop-blur-sm border-b border-white/5">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-white font-bold text-xl">
              Code-X
            </Link>
            <nav className="flex items-center space-x-6">
              <Link href="/features" className="text-white/80 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-white/80 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/auth" className="text-[#0ea5e9] hover:text-[#0ea5e9]/80 transition-colors">
                Sign In
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#0ea5e9]/10 text-[#0ea5e9] text-sm mb-4">
            Comprehensive Documentation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Build with Code-X
          </h1>
          <p className="text-white/60 text-lg mb-8">
            Everything you need to know about building AI-powered websites with Code-X
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent"
              />
              <div className="absolute right-3 top-3 text-white/40">
                Press / to search
              </div>
            </div>
          </div>
        </div>

        {/* Documentation Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <div
                key={section.title}
                className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Icon className="w-6 h-6 text-[#0ea5e9]" />
                  <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="flex items-center text-white/60 hover:text-white transition-colors"
                      >
                        <span className="text-sm">{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}