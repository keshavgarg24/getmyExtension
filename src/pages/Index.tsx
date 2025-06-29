
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Github } from 'lucide-react';
import { toast } from 'sonner';

const Index = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createConfetti = () => {
    const colors = ['#facc15', '#22c55e', '#84cc16', '#eab308'];
    const confettiCount = 150;
    
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti-piece';
      confetti.style.cssText = `
        position: fixed;
        width: ${Math.random() * 10 + 5}px;
        height: ${Math.random() * 10 + 5}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        left: ${Math.random() * 100}vw;
        top: -10px;
        border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
        pointer-events: none;
        z-index: 1000;
        animation: confetti-fall ${Math.random() * 3 + 2}s linear forwards;
      `;
      
      document.body.appendChild(confetti);
      
      setTimeout(() => {
        confetti.remove();
      }, 5000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    createConfetti();
    toast.success('Welcome aboard! 🎉 You\'re now on our exclusive waitlist!');
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden relative">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-green-400/10 to-transparent animate-gradient-shift" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/30 to-green-400/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-400/25 to-yellow-400/25 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-green-400/10 rounded-full blur-2xl animate-pulse-slow" />
      
      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6 md:p-8">
        <div className="flex flex-col items-start animate-slide-in-left">
          <div className="flex items-center gap-1">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-green-400 rounded-lg flex items-center justify-center animate-glow relative">
              <div className="w-5 h-5 bg-gray-950 rounded-md flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              </div>
              {/* Plug prongs */}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 flex gap-0.5">
                <div className="w-0.5 h-1 bg-yellow-400 rounded-full"></div>
                <div className="w-0.5 h-1 bg-green-400 rounded-full"></div>
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
              getmy
            </span>
          </div>
          <span className="text-2xl font-bold text-white -mt-1">Extension</span>
        </div>
        
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-all duration-500 group animate-slide-in-right"
        >
          <Github className="w-6 h-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
        </a>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 md:px-8 flex items-center min-h-[calc(100vh-120px)]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 w-full items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-full backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 animate-bounce-gentle">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-fast" />
                <span className="text-sm text-gray-300">Coming Soon - Early Access</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-text-reveal">
                <span className="inline-block animate-slide-in-up delay-100">find</span>
                <br />
                <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent inline-block animate-slide-in-up delay-200 hover:scale-105 transition-transform duration-300">
                 EXTENSION
                </span>
                <br />
                <span className="inline-block animate-slide-in-up delay-300">for everything</span>
              </h1>
              
              <p className="text-xl text-gray-400 leading-relaxed max-w-lg animate-fade-in-up delay-400">
                Your all-in-one platform to discover and share the best browser extensions — for anything from productivity to entertainment. 100% free, open-source, and built by the community, for the community.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500">
            </div>
          </div>

          {/* Right Content - Waitlist Form */}
          <div className="relative animate-fade-in-up delay-600">
            <div className="bg-gray-900/50 border border-gray-800/50 rounded-2xl p-8 backdrop-blur-sm hover:bg-gray-900/60 hover:border-gray-700/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-400/10">
              <div className="space-y-6">
                <div className="text-center space-y-3 animate-fade-in-up delay-700">
                  <h2 className="text-2xl font-bold text-white">Join the Waitlist</h2>
                  <p className="text-gray-400">
                    Be the first to know when we launch and get early access to exclusive features.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in-up delay-800">
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-950/50 border-gray-700 text-white placeholder-gray-500 h-12 focus:border-yellow-400/50 focus:ring-yellow-400/20 transition-all duration-300 hover:border-gray-600 focus:scale-[1.02]"
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-gradient-to-r from-yellow-400 to-green-400 hover:from-yellow-500 hover:to-green-500 text-gray-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.05] hover:shadow-lg hover:shadow-yellow-400/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-gray-900/20 border-t-gray-900 rounded-full animate-spin" />
                        Joining...
                      </div>
                    ) : (
                      'Join Waitlist'
                    )}
                  </Button>
                </form>
                
                <div className="text-center text-sm text-gray-500 animate-fade-in-up delay-900">
                  No spam, ever. Unsubscribe anytime.
                </div>
              </div>
            </div>
            
            {/* Enhanced decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400/20 to-green-400/20 rounded-full blur-xl animate-pulse-slow" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-green-400/15 to-yellow-400/15 rounded-full blur-xl animate-float" />
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-r from-yellow-400/10 to-green-400/10 rounded-full blur-lg animate-bounce-subtle" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
