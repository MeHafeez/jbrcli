"use client"

import { useEffect, useState } from "react"
import { Heart, Stethoscope, Shield, Activity, Plus, Zap, Users, Award } from "lucide-react"

interface ParallaxLoaderProps {
  onLoadingComplete: () => void
}

export function ParallaxLoader({ onLoadingComplete }: ParallaxLoaderProps) {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  const loadingSteps = [
    { 
      icon: Shield, 
      text: "Securing Healthcare Infrastructure", 
      subtext: "Implementing advanced security protocols",
      color: "from-emerald-400 to-emerald-600",
      bgColor: "bg-emerald-500/20"
    },
    { 
      icon: Stethoscope, 
      text: "Initializing Medical Systems", 
      subtext: "Loading diagnostic and treatment modules",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-500/20"
    },
    { 
      icon: Users, 
      text: "Connecting Healthcare Network", 
      subtext: "Establishing patient care connections",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-500/20"
    },
    { 
      icon: Heart, 
      text: "Optimizing Patient Experience", 
      subtext: "Finalizing your healthcare journey",
      color: "from-rose-400 to-rose-600",
      bgColor: "bg-rose-500/20"
    },
  ]

  useEffect(() => {
    const duration = 4500 // 4.5 seconds for more professional feel
    const interval = 30 // Smoother updates every 30ms
    const increment = 100 / (duration / interval)

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment
        
        // Update current step based on progress with smoother transitions
        const step = Math.floor((newProgress / 100) * loadingSteps.length)
        setCurrentStep(Math.min(step, loadingSteps.length - 1))

        if (newProgress >= 100) {
          clearInterval(timer)
          setIsExiting(true)
          // Professional exit animation
          setTimeout(() => {
            onLoadingComplete()
          }, 800)
          return 100
        }
        return newProgress
      })
    }, interval)

    return () => clearInterval(timer)
  }, [onLoadingComplete, loadingSteps.length])

  const CurrentIcon = loadingSteps[currentStep]?.icon || Heart

  return (
    <div className={`fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-primary to-slate-800 flex items-center justify-center overflow-hidden transition-all duration-800 ${isExiting ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}>
      {/* Professional Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated Medical Network */}
      <div className="absolute inset-0">
        {/* Floating Medical Icons with Professional Positioning */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${5 + (i % 4) * 25}%`,
              top: `${10 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${4 + (i % 3)}s`,
            }}
          >
            <div className="text-white/30 transform">
              {i % 8 === 0 && <Heart size={24} className="drop-shadow-lg" />}
              {i % 8 === 1 && <Stethoscope size={24} className="drop-shadow-lg" />}
              {i % 8 === 2 && <Shield size={24} className="drop-shadow-lg" />}
              {i % 8 === 3 && <Activity size={24} className="drop-shadow-lg" />}
              {i % 8 === 4 && <Plus size={24} className="drop-shadow-lg" />}
              {i % 8 === 5 && <Zap size={24} className="drop-shadow-lg" />}
              {i % 8 === 6 && <Users size={24} className="drop-shadow-lg" />}
              {i % 8 === 7 && <Award size={24} className="drop-shadow-lg" />}
            </div>
          </div>
        ))}

        {/* Professional Geometric Elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-white/10 rounded-full animate-pulse"
              style={{
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`,
                left: `${20 + (i % 3) * 30}%`,
                top: `${20 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${3 + (i % 2)}s`,
              }}
            />
          ))}
        </div>

        {/* Dynamic Light Rays */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"
              style={{
                width: '200%',
                height: '2px',
                top: `${25 + i * 20}%`,
                left: '-50%',
                animationDelay: `${i * 1.2}s`,
                animationDuration: '4s',
                transform: `rotate(${i * 15}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Professional Main Content */}
      <div className="relative z-10 text-center max-w-lg mx-auto px-8">
        {/* Enhanced Logo Area */}
        <div className="mb-12">
          <div className="relative">
            {/* Multi-layered Logo Animation */}
            <div className="w-28 h-28 mx-auto mb-6 relative">
              {/* Outer Ring */}
              <div className="absolute inset-0 border-2 border-white/30 rounded-full animate-spin" style={{ animationDuration: '8s' }} />
              {/* Middle Ring */}
              <div className="absolute inset-2 border-2 border-white/20 rounded-full animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }} />
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse" />
              
              {/* Central Icon Container */}
              <div className={`relative w-full h-full rounded-full flex items-center justify-center transition-all duration-700 ${loadingSteps[currentStep]?.bgColor || 'bg-white/20'}`}>
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${loadingSteps[currentStep]?.color || 'from-white to-white'} rounded-full blur-lg opacity-50 animate-pulse`} />
                  <CurrentIcon 
                    size={40} 
                    className="relative text-white drop-shadow-2xl transition-all duration-700 transform hover:scale-110" 
                  />
                </div>
              </div>
            </div>
            
            {/* Professional Branding */}
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-white mb-2 tracking-wide">
                JBR <span className="text-white/90">Clinic</span>
              </h1>
              <div className="flex items-center justify-center space-x-2 text-white/70">
                <div className="w-8 h-px bg-white/50"></div>
                <p className="text-sm font-medium tracking-widest uppercase">Healthcare Excellence</p>
                <div className="w-8 h-px bg-white/50"></div>
              </div>
              <p className="text-white/60 text-xs mt-2">Advanced Medical Solutions • Guntur</p>
            </div>
          </div>
        </div>

        {/* Professional Progress System */}
        <div className="mb-8">
          {/* Main Progress Bar */}
          <div className="relative w-full h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/20">
            <div 
              className={`absolute top-0 left-0 h-full rounded-full transition-all duration-500 ease-out bg-gradient-to-r ${loadingSteps[currentStep]?.color || 'from-white to-white/80'}`}
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
              <div className="absolute right-0 top-0 w-4 h-full bg-white/40 blur-sm" />
            </div>
          </div>
          
          {/* Progress Statistics */}
          <div className="flex justify-between items-center mt-3 text-xs">
            <span className="text-white/60 font-mono">LOADING</span>
            <div className="flex items-center space-x-2">
              <span className="text-white font-bold text-sm">{Math.round(progress)}%</span>
              <span className="text-white/60">COMPLETE</span>
            </div>
            <span className="text-white/60 font-mono">SYSTEM</span>
          </div>
        </div>

        {/* Professional Loading Status */}
        <div className="space-y-6">
          {/* Current Operation */}
          <div className="min-h-[60px] flex flex-col items-center justify-center">
            <p className="text-white text-base font-semibold mb-1 transition-all duration-700">
              {loadingSteps[currentStep]?.text || "Initializing System..."}
            </p>
            <p className="text-white/60 text-sm transition-all duration-700">
              {loadingSteps[currentStep]?.subtext || "Please wait..."}
            </p>
          </div>
          
          {/* Professional Step Indicators */}
          <div className="flex justify-center space-x-3">
            {loadingSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${
                    index < currentStep 
                      ? 'bg-white border-white shadow-lg' 
                      : index === currentStep 
                      ? 'bg-white/50 border-white animate-pulse shadow-md' 
                      : 'bg-transparent border-white/30'
                  }`}
                />
                {index < loadingSteps.length - 1 && (
                  <div className={`w-8 h-px transition-all duration-500 ${
                    index < currentStep ? 'bg-white' : 'bg-white/20'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Professional Footer */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex items-center justify-center space-x-4 text-white/50 text-xs">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>SECURE</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>HIPAA COMPLIANT</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>ENCRYPTED</span>
            </div>
          </div>
          <p className="text-white/40 text-xs mt-3 italic font-light">
            "Advancing healthcare through innovation and compassionate care"
          </p>
        </div>
      </div>

      {/* Professional Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.2;
          }
          25% { 
            transform: translateY(-15px) rotate(3deg) scale(1.05); 
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-25px) rotate(0deg) scale(1.1); 
            opacity: 0.4;
          }
          75% { 
            transform: translateY(-15px) rotate(-3deg) scale(1.05); 
            opacity: 0.3;
          }
        }
        
        @keyframes shimmer {
          0% { 
            transform: translateX(-200%) rotate(0deg); 
            opacity: 0;
          }
          50% { 
            transform: translateX(0%) rotate(0deg); 
            opacity: 1;
          }
          100% { 
            transform: translateX(200%) rotate(0deg); 
            opacity: 0;
          }
        }

        @keyframes professionalPulse {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.1;
          }
          50% { 
            transform: scale(1.05); 
            opacity: 0.2;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 4s ease-in-out infinite;
        }

        .animate-professional-pulse {
          animation: professionalPulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

