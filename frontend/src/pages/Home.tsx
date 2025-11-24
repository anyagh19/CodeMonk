import {  useCallback } from 'react';
import type { FC as ReactFC } from 'react';
import type { FC} from 'react'

// --- Interface Definitions ---
interface IconProps {
    className?: string;
}

// --- Icon Definitions (Combined from all sources) ---

// Icons from original AboutSection
const LightningIcon: ReactFC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"/>
    </svg>
);

const GlobeIcon: ReactFC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10a15.3 15.3 0 0 1-4 10a15.3 15.3 0 0 1-4-10a15.3 15.3 0 0 1 4-10z"></path>
    </svg>
);

const AwardIcon: ReactFC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11.75 22.31c-2.02-.6-3.8-1.78-5-3.31a.5.5 0 0 1-.09-.32c-.17-.7-.34-1.4-.49-2.09c-.1-.47.16-.92.6-.92h15.28c.44 0 .7.45.6.92c-.15.69-.32 1.39-.49 2.09a.5.5 0 0 1-.09.32c-1.2 1.53-2.98 2.71-5 3.31M12 2.25l-.23.11-2.93 1.46c-1.3.65-2.22 1.77-2.6 3.16L5 8.5V13c0 1.25.5 2.5 1.45 3.5M12 2.25l.23.11 2.93 1.46c1.3.65 2.22 1.77 2.6 3.16L19 8.5V13c0 1.25-.5 2.5-1.45 3.5"/>
        <path d="M12 2.25l-2.93 1.46l-.37.19L5.3 4.2C3.82 4.96 2.7 6.2 2 7.7V13c0 1.95.78 3.82 2.19 5.21c1.41 1.39 3.3 2.19 5.31 2.19H14.5c.98 0 1.95-.2 2.87-.58a.5.5 0 0 1 .42-.04l.11.04l.21.09l.34.14c.82.34 1.66.52 2.5.52c.86 0 1.7-.17 2.5-.5V7.7c-.7-1.5-1.82-2.74-3.3-3.5l-3.4-1.7l-.37-.19L12 2.25Z"></path>
    </svg>
);

// Icons from original Home
const CodeIcon: ReactFC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 6V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/>
        <path d="M14 2H6v16h8V2z"/>
        <path d="M18 10h.01"/><path d="M22 10h.01"/><path d="M22 14h.01"/><path d="M18 14h.01"/>
    </svg>
);

const CheckCircleIcon: ReactFC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 3a2.85 2.83 0 0 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
    </svg>
);

const MonitorIcon: ReactFC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
        <line x1="12" y1="20" x2="12" y2="20"></line>
    </svg>
);

const CheckIcon: ReactFC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-cm-blue-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z"></path>
    </svg>
);

// --- NEW Icons for Services Section ---
const ShoppingCartIcon: ReactFC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
);

const MobileIcon: ReactFC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12" y2="18"></line>
    </svg>
);

const CloudIcon: ReactFC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 17.5a4.5 4.5 0 0 0-4.5-4.5H9a3 3 0 0 0-3 3 3 3 0 0 0 3 3h8.5a1.5 1.5 0 0 0 0-3"></path>
        <path d="M15 15a4.5 4.5 0 0 0-4.5-4.5H9a3 3 0 0 0-3 3 3 3 0 0 0 3 3h6"></path>
        <path d="M12 12V3"></path>
    </svg>
);


// --- Reusable Content Components (Internal to App) ---

