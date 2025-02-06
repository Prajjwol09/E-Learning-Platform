import React from 'react';
import { Book, Trophy, Users, Video, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { LanguageSelector } from './components/LanguageSelector';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Book className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              <h1 className="text-2xl font-bold">E-Sikshya</h1>
            </div>
            <div className="flex items-center space-x-4">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Transform Your Learning Journey</h2>
                <p className="text-lg mb-8">Join thousands of learners worldwide in our interactive online learning platform.</p>
                <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                  Start Learning
                </button>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt="Students learning"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose E-Sikshya?</h2>
              <p className="text-gray-600 dark:text-gray-400">Discover the features that make us stand out</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Video className="w-8 h-8" />}
                title="Live Interactive Classes"
                description="Join real-time sessions with expert instructors and engage in interactive learning experiences."
              />
              <FeatureCard
                icon={<Trophy className="w-8 h-8" />}
                title="Gamified Learning"
                description="Earn badges, compete on leaderboards, and track your progress while learning."
              />
              <FeatureCard
                icon={<Users className="w-8 h-8" />}
                title="Expert Mentors"
                description="Connect with industry professionals for personalized guidance and support."
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Book className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                <span className="text-xl font-bold">E-Sikshya</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Transforming education through interactive and engaging online learning experiences.
              </p>
              <div className="flex space-x-4">
                <SocialLink href="#" icon={<Facebook className="w-5 h-5" />} label="Facebook" />
                <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} label="Twitter" />
                <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
                <SocialLink href="#" icon={<Youtube className="w-5 h-5" />} label="YouTube" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <FooterLink href="#" text="About Us" />
                <FooterLink href="#" text="Our Courses" />
                <FooterLink href="#" text="Become an Instructor" />
                <FooterLink href="#" text="Student Success Stories" />
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-3">
                <FooterLink href="#" text="Help Center" />
                <FooterLink href="#" text="Terms of Service" />
                <FooterLink href="#" text="Privacy Policy" />
                <FooterLink href="#" text="FAQ" />
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Mail className="w-5 h-5" />
                  <span>support@esikshya.com</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Phone className="w-5 h-5" />
                  <span>+977- 9888888888</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>123 Kathmandu, Nepal</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                © {new Date().getFullYear()} E-Sikshya. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <ThemeToggle />
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="text-indigo-600 dark:text-indigo-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <li>
      <a
        href={href}
        className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
      >
        {text}
      </a>
    </li>
  );
}

export default App;
