import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  gradient: string;
}

const plans: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for casual listeners',
    features: [
      'Ad-supported streaming',
      'Standard audio quality',
      'Basic playlists',
      'Mobile app access',
      'Limited skips',
    ],
    gradient: 'from-[#b2d8d8] to-[#a3c1e2]',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$9.99',
    period: 'month',
    description: 'For the dedicated dreamer',
    features: [
      'Ad-free listening',
      'High-quality audio (320kbps)',
      'Unlimited skips',
      'Offline downloads',
      'Priority support',
      'Exclusive playlists',
    ],
    popular: true,
    gradient: 'from-[#f5cda1] to-[#d9b8b0]',
  },
  {
    id: 'family',
    name: 'Family',
    price: '$15.99',
    period: 'month',
    description: 'Share the vibes with family',
    features: [
      'Everything in Pro',
      'Up to 6 family accounts',
      'Family mix playlist',
      'Parental controls',
      'Family radio stations',
      'Shared offline downloads',
    ],
    gradient: 'from-[#8b9d83] to-[#bacfa2]',
  },
];

export function Plans() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
            Choose Your <span className="gradient-text">Plan</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-8">
            Upgrade for an uninterrupted listening experience. Cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-2 p-1.5 glass rounded-full">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-[#f5cda1] to-[#d9b8b0] text-white'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-[#f5cda1] to-[#d9b8b0] text-white'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              Yearly
              <span className="text-xs bg-[#8b9d83] text-white px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative glass rounded-3xl p-6 sm:p-8 ${
                plan.popular ? 'ring-2 ring-[#f5cda1] scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#f5cda1] to-[#d9b8b0] rounded-full text-sm font-medium text-white flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">{plan.name}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-[var(--color-text-primary)]">
                  {billingCycle === 'yearly' && plan.id !== 'free'
                    ? `$${(parseFloat(plan.price.replace('$', '')) * 0.8).toFixed(2)}`
                    : plan.price
                  }
                </span>
                <span className="text-[var(--color-text-secondary)]">/{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-[var(--color-text-primary)]/80">
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center flex-shrink-0`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3.5 rounded-full font-semibold transition-all ${
                  plan.popular
                    ? `bg-gradient-to-r ${plan.gradient} text-white hover:opacity-90 shadow-md`
                    : 'glass text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)]/5'
                }`}
              >
                {plan.id === 'free' ? 'Get Started' : 'Subscribe Now'}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[#8b9d83] text-sm mt-8">
          All plans include a 30-day free trial. No credit card required for sign up.
        </p>
      </div>
    </section>
  );
}
