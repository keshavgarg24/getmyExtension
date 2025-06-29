
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Github } from 'lucide-react';
import { toast } from 'sonner';

const Index = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Thanks for joining our waitlist! We\'ll be in touch soon.');
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-green-400/5 to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-400/15 to-yellow-400/15 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6 md:p-8">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group"
        >
          <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-sm font-medium">Repository</span>
        </a>
        
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-green-400 rounded-sm flex items-center justify-center animate-pulse">
              <div className="w-3 h-3 bg-gray-950 rounded-sm flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
              getmy
            </span>
          </div>
          <span className="text-xl font-bold text-white -mt-1">Extension</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 md:px-8 flex items-center min-h-[calc(100vh-120px)]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 w-full items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-gray-300">Coming Soon</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Discover the
                <br />
                <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                  perfect extension
                </span>
                <br />
                for everything
              </h1>
              
              <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                Your one-stop platform to find browser extensions for any need. 
                From productivity to entertainment, we've got you covered.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 px-4 py-3 bg-gray-900/30 border border-gray-800/50 rounded-lg backdrop-blur-sm">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400/20 to-green-400/20 rounded-full flex items-center justify-center">
                  <span className="text-yellow-400 text-sm font-bold">✨</span>
                </div>
                <span className="text-gray-300">Curated Extensions</span>
              </div>
              
              <div className="flex items-center gap-3 px-4 py-3 bg-gray-900/30 border border-gray-800/50 rounded-lg backdrop-blur-sm">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400/20 to-yellow-400/20 rounded-full flex items-center justify-center">
                  <span className="text-green-400 text-sm font-bold">⚡</span>
                </div>
                <span className="text-gray-300">Smart Recommendations</span>
              </div>
            </div>
          </div>

          {/* Right Content - Waitlist Form */}
          <div className="relative animate-fade-in delay-300">
            <div className="bg-gray-900/50 border border-gray-800/50 rounded-2xl p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="text-center space-y-3">
                  <h2 className="text-2xl font-bold text-white">Join the Waitlist</h2>
                  <p className="text-gray-400">
                    Be the first to know when we launch and get early access to exclusive features.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-950/50 border-gray-700 text-white placeholder-gray-500 h-12 focus:border-yellow-400/50 focus:ring-yellow-400/20 transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-gradient-to-r from-yellow-400 to-green-400 hover:from-yellow-500 hover:to-green-500 text-gray-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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
                
                <div className="text-center text-sm text-gray-500">
                  No spam, ever. Unsubscribe anytime.
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400/10 to-green-400/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-green-400/10 to-yellow-400/10 rounded-full blur-xl" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
