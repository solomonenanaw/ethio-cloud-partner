import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  ArrowRight, 
  Server, 
  ShieldCheck, 
  Monitor, 
  Network, 
  Camera,
  CheckCircle2,
  Cloud,
  Target,
  Calendar,
  Building2,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  Stethoscope,
  Activity,
  Package,
  Bed,
  Map,
  Layers,
  Smartphone,
  Download,
  Terminal,
  Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const LandingPage = ({ onStart }: { onStart: () => void }) => {
  const logoUrl = "https://storage.googleapis.com/dala-prod-public-storage/attachments/aa418c45-5d1b-4ada-8ad1-da4e94d73ca0/1773209449827_logo_target.jpg";
  const contactPhone = "0960707058";
  const contactEmail = "ethiopianappsale@gmail.com";

  const handleDownloadAPK = () => {
    toast.info("APK Build Instructions Ready", {
      description: "As an AI, I provide the source code. You can generate your APK in 2 minutes by running 'flutter build apk' in the app directory. Check ethio_telecom_app/BUILD_INSTRUCTIONS.md for the step-by-step guide!",
      duration: 6000,
    });
    // Scroll to the instruction part of the page or a help section
    document.getElementById('mobile-app')?.scrollIntoView({ behavior: 'smooth' });
  };

  const customSolutions = [
    {
      title: "Clinic Management System",
      desc: "Comprehensive solution for private clinics to manage patient records, doctor scheduling, and laboratory reports with ease.",
      icon: <Stethoscope className="w-8 h-8" />,
      img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4cb0458b-a4b9-42c9-844b-25d2ca2b06bd/clinic-management-system-f6d4e62b-1773209858888.webp"
    },
    {
      title: "Hospital Management System",
      desc: "Enterprise-grade software for large medical facilities, handling admissions, pharmacy, billing, and multi-department coordination.",
      icon: <Activity className="w-8 h-8" />,
      img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4cb0458b-a4b9-42c9-844b-25d2ca2b06bd/hospital-management-system-047c9c59-1773209858416.webp"
    },
    {
      title: "Inventory Management System",
      desc: "Real-time stock tracking, automated reordering, and warehouse management for retail and wholesale businesses.",
      icon: <Package className="w-8 h-8" />,
      img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4cb0458b-a4b9-42c9-844b-25d2ca2b06bd/inventory-system-906bf68d-1773209859674.webp"
    },
    {
      title: "Hotel Reservation System",
      desc: "Streamlined booking engine for hotels and guest houses, featuring room availability, guest services, and billing management.",
      icon: <Bed className="w-8 h-8" />,
      img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4cb0458b-a4b9-42c9-844b-25d2ca2b06bd/hotel-reservation-system-50b49039-1773209858736.webp"
    },
    {
      title: "Tourism & Travel App",
      desc: "Engagement-focused platform for tour operators to showcase Ethiopian destinations, manage bookings, and guide tourists.",
      icon: <Map className="w-8 h-8" />,
      img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4cb0458b-a4b9-42c9-844b-25d2ca2b06bd/tourism-app-b7dd4b4c-1773209858772.webp"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/4cb0458b-a4b9-42c9-844b-25d2ca2b06bd/target-integrated-solution-office-33a9440e-1773208987574.webp" 
            alt="Target Integrated Solution Office" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-sm mb-8 border border-blue-100 shadow-sm">
                <span className="mr-2">⭐</span> Proud Ethio Telecom Cloud Partner
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-8 tracking-tight">
                Target Integrated <br />
                <span className="text-blue-600">Solution</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed font-medium">
                Driving Ethiopia's digital future since 2023. We provide cutting-edge cloud infrastructure, professional web development, and enterprise-grade security & networking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button size="lg" className="h-14 px-10 text-lg bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-200" onClick={onStart}>
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-10 text-lg border-2" onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}>
                  Explore Services
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 bg-gray-50/50 p-4 rounded-2xl border border-gray-100 w-fit">
                <div className="flex items-center">
                  <div className="p-1.5 bg-blue-100 rounded-md mr-2 text-blue-600">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span className="font-semibold">Ethio Telecom Partner</span>
                </div>
                <div className="hidden sm:block h-6 w-px bg-gray-200" />
                <div className="flex items-center">
                  <div className="p-1.5 bg-blue-100 rounded-md mr-2 text-blue-600">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span className="font-semibold">Est. 2023</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-600/5 rounded-3xl blur-2xl" />
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-gray-100">
                  <img 
                    src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/4cb0458b-a4b9-42c9-844b-25d2ca2b06bd/web-development-service-325f74ef-1773208987364.webp" 
                    alt="Digital Solutions" 
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
                </div>
                
                {/* Floating Logo Card */}
                <div className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 w-48 animate-bounce-slow">
                   <img 
                    src={logoUrl} 
                    alt="Target Logo" 
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-600 rounded-xl text-white">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Mission</p>
                      <p className="text-lg font-bold text-gray-900">Digital Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/30 -skew-x-12 transform translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-16 h-1 bg-blue-600 mb-8 rounded-full" />
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">Who We Are</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
                Target Integrated Solution was established in 2023 with a clear mission: to bridge the technological gap for businesses in Ethiopia. As an authorized Ethio Telecom cloud service reseller, we bring world-class cloud capabilities to the local market with the reliability of national infrastructure.
              </p>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                Our journey began with a vision to provide more than just technology; we provide solutions that empower growth. From robust web applications to complex network architectures, our team of experts is dedicated to your success.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
                  <h4 className="font-black text-blue-600 text-3xl mb-1">2023</h4>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Year Founded</p>
                </div>
                <div className="p-8 bg-blue-600 rounded-2xl shadow-xl shadow-blue-100">
                  <h4 className="font-black text-white text-3xl mb-1">Certified</h4>
                  <p className="text-sm font-bold text-blue-100 uppercase tracking-widest">Official Partner</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-600/5 rounded-[2.5rem] rotate-3" />
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/4cb0458b-a4b9-42c9-844b-25d2ca2b06bd/target-integrated-solution-office-33a9440e-1773208987574.webp" 
                  alt="About Target Solution" 
                  className="rounded-[2rem] shadow-2xl w-full relative z-10 border-4 border-white"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-3xl flex items-center justify-center shadow-2xl z-20 border border-gray-100">
                  <img src={logoUrl} alt="Target" className="w-20 h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section id="mobile-app" className="py-32 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-900 opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-20 bg-white/10 rounded-full blur-3xl animate-pulse" />
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/4cb0458b-a4b9-42c9-844b-25d2ca2b06bd/target-solution-mobile-app-showcase-d9c6c664-1773211464177.webp" 
                  alt="Mobile App Showcase" 
                  className="w-full h-auto rounded-[3rem] shadow-2xl border-8 border-white/20"
                />
              </div>
            </motion.div>

            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm mb-8">
                <Smartphone className="w-4 h-4 mr-2" /> NEW MOBILE EXPERIENCE
              </div>
              <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
                Empower Your Business <br />
                <span className="text-blue-300">On The Go</span>
              </h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed font-medium">
                Manage your services, track inventory, and communicate with our support team directly from your Android device. 
              </p>

              <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 border border-white/20 mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <Info className="w-6 h-6 text-blue-300" />
                  <h3 className="text-2xl font-bold">How to get the APK file?</h3>
                </div>
                <p className="text-blue-100 mb-6 font-medium">
                  Since this is the source code of your app, you need to generate the APK file using the following command in your terminal:
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 bg-black/20 p-4 rounded-xl border border-white/10 group cursor-pointer" onClick={() => {
                    navigator.clipboard.writeText('cd ethio_telecom_app && flutter build apk --release');
                    toast.success('Command copied to clipboard!');
                  }}>
                    <Terminal className="w-5 h-5 text-blue-300" />
                    <code className="text-sm font-mono text-blue-100 break-all">
                      flutter build apk --release
                    </code>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-xs font-bold uppercase text-blue-300 mb-1">Step 1</p>
                    <p className="text-sm">Install Flutter SDK</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-xs font-bold uppercase text-blue-300 mb-1">Step 2</p>
                    <p className="text-sm">Run command above</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-xs font-bold uppercase text-blue-300 mb-1">Step 3</p>
                    <p className="text-sm">Get APK from /build folder</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-xs font-bold uppercase text-blue-300 mb-1">Step 4</p>
                    <p className="text-sm">Install on phone</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-blue-50 h-16 px-10 text-xl font-bold rounded-2xl shadow-xl flex items-center gap-3"
                  onClick={handleDownloadAPK}
                >
                  <Download className="w-6 h-6" /> I want the APK
                </Button>
                <div className="p-4 border border-white/20 rounded-2xl bg-white/5 flex items-center gap-4">
                   <div className="p-2 bg-blue-300/20 rounded-lg">
                      <Mail className="w-5 h-5 text-blue-300" />
                   </div>
                   <div>
                      <p className="text-xs text-blue-300 font-bold uppercase tracking-widest">Need help?</p>
                      <p className="text-sm font-bold">{contactEmail}</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight text-gray-900">Our Core Expertise</h2>
            <p className="text-gray-600 text-xl font-medium">
              Integrated technology services designed to power modern Ethiopian enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Cloud className="w-8 h-8" />,
                title: "Cloud Reseller Partner",
                desc: "Authorized Ethio Telecom cloud solutions. We provide local businesses with scalable hosting, storage, and infrastructure.",
                img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4cb0458b-a4b9-42c9-844b-25d2ca2b06bd/network-infrastructure-supply-c45a4f73-1773208987955.webp"
              },
              {
                icon: <Monitor className="w-8 h-8" />,
                title: "Website Development",
                desc: "Custom-built, responsive, and SEO-optimized web solutions tailored to your business goals and local market needs.",
                img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4cb0458b-a4b9-42c9-844b-25d2ca2b06bd/web-development-service-325f74ef-1773208987364.webp"
              },
              {
                icon: <Network className="w-8 h-8" />,
                title: "Network Infrastructure",
                desc: "Professional supply and configuration of network switches and routers for high-speed, reliable enterprise connectivity.",
                img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4cb0458b-a4b9-42c9-844b-25d2ca2b06bd/network-infrastructure-supply-c45a4f73-1773208987955.webp"
              },
              {
                icon: <Camera className="w-8 h-8" />,
                title: "CCTV Systems",
                desc: "Full-cycle supply, installation, and commissioning of advanced surveillance systems for commercial and residential security.",
                img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4cb0458b-a4b9-42c9-844b-25d2ca2b06bd/cctv-installation-and-commissioning-1723d32a-1773208987830.webp"
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "IT Commissioning",
                desc: "Expert oversight and testing of IT installations to ensure they meet performance, safety, and operational standards.",
                img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4cb0458b-a4b9-42c9-844b-25d2ca2b06bd/target-integrated-solution-office-33a9440e-1773208987574.webp"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Digital Strategy",
                desc: "Strategic consulting to help your business navigate the digital landscape and leverage the power of cloud computing.",
                img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4cb0458b-a4b9-42c9-844b-25d2ca2b06bd/web-development-service-325f74ef-1773208987364.webp"
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl transition-all group"
              >
                <div className="h-56 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors" />
                  <div className="absolute top-6 left-6 p-4 bg-white shadow-xl rounded-2xl text-blue-600">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Solutions Section */}
      <section id="solutions" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-3 text-blue-600 font-bold uppercase tracking-widest text-sm mb-6">
                <Layers className="w-5 h-5" />
                <span>Ready-to-Deploy Solutions</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight text-gray-900">
                Specialized Software for Your Business
              </h2>
              <p className="text-gray-600 text-xl font-medium">
                We offer field-tested, robust software systems designed to solve industry-specific challenges in the Ethiopian market.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 h-14 px-10" onClick={onStart}>
                Request a Demo
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {customSolutions.map((solution, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-gray-50 rounded-[2.5rem] p-8 lg:p-12 overflow-hidden border border-gray-100 hover:border-blue-200 transition-all"
              >
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <div className="inline-flex p-4 bg-white rounded-2xl shadow-lg text-blue-600 mb-8 group-hover:scale-110 transition-transform">
                      {solution.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                    <p className="text-gray-600 font-medium leading-relaxed mb-6">
                      {solution.desc}
                    </p>
                    <button className="flex items-center text-blue-600 font-bold group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                  </div>
                  <div className="md:w-1/2 w-full">
                    <div className="relative">
                      <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <img 
                        src={solution.img} 
                        alt={solution.title} 
                        className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Details */}
      <section id="cloud" className="py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-10 bg-blue-600/5 rounded-full blur-3xl" />
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/4cb0458b-a4b9-42c9-844b-25d2ca2b06bd/network-infrastructure-supply-c45a4f73-1773208987955.webp" 
                alt="Cloud Infrastructure" 
                className="rounded-[2.5rem] shadow-2xl relative z-10 border-8 border-white"
              />
              <div className="absolute -top-12 -left-12 bg-white p-6 rounded-3xl shadow-2xl z-20 border border-gray-100 hidden sm:block animate-pulse">
                 <div className="flex items-center space-x-3 text-blue-600">
                    <Cloud className="w-8 h-8" />
                    <span className="font-black text-xl">Ethio Cloud</span>
                 </div>
              </div>
            </div>
            <div>
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-bold mb-6">PARTNERSHIP</div>
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 tracking-tight">Your Local Ethio Telecom Cloud Reseller</h2>
              <p className="text-gray-600 text-xl mb-10 leading-relaxed font-medium">
                As a partner of Ethio Telecom, Target Integrated Solution provides localized cloud services that offer high-speed access within Ethiopia, local currency billing, and 24/7 dedicated support.
              </p>
              <div className="space-y-8">
                {[
                  {
                    title: "Local Data Centers",
                    desc: "Experience ultra-low latency with cloud resources hosted right here in Ethiopia."
                  },
                  {
                    title: "Flexible Subscriptions",
                    desc: "Pay in local currency through TeleBirr and local bank integrations."
                  },
                  {
                    title: "Expert Deployment",
                    desc: "Our certified engineers handle the migration and setup of your cloud environment."
                  },
                  {
                    title: "Secure & Compliant",
                    desc: "Fully compliant with Ethiopian data protection and security regulations."
                  }
                ].map((perk, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="mt-1 flex-shrink-0">
                      <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <CheckCircle2 className="w-6 h-6 text-blue-600 group-hover:text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1 text-gray-900">{perk.title}</h4>
                      <p className="text-gray-600 font-medium leading-relaxed">{perk.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button size="lg" className="mt-12 bg-blue-600 hover:bg-blue-700 h-14 px-10 rounded-xl shadow-lg" onClick={onStart}>
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
           <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/4cb0458b-a4b9-42c9-844b-25d2ca2b06bd/network-infrastructure-supply-c45a4f73-1773208987955.webp" 
              className="w-full h-full object-cover grayscale"
              alt="bg"
           />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 tracking-tight">Get In Touch</h2>
              <p className="text-gray-400 text-xl mb-12 leading-relaxed">
                Ready to modernize your business? Our team of experts is ready to help you navigate the digital landscape with confidence.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-1">Phone Number</p>
                    <a href={`tel:${contactPhone}`} className="text-2xl font-bold hover:text-blue-400 transition-colors">
                      {contactPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-1">Email Address</p>
                    <a href={`mailto:${contactEmail}`} className="text-xl font-bold hover:text-blue-400 transition-colors break-all">
                      {contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-1">Location</p>
                    <p className="text-xl font-bold">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h3>
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Full Name</label>
                    <input className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none text-gray-900" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Company</label>
                    <input className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none text-gray-900" placeholder="Company name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Message</label>
                  <textarea rows={4} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none text-gray-900" placeholder="Tell us about your project"></textarea>
                </div>
                <Button className="w-full h-14 text-lg bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xl shadow-blue-100">
                  Send Inquiry <ArrowUpRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 tracking-tight">
            Ready to Integrate the Future?
          </h2>
          <p className="text-blue-100 text-2xl mb-12 font-medium">
            Whether you need a custom website, a secure network, or scalable cloud infrastructure, Target Integrated Solution has you covered.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" variant="secondary" className="h-16 px-12 text-xl text-blue-600 font-bold rounded-2xl hover:bg-white shadow-2xl" onClick={onStart}>
              Contact Sales Today
            </Button>
            <Button size="lg" className="h-16 px-12 text-xl bg-blue-700/50 hover:bg-blue-700/80 text-white border border-white/20 rounded-2xl backdrop-blur-sm shadow-2xl">
              Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-2">
              <div className="flex items-center mb-8">
                <img src={logoUrl} alt="Target Solution Logo" className="h-16 w-auto mr-4 brightness-0 invert shadow-sm" />
                <div>
                   <span className="block text-2xl font-black text-white tracking-tight">Target Integrated</span>
                   <span className="block text-sm font-bold text-blue-500 uppercase tracking-widest">Solution Trading PLC</span>
                </div>
              </div>
              <p className="max-w-md text-lg leading-relaxed mb-10">
                Empowering Ethiopian businesses with integrated technology solutions since 2023. Authorized Ethio Telecom Cloud Reseller.
              </p>
              <div className="flex space-x-6">
                {[Phone, Mail, Globe].map((Icon, i) => (
                  <div key={i} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer group">
                    <Icon className="w-6 h-6" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Services</h4>
              <ul className="space-y-4 text-lg">
                <li><a href="#" className="hover:text-blue-500 transition-colors font-medium">Cloud Reselling</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors font-medium">Web Development</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors font-medium">Network Supply</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors font-medium">CCTV Installation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Quick Links</h4>
              <ul className="space-y-4 text-lg">
                <li><a href="#about" className="hover:text-blue-500 transition-colors font-medium">About Us</a></li>
                <li><a href="#contact" className="hover:text-blue-500 transition-colors font-medium">Contact Us</a></li>
                <li><a href="#services" className="hover:text-blue-500 transition-colors font-medium">Our Solutions</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors font-medium">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 pt-12 border-t border-white/5">
             <div className="flex items-center gap-8">
                <div className="flex items-center text-sm font-bold text-gray-500">
                   <Phone className="w-4 h-4 mr-2 text-blue-500" />
                   {contactPhone}
                </div>
                <div className="flex items-center text-sm font-bold text-gray-500">
                   <Mail className="w-4 h-4 mr-2 text-blue-500" />
                   {contactEmail}
                </div>
             </div>
             <div className="md:text-right">
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                   © {new Date().getFullYear()} Target Integrated Solution Trading PLC. Authorized Ethio Telecom Partner.
                </p>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;