import React, { useCallback, useState } from 'react';

// =================================================================
// 1. ICON DEFINITIONS (Combined and Standardized)
// =================================================================

interface IconProps extends React.SVGProps<SVGSVGElement> {
    children: React.ReactNode;
    className: string;
}

// Universal Icon component template
const Icon: React.FC<IconProps> = ({ children, className, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
    >
        {children}
    </svg>
);

// Specific Icons (Merged from both components)
const GlobeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <Icon {...props} className={props.className || "w-6 h-6"}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20M2 12h20" />
    </Icon>
);

const SmartphoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <Icon {...props} className={props.className || "w-6 h-6"}>
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
    </Icon>
);

const ShoppingCartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <Icon {...props} className={props.className || "w-6 h-6"}>
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </Icon>
);

const CloudIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <Icon {...props} className={props.className || "w-6 h-6"}>
        <path d="M12 10V4" />
        <path d="M12 4a5 5 0 0 1 5 5h0a7 7 0 0 1-7 7a7 7 0 0 1-7-7h0a5 5 0 0 1 5-5" />
    </Icon>
);

const CodeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <Icon {...props} className={props.className || "w-6 h-6"}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </Icon>
);

const UsersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <Icon {...props} className={props.className || "w-6 h-6"}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87ZM16 3.13a4 4 0 0 1 0 7.75" />
    </Icon>
);

const LightningIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <Icon {...props} className={props.className || "w-6 h-6"}>
        <path d="M13 2H3l8 11H3l8 11h2l8-11h-8l8-11z" />
    </Icon>
);

const MonitorIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <Icon {...props} className={props.className || "w-6 h-6"}>
        <rect width="20" height="15" x="2" y="3" rx="2" ry="2" />
        <line x1="12" x2="12" y1="18" y2="21" />
        <line x1="8" x2="16" y1="21" y2="21" />
    </Icon>
);

const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <Icon {...props} className={props.className || "w-6 h-6"}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14 9 11" />
    </Icon>
);

// =================================================================
// 2. SERVICE CARD COMPONENT
// =================================================================

interface ServiceCardProps {
    Icon: React.FC<any>;
    title: string;
    description: string;
    badge?: string;
    index: number; // Used for staggered animation delay
}