// 1. Hero Section (from original Home component)
const HeroSection: ReactFC = () => {
    // Dummy handler for button clicks
    const handleCtaClick = useCallback((action: string) => {
        console.log(`${action} clicked.`);
    }, []);

    return (
        <header className="w-full max-w-7xl mx-auto py-12 md:py-20 lg:py-28 px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* Left Content: Headline and CTAs */}
                <div className="space-y-6 lg:space-y-8 animate-fade-in-1s">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tighter text-[#1E293B]">
                        Your Vision. <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#3B82F6] to-[#4F46E5]">
                            Coded.
                        </span>
                    </h1>

                    <p className="text-xl text-gray-600 max-w-xl">
                        We transform complex ideas into elegant, high-performing digital solutions. Partner with <strong className="font-semibold text-[#4F46E5]">CodeMonk</strong> to bring your vision to life with precision and quality.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                        <button onClick={() => handleCtaClick('Start Project')}
                            className="px-8 py-3 text-lg font-semibold text-white bg-[#4F46E5] rounded-xl shadow-lg shadow-[#4F46E5]/50 transition duration-300 ease-in-out transform hover:scale-[1.02] hover:bg-[#1D4ED8] focus:outline-none focus:ring-4 focus:ring-[#4F46E5]/70"
                        >
                            Start Your Project &rarr;
                        </button>
                        <button onClick={() => handleCtaClick('Explore Services')}
                            className="px-8 py-3 text-lg font-semibold text-[#1E293B] border border-gray-300 bg-white rounded-xl transition duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-md focus:outline-none focus:ring-4 focus:ring-gray-300"
                        >
                            Explore Services
                        </button>
                    </div>
                </div>

                {/* Right Content: Animated Browser Mockup */}
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden animate-slide-in-2s">
                    <div className="browser-mockup relative w-full h-full bg-[#1E293B] rounded-3xl overflow-hidden">
                        
                        {/* Browser Address Bar */}
                        <div className="flex items-center space-x-2 p-3 bg-gray-900 border-b border-gray-800">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <div className="grow">
                                <input type="text" value="codemonk.io" readOnly
                                    className="w-full text-center text-sm bg-gray-700 text-gray-300 rounded-lg py-1 px-4 focus:outline-none"/>
                            </div>
                        </div>

                        {/* Mock Website Content Area */}
                        <div className="relative w-full h-[calc(100%-40px)] flex items-center justify-center bg-gray-900 text-white">
                            
                            {/* Animated Wavy Background */}
                            <div className="absolute inset-0 overflow-hidden">
                                <svg className="absolute bottom-0 left-0 w-[200%] h-full" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ minWidth: '1440px' }}>
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style={{stopColor:'rgb(30,64,175)', stopOpacity:0.8}} />
                                            <stop offset="100%" style={{stopColor:'rgb(79,70,229)', stopOpacity:0.8}} />
                                        </linearGradient>
                                    </defs>
                                    {/* Wave 1 */}
                                    <path d="M0,192L80,165.3C160,139,320,85,480,96C640,107,800,181,960,197.3C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                                        className="wave-path" style={{ opacity: 0.6, animationDelay: '0s' }}></path>
                                    {/* Wave 2 (Offset animation by -15s for continuous loop) */}
                                    <path d="M0,128L80,149.3C160,171,320,213,480,197.3C640,181,800,107,960,106.7C1120,107,1280,181,1360,213.3L1440,245.3L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                                        className="wave-path" style={{ opacity: 0.8, animationDelay: '-15s' }}></path>
                                </svg>
                            </div>
                            
                            {/* Content Overlay */}
                            <div className="relative z-10 p-8 text-center space-y-4">
                                
                                {/* Agency Logo/Icon */}
                                <div className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                                    <CodeIcon className="w-8 h-8 mr-2 text-[#4F46E5]" />
                                    CodeMonk
                                </div>

                                {/* Mock Headline */}
                                <h2 className="text-3xl font-extrabold">
                                    Crafting <span className="text-[#4F46E5]">Digital Growth</span> through Innovation
                                </h2>
                                <p className="text-gray-300">Websites, Apps & Software that Drive Success</p>

                                {/* Mock Badge (Shadcn Badge Style) */}
                                <div className="inline-flex items-center space-x-2 bg-gray-700/50 backdrop-blur-sm p-2 rounded-xl text-sm font-medium border border-gray-600">
                                    <CheckCircleIcon className="w-5 h-5 text-green-400" />
                                    <span>Code Quality: <strong className="text-green-300">100% Clean</strong></span>
                                </div>
                                
                                {/* Mock Responsive Badge */}
                                <div className="absolute bottom-6 right-6 p-3 bg-gray-700/70 backdrop-blur-md rounded-xl text-sm font-medium border border-gray-600 flex flex-col items-center">
                                    <MonitorIcon className="w-6 h-6 text-[#4F46E5]" />
                                    <span className="mt-1 text-xs text-gray-200">Responsive</span>
                                    <strong className="text-white">All Devices</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
};


