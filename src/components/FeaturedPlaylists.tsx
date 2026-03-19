import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Heart, MoreHorizontal } from 'lucide-react';
import { clsx } from 'clsx';

interface Playlist {
  id: string;
  title: string;
  description: string;
  cover: string;
  plays: string;
  gradient: string;
}

const playlists: Playlist[] = [
  {
    id: '1',
    title: 'Forest Whispers',
    description: 'Gentle breezes and acoustic strings',
    cover: 'https://images.unsplash.com/photo-1425082661705-1834bfd08dca?w=400&h=400&fit=crop',
    plays: '2.4M',
    gradient: 'from-[#8b9d83] to-[#bacfa2]',
  },
  {
    id: '2',
    title: 'Skybound',
    description: 'Uplifting orchestral melodies',
    cover: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=400&fit=crop',
    plays: '1.8M',
    gradient: 'from-[#a3c1e2] to-[#b2d8d8]',
  },
  {
    id: '3',
    title: 'Spirits\' Lullaby',
    description: 'Calming piano and natural soundscapes',
    cover: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=400&h=400&fit=crop',
    plays: '3.2M',
    gradient: 'from-[#d9b8b0] to-[#f5cda1]',
  },
  {
    id: '4',
    title: 'River Crossing',
    description: 'Flowing water and soft percussion',
    cover: 'https://images.unsplash.com/photo-1437482078695-73f5bd6c9053?w=400&h=400&fit=crop',
    plays: '1.5M',
    gradient: 'from-[#b2d8d8] to-[#a3c1e2]',
  },
  {
    id: '5',
    title: 'Hearthside',
    description: 'Warm crackling fire and folk tunes',
    cover: 'https://images.unsplash.com/photo-1481692225881-2219e9ebdb17?w=400&h=400&fit=crop',
    plays: '2.1M',
    gradient: 'from-[#f5cda1] to-[#d9b8b0]',
  },
  {
    id: '6',
    title: 'Rainy Days',
    description: 'Pitter-patter rhythms and lo-fi',
    cover: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=400&h=400&fit=crop',
    plays: '980K',
    gradient: 'from-[#bacfa2] to-[#8b9d83]',
  },
];

export function FeaturedPlaylists() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-2">
              Featured Playlists
            </h2>
            <p className="text-[var(--color-text-secondary)]">Curated collections for every mood</p>
          </div>
          <button className="hidden sm:block text-[#8b9d83] hover:text-[var(--color-text-primary)] transition-colors text-sm font-medium">
            View All
          </button>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {playlists.map((playlist, index) => (
            <motion.div
              key={playlist.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(playlist.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative glass rounded-2xl p-4 hover:bg-[var(--color-bg-primary)] transition-all duration-300 cursor-pointer"
            >
              {/* Cover Image */}
              <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                <img
                  src={playlist.cover}
                  alt={playlist.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={clsx(
                  'absolute inset-0 bg-gradient-to-t opacity-60 to-transparent',
                  playlist.gradient
                )} />
                
                {/* Play Button Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === playlist.id ? 1 : 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setPlayingId(playingId === playlist.id ? null : playlist.id);
                    }}
                    className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center"
                  >
                    {playingId === playlist.id ? (
                      <Pause className="w-6 h-6 fill-white text-white" />
                    ) : (
                      <Play className="w-6 h-6 fill-white text-white ml-1" />
                    )}
                  </motion.button>
                </motion.div>
              </div>

              {/* Info */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[var(--color-text-primary)] truncate group-hover:text-[#8b9d83] transition-colors">
                    {playlist.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] truncate">{playlist.description}</p>
                </div>
                <div className="flex items-center gap-1">
                  <button className="p-1.5 rounded-full hover:bg-[var(--color-text-primary)]/10 transition-colors">
                    <Heart className="w-4 h-4 text-[var(--color-text-secondary)] hover:text-[#d9b8b0] transition-colors" />
                  </button>
                  <button className="p-1.5 rounded-full hover:bg-[var(--color-text-primary)]/10 transition-colors">
                    <MoreHorizontal className="w-4 h-4 text-[var(--color-text-secondary)]" />
                  </button>
                </div>
              </div>

              {/* Plays count */}
              <div className="mt-2 text-xs text-[#8b9d83]">
                {playlist.plays} plays
              </div>
            </motion.div>
          ))}
        </div>

        <button className="sm:hidden w-full mt-6 py-3 text-[#8b9d83] font-medium">
          View All Playlists
        </button>
      </div>
    </section>
  );
}
