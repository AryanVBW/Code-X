'use client'

import { useState, useEffect, useCallback } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import {
  CreditCardIcon,
  UserCircleIcon,
  ChevronDownIcon,
  BeakerIcon,
  CubeIcon,
} from '@heroicons/react/24/outline'
import { User } from '@supabase/supabase-js'

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false)
  const [credits, setCredits] = useState<number>(0)
  const [animatedCredits, setAnimatedCredits] = useState<number>(0)
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()
  const supabase = createClientComponentClient()

  const fetchUserAndCredits = useCallback(async (): Promise<void> => {
    try {
      const { data: { user: currentUser }, error: userError } = await supabase.auth.getUser()
  
      if (userError) {
        console.error('Error fetching user:', userError.message)
        return
      }
  
      if (!currentUser) {
        console.log('No user found')
        return
      }
  
      setUser(currentUser)
  
      const { data: creditsData, error: creditsError } = await supabase
        .from('user_credits')
        .select('credits')
        .eq('user_id', currentUser.id)
        .single()
  
      if (creditsError) {
        if (creditsError.code === 'PGRST116' && currentUser.email_confirmed_at) {
          const { data: existingCredits } = await supabase
            .from('user_credits')
            .select('credits')
            .eq('user_id', currentUser.id)
            .single()
  
          if (!existingCredits) {
            const { data: newCredits, error: insertError } = await supabase
              .from('user_credits')
              .insert([{
                user_id: currentUser.id,
                credits: 1000, // Increased initial credits for AI features
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
              }])
              .select('credits')
              .single()
  
            if (insertError) {
              console.error('Error creating credits record:', insertError.message)
              return
            }
  
            setCredits(newCredits?.credits || 0)
            return
          } else {
            console.log('User already has credits:', existingCredits.credits);
            setCredits(existingCredits.credits);
            return;
          }
        }
  
        console.error('Error fetching credits:', creditsError.message)
        return
      }
  
      setCredits(creditsData?.credits || 0)
    } catch (error) {
      if (error instanceof Error) {
        console.error('Unexpected error:', error.message)
      } else {
        console.error('Unknown error:', error)
      }
    }
  }, [supabase])

  useEffect(() => {
    fetchUserAndCredits()
  }, [fetchUserAndCredits])

  useEffect(() => {
    const animateCredits = () => {
      const start = animatedCredits;
      const end = credits;
      const duration = 1000;
      const increment = (end - start) / (duration / 16);
      let current = start;

      const animate = () => {
        current += increment;
        if (
          (increment > 0 && current >= end) ||
          (increment < 0 && current <= end)
        ) {
          setAnimatedCredits(end);
        } else {
          setAnimatedCredits(current);
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    animateCredits();
  }, [credits]);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut()
      router.push('/auth')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <header className="h-16 bg-black/40 backdrop-blur-sm border-b border-white/5">
      <div className="h-full px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold text-white">NST-AI X</div>
          <div className="flex items-center space-x-2 px-3 py-1.5 bg-[#6366f1]/10 text-[#6366f1] rounded-lg">
            <BeakerIcon className="w-4 h-4" />
            <span className="text-sm font-medium">ChatGPT 4.0</span>
          </div>
          <div className="flex items-center space-x-2 px-3 py-1.5 bg-[#6366f1]/10 text-[#6366f1] rounded-lg">
            <CubeIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Gemini 2.0</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Credits Display */}
          <div className="flex items-center space-x-2 px-3 py-1.5 bg-[#6366f1]/10 text-[#6366f1] rounded-lg">
            <CreditCardIcon className="w-4 h-4" />
            <span className="text-sm font-medium">
              {Math.round(animatedCredits)} AI Credits
            </span>
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 text-white/80 hover:text-white"
            >
              <UserCircleIcon className="w-6 h-6" />
              <span className="text-sm">{user?.email}</span>
              <ChevronDownIcon className="w-4 h-4" />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-sm border border-white/10 rounded-lg shadow-xl">
                <div className="py-1">
                  <button
                    onClick={() => router.push('/dashboard/profile')}
                    className="block w-full px-4 py-2 text-left text-sm text-white/80 hover:bg-white/5 hover:text-white"
                  >
                    Profile Settings
                  </button>
                  <button
                    onClick={() => router.push('/dashboard/billing')}
                    className="block w-full px-4 py-2 text-left text-sm text-white/80 hover:bg-white/5 hover:text-white"
                  >
                    Billing & Credits
                  </button>
                  <button
                    onClick={handleSignOut}
                    className="block w-full px-4 py-2 text-left text-sm text-white/80 hover:bg-white/5 hover:text-white"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
