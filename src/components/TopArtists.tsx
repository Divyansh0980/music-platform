import { motion } from 'framer-motion';
import { Users, TrendingUp, Award } from 'lucide-react';

interface Artist {
  id: string;
  name: string;
  image: string;
  monthlyListeners: string;
  genre: string;
  rank: number;
}

const artists: Artist[] = [
  {
    id: '1',
    name: 'Studio Sounds',
    image: 'https://images.unsplash.com/photo-1596726146030-9b4e80f08ec5?w=300&h=300&fit=crop',
    monthlyListeners: '24.5M',
    genre: 'Anime OST',
    rank: 1,
  },
  {
    id: '2',
    name: 'Forest Echoes',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db8855?w=300&h=300&fit=crop',
    monthlyListeners: '18.2M',
    genre: 'Acoustic Folk',
    rank: 2,
  },
  {
    id: '3',
    name: 'Joe Hisaishi',
    image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300&h=300&fit=crop',
    monthlyListeners: '15.8M',
    genre: 'Classical',
    rank: 3,
  },
  {
    id: '4',
    name: 'Wind Walkers',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=300&fit=crop',
    monthlyListeners: '12.3M',
    genre: 'Instrumental',
    rank: 4,
  },
];

export function TopArtists() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-bg-secondary)]">
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
              Top Artists
            </h2>
            <p className="text-[var(--color-text-secondary)]">The hottest artists this month</p>
          </div>
          <button className="hidden sm:block text-[#8b9d83] hover:text-[var(--color-text-primary)] transition-colors text-sm font-medium">
            View All Artists
          </button>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Rank Badge */}
              <div className={clsx(
                'absolute -top-2 -left-2 z-10 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold',
                artist.rank === 1 ? 'bg-gradient-to-r from-[#f5cda1] to-[#d9b8b0] text-white shadow-md' :
                artist.rank === 2 ? 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 shadow-sm' :
                artist.rank === 3 ? 'bg-gradient-to-r from-[#d9b8b0] to-orange-300 text-white shadow-sm' :
                'glass text-[var(--color-text-primary)]'
              )}>
                {artist.rank}
              </div>

              {/* Card */}
              <div className="glass rounded-2xl overflow-hidden">
                <div className="relative aspect-square">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Stats overlay */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center gap-2 text-xs text-white/80 mb-1">
                      <TrendingUp className="w-3 h-3 text-[#4ade80]" />
                      <span>+12% this week</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-[var(--color-text-primary)] group-hover:text-[#8b9d83] transition-colors">
                    {artist.name}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-[var(--color-text-secondary)]">{artist.genre}</span>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3 text-[var(--color-text-secondary)]" />
                      <span className="text-sm text-[var(--color-text-secondary)]">{artist.monthlyListeners}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8b9d83] to-[#bacfa2] flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-text-primary)]">Become a Verified Artist</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">Get your music heard by millions</p>
            </div>
          </div>
          <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#8b9d83] to-[#bacfa2] text-white font-medium hover:opacity-90 transition-opacity whitespace-nowrap shadow-sm">
            Apply Now
          </button>
        </motion.div>

        <button className="sm:hidden w-full mt-6 py-3 text-[#8b9d83] font-medium">
          View All Artists
        </button>
      </div>
    </section>
  );
}

function clsx(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