// 2. About Section (from original AboutSection component)
const AboutSection: ReactFC = () => {
    return (
        <section className="bg-white font-sans antialiased text-cm-secondary flex items-center justify-center py-16 px-4 sm:px-6">
            <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* Left Content: Animated Illustration Card */}
                <div className="relative p-6 bg-blue-50 rounded-3xl shadow-xl flex items-center justify-center min-h-[400px] overflow-hidden animate-scale-in delay-200">
                    <div className="relative z-10 text-center space-y-4 max-w-sm">
                        <h2 className="text-4xl font-bold text-cm-secondary leading-tight animate-fade-in-up delay-400">
                            Custom Web Solutions that Convert
                        </h2>
                        <p className="text-lg text-gray-700 animate-fade-in-up delay-500">
                            Professional, SEO-optimized, and responsive websites built to grow.
                        </p>
                    </div>

                    {/* Developer Illustration (Placeholder Image) */}
                    <div className="absolute bottom-0 right-0 w-2/3 h-full overflow-hidden animate-fade-in-up delay-600" style={{ transformOrigin: 'bottom right' }}>
                        <img 
                            src="https://placehold.co/400x550/3B82F6/ffffff?text=Developer+Working" 
                            alt="Developer working" 
                            className="absolute bottom-0 right-0 h-4/5 w-auto object-contain animate-float-bob rounded-xl" 
                        />
                        {/* Mock browser windows behind developer */}
                        <div className="absolute top-1/4 left-1/3 w-24 h-16 bg-blue-300/80 rounded-lg shadow-md animate-float-bob delay-100" style={{ animationDuration: '3.5s' }}></div>
                        <div className="absolute top-1/2 left-1/4 w-32 h-20 bg-blue-400/80 rounded-lg shadow-md animate-float-bob delay-200" style={{ animationDuration: '4s' }}></div>
                    </div>


                    {/* Award Badge (Animated) */}
                    <div className="absolute bottom-6 left-6 p-4 bg-white rounded-xl shadow-lg border border-gray-200 flex items-center space-x-3 animate-fade-in-up delay-700">
                        <div className="bg-yellow-100 p-2 rounded-lg">
                            <AwardIcon className="w-6 h-6 text-yellow-500" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-800">AWARD WINNING</p>
                            <p className="text-lg font-bold text-cm-secondary">Excellence in Tech</p>
                        </div>
                    </div>

                    {/* Decorative Blob */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-200 rounded-full mix-blend-multiply opacity-70 animate-float-bob delay-100" style={{ animationDuration: '4s' }}></div>
                    <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-purple-200 rounded-full mix-blend-multiply opacity-70 animate-float-bob delay-300" style={{ animationDuration: '5s' }}></div>
                </div>

                {/* Right Content: Value Propositions */}
                <div className="space-y-8 lg:pl-8">
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-cm-secondary animate-fade-in-up delay-100">
                        We Build the <br />
                        Future of <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-cm-blue-light to-cm-primary">
                            Digital Business
                        </span>
                    </h1>
                    
                    <p className="text-xl text-gray-600 max-w-xl animate-fade-in-up delay-300">
                        At <strong className="font-semibold text-cm-primary">CodeMonk Innovations</strong>, we don't just write code; we engineer success. Our team of passionate developers and designers is dedicated to transforming your ideas into powerful, scalable digital solutions.
                    </p>

                    {/* Feature List */}
                    <div className="space-y-6 pt-4">
                        {/* Feature Item 1 */}
                        <div className="flex items-start space-x-4 animate-fade-in-right delay-400">
                            <div className="shrink-0 p-3 bg-blue-100 rounded-xl">
                                <LightningIcon className="w-7 h-7 text-cm-blue-light" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-cm-secondary">Innovation First</h3>
                                <p className="text-gray-600">
                                    We stay ahead of the curve by adopting the latest technologies and development practices.
                                </p>
                            </div>
                        </div>

                        {/* Feature Item 2 */}
                        <div className="flex items-start space-x-4 animate-fade-in-right delay-500">
                            <div className="shrink-0 p-3 bg-blue-100 rounded-xl">
                                <GlobeIcon className="w-7 h-7 text-cm-blue-light" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-cm-secondary">Global Standards</h3>
                                <p className="text-gray-600">
                                    Our solutions are built to global quality standards, ensuring reliability and performance worldwide.
                                </p>
                            </div>
                        </div>

                        {/* Feature Item 3 */}
                        <div className="flex items-start space-x-4 animate-fade-in-right delay-600">
                            <div className="shrink-0 p-3 bg-blue-100 rounded-xl">
                                <CheckIcon className="w-7 h-7 text-cm-blue-light" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-cm-secondary">Client-Centric Approach</h3>
                                <p className="text-gray-600">
                                    Your success is our priority. We work closely with you from concept to deployment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// 3. NEW Services and CTA Section (Based on image content)
const ServicesAndCtaSection: ReactFC = () => {
    const handleCtaClick = useCallback((action: string) => {
        console.log(`${action} clicked.`);
    }, []);

    // Component for a single Service Card
    interface ServiceCardProps {
        Icon: ReactFC<IconProps>;
        title: string;
        description: string;
        delay: string;
    }
    
    const ServiceCard: ReactFC<ServiceCardProps> = ({ Icon, title, description, delay }) => (
        <div className={`p-6 bg-white rounded-2xl shadow-lg border border-gray-100 space-y-4 animate-fade-in-up ${delay} hover:shadow-2xl transition duration-300 ease-in-out`}>
            <div className="shrink-0 w-14 h-14 bg-cm-blue-light p-3 rounded-xl flex items-center justify-center text-white shadow-lg shadow-cm-blue-light/30">
                <Icon className="w-full h-full" />
            </div>
            <h3 className="text-xl font-bold text-cm-secondary">{title}</h3>
            <p className="text-gray-600 text-base">{description}</p>
        </div>
    );

    return (
        <section className="py-16 px-4 sm:px-6 bg-[#F8FAFC]">
            <div className="w-full max-w-7xl mx-auto space-y-16">
                
                {/* Services Header */}
                <div className="text-center space-y-4">
                    <h2 className="text-5xl md:text-6xl font-extrabold text-cm-secondary leading-tight">
                        Solutions That Drive
                        <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-cm-blue-light to-cm-primary">
                            Digital Growth
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We deliver cutting-edge technology solutions tailored to your unique business needs.
                    </p>
                </div>

                {/* Services Grid (Matches Image 1) */}
                <div className="grid md:grid-cols-3 gap-8">
                    <ServiceCard
                        Icon={ShoppingCartIcon}
                        title="IT Consulting"
                        description="Providing strategic guidance and technology roadmap planning to optimize your digital infrastructure and accelerate business goals."
                        delay="delay-100"
                    />
                    <ServiceCard
                        Icon={MobileIcon}
                        title="Website Development"
                        description="Transforming ideas into intuitive mobile applications, enhancing user engagement."
                        delay="delay-300"
                    />
                    <ServiceCard
                        Icon={CloudIcon}
                        title="Cloud Consulting"
                        description="Harnessing the power of cloud technology for scalable, efficient, and secure operations."
                        delay="delay-500"
                    />
                </div>

                {/* CTA Banner (Matches Image 2) */}
                <div className="p-10 md:p-16 lg:p-20 bg-linear-to-r from-[#3B82F6] to-[#4F46E5] rounded-3xl text-center shadow-2xl shadow-[#4F46E5]/40 animate-scale-in delay-700">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        Let's discuss how our expert team can help you achieve your digital goals with custom solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <button onClick={() => handleCtaClick('Free Consultation')}
                            className="px-8 py-3 text-lg font-semibold text-[#4F46E5] bg-white rounded-xl transition duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-lg hover:ring-2 hover:ring-white/50 focus:outline-none focus:ring-4 focus:ring-white/70 flex items-center justify-center space-x-2"
                        >
                            Get Free Consultation <span className='ml-2 text-xl'>&rarr;</span>
                        </button>
                        <button onClick={() => handleCtaClick('View Pricing')}
                            className="px-8 py-3 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-xl transition duration-300 ease-in-out transform hover:scale-[1.02] hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/70"
                        >
                            View Pricing
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}


// --- Main App Component (Required export) ---
const Home: FC = () => {
    
    // --- Combined Custom Styles and Animations ---
    const customStyles: string = `
        /* Custom Colors defined below: */
        /* cm-primary: #4F46E5 */ 
        /* cm-secondary: #1E293B */
        /* cm-bg-light: #F8FAFC */
        /* cm-blue-light: #3B82F6 */
        /* cm-blue-dark: #1D4ED8 */

        /* Hero Section Animations */
        @keyframes wave-animation {
            0% { transform: translate(0, 0); }
            100% { transform: translate(-50%, 0); }
        }
        .wave-path {
            fill: url(#gradient);
            animation: wave-animation 30s linear infinite;
        }
        @keyframes fade-in-down {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-1s {
            animation: fade-in-down 1s ease-out 0.2s forwards;
            opacity: 0;
        }
        @keyframes slide-in-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in-2s {
            animation: slide-in-up 1s ease-out 0.5s forwards;
            opacity: 0;
        }
        .browser-mockup {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
            transition: transform 0.3s ease-in-out;
        }
        .browser-mockup:hover {
            transform: translateY(-8px) scale(1.01);
        }

        /* About Section & Services Animations */
        @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-right {
            0% { opacity: 0; transform: translateX(-20px); }
            100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes scale-in {
            0% { opacity: 0; transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
        }
        @keyframes float-bob {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
        .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
            opacity: 0; /* Ensure it starts hidden */
        }
        .animate-fade-in-right {
            animation: fade-in-right 0.8s ease-out forwards;
            opacity: 0; /* Ensure it starts hidden */
        }
        .animate-scale-in {
            animation: scale-in 0.6s ease-out forwards;
            opacity: 0; /* Ensure it starts hidden */
        }
        .animate-float-bob {
            animation: float-bob 3s ease-in-out infinite;
        }
        /* Delay animations for staggered effect */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
    `;

    return (
        <div className="bg-[#F8FAFC] min-h-screen font-sans antialiased text-[#1E293B]">
            {/* Inject combined custom styles for animations */}
            <style>{customStyles}</style>

            {/* Section 1: Hero */}
            <HeroSection />

            {/* Section 2: Services and CTA (New section based on images) */}
            <ServicesAndCtaSection />
            
            {/* Section 3: About / Features (Kept original order) */}
            <AboutSection />
        </div>
    );
};

export default Home;