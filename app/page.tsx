'use client'

import { useState } from 'react'
import { Github, Linkedin, Youtube, Instagram, Facebook, Factory } from 'lucide-react'
import { TerminalLink } from '@/components/ui/terminal-link'

export default function TerminalPortfolio() {
  const [isDark, setIsDark] = useState(true)

  return (
    <div className={isDark ? 'dark' : 'light'} style={{
      backgroundColor: isDark ? '#000000' : '#ffffff',
      color: isDark ? '#e0e0e0' : '#000000'
    }}>
      <main className="min-h-screen bg-background text-foreground p-4 md:p-8 max-w-4xl mx-auto">
        {/* HEADER */}
        <header className="border-b border-current pb-6 mb-8">
          <div className="flex justify-between items-center terminal-line">
            <div className="text-sm md:text-base">
              <span className="opacity-70">software@engineer</span>
              <span className="opacity-70">:</span>
              <span className="opacity-70">~</span>
              <span className="opacity-70">$ </span>
              <span className="font-bold">&lt;frank_condor/&gt;</span>
            </div>
            <button
              onClick={() => setIsDark(!isDark)}
              className="text-xs md:text-sm border border-current px-3 py-1 hover:bg-accent hover:text-background transition-colors"
            >
              {isDark ? '[ light ]' : '[ dark ]'}
            </button>
          </div>
        </header>

        {/* HERO */}
        <section className="mb-12">
          <div className="terminal-line text-xs md:text-sm opacity-70 mb-4">
            $ cat /readme.txt
          </div>
          <div className="pl-4 border-l-2 border-accent space-y-4">
            <div className="text-xl md:text-2xl font-bold terminal-line">
              Frank Condor // Software Engineer
              <span className="cursor"></span>
            </div>
            <p className="text-sm md:text-base terminal-line opacity-90 leading-relaxed">
              Software Engineering student at UNMSM focused on connecting business needs with technological solutions. Hands-on experience building automations (Playwright), managing e-commerce (WordPress/Kinsta), and developing custom ERP modules (Odoo). Problem solver agnostic to technology. Code that lasts.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <TerminalLink href="https://github.com/frank777ch" icon={Github} label="github" />
              <TerminalLink href="https://www.linkedin.com/in/frank-kevin-condor-huarhuachi/" icon={Linkedin} label="linkedin" />
              <TerminalLink href="https://www.youtube.com/@iriscode.pe24" icon={Youtube} label="youtube" />
              <TerminalLink href="https://www.facebook.com/frank.condor.180457/" icon={Facebook} label="facebook" />
              <TerminalLink href="https://www.instagram.com/frankkevincondor/" icon={Instagram} label="instagram" />
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="mb-12">
          <div className="terminal-line text-xs md:text-sm opacity-70 mb-4">
            $ cat philosophy.md
          </div>
          <div className="pl-4 border-l-2 border-current space-y-3">
            <p className="text-sm md:text-base terminal-line opacity-90 leading-relaxed">
              Right tool for the job. Not driven by hype or trending frameworks. Pragmatic decisions rooted in fundamentals. Experienced in leading projects and implementing innovative features that enhance user experience. Adaptability and constant learning as core features. I don't just write code; I design systems that breathe.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section className="mb-12">
          <div className="terminal-line text-xs md:text-sm opacity-70 mb-4">
            $ ls -la skills/
          </div>
          <div className="pl-4 border-l-2 border-current space-y-3 text-xs md:text-sm terminal-line">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <div className="font-bold mb-2 text-accent">Backend & DB</div>
                <div className="opacity-80 space-y-1">
                  <div>Python | Django</div>
                  <div>Node.js | PHP</div>
                  <div>C++ | C#</div>
                  <div>PostgreSQL | MySQL</div>
                  <div>Oracle | MongoDB | SQLite</div>
                </div>
              </div>
              <div>
                <div className="font-bold mb-2 text-accent">Frontend & Testing</div>
                <div className="opacity-80 space-y-1">
                  <div>JavaScript</div>
                  <div>Playwright (RPA)</div>
                  <div>React Native</div>
                  <div>Tailwind CSS</div>
                  <div>HTML | CSS</div>
                </div>
              </div>
              <div>
                <div className="font-bold mb-2 text-accent">Infra & Tools</div>
                <div className="opacity-80 space-y-1">
                  <div>Odoo ERP | WordPress</div>
                  <div>Docker | GitHub Actions</div>
                  <div>Linux (Pop!_OS/Ubuntu)</div>
                  <div>ESP32 | Arduino IDE</div>
                  <div>Figma | Live2D</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORK HISTORY & PROJECTS */}
        <section className="mb-12">
          <div className="terminal-line text-xs md:text-sm opacity-70 mb-4">
            $ cd work_history && ls -la
          </div>
          <div id="projects" className="pl-4 border-l-2 border-current space-y-6">
            
            {/* Experience 1 */}
            <div className="terminal-line text-xs md:text-sm">
              <div className="font-bold hover:text-accent transition-colors cursor-pointer">
                → ./Vape_Station_Systems
              </div>
              <div className="opacity-70 text-xs ml-4 mt-1">
                tech: Odoo v18 | Python | Playwright | WordPress | XML | JS
              </div>
              <div className="opacity-80 text-xs ml-4 mt-1">
                Systems Assistant. Developing custom ERP modules to adapt business requirements. Built an RPA bot for logistics data extraction (Shalom) and integrated it directly into the WordPress checkout flow.
              </div>
            </div>

            {/* Experience 2 */}
            <div className="terminal-line text-xs md:text-sm">
              <div className="font-bold hover:text-accent transition-colors cursor-pointer">
                → ./OGBU_IT_Infrastructure
              </div>
              <div className="opacity-70 text-xs ml-4 mt-1">
                tech: Oracle | MySQL | Networking | Hardware
              </div>
              <div className="opacity-80 text-xs ml-4 mt-1">
                IT Assistant. Executed critical data migration and replication between cloud Oracle databases and local MySQL instances to ensure high availability for ticket validation systems.
              </div>
            </div>

            {/* Project 1 */}
            <div className="terminal-line text-xs md:text-sm">
              <div className="font-bold hover:text-accent transition-colors cursor-pointer">
                → ./AgriSense_IoT_System
              </div>
              <div className="opacity-70 text-xs ml-4 mt-1">
                tech: Python | C++ | React Native | Django | ESP32 | InfluxDB
              </div>
              <div className="opacity-80 text-xs ml-4 mt-1">
                Led team to build environmental monitoring for agriculture. Real-time sensor data collection via ESP32. Handled time-series data visualization optimizing relational database loads.
              </div>
            </div>

            {/* Project 2 */}
            <div className="terminal-line text-xs md:text-sm">
              <div className="font-bold hover:text-accent transition-colors cursor-pointer">
                → ./EvaEduca_Platform
              </div>
              <div className="opacity-70 text-xs ml-4 mt-1">
                tech: JavaScript | HTML/CSS | Django | ChatGPT API | Live2D
              </div>
              <div className="opacity-80 text-xs ml-4 mt-1">
                Full stack educational automation. Engineered an interactive 2D virtual agent, syncing ChatGPT AI responses with voice and gestures for enhanced UX.
              </div>
            </div>

          </div>
        </section>

        {/* CONTACT */}
        <section className="border-t border-current pt-8">
          <div className="terminal-line text-xs md:text-sm space-y-3">
            <div className="opacity-70">user@engineer:~/work_history$ exit</div>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:fcondorh514@gmail.com" className="hover:text-accent transition-colors">
                [ email ]
              </a>
            </div>
            <div className="opacity-50 pt-4">
              {'// connection closed. process terminated.'}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}