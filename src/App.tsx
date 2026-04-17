import { motion } from 'motion/react';
import { 
  MessageSquare, PhoneMissed, Clock, ArrowRight, ShieldCheck, 
  Download, Zap, Check, Lock, ChevronDown, CheckCircle2 
} from 'lucide-react';
import Chatbot from './Chatbot';
import { useCountdown } from './hooks';
import { ExitPopup, FeatureCard, StatCard, FeatureListItem } from './components';

export default function App() {
  const countdown = useCountdown(15);
  
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#05070a] text-[#ffffff] font-sans selection:bg-[#c4a456]/30">
      <ExitPopup scrollToOffer={scrollToOffer} />
      <Chatbot />

      {/* Sticky Top Banner */}
      <div className="bg-[#0f1218] text-[#c4a456] py-2.5 px-4 text-center text-[11px] font-[700] uppercase tracking-[1px] border-b border-[#c4a456]/20">
        ⚠️ Offer expires soon. Secure your ₹9 blueprint before the timer hits zero: <span className="font-mono text-[13px] ml-1">{countdown}</span>
      </div>

      {/* Nav */}
      <nav className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center border-b border-[#c4a456]/20">
        <div className="font-black text-2xl tracking-tighter text-white">AI<span className="text-[#c4a456]">Bookings</span></div>
        <div className="flex items-center gap-2 text-sm font-medium text-[#c4a456]">
          <Lock className="w-4 h-4"/> Secure Checkout
        </div>
      </nav>

      <main>
        {/* 1. HERO SECTION */}
        <section className="pt-16 pb-12 px-4 sm:px-6 max-w-5xl mx-auto text-center">
          <div className="text-[#c4a456] uppercase text-[12px] font-[700] tracking-[1px] mb-6">
            Limited-Time Entry Offer
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight mb-6 text-[#ffffff] leading-tight">
            Stop Losing Bookings Every Day — <span className="text-[#c4a456]">Turn Every Inquiry Into Confirmed Reservations (24/7)</span>
          </h1>
          <p className="text-lg md:text-xl text-[#94a3b8] max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Hotels & restaurants are adding <strong className="text-white">₹4L–₹12L/month</strong> just by replying instantly to customers — even while they sleep.
          </p>
          <motion.button 
            onClick={scrollToOffer}
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }} 
            className="w-full sm:w-auto px-10 py-5 bg-[#eab308] text-[#000] rounded-md font-[800] uppercase tracking-[0.5px] text-lg shadow-[0_4px_15px_rgba(234,179,8,0.3)] flex items-center justify-center gap-3 mx-auto transition-transform"
          >
            Get the ₹9 AI Booking Blueprint <ArrowRight className="w-6 h-6" />
          </motion.button>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-[#94a3b8] font-medium font-sans">
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-[#c4a456]" /> Instant Access</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-[#c4a456]" /> No Tech Skills Needed</span>
          </div>
        </section>

        {/* 2. PAIN SECTION */}
        <section className="py-20 bg-[#0f1218]/40 border-y border-[#c4a456]/20">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">You're bleeding revenue right now. Here's how:</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <FeatureCard 
                icon={<MessageSquare className="w-8 h-8" />} 
                title="Missed Night Messages" 
                desc="Customers texting at 11 PM for tomorrow's booking. No reply? They book elsewhere." 
              />
              <FeatureCard 
                icon={<PhoneMissed className="w-8 h-8" />} 
                title="Unanswered Calls" 
                desc="During peak dining hours, your staff is busy. The phone rings out. Revenue lost." 
              />
              <FeatureCard 
                icon={<Clock className="w-8 h-8" />} 
                title="Slow Replies = Lost Sales" 
                desc="Modern customers expect replies in 5 minutes. If you take longer, they're gone." 
              />
            </div>
            <div className="mt-14 max-w-2xl mx-auto text-center p-6 bg-white/5 border border-[#c4a456]/20 rounded-xl">
              <p className="text-lg font-bold text-[#c4a456]">Your competitors aren’t better — they’re just faster.</p>
            </div>
          </div>
        </section>

        {/* 3. SOLUTION SECTION */}
        <section className="py-24 max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">The Fix: <span className="text-[#c4a456]">AI That Never Sleeps</span></h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl text-[#94a3b8] mb-8 leading-relaxed">
                Our AI system replies instantly, answers customer questions, and confirms bookings automatically—straight on WhatsApp, Instagram, or your Website.
              </p>
              <ul className="space-y-5">
                <FeatureListItem text="24/7 instant human-like replies" />
                <FeatureListItem text="Auto-booking handling for rooms and tables" />
                <FeatureListItem text="Captures customer details for your database" />
              </ul>
            </div>
            <div className="bg-[#0f1218] p-6 rounded-xl border border-[#c4a456]/20 shadow-[0_0_30px_rgba(196,164,86,0.1)] relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#c4a456] via-[#eab308] to-[#c4a456]"></div>
               <div className="flex gap-3 items-center mb-6 pb-4 border-b border-[#c4a456]/20">
                 <div className="w-10 h-10 bg-white/5 rounded-full flex justify-center items-center font-bold text-[#c4a456]">RC</div>
                 <div>
                   <p className="font-bold text-white leading-tight">Royal Cafe</p>
                   <p className="text-xs text-[#94a3b8]">Online</p>
                 </div>
               </div>
               <div className="space-y-4">
                 <div className="flex justify-start"><div className="bg-white/5 text-[#94a3b8] px-4 py-2 rounded-xl rounded-tl-sm text-sm border border-[#c4a456]/20">Do you have a table for 4 tonight at 8 PM?</div></div>
                 <div className="flex justify-end"><div className="bg-[#c4a456]/20 text-[#ffffff] px-4 py-2 rounded-xl rounded-tr-sm text-sm border border-[#c4a456]/30">Yes, we do! I have reserved a table for 4 at 8:00 PM for you. Can I get a name for the reservation? 🍽️</div></div>
                 <div className="flex justify-start"><div className="bg-white/5 text-[#94a3b8] px-4 py-2 rounded-xl rounded-tl-sm text-sm border border-[#c4a456]/20">Rahul. Thanks!</div></div>
                 <div className="flex justify-end"><div className="bg-[#c4a456]/20 text-[#ffffff] px-4 py-2 rounded-xl rounded-tr-sm text-sm border border-[#c4a456]/30">Perfect, Rahul. See you tonight! 🚀</div></div>
               </div>
            </div>
          </div>
        </section>

        {/* 4. RESULTS SECTION */}
        <section className="py-20 bg-[#05070a] border-y border-[#c4a456]/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">The Result? <span className="text-[#c4a456]">Predictable Growth.</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
              <StatCard number="24/7" label="Active Pipeline" />
              <StatCard number="3x" label="Direct Bookings" />
              <StatCard number="+45%" label="Table Reservations" />
              <StatCard number="0" label="Missed Inquiries" />
            </div>
            <div className="bg-[#0f1218] border border-[#c4a456]/20 p-8 rounded-xl shadow-xl max-w-2xl mx-auto relative">
              <div className="text-4xl text-[#c4a456] absolute top-4 left-4 opacity-20">"</div>
              <p className="text-xl italic text-[#94a3b8] relative z-10 font-medium">
                "We increased late-night reservations by 30% just by automating WhatsApp replies. It paid for itself on day one."
              </p>
              <p className="mt-6 text-[#c4a456] font-bold">— Rajat S., Restaurant Owner</p>
            </div>
          </div>
        </section>

        {/* 5. OFFER SECTION (TRIPWIRE) */}
        <section id="offer" className="py-24 max-w-5xl mx-auto px-4">
          <div className="bg-[#05070a] border border-[#c4a456]/20 rounded-xl p-6 md:p-12 shadow-[0_0_40px_rgba(196,164,86,0.05)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c4a456]/5 blur-[120px] rounded-full pointer-events-none"></div>
            
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">Start With This Simple AI Blueprint</h2>
              <p className="text-xl text-[#94a3b8]">Everything you need to automate your hospitality business today.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 space-y-8 relative z-10">
                <div className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-[#c4a456]/20">
                  <div className="bg-white/5 p-3 rounded-xl text-[#c4a456]"><Download className="w-6 h-6"/></div>
                  <div>
                    <h4 className="font-bold text-xl text-white">Strategy PDF Guide</h4>
                    <p className="text-[#94a3b8] mt-1">"How hotels & restaurants add ₹4L–₹12L/month"</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-[#c4a456]/20">
                  <div className="bg-white/5 p-3 rounded-xl text-[#c4a456]"><MessageSquare className="w-6 h-6"/></div>
                  <div>
                    <h4 className="font-bold text-xl text-white">Ready Chatbot Script</h4>
                    <p className="text-[#94a3b8] mt-1">Plug-and-play proven conversational templates.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-[#c4a456]/20">
                  <div className="bg-white/5 p-3 rounded-xl text-[#c4a456]"><Zap className="w-6 h-6"/></div>
                  <div>
                    <h4 className="font-bold text-xl text-white">Quick Setup Video</h4>
                    <p className="text-[#94a3b8] mt-1">10-15 minute walk-through. Zero tech skills needed.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#05070a] p-8 rounded-xl border border-[#c4a456] text-center w-full lg:w-96 shadow-[0_0_40px_rgba(196,164,86,0.1)] relative z-10 shrink-0">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0f1218] text-[#c4a456] border border-[#c4a456]/20 font-bold px-4 py-1 rounded-full text-sm">
                  Limited Time Only
                </div>
                <p className="text-[#94a3b8] line-through text-lg mt-2 font-medium">Total Value: ₹1,999</p>
                <div className="flex justify-center items-end gap-1 mb-2">
                  <span className="text-6xl font-[800] text-[#eab308]">₹9</span>
                </div>
                <p className="text-sm text-[#c4a456] font-bold mb-8">Instant Digital Delivery</p>
                
                <button onClick={() => alert("Redirecting to Razorpay checkout...")} className="w-full py-5 px-6 bg-[#eab308] hover:bg-[#c4a456] text-[#000] rounded-md font-[800] uppercase tracking-[0.5px] text-lg shadow-[0_4px_15px_rgba(234,179,8,0.3)] transition-all">
                  Get Instant Access
                </button>
                <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[#94a3b8] font-medium">
                  <Lock className="w-3.5 h-3.5"/> Safe & Secure Payment Integration
                </p>
                <div className="flex justify-center gap-2 mt-4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" className="h-4 opacity-50 grayscale" alt="Stripe" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. BACKEND UPSELL (SOFT CLOSE) */}
        <section className="py-24 bg-[#0f1218] pb-32 border-t border-[#c4a456]/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-white tracking-tight">Want Us to Set This Up For You?</h2>
            <p className="text-xl text-[#94a3b8] mb-10 max-w-2xl mx-auto">
              Skip the manual work. We’ll build and install your complete AI booking system so you start getting reservations on autopilot.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-12">
              {[
                "Full setup (Website, WhatsApp, FB)", 
                "Custom Booking automation flow", 
                "Lead capture system included", 
                "30-day optimization guarantee"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-[#c4a456]/20">
                  <CheckCircle2 className="w-5 h-5 text-[#c4a456] shrink-0" />
                  <span className="font-medium text-[#ffffff]">{text}</span>
                </div>
              ))}
            </div>
            <button onClick={() => alert('Opening Calendly widget...')} className="px-8 py-5 border border-[#c4a456]/20 text-[#ffffff] bg-white/5 hover:bg-[#05070a] rounded-md font-[800] uppercase tracking-[0.5px] text-lg transition-all">
              Book a Free 15-Min Strategy Call
            </button>
          </div>
        </section>

        {/* 9. FAQ SECTION */}
        <section className="py-24 bg-[#05070a] border-t border-[#c4a456]/20">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {q: "Do I need technical skills?", a: "No. The AI Booking Blueprint includes a short 10-minute setup video that shows you how to plug and play our templates. Zero coding required."},
                {q: "Will this work for my business?", a: "Yes. Whether you run a luxury hotel, a busy cafe, or a fine-dining restaurant, if your customers contact you on WhatsApp, Facebook, or your website, this will work."},
                {q: "Is an AI bot expensive to maintain?", a: "Not at all. For just ₹9 today, you get the blueprint. Implementing it costs less than a single cup of coffee per month—far cheaper than hiring additional front-desk staff."}
              ].map((faq, i) => (
                <div key={i} className="bg-[#0f1218] border border-[#c4a456]/20 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-white mb-2 flex items-center gap-2">
                    <ChevronDown className="w-5 h-5 text-[#c4a456]" /> {faq.q}
                  </h3>
                  <p className="text-[#94a3b8] pl-7">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. FINAL CTA */}
        <section className="py-24 bg-[#05070a] text-center px-4">
           <div className="max-w-3xl mx-auto">
             <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">Every missed message is a lost booking.</h2>
             <p className="text-xl text-[#94a3b8] mb-10">Stop leaving money on the table. Secure your blueprint now.</p>
             <button onClick={scrollToOffer} className="w-full sm:w-auto px-10 py-5 bg-[#eab308] hover:bg-[#c4a456] text-[#000] rounded-md font-[800] uppercase tracking-[0.5px] text-lg shadow-[0_4px_15px_rgba(234,179,8,0.3)] transition-all flex justify-center items-center gap-2 mb-4 mx-auto">
               Get the ₹9 Blueprint Now
             </button>
             <div className="flex justify-center items-center gap-4 text-sm text-[#94a3b8] font-medium mt-4">
               <span className="flex items-center gap-1"><Lock className="w-4 h-4"/> SSL Secured</span>
               <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4"/> 100% Satisfaction</span>
             </div>
           </div>
        </section>
      </main>

      <footer className="bg-[#0f1218] py-8 border-t border-[#c4a456]/20 text-center text-[#94a3b8] text-sm pb-24 sm:pb-8">
         <p>© {new Date().getFullYear()} AI Bookings. All rights reserved.</p>
      </footer>

      {/* Sticky Bottom CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-[#0f1218]/90 backdrop-blur-lg border-t border-[#c4a456]/20 flex justify-between items-center sm:hidden z-40 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <div className="font-bold text-white leading-tight text-sm">
          AI Booking Blueprint<br/>
          <span className="text-[#eab308] text-base">₹9 only</span> <span className="line-through text-[#94a3b8] text-xs font-normal">₹1,999</span>
        </div>
        <button onClick={scrollToOffer} className="bg-[#eab308] text-[#000] px-6 py-2.5 rounded-md font-bold text-sm tracking-wide uppercase">
          Get Now
        </button>
      </div>

    </div>
  );
}