const ServiceCard: React.FC<ServiceCardProps> = ({ Icon, title, description, badge, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`
                relative p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl
                border-t-4 border-transparent
                group transform transition-all duration-700 ease-in-out
                hover:scale-[1.03] hover:border-blue-500
                flex flex-col h-full
                opacity-0 animate-fade-in-up
            `}
            style={{ animationDelay: `${index * 0.15 + 0.5}s` }} // Staggered animation
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Icon Container with subtle animation */}
            <div className={`
                shrink-0 w-16 h-16 bg-blue-500 p-3 rounded-xl flex items-center justify-center text-white
                shadow-lg transition-all duration-300 ease-out
                ${isHovered ? 'shadow-blue-600/60' : 'shadow-blue-500/40'}
            `}>
                <Icon className={`w-full h-full transform transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} />
            </div>

            <h3 className="text-2xl font-extrabold text-gray-900 leading-snug pt-6 pb-2">{title}</h3>
            <p className="text-base text-gray-600 font-medium grow">{description}</p>

            {/* Optional Badge */}
            {badge && (
                <div className="mt-4">
                    <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-600 border border-blue-200">
                        {badge}
                    </span>
                </div>
            )}
            {/* Hover overlay for a subtle effect */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-10 bg-linear-to-br from-blue-500/10 to-indigo-500/10"></div>
        </div>
    );
};

// =================================================================
// 3. STAT CARD COMPONENT
// =================================================================

interface StatCardProps {
    value: string;
    label: string;
    delay: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, delay }) => (
    <div
        className={`
            flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg
            transform transition-all duration-500 ease-out hover:scale-[1.03]
            border-b-4 border-blue-500/0 hover:border-blue-500
            animate-pop-in ${delay}
        `}
    >
        {/* Corrected custom class to standard Tailwind gradient */}
        <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 mb-1">
            {value}
        </span>
        <span className="text-base font-semibold text-gray-600 text-center">{label}</span>
    </div>
);


// =================================================================
// 4. MAIN SERVICES PAGE COMPONENT
// =================================================================

const Services: React.FC = () => {
    const handleCtaClick = useCallback((action: string): void => {
        // eslint-disable-next-line no-console
        console.log(`${action} clicked.`);
    }, []);

    // --- Data from first component for the Service Grid ---
    const services = [
        {
            Icon: GlobeIcon,
            title: "Custom Web Development",
            description: "Crafting bespoke, high-performance web solutions and engaging digital experiences tailored to your brand.",
            badge: "React & Next.js Solutions",
        },
        {
            Icon: SmartphoneIcon,
            title: "Mobile App Development",
            description: "Building intuitive native and cross-platform mobile applications for iOS and Android with stunning UI/UX.",
        },
        {
            Icon: ShoppingCartIcon,
            title: "E-commerce Solutions",
            description: "Developing robust online stores and marketplaces that drive conversions, manage inventory, and scale with your business.",
        },
        {
            Icon: CloudIcon,
            title: "Cloud Solutions",
            description: "Implementing scalable cloud infrastructure, migration, and managed services for optimal performance and security.",
        },
        {
            Icon: CodeIcon,
            title: "Enterprise Software",
            description: "Designing and developing complex, mission-critical software systems to streamline operations and enhance productivity.",
            badge: "Custom CRM & ERP",
        },
        {
            Icon: UsersIcon,
            title: "IT Consulting & Strategy",
            description: "Providing expert guidance on technology roadmaps, digital transformation, and IT architecture to achieve business objectives.",
        },
        {
            Icon: LightningIcon,
            title: "DevOps & Automation",
            description: "Streamlining development and operations with CI/CD pipelines, automation, and infrastructure-as-code practices.",
        },
        {
            Icon: MonitorIcon,
            title: "UI/UX Design",
            description: "Creating captivating user interfaces and intuitive user experiences that delight customers and drive engagement.",
            badge: "Figma & Adobe XD",
        },
    ];

    // --- Data from second component for the Stats Grid ---
    const statsData: StatCardProps[] = [
        { value: "5+", label: "Projects Delivered", delay: "delay-200" },
        { value: "100%", label: "Client Satisfaction", delay: "delay-400" },
        { value: "24/7", label: "Support Available", delay: "delay-600" },
        { value: "5+", label: "Years Experience", delay: "delay-800" },
    ];
    
    // --- Data for the Hero Features (from second component) ---
    interface KeyFeature {
        Icon: React.FC<React.SVGProps<SVGSVGElement>>;
        text: string;
    }

    const keyFeatures: KeyFeature[] = [
        { Icon: CheckCircleIcon, text: "React & Next.js Solutions" },
        { Icon: CheckCircleIcon, text: "SEO Optimized" },
        { Icon: CheckCircleIcon, text: "E-commerce Platforms" },
        { Icon: CheckCircleIcon, text: "Mobile Responsive" },
    ];


    return (
        <div className="font-sans antialiased bg-linear-to-br from-gray-50 to-blue-50 min-h-screen text-gray-900">
            {/* Custom Styles and Animations (Combined for all sections) */}
            <style >{`
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                    opacity: 0;
                }

                @keyframes pop-in {
                    0% { opacity: 0; transform: scale(0.95); }
                    80% { opacity: 1; transform: scale(1.02); }
                    100% { opacity: 1; transform: scale(1); }
                }
                .animate-pop-in {
                    animation: pop-in 0.6s ease-out forwards;
                    opacity: 0;
                }
                
                /* Defining custom shadow utility for visual depth */
                .shadow-3xl {
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05);
                }

                .dot-pattern {
                    background-image: radial-gradient(#d1d5db 1px, transparent 1px);
                    background-size: 16px 16px;
                }
                .delay-200 { animation-delay: 0.2s; }
                .delay-400 { animation-delay: 0.4s; }
                .delay-600 { animation-delay: 0.6s; }
                .delay-800 { animation-delay: 0.8s; }
            `}</style>

            <main className="relative z-10 py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
                {/* Decorative background pattern */}
                <div className="absolute inset-0 dot-pattern opacity-30 z-0"></div>

                <div className="w-full max-w-7xl mx-auto space-y-24 relative z-10">
                    
                    {/* --- 1. Hero / Custom Web Development Section (From second component) --- */}
                    <section className="bg-white rounded-3xl shadow-3xl overflow-hidden animate-pop-in">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                            
                            {/* Left: Image/Code Area */}
                            <div className="relative p-4 lg:p-0 min-h-[300px] lg:min-h-full flex items-center justify-center bg-blue-900/90 rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
                                {/* Using placeholder style for the image */}
                                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('path-to-your-code-screen-image.jpg')" }}>
                                    <div className="absolute inset-0 bg-linear-to-r from-blue-900 to-indigo-900/80 opacity-90"></div>
                                </div>
                                <GlobeIcon className="absolute w-20 h-20 p-3 bg-white text-blue-600 rounded-2xl shadow-xl animate-pop-in" style={{ opacity: 1, animationDelay: '0.8s' }} />
                            </div>

                            {/* Right: Content Area */}
                            <div className="p-8 sm:p-12 lg:p-16 space-y-8 flex flex-col justify-center">
                                <h1 className="text-5xl font-extrabold text-gray-900 leading-tight tracking-tighter animate-fade-in-up">
                                    Custom Web <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Development</span>
                                </h1>
                                <p className="text-lg text-gray-600 font-medium animate-fade-in-up delay-200">
                                    Enterprise-grade web applications and responsive websites that drive **business growth** and enhance user experience.
                                </p>

                                {/* Key Features Grid */}
                                <h3 className="text-base font-bold uppercase text-gray-500 tracking-wider pt-4 animate-fade-in-up delay-400">
                                    Key Features
                                </h3>
                                <div className="grid grid-cols-2 gap-y-4 text-gray-700 animate-fade-in-up delay-600">
                                    {keyFeatures.map((feature, index) => (
                                        <div key={index} className="flex items-center space-x-3">
                                            <feature.Icon className="w-6 h-6 text-blue-500 shrink-0" />
                                            <span className="font-medium">{feature.text}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-6 animate-fade-in-up delay-800">
                                    <button onClick={() => handleCtaClick('Get Started')}
                                        className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-xl shadow-lg shadow-blue-500/50 transition duration-300 ease-in-out transform hover:bg-blue-700 hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                                    >
                                        Get Started <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                    <button onClick={() => handleCtaClick('Learn More')}
                                        className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-blue-600 bg-white border-2 border-blue-600 rounded-xl transition duration-300 ease-in-out transform hover:bg-blue-50 hover:border-blue-700 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* --- 2. Full Services Grid --- */}
                    <div className="text-center space-y-6 pt-12">
                        {/* Title from the first component's header for this section */}
                        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tighter animate-fade-in-up delay-200">
                            Our Core <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Services</span>
                        </h2>
                        <p className="text-xl text-gray-700 max-w-4xl mx-auto pt-4 animate-fade-in-up delay-400">
                            A holistic approach to technology, covering everything from design and development to cloud deployment and strategic consulting.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                Icon={service.Icon}
                                title={service.title}
                                description={service.description}
                                badge={service.badge}
                                index={index} // Pass index for staggered animation
                            />
                        ))}
                    </div>

                    {/* --- 3. Stats Section (From second component) --- */}
                    <section className="pt-8">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
                            {statsData.map((stat, index) => (
                                <StatCard key={index} {...stat} />
                            ))}
                        </div>
                    </section>


                    {/* --- 4. CTA Banner Section (From first component) --- */}
                    <div className="py-16 px-6 md:px-12 lg:px-20 bg-linear-to-br from-blue-600 to-indigo-700 rounded-3xl text-center shadow-3xl shadow-blue-500/50 mt-20 transform hover:scale-[1.01] transition-transform duration-500 ease-out animate-pop-in delay-800">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-snug">
                            Ready to Elevate Your Digital Presence?
                        </h2>
                        <p className="text-lg text-blue-100 mb-12 max-w-3xl mx-auto">
                            Don't just compete, dominate. Partner with us to craft cutting-edge solutions that propel your business forward.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center space-y-5 sm:space-y-0 sm:space-x-8">
                            <button onClick={() => handleCtaClick('Free Consultation')}
                                className="px-10 py-4 text-lg font-bold text-indigo-700 bg-white rounded-xl transition duration-500 ease-in-out transform hover:scale-[1.05] hover:shadow-2xl hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-white/70 flex items-center justify-center space-x-3 shadow-lg group"
                            >
                                <span className="relative z-10">Get Free Consultation</span>
                                <span className="ml-3 text-xl transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                            </button>
                            <button onClick={() => handleCtaClick('View Pricing')}
                                className="px-10 py-4 text-lg font-bold text-white bg-transparent border-2 border-white rounded-xl transition duration-500 ease-in-out transform hover:scale-[1.05] hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/70 shadow-lg"
                            >
                                View Pricing
                            </button>
                        </div>
                    </div>

                </div>
            </main>

     
            
        </div>
    );
}

export default Services;