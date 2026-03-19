import { motion } from 'framer-motion';
import { Play, Sparkles, Zap, Globe, ChevronRight } from 'lucide-react';

const stats = [
  { label: 'Active Users', value: '2.5M+' },
  { label: 'Songs Available', value: '100M+' },
  { label: 'Artists', value: '500K+' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#f5cda1]/30 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#a3c1e2]/25 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Sparkles className="w-4 h-4 text-[#8b9d83]" />
              <span className="text-sm text-[var(--color-text-secondary)]">The Magic of Sound</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            >
              <span className="block text-[var(--color-text-primary)]">Melodies of the</span>
              <span className="gradient-text">Wind</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Immerse yourself in unlimited music with magical recommendations, 
              lossless audio quality, and a peaceful community.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 157, 131, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[#8b9d83] via-[#bacfa2] to-[#a3c1e2] text-white font-semibold text-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Play className="w-5 h-5 fill-white" />
                  Start Listening
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#8b9d83] via-[#bacfa2] to-[#a3c1e2] opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full glass text-[var(--color-text-primary)] font-medium text-lg hover:bg-[var(--color-text-primary)]/5 transition-all flex items-center gap-2"
              >
                Explore Premium
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-[var(--color-text-primary)]/10"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Visual */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              {/* Main Album Art */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-3xl overflow-hidden glow-orange"
              >
                <img
                  src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&h=600&fit=crop"
                  alt="Featured Album"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center">
                  <Play className="w-5 h-5 fill-white text-white" />
                </div>
              </motion.div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-10 right-0 glass rounded-2xl p-4 w-48"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#d9b8b0] to-[#f5cda1] flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--color-text-primary)]">Ultra HD</div>
                    <div className="text-xs text-[var(--color-text-secondary)]">Lossless Audio</div>
                  </div>
                </div>
                <div className="h-1.5 bg-[var(--color-text-primary)]/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="h-full bg-gradient-to-r from-[#d9b8b0] to-[#f5cda1] rounded-full"
                  />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-20 left-0 glass rounded-2xl p-4 w-52"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#a3c1e2] to-[#b2d8d8] flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--color-text-primary)]">190+</div>
                    <div className="text-xs text-[var(--color-text-secondary)]">Countries</div>
                  </div>
                </div>
              </motion.div>

              {/* Now Playing indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute bottom-0 right-10 glass rounded-full px-4 py-2 flex items-center gap-3"
              >
                <div className="flex gap-0.5 items-end h-4">
                  {[0.3, 0.6, 0.4, 0.8, 0.5].map((height, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [height * 16, 16, height * 16] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                      className="w-1 bg-gradient-to-t from-[#8b9d83] to-[#d9b8b0] rounded-full"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-[var(--color-text-primary)] whitespace-nowrap">Playing now</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
