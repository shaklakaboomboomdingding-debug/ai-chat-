import React from 'react';
import { AlertTriangle, X, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useExitIntent } from './hooks';

export function ExitPopup({ openCheckout }: { openCheckout: () => void }) {
  const { triggered, setTriggered } = useExitIntent();

  if (!triggered) return null;

  return (
    <div className="fixed inset-0 bg-[#05070a]/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        className="bg-[#0f1218] border border-[#c4a456]/20 w-full max-w-lg rounded-xl p-6 relative shadow-[0_0_20px_rgba(196,164,86,0.1)]"
      >
        <button onClick={() => setTriggered(false)} className="absolute top-4 right-4 text-[#94a3b8] hover:text-white">
          <X className="w-6 h-6" />
        </button>
        <div className="text-center">
           <AlertTriangle className="w-16 h-16 text-[#eab308] mx-auto mb-4" />
           <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#ffffff]">Wait! Don't Leave Empty Handed.</h2>
           <p className="text-[#94a3b8] mb-6">Before you go back to missing reservations, get the exact blueprint that's adding ₹4L+/month to local restaurants.</p>
           <div className="bg-[#05070a] p-4 rounded-lg mb-6 border border-[#c4a456]/20">
             <p className="font-bold text-xl text-white mb-1 text-center">Take it for just ₹9 <span className="line-through text-[#94a3b8] text-sm ml-2">₹1,999</span></p>
             <p className="text-sm text-[#c4a456] text-center flex items-center justify-center gap-1">
               <ShieldCheck className="w-4 h-4"/> Instant Access Guarantee
             </p>
           </div>
           <button 
             onClick={() => { setTriggered(false); openCheckout(); }} 
             className="w-full bg-[#eab308] hover:bg-[#c4a456] text-[#000] px-6 py-4 rounded-md font-[800] uppercase tracking-[0.5px] text-lg mb-4 shadow-[0_4px_15px_rgba(234,179,8,0.3)] transition-transform hover:scale-[1.02]"
           >
             Yes, I Want More Bookings!
           </button>
           <button onClick={() => setTriggered(false)} className="text-sm text-[#94a3b8] hover:text-white underline underline-offset-4">
             No thanks, I'll keep doing things manually.
           </button>
        </div>
      </motion.div>
    </div>
  );
}

export function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-[#0f1218] border border-[#c4a456]/20 p-6 rounded-xl shadow-[0_0_20px_rgba(196,164,86,0.05)] flex flex-col items-center text-center transition-colors">
      <div className="text-[#c4a456] bg-white/5 p-4 rounded-full mb-4 border-2 border-[#c4a456]/20">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-[#ffffff]">{title}</h3>
      <p className="text-[#94a3b8]">{desc}</p>
    </div>
  );
}

export function StatCard({ number, label }: { number: string, label: string }) {
  return (
    <div className="bg-[#0f1218] border border-[#c4a456]/20 p-4 rounded-xl text-center">
      <div className="text-3xl font-[800] text-[#c4a456] mb-1">{number}</div>
      <div className="text-sm font-medium text-[#94a3b8]">{label}</div>
    </div>
  );
}

export function FeatureListItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="text-[#c4a456] mt-1 font-bold">
        ✓
      </div>
      <span className="text-[#94a3b8] text-sm md:text-base leading-relaxed">{text}</span>
    </li>
  );
}

export function CheckoutModal({ 
  isOpen, 
  onClose, 
  onSubmit, 
  isProcessing 
}: { 
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { firstName: string, lastName: string, email: string, phone: string }) => void;
  isProcessing: boolean;
}) {
  const [formData, setFormData] = React.useState({ firstName: '', lastName: '', email: '', phone: '' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-[#05070a]/90 backdrop-blur-sm z-[110] flex items-center justify-center p-4">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        className="bg-[#0f1218] border border-[#c4a456]/20 w-full max-w-md rounded-xl p-8 relative shadow-[0_0_30px_rgba(196,164,86,0.15)]"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-[#94a3b8] hover:text-white">
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold mb-2 text-[#ffffff]">Complete Your Details</h2>
        <p className="text-[#94a3b8] mb-6 text-sm">Where should we send your AI Booking Blueprint?</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#c4a456] mb-1 uppercase tracking-wide">First Name</label>
              <input required type="text" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} className="w-full bg-[#05070a] border border-[#c4a456]/30 rounded-md px-4 py-2.5 text-white focus:outline-none focus:border-[#c4a456]" placeholder="John" />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#c4a456] mb-1 uppercase tracking-wide">Last Name</label>
              <input required type="text" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} className="w-full bg-[#05070a] border border-[#c4a456]/30 rounded-md px-4 py-2.5 text-white focus:outline-none focus:border-[#c4a456]" placeholder="Doe" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-[#c4a456] mb-1 uppercase tracking-wide">Email Address</label>
            <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-[#05070a] border border-[#c4a456]/30 rounded-md px-4 py-2.5 text-white focus:outline-none focus:border-[#c4a456]" placeholder="john@example.com" />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#c4a456] mb-1 uppercase tracking-wide">Phone Number</label>
            <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-[#05070a] border border-[#c4a456]/30 rounded-md px-4 py-2.5 text-white focus:outline-none focus:border-[#c4a456]" placeholder="+91 9876543210" />
          </div>

          <button 
            type="submit"
            disabled={isProcessing}
            className="w-full mt-6 bg-[#eab308] hover:bg-[#c4a456] text-[#000] px-6 py-4 rounded-md font-[800] uppercase tracking-[0.5px] text-lg shadow-[0_4px_15px_rgba(234,179,8,0.3)] transition-transform hover:scale-[1.02] disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-5 h-5" />
            {isProcessing ? "Processing..." : "Proceed to Payment (₹9)"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
