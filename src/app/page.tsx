'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  CodeBracketIcon,
  RocketLaunchIcon,
  BeakerIcon,
  CubeIcon,
  CommandLineIcon,
  ShieldCheckIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'
import PricingCard from './components/PricingCard'
import FaqItem from './components/FaqItem'
import TestimonialCard from './components/TestimonialCard'
import FeatureCard from './components/FeatureCard'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const features = [
  {
    icon: <BeakerIcon className="w-6 h-6" />,
    title: 'ChatGPT 4.0 Integration',
    description: 'Harness the power of advanced language models for intelligent code generation and analysis.',
  },
  {
    icon: <CubeIcon className="w-6 h-6" />,
    title: 'Gemini 2.0 Features',
    description: 'Leverage Google\'s latest AI technology for enhanced development capabilities.',
  },
  {
    icon: <CommandLineIcon className="w-6 h-6" />,
    title: 'AI Code Generation',
    description: 'Generate production-ready code with intelligent AI assistance.',
  },
  {
    icon: <RocketLaunchIcon className="w-6 h-6" />,
    title: 'VR Development',
    description: 'Build immersive VR experiences with our advanced 3D tools.',
  },
  {
    icon: <ShieldCheckIcon className="w-6 h-6" />,
    title: 'Enhanced Security',
    description: 'Enterprise-grade security with AI-powered threat detection.',
  },
  {
    icon: <ChartBarIcon className="w-6 h-6" />,
    title: 'Smart Analytics',
    description: 'AI-driven insights to optimize your application performance.',
  },
]

const pricingPlans = [
  {
    title: 'Premium',
    price: '99',
    description: 'Perfect for startups and individual developers',
    features: [
      'Up to 500 dynamic pages',
      'All AI features included',
      'MongoDB & Supabase integration',
      'Stripe payment processing',
      'Community support',
      'Basic AI models access',
      'Standard API limits',
    ],
    buttonText: 'Get Started',
    priceId: 'price_1QTPalGI6vk81n8V8PtyW1ow'
  },
  {
    title: 'Professional',
    price: '249',
    description: 'For growing businesses and agencies',
    features: [
      'Unlimited dynamic pages',
      'Code-X assistant access',
      'VR & 3D capabilities',
      'Priority support',
      'Custom integrations',
      'Advanced AI models',
      'Higher API limits',
    ],
    buttonText: 'Start Free Trial',
    popular: true,
    priceId: 'price_1QTPbgGI6vk81n8VgYFOi983'
  },
  {
    title: 'Enterprise',
    price: '999',
    description: 'For organizations requiring custom solutions',
    features: [
      'Unlimited everything',
      'White-label solution',
      '24/7 phone support',
      'Custom development',
      'Advanced AI features',
      'Custom AI model training',
      'Unlimited API access',
    ],
    buttonText: 'Contact Sales',
    priceId: 'price_1QTPcUGI6vk81n8V9567pzL9'
  },
]

const faqs = [
  {
    question: 'What AI models are included?',
    answer: 'Code-X includes integration with ChatGPT 4.0 and Gemini 2.0, along with custom-trained models for specific development tasks.',
  },
  {
    question: 'How does the AI code generation work?',
    answer: 'Our AI analyzes your requirements and generates production-ready code using best practices and modern design patterns.',
  },
  {
    question: 'Can I customize the AI models?',
    answer: 'Yes, Enterprise plan users can train custom AI models tailored to their specific development needs.',
  },
  {
    question: 'What kind of security measures are in place?',
    answer: 'We implement enterprise-grade security with AI-powered threat detection, encryption, and regular security audits.',
  },
]

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Lead Developer',
    company: 'TechCorp',
    image: '/testimonials/sarah.jpg',
    content: 'Code-X has revolutionized our development process. The AI code generation is incredibly accurate and saves us hours of work.',
  },
  {
    name: 'Michael Rodriguez',
    role: 'CTO',
    company: 'InnovateLabs',
    image: '/testimonials/michael.jpg',
    content: 'The integration of ChatGPT 4.0 and Gemini 2.0 sets Code-X apart. It\'s like having an AI-powered development team.',
  },
  {
    name: 'Emily Watson',
    role: 'Product Manager',
    company: 'FutureScale',
    image: '/testimonials/emily.jpg',
    content: 'The VR development tools are outstanding. We\'ve built complex 3D experiences in a fraction of the time.',
  },
  {
    name: 'Vivek',
    role: 'Developer',
    company: '',
    image: '/path/to/vivek-avatar.png',
    content: 'Code-X has transformed our workflow and increased our productivity!',
  },
  {
    name: 'Ansh Kumar',
    role: 'Designer',
    company: '',
    image: '/path/to/ansh-avatar.png',
    content: 'The AI features in Code-X are game-changers for our projects!',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#1a1a1a]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-white">
              Code-X
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/features" className="text-white/70 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-white/70 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/docs" className="text-white/70 hover:text-white transition-colors">
                Docs
              </Link>
              <Link href="/auth" className="text-[#0ea5e9] hover:text-[#0ea5e9]/80 transition-colors">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="text-center"
          >
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#0ea5e9]/10 text-[#0ea5e9] text-sm mb-6"
            >
              Powered by ChatGPT 4.0 & Gemini 2.0
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Transform Your Development<br />with AI-Powered Tools
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl text-white/60 max-w-3xl mx-auto mb-8"
            >
              Build next-generation websites and applications with advanced AI technology.
              Experience the future of development with Code-X.
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/auth?action=signup"
                className="inline-flex justify-center items-center px-8 py-4 rounded-lg bg-[#0ea5e9] text-white font-medium hover:bg-[#0ea5e9]/90 transition-colors"
              >
                Get Started Free
              </Link>
              <Link
                href="/docs"
                className="inline-flex justify-center items-center px-8 py-4 rounded-lg border border-white/10 text-white font-medium hover:bg-white/5 transition-colors"
              >
                View Documentation
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#0ea5e9]/30 rounded-full filter blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#0ea5e9]/20 rounded-full filter blur-3xl" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl font-bold text-white mb-4"
            >
              Advanced AI Features
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-white/60 text-lg"
            >
              Discover the power of AI-driven development
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 bg-[#0ea5e9]/10 rounded-lg text-[#0ea5e9]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-white/60">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl font-bold text-white mb-4"
            >
              Choose Your Plan
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-white/60 text-lg"
            >
              Select the perfect plan for your development needs
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
              >
                <PricingCard {...plan} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl font-bold text-white mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-6"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
              >
                <FaqItem {...faq} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl font-bold text-white mb-4"
            >
              What Our Users Say
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Code-X</h3>
              <p className="text-white/60">
                Transform your development process with advanced AI technology.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/features" className="text-white/60 hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-white/60 hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="text-white/60 hover:text-white">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-white/60 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-white/60 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-white/60 hover:text-white">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-white/60 hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-white/60 hover:text-white">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 text-center text-white/60">
            <p>&copy; 2024 Code-X. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
