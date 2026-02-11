import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CursorEffects from "./components/CursorEffects";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-bone-white text-black-swan font-garamond selection:bg-visceral-red selection:text-bone-white">
      <CursorEffects />
      <Navbar />

      {/* Hero/Manifesto Space */}
      <section className="h-screen flex flex-col justify-center items-center px-10 text-center parallax-hover relative">
        {/* Flame Image */}
        <div className="mb-8 tilt-effect">
          <img
            src="/flame.png"
            alt="Flame"
            className="w-32 h-32 md:w-48 md:h-48 object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>

        <h1 className="text-6xl md:text-9xl font-garamond mb-8 text-black-swan text-reveal">
          Wish for the Wind
        </h1>
        <p className="max-w-3xl text-xl md:text-3xl font-general mb-12 leading-relaxed">
          Your CRM data gets stronger with every AI model release.<br />
          <span className="opacity-70">Not weaker.</span>
        </p>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <a
            href="#pricing"
            className="px-10 py-5 bg-visceral-red text-bone-white font-garamond uppercase tracking-widest text-sm hover:bg-black-swan transition-all magnetic glow-pulse"
          >
            Get Your CRM Audit
          </a>
          <a
            href="#solution"
            className="px-10 py-5 border-2 border-black-swan text-black-swan font-garamond uppercase tracking-widest text-sm hover:bg-black-swan hover:text-bone-white transition-all magnetic"
          >
            See How It Works
          </a>
        </div>
      </section>

      {/* Problem Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-10 py-20 border-t border-black-swan parallax-hover">
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-7xl font-garamond mb-16 text-center tilt-effect">
            The CRM Data Problem
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-garamond text-visceral-red">
                Your Data is Sacred
              </h3>
              <p className="text-lg md:text-xl font-general opacity-80 leading-relaxed">
                Your CRM should be the Holy Grail. The source of truth. But instead, it's a graveyard of duplicates, missing LinkedIn IDs, broken domains, and outdated contacts.
              </p>
              <p className="text-lg md:text-xl font-general opacity-80 leading-relaxed">
                You're pushing data from Apollo to Salesforce, from Salesforce to Outreach, from Outreach back to Salesforce. Everyone's doing admin work. Nobody trusts the data.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-garamond text-visceral-red">
                AI Moves Every 6 Months
              </h3>
              <p className="text-lg md:text-xl font-general opacity-80 leading-relaxed">
                Traditional GTM strategies are outdated before you implement them. Each new AI model is radically better. Your question isn't "should I hire someone?"
              </p>
              <p className="text-lg md:text-xl font-general opacity-80 leading-relaxed">
                It's "will this person be better than AI in 6 months?" If not, you're investing in the wrong asset.
              </p>
            </div>
          </div>

          <div className="bg-black-swan text-bone-white p-12 rounded-lg tilt-effect">
            <p className="text-2xl md:text-4xl font-garamond text-center leading-relaxed">
              "Anti-fragility means your system gets <span className="text-visceral-red">stronger</span> with every punch.<br />
              Like a Hydra. Cut off one head, two more grow back."
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="min-h-screen flex flex-col justify-center items-center px-10 py-20 border-t border-black-swan parallax-hover">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-7xl font-garamond mb-8 text-center tilt-effect">
            Investment Tiers
          </h2>
          <p className="text-xl md:text-2xl font-general text-center opacity-70 mb-16 max-w-3xl mx-auto">
            Every tier eliminates duplicates, enriches your data to 92% accuracy, and builds AI agents that improve with every model release.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tier 1: Advisor Pack */}
            <div className="border-2 border-black-swan p-8 hover:bg-black-swan hover:text-bone-white transition-all group tilt-effect">
              <div className="mb-6">
                <h3 className="text-2xl font-garamond uppercase tracking-wider mb-2">Advisor Pack</h3>
                <div className="text-4xl font-garamond text-visceral-red group-hover:text-bone-white">$1,000<span className="text-xl">/mo</span></div>
                <p className="text-sm opacity-70 mt-2">3-6 month retainer</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-visceral-red group-hover:text-bone-white">✓</span>
                  <span className="font-general">4 hours/week strategic consulting</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-visceral-red group-hover:text-bone-white">✓</span>
                  <span className="font-general">CRM data strategy & roadmap</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-visceral-red group-hover:text-bone-white">✓</span>
                  <span className="font-general">Clay workflow guidance</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-visceral-red group-hover:text-bone-white">✓</span>
                  <span className="font-general">AI agent implementation advice</span>
                </div>
              </div>

              <button className="w-full py-4 border-2 border-black-swan group-hover:border-bone-white group-hover:bg-bone-white group-hover:text-black-swan font-garamond uppercase tracking-wider transition-all magnetic">
                Get Started
              </button>
            </div>

            {/* Tier 2: Done With You */}
            <div className="border-2 border-visceral-red bg-visceral-red text-bone-white p-8 transform scale-105 relative tilt-effect">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black-swan px-6 py-2 text-xs uppercase tracking-widest">
                Most Popular
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-garamond uppercase tracking-wider mb-2">Done With You</h3>
                <div className="text-4xl font-garamond">$5,000<span className="text-xl">/mo</span></div>
                <p className="text-sm opacity-70 mt-2">3-6 month retainer</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span>✓</span>
                  <span className="font-general">Complete CRM enrichment & deduplication</span>
                </div>
                <div className="flex items-start gap-3">
                  <span>✓</span>
                  <span className="font-general">92% accuracy on LinkedIn IDs & URLs</span>
                </div>
                <div className="flex items-start gap-3">
                  <span>✓</span>
                  <span className="font-general">Custom strategy & plays development</span>
                </div>
                <div className="flex items-start gap-3">
                  <span>✓</span>
                  <span className="font-general">Clay workflow documentation</span>
                </div>
                <div className="flex items-start gap-3">
                  <span>✓</span>
                  <span className="font-general">60-day delivery timeline</span>
                </div>
                <div className="flex items-start gap-3">
                  <span>✓</span>
                  <span className="font-general">0% duplicate guarantee</span>
                </div>
              </div>

              <button className="w-full py-4 bg-black-swan text-bone-white font-garamond uppercase tracking-wider hover:bg-bone-white hover:text-black-swan transition-all magnetic glow-pulse">
                Start Your Audit
              </button>
            </div>

            {/* Tier 3: Custom Intelligence */}
            <div className="border-2 border-black-swan p-8 hover:bg-black-swan hover:text-bone-white transition-all group tilt-effect">
              <div className="mb-6">
                <h3 className="text-2xl font-garamond uppercase tracking-wider mb-2">Custom Intelligence</h3>
                <div className="text-4xl font-garamond text-visceral-red group-hover:text-bone-white">$15,000<span className="text-xl">/mo</span></div>
                <p className="text-sm opacity-70 mt-2">3-6 month retainer</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-visceral-red group-hover:text-bone-white">✓</span>
                  <span className="font-general">Everything in Done With You</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-visceral-red group-hover:text-bone-white">✓</span>
                  <span className="font-general">Custom web scraping across entire web</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-visceral-red group-hover:text-bone-white">✓</span>
                  <span className="font-general">Live data feed updated continuously</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-visceral-red group-hover:text-bone-white">✓</span>
                  <span className="font-general">Custom data points specific to your ICP</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-visceral-red group-hover:text-bone-white">✓</span>
                  <span className="font-general">Proprietary competitive intelligence</span>
                </div>
              </div>

              <button className="w-full py-4 border-2 border-black-swan group-hover:border-bone-white group-hover:bg-bone-white group-hover:text-black-swan font-garamond uppercase tracking-wider transition-all magnetic">
                Contact Us
              </button>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg font-general opacity-70">
              Not sure which tier fits? <a href="#cta" className="text-visceral-red hover:underline magnetic">Get a free duplicate detection report</a> first.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="min-h-screen flex flex-col justify-center items-center px-10 py-20 border-t border-black-swan bg-black-swan text-bone-white parallax-hover">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-7xl font-garamond mb-8 text-center tilt-effect">
            How It Works
          </h2>
          <p className="text-xl md:text-2xl font-general text-center opacity-70 mb-20 max-w-3xl mx-auto">
            60 days from kickoff to delivery. Set it and forget it, or ongoing optimization as your data grows.
          </p>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="text-8xl font-garamond text-visceral-red opacity-30">01</div>
              </div>
              <div className="md:col-span-10 space-y-4">
                <h3 className="text-3xl md:text-4xl font-garamond">Kickoff & Audit</h3>
                <p className="text-lg md:text-xl font-general opacity-80 leading-relaxed">
                  60-90 minute deep dive into your CRM. We examine data quality, identify duplicates, confirm property definitions, enrichment scope, and set sample data expectations.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="text-8xl font-garamond text-visceral-red opacity-30">02</div>
              </div>
              <div className="md:col-span-10 space-y-4">
                <h3 className="text-3xl md:text-4xl font-garamond">Enrich & Score Accounts</h3>
                <p className="text-lg md:text-xl font-general opacity-80 leading-relaxed">
                  Every company record gets enriched and normalized. Missing data points filled in: industry, revenue, employee count, tech stack. LinkedIn company IDs, URLs, and domains verified to 92% accuracy.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="text-8xl font-garamond text-visceral-red opacity-30">03</div>
              </div>
              <div className="md:col-span-10 space-y-4">
                <h3 className="text-3xl md:text-4xl font-garamond">Verify Contacts</h3>
                <p className="text-lg md:text-xl font-general opacity-80 leading-relaxed">
                  Up-to-date contacts with verified titles, matched emails, and phone numbers. Every person has a valid email, complete phone number, and LinkedIn URL. You can reach anyone, anywhere.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="text-8xl font-garamond text-visceral-red opacity-30">04</div>
              </div>
              <div className="md:col-span-10 space-y-4">
                <h3 className="text-3xl md:text-4xl font-garamond">Build Clay Workflows</h3>
                <p className="text-lg md:text-xl font-general opacity-80 leading-relaxed">
                  Complete documentation for Clay workflows. Custom AI agents that use your enriched data to execute plays. Within 3 days, you get async feedback cycles on sample outputs.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="text-8xl font-garamond text-visceral-red opacity-30">05</div>
              </div>
              <div className="md:col-span-10 space-y-4">
                <h3 className="text-3xl md:text-4xl font-garamond">Final Review & Deploy</h3>
                <p className="text-lg md:text-xl font-general opacity-80 leading-relaxed">
                  We show you exactly how it works. Then we push all clean, enriched, de-duplicated data directly into your CRM. Your source of truth is finally sacred again.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 bg-visceral-red p-12 rounded-lg text-center tilt-effect">
            <h3 className="text-3xl md:text-5xl font-garamond mb-6">The Result</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-6xl font-garamond mb-2">0%</div>
                <p className="text-lg font-general">Duplicates in your CRM</p>
              </div>
              <div>
                <div className="text-6xl font-garamond mb-2">92%</div>
                <p className="text-lg font-general">Data accuracy rate</p>
              </div>
              <div>
                <div className="text-6xl font-garamond mb-2">100%</div>
                <p className="text-lg font-general">Enriched account records</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="min-h-screen flex flex-col justify-center items-center px-10 py-20 border-t border-bone-white bg-black-swan text-bone-white parallax-hover">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl md:text-7xl font-garamond mb-16 text-center tilt-effect">
            Common Questions
          </h2>

          <div className="space-y-8">
            {/* FAQ 1 */}
            <div className="border-b border-bone-white/20 pb-8">
              <h3 className="text-2xl md:text-3xl font-garamond mb-4">
                How do I know this will work for my CRM?
              </h3>
              <p className="text-lg md:text-xl font-general opacity-80 leading-relaxed">
                I've worked on enough projects—from SafetyWing to Remote.com to consulting for Unify GTM, Data Grail, and Scratchpad—to know what works. The duplicate detection report will show you exactly how many issues exist in your CRM right now. Data doesn't lie.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="border-b border-bone-white/20 pb-8">
              <h3 className="text-2xl md:text-3xl font-garamond mb-4">
                Can you prove ROI to my CFO?
              </h3>
              <p className="text-lg md:text-xl font-general opacity-80 leading-relaxed">
                Yes. We calculate cost per enriched record, reduction in duplicate spend, time saved on manual data entry, and lift in outbound conversion rates from better targeting. Every dollar invested shows measurable impact on pipeline velocity.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="border-b border-bone-white/20 pb-8">
              <h3 className="text-2xl md:text-3xl font-garamond mb-4">
                How long does implementation take?
              </h3>
              <p className="text-lg md:text-xl font-general opacity-80 leading-relaxed">
                60 days from kickoff to final delivery. You'll see sample outputs within 3 days. If your data points are dynamic, we can set it and forget it. Otherwise, we maintain it on an ongoing basis as your CRM grows.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="border-b border-bone-white/20 pb-8">
              <h3 className="text-2xl md:text-3xl font-garamond mb-4">
                Do I need a team or can I do this solo?
              </h3>
              <p className="text-lg md:text-xl font-general opacity-80 leading-relaxed">
                You don't need a team. That's the whole point. I do the heavy lifting—enrichment, deduplication, normalization, documentation. You review, approve, and deploy. Your reps focus on selling, not data entry.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="border-b border-bone-white/20 pb-8">
              <h3 className="text-2xl md:text-3xl font-garamond mb-4">
                What if my market is too volatile or uncertain?
              </h3>
              <p className="text-lg md:text-xl font-general opacity-80 leading-relaxed">
                That's exactly when you need anti-fragility. Volatile markets create edge cases. Edge cases give AI agents more context. More context makes them perform better. Turbulence isn't your enemy—it's what makes your system roar.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="border-b border-bone-white/20 pb-8">
              <h3 className="text-2xl md:text-3xl font-garamond mb-4">
                What happens after the 60-day delivery?
              </h3>
              <p className="text-lg md:text-xl font-general opacity-80 leading-relaxed">
                If your data is static, you're done. Set it and forget it. If you're adding new accounts, migrating systems, or scaling fast, we maintain it on a retainer basis. The choice is yours.
              </p>
            </div>

            {/* FAQ 7 */}
            <div className="pb-8">
              <h3 className="text-2xl md:text-3xl font-garamond mb-4">
                Why should I trust you vs. an agency?
              </h3>
              <p className="text-lg md:text-xl font-general opacity-80 leading-relaxed">
                Agencies sell you activity. I sell you optimization. Agencies want you dependent. I want you to win without me. I've seen the mess at Series C companies and unicorns. I know where the bodies are buried. And I know how to fix it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="min-h-[50vh] flex flex-col justify-center items-center px-10 py-20 border-t border-bone-white bg-bone-white parallax-hover">
        <div className="max-w-4xl w-full text-center">
          <p className="text-lg md:text-xl font-general opacity-60 mb-8 uppercase tracking-widest">
            Worked on projects with
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            <span className="text-2xl md:text-3xl font-garamond opacity-70">Unify GTM</span>
            <span className="text-2xl md:text-3xl font-garamond opacity-70">Data Grail</span>
            <span className="text-2xl md:text-3xl font-garamond opacity-70">Scratchpad</span>
          </div>
          <p className="text-lg md:text-xl font-general opacity-60 mt-12">
            Experience from SafetyWing (Series C, YC-backed) and Remote.com
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="min-h-screen flex flex-col items-center justify-center border-t border-bone-white py-20 bg-visceral-red text-bone-white parallax-hover">
        <div className="max-w-4xl w-full px-10 text-center">
          <h2 className="text-4xl md:text-7xl font-garamond mb-8 tilt-effect">
            Build Your Anti-Fragile System
          </h2>
          <p className="text-xl md:text-2xl font-general mb-16 opacity-90 leading-relaxed">
            Every 6 months, AI gets better. Your CRM data should too.<br />
            Start with a free duplicate detection report or jump straight to a paid audit.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="#pricing"
              className="px-10 py-5 bg-black-swan text-bone-white font-garamond uppercase tracking-widest text-sm hover:bg-white hover:text-black-swan transition-all magnetic glow-pulse"
            >
              Start Paid Audit
            </a>
            <a
              href="mailto:your@email.com"
              className="px-10 py-5 border-2 border-bone-white text-bone-white font-garamond uppercase tracking-widest text-sm hover:bg-bone-white hover:text-visceral-red transition-all magnetic"
            >
              Get Free Report
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="space-y-3">
              <div className="text-5xl font-garamond">0%</div>
              <p className="font-general">Duplicates guaranteed</p>
            </div>
            <div className="space-y-3">
              <div className="text-5xl font-garamond">60</div>
              <p className="font-general">Days to delivery</p>
            </div>
            <div className="space-y-3">
              <div className="text-5xl font-garamond">92%</div>
              <p className="font-general">Data accuracy rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video/Testimonial Section */}
      <section id="video" className="min-h-screen flex flex-col items-center justify-center border-t border-black-swan py-20 bg-bone-white parallax-hover">
        <div className="max-w-5xl w-full px-10">
          <h2 className="text-4xl md:text-7xl font-garamond mb-16 text-center tilt-effect">
            See It In Action
          </h2>

          <div className="w-full aspect-video bg-black-swan flex items-center justify-center tilt-effect rounded-lg overflow-hidden mb-12">
            <div className="text-center p-12">
              <div className="text-6xl mb-6">🎬</div>
              <p className="text-bone-white text-xl font-general mb-4">
                CRM Audit Walkthrough
              </p>
              <p className="text-bone-white/70 font-general">
                Coming soon: Watch a live screen recording of a duplicate detection audit
              </p>
            </div>
          </div>

          <div className="bg-black-swan text-bone-white p-12 rounded-lg tilt-effect">
            <p className="text-2xl md:text-3xl font-garamond text-center leading-relaxed mb-6">
              "The biggest misconception about anti-fragile GTM?"
            </p>
            <p className="text-xl md:text-2xl font-general text-center opacity-80 leading-relaxed">
              People think it's about resilience. It's not. Resilience just means you survive the punch. <span className="text-visceral-red">Anti-fragility means you get stronger from it.</span>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default App;
