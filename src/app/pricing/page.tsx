'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { CheckIcon, BeakerIcon, RocketLaunchIcon, CubeIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Premium',
    description: 'Perfect for startups leveraging advanced AI development',
    price: {
      monthly: 99,
      annually: 79,
    },
    features: [
      'ChatGPT 4.0 Integration',
      'Gemini 2.0 Features',
      'AI Code Generation',
      'MongoDB & Supabase integration',
      'Community support',
      'Smart Analytics',
      'Standard API limits (10k calls/month)',
    ],
    cta: 'Get Started',
    highlighted: false,
    icon: RocketLaunchIcon,
    href: '/auth?plan=premium',
  },
  {
    name: 'Professional',
    description: 'For businesses requiring advanced AI and VR capabilities',
    price: {
      monthly: 249,
      annually: 199,
    },
    features: [
      'Custom AI Model Training',
      'VR Development Tools',
      'Advanced Code Generation',
      'Priority 24/7 Support',
      'Custom Integrations',
      'Enhanced Security Features',
      'Higher API limits (50k calls/month)',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
    icon: BeakerIcon,
    href: '/auth?plan=professional&trial=true',
  },
  {
    name: 'Enterprise',
    description: 'For organizations needing custom AI solutions at scale',
    price: {
      monthly: 999,
      annually: 799,
    },
    features: [
      'Dedicated AI Infrastructure',
      'Custom AI Model Development',
      'Advanced VR/AR Solutions',
      'White-label Platform',
      'Enterprise Security Suite',
      'Dedicated Support Team',
      'Unlimited API Access',
    ],
    cta: 'Contact Sales',
    highlighted: false,
    icon: CubeIcon,
    href: '/contact?plan=enterprise',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)
  const router = useRouter()

  const handlePlanClick = (href: string) => {
    router.push(href)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#1a1a1a]">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#000000]/80 backdrop-blur-sm border-b border-white/5"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-white font-bold text-xl">
              Code-X
            </Link>
            <nav className="flex items-center space-x-6">
              <Link href="/features" className="text-white/80 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/docs" className="text-white/80 hover:text-white transition-colors">
                Documentation
              </Link>
              <Link href="/auth" className="text-[#0ea5e9] hover:text-[#0ea5e9]/80 transition-colors">
                Sign In
              </Link>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-[#0ea5e9]/10 text-[#0ea5e9] text-sm mb-4"
          >
            Next-Gen AI Development Platform
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Accelerate Development<br />with Advanced AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/60 text-lg mb-12"
          >
            Choose your plan and transform your development workflow with AI
          </motion.p>

          {/* Pricing Toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center space-x-4 mb-12"
          >
            <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-white/60'}`}>Monthly</span>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-[#0ea5e9]' : 'bg-gray-700'
              }`}
            >
              <motion.span
                layout
                className={`inline-block h-4 w-4 transform rounded-full bg-white`}
                animate={{
                  x: isAnnual ? 24 : 4,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              />
            </motion.button>
            <span className={`text-sm ${isAnnual ? 'text-white' : 'text-white/60'}`}>
              Annual <span className="text-[#0ea5e9]">(-20%)</span>
            </span>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {plans.map((plan) => {
              const Icon = plan.icon
              return (
                <motion.div
                  key={plan.name}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  className={`rounded-2xl p-8 ${
                    plan.highlighted
                      ? 'bg-[#0ea5e9] text-white'
                      : 'bg-white/5 text-white hover:bg-white/10'
                  } transition-all duration-200`}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Icon className="w-12 h-12 mb-6 mx-auto" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm opacity-80 mb-6">{plan.description}</p>
                  <motion.div
                    className="mb-6"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-4xl font-bold">
                      ${isAnnual ? plan.price.annually : plan.price.monthly}
                    </span>
                    <span className="text-sm opacity-80">/month</span>
                  </motion.div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center text-sm"
                      >
                        <CheckIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handlePlanClick(plan.href)}
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                      plan.highlighted
                        ? 'bg-white text-[#0ea5e9] hover:bg-white/90'
                        : 'bg-[#0ea5e9] text-white hover:bg-[#0ea5e9]/90'
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}