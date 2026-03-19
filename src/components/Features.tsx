import { motion } from 'framer-motion';
import { 
  Headphones, 
  Radio, 
  Zap, 
  Shield, 
  Smartphone, 
  Share2,
  Music4,
  Sparkles,
  Wifi
} from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
}

const features: Feature[] = [
  {
    icon: Sparkles,
    title: 'Magical Discovery',
    description: 'Our gentle AI learns your taste to recommend melodies you\'ll love.',
    gradient: 'from-[#8b9d83] to-[#bacfa2]',
  },
  {
    icon: Radio,
    title: 'Wind Chime Stations',
    description: 'Stream natural radio and calm stations from around the world.',
    gradient: 'from-[#a3c1e2] to-[#b2d8d8]',
  },
  {
    icon: Zap,
    title: 'Crystal Clear Audio',
    description: 'Experience immersive sound with lossless and spatial audio support.',
    gradient: 'from-[#f5cda1] to-[#d9b8b0]',
  },
  {
    icon: Shield,
    title: 'Safe Haven',
    description: 'Peaceful listening spaces to keep content safe for all ages.',
    gradient: 'from-[#bacfa2] to-[#8b9d83]',
  },
  {
    icon: Smartphone,
    title: 'Wanderer Mode',
    description: 'Download your favorite playlists and listen comfortably anywhere.',
    gradient: 'from-[#d9b8b0] to-[#f5cda1]',
  },
  {
    icon: Share2,
    title: 'Village Sharing',
    description: 'Share your playlists and discover what friends are listening to.',
    gradient: 'from-[#b2d8d8] to-[#a3c1e2]',
  },
];

const futureFeatures = [
  { icon: Music4, label: 'Podcast Integration' },
  { icon: Wifi, label: 'Live Concerts' },
  { icon: Headphones, label: 'Spatial Audio' },
];

export function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
            Why Choose <span className="gradient-text">GhibliGlow</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Experience music like never before with magical features designed for true daydreamers.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group glass rounded-2xl p-6 hover:bg-[var(--color-bg-primary)] transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">{feature.title}</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-strong rounded-3xl p-8 sm:p-12"
        >
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-[#8b9d83]/20 to-[#bacfa2]/20 border border-[#8b9d83]/30 text-[#8b9d83] text-sm font-medium mb-4">
              Coming Soon
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]">
              Exciting Updates on the Horizon
            </h3>
            <p className="text-[var(--color-text-secondary)] mt-2">
              We're constantly evolving. Here are some features we're working on.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {futureFeatures.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full glass hover:bg-[var(--color-text-primary)]/5 transition-colors cursor-pointer"
              >
                <feature.icon className="w-4 h-4 text-[var(--color-text-secondary)]" />
                <span className="text-sm text-[var(--color-text-primary)]/80">{feature.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
