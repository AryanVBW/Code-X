'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  BeakerIcon,
  CubeIcon,
  CommandLineIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CodeBracketIcon,
  CloudIcon,
  CpuChipIcon,
  LightBulbIcon,
  DocumentTextIcon,
  CursorArrowRaysIcon,
} from '@heroicons/react/24/outline'

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
    title: 'AI Development',
    description: 'Harness the power of advanced AI models',
    icon: BeakerIcon,
    features: [
      {
        name: 'ChatGPT 4.0 Integration',
        description: 'Access the latest language model for intelligent code generation and analysis',
      },
      {
        name: 'Gemini 2.0 Features',
        description: 'Leverage Google\'s advanced AI for enhanced development capabilities',
      },
      {
        name: 'Custom AI Training',
        description: 'Train models on your specific development patterns and requirements',
      },
    ],
  },
  {
    title: 'Code Generation',
    description: 'Generate production-ready code instantly',
    icon: CodeBracketIcon,
    features: [
      {
        name: 'Smart Code Completion',
        description: 'AI-powered suggestions that understand your codebase context',
      },
      {
        name: 'Automated Testing',
        description: 'Generate comprehensive test suites automatically',
      },
      {
        name: 'Code Optimization',
        description: 'Intelligent refactoring and performance improvements',
      },
    ],
  },
  {
    title: 'VR Development',
    description: 'Build immersive virtual experiences',
    icon: CubeIcon,
    features: [
      {
        name: '3D Asset Creation',
        description: 'Generate and optimize 3D models with AI assistance',
      },
      {
        name: 'VR Environment Design',
        description: 'Create interactive virtual spaces effortlessly',
      },
      {
        name: 'Physics Simulation',
        description: 'Realistic physics engines for immersive experiences',
      },
    ],
  },
  {
    title: 'Cloud Integration',
    description: 'Seamless cloud service integration',
    icon: CloudIcon,
    features: [
      {
        name: 'Multi-Cloud Support',
        description: 'Deploy to AWS, Google Cloud, or Azure with ease',
      },
      {
        name: 'Serverless Functions',
        description: 'Auto-scaling and cost-effective cloud functions',
      },
      {
        name: 'Database Management',
        description: 'Intelligent data handling and optimization',
      },
    ],
  },
  {
    title: 'Security',
    description: 'Enterprise-grade security features',
    icon: ShieldCheckIcon,
    features: [
      {
        name: 'AI Threat Detection',
        description: 'Proactive security monitoring and response',
      },
      {
        name: 'Automated Auditing',
        description: 'Continuous security assessment and reporting',
      },
      {
        name: 'Compliance Tools',
        description: 'Stay compliant with automated checks and balances',
      },
    ],
  },
  {
    title: 'Analytics',
    description: 'Deep insights into your application',
    icon: ChartBarIcon,
    features: [
      {
        name: 'AI-Powered Metrics',
        description: 'Intelligent analysis of application performance',
      },
      {
        name: 'User Behavior Tracking',
        description: 'Understand user patterns with ML models',
      },
      {
        name: 'Predictive Analytics',
        description: 'Forecast trends and optimize resources',
      },
    ],
  },
]

const upcomingFeatures = [
  {
    name: 'Advanced AI Models',
    description: 'Next-generation language models for even more powerful code generation',
    icon: CpuChipIcon,
    eta: 'Q1 2024',
  },
  {
    name: 'AI Code Reviews',
    description: 'Automated code reviews with detailed suggestions and best practices',
    icon: DocumentTextIcon,
    eta: 'Q1 2024',
  },
  {
    name: 'Smart Debugging',
    description: 'AI-powered debugging that identifies and fixes issues automatically',
    icon: LightBulbIcon,
    eta: 'Q2 2024',
  },
  {
    name: 'No-Code AI Builder',
    description: 'Visual AI model builder for non-technical users',
    icon: CursorArrowRaysIcon,
    eta: 'Q2 2024',
  },
]

export default function FeaturesPage() {
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
              Powered by Advanced AI Technology
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Features that Revolutionize<br />Your Development Workflow
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl text-white/60 max-w-3xl mx-auto mb-8"
            >
              Experience the future of development with our cutting-edge AI-powered features
            </motion.p>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#0ea5e9]/30 rounded-full filter blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#0ea5e9]/20 rounded-full filter blur-3xl" />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-2 bg-[#0ea5e9]/10 rounded-lg text-[#0ea5e9]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                      <p className="text-white/60">{category.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="mt-1">
                          <div className="w-2 h-2 bg-[#0ea5e9] rounded-full" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">{feature.name}</h4>
                          <p className="text-sm text-white/60">{feature.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Upcoming Features */}
      <section className="py-24 relative bg-white/[0.02]">
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
              Coming Soon
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-white/60 text-lg"
            >
              Exciting new features on our roadmap
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {upcomingFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 bg-[#0ea5e9]/10 rounded-lg text-[#0ea5e9]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">{feature.name}</h3>
                      <span className="text-sm text-[#0ea5e9]">{feature.eta}</span>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center"
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl font-bold text-white mb-6"
            >
              Ready to Transform Your Development?
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-white/60 max-w-3xl mx-auto mb-8"
            >
              Join thousands of developers who are already building the future with Code-X
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
                href="/contact"
                className="inline-flex justify-center items-center px-8 py-4 rounded-lg border border-white/10 text-white font-medium hover:bg-white/5 transition-colors"
              >
                Contact Sales
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}