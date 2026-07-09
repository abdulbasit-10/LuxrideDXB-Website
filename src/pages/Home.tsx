import { useEffect, useState } from 'react';
import { FaCarSide } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';

interface BookingForm {
  fullName: string;
  email: string;
  phone: string;
  vehicleType: string;
  bookingDetails: string;
  requirements: string;
}

export function Home() {
  const [formData, setFormData] = useState<BookingForm>({
    fullName: '',
    email: '',
    phone: '',
    vehicleType: '',
    bookingDetails: '',
    requirements: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
  };

  return (
    <main>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen w-full overflow-hidden bg-brand-black py-10 lg:h-[590px] lg:min-h-0 lg:py-0"
        aria-label="LuxRideDXB hero"
      >
        {/* Background image boundary */}
        <div className="absolute top-0 right-0 left-0 h-full bg-[url('/hero.jpeg')] bg-cover bg-[position:center_72%] bg-no-repeat [image-rendering:auto]" />

        {/* Dark overlay */}
        <div className="absolute top-0 right-0 left-0 h-full bg-[rgba(22,21,21,0.72)]" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center px-[18px] text-center lg:h-full">
          <h1 className="font-serif text-[46px] leading-[0.96] font-bold tracking-[-0.02em] text-[#e75041] lg:mt-[14px] lg:text-[64px]">
            LuxRideDXB
          </h1>
          <p className="mt-[8px] font-body text-[15px] leading-none font-bold text-brand-white lg:text-[16px]">
            Arrive Like You Mean It.
          </p>
          <div className="mt-[18px] max-w-[1320px] text-center">
            <p className="font-body text-[16px] leading-none font-medium text-brand-gray-light lg:text-[18px]">
              Where Are You Headed Today?
            </p>
            <p className="mt-[4px] font-body text-[15px] leading-[1.25] font-normal text-brand-gray-light lg:text-[17px]">
              We'll get you there in comfort, style, and on time, with a
              professional chauffeur and a luxury vehicle waiting for you.
            </p>
          </div>

          {/* Booking Form */}
          <div className="mt-[28px] w-full max-w-[1404px] rounded-[8px] border border-[#e75041] bg-[rgba(22,21,21,0.24)] px-[14px] pt-[23px] pb-[31px] backdrop-blur-[1px]">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-x-[8px] gap-y-4 md:grid-cols-2 lg:grid-cols-4">
                {/* Full Name */}
                <label className="block text-left">
                  <span className="mb-[9px] block font-figma-nav text-[17px] leading-none font-medium text-brand-gray-light uppercase">
                    Full Name *
                  </span>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="h-[59px] w-full border border-transparent bg-brand-black-soft px-[23px] font-body text-[17px] leading-none font-semibold text-brand-white placeholder:text-brand-gray transition focus:border-[#e75041] focus:outline-none"
                  />
                </label>

                {/* Email */}
                <label className="block text-left">
                  <span className="mb-[9px] block font-figma-nav text-[17px] leading-none font-medium text-brand-gray-light uppercase">
                    Email *
                  </span>
                  <span className="relative block">
                    <FiMail className="pointer-events-none absolute top-1/2 left-[18px] -translate-y-1/2 text-[#e75041]" size={18} />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-[59px] w-full border border-transparent bg-brand-black-soft pr-[23px] pl-[50px] font-body text-[17px] leading-none font-semibold text-brand-white placeholder:text-brand-gray transition focus:border-[#e75041] focus:outline-none"
                    />
                  </span>
                </label>

                {/* Phone */}
                <label className="block text-left">
                  <span className="mb-[9px] block font-figma-nav text-[17px] leading-none font-medium text-brand-gray-light uppercase">
                    Phone / WhatsApp *
                  </span>
                  <span className="relative block">
                    <FiPhone className="pointer-events-none absolute top-1/2 left-[18px] -translate-y-1/2 text-[#e75041]" size={18} />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+971 XX XXXX XXXX"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="h-[59px] w-full border border-transparent bg-brand-black-soft pr-[23px] pl-[50px] font-body text-[17px] leading-none font-semibold text-brand-white placeholder:text-brand-gray transition focus:border-[#e75041] focus:outline-none"
                    />
                  </span>
                </label>

                {/* Vehicle Type */}
                <label className="block text-left">
                  <span className="mb-[9px] block font-figma-nav text-[17px] leading-none font-medium text-brand-gray-light uppercase">
                    Vehicle Type *
                  </span>
                  <span className="relative block">
                    <FaCarSide className="pointer-events-none absolute top-1/2 left-[18px] -translate-y-1/2 text-[#e75041]" size={18} />
                    <select
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleInputChange}
                      required
                      className="h-[59px] w-full appearance-none border border-transparent bg-brand-black-soft pr-[23px] pl-[50px] font-body text-[17px] leading-none font-semibold text-brand-white transition focus:border-[#e75041] focus:outline-none"
                    >
                      <option value="">Select Vehicle</option>
                      <option value="sedan">Sedan</option>
                      <option value="suv">SUV</option>
                      <option value="luxury">Luxury</option>
                    </select>
                  </span>
                </label>
              </div>

              {/* Booking Details */}
              <label className="mt-[22px] block text-left">
                <span className="mb-[9px] block font-figma-nav text-[17px] leading-none font-medium text-brand-gray-light uppercase">
                  Booking Details
                </span>
                <textarea
                  name="requirements"
                  placeholder="Special requirements, preferences..."
                  value={formData.requirements}
                  onChange={handleInputChange}
                  className="h-[95px] w-full resize-none border border-transparent bg-brand-black-soft px-[23px] py-[22px] font-body text-[17px] leading-none font-semibold text-brand-white placeholder:text-brand-gray transition focus:border-[#e75041] focus:outline-none"
                />
              </label>

              <button
                type="submit"
                className="mx-auto mt-[43px] flex h-[57px] w-full max-w-[444px] items-center justify-center bg-[#e75041] font-figma-nav text-[18px] leading-none font-bold tracking-[0.08em] text-white uppercase transition duration-200 hover:bg-[#f26354]"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Four Steps Section */}
      <section
        id="steps"
        className="bg-brand-black py-20 lg:pt-[34px] lg:pb-[49px]"
        aria-label="Four steps to effortless travel"
      >
        <Container className="max-w-none px-[14px] lg:px-[14px]">
          <div className="mb-16 text-center">
            <p className="mb-2 font-serif text-sm text-brand-red italic">
              How it Works
            </p>
            <h2 className="mb-4 font-serif text-3xl font-bold text-brand-white lg:text-5xl">
              Four Steps to <span className="text-brand-red italic">Effortless Travel</span>
            </h2>
          </div>

          {/* Steps container with connecting lines */}
          <div className="space-y-[66px]">
            {/* Number boxes with connecting lines */}
            <div className="relative grid grid-cols-2 gap-y-8 md:grid-cols-4">
              {/* Connecting line background */}
              <div className="absolute top-1/2 right-[calc(12.5%-65px)] left-[calc(12.5%-65px)] hidden h-px -translate-y-1/2 border-t border-dotted border-[#ff0c09] md:block" />

              {/* Number boxes */}
              {['01', '02', '03', '04'].map((num, idx) => (
                <div
                  key={idx}
                  className="relative z-10 flex justify-center"
                >
                  <div className="flex h-[82px] w-[82px] items-center justify-center border border-[#ff0c09] bg-brand-black md:h-[130px] md:w-[130px]">
                    <span className="font-body text-[32px] leading-none font-bold text-[#ff0c09] md:text-[50px]">
                      {num}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Content below */}
            <div className="grid grid-cols-1 gap-y-10 md:grid-cols-4 md:gap-x-0">
              {[
                {
                  title: 'Book Online or Call',
                  desc: 'Reserve instantly using our mobile-friendly booking system or speak directly with a concierge.',
                },
                {
                  title: 'Chauffeur Assigned',
                  desc: 'A dedicated professional is confirmed and briefed on your itinerary.',
                },
                {
                  title: 'Tracked & On Time',
                  desc: 'Live tracking and flight monitoring ensure pinpoint punctuality.',
                },
                {
                  title: 'Arrive in Elegance',
                  desc: 'Step out composed, refreshed, and ready for what matters most.',
                },
              ].map((step, idx) => (
                <div key={idx} className="mx-auto w-full max-w-[360px] text-center md:max-w-[330px]">
                  <h3 className="mb-[28px] font-serif text-[24px] leading-none font-bold tracking-[-0.01em] text-brand-white">
                    {step.title}
                  </h3>
                  <p className="mx-auto max-w-[310px] font-body text-[18px] leading-[1.24] font-normal tracking-[-0.01em] text-brand-gray">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Fleet Section */}
      <section
        id="fleet"
        className="bg-brand-white py-20 lg:py-32"
        aria-label="Premium vehicle fleet"
      >
        <Container>
          <div className="text-center mb-16">
            <p className="text-brand-red font-serif italic mb-2">
              Premium Selection
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-brand-black mb-4">
              Vehicles Worthy of <span className="text-brand-red italic">Every Occasion</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {[
              {
                badge: 'PREMIUM',
                name: 'Mercedes S-Class',
                features: ['Leather Interior', '5 Passengers', 'WiFi Connected'],
              },
              {
                badge: 'ULTIMATE',
                name: 'Range Rover Vogue',
                features: ['Premium Leather', '7 Passengers', 'Entertainment System'],
              },
            ].map((vehicle, idx) => (
              <div
                key={idx}
                className="group overflow-hidden rounded-2xl bg-brand-black-soft shadow-lg transition"
              >
                <div className="relative overflow-hidden bg-brand-black h-64 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-red/10 to-transparent opacity-0 transition group-hover:opacity-100" />
                  <div className="text-center text-brand-gray">
                    [Vehicle Image]
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-brand-red text-brand-white px-3 py-1 text-xs font-bold rounded mb-4">
                    {vehicle.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-brand-white mb-4">
                    {vehicle.name}
                  </h3>
                  <ul className="mb-6 space-y-2">
                    {vehicle.features.map((feature, fidx) => (
                      <li key={fidx} className="text-brand-gray text-sm flex items-center">
                        <span className="mr-2 text-brand-red">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <Button className="flex-1">Book Now</Button>
                    <Button variant="outline" className="flex-1">
                      Get Quote
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="bg-brand-black py-20 lg:py-32"
        aria-label="Our services"
      >
        <Container>
          <div className="text-center mb-16">
            <p className="text-brand-red font-serif italic mb-2">
              What We Offer
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-brand-white mb-4">
              A Service for <span className="text-brand-red italic">Every Journey</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Airport Transfers', icon: '✈️' },
              { title: 'VIP Events', icon: '🎉' },
              { title: 'Corporate Transport', icon: '💼' },
              { title: 'Weddings', icon: '💒' },
              { title: 'Beach Chauffeur', icon: '🏖️' },
              { title: 'Private Luxury', icon: '👑' },
              { title: 'Roadshow', icon: '🚗' },
              { title: 'Full-Day Hire', icon: '⏰' },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group border-2 border-brand-red/20 rounded-lg p-6 text-center transition hover:border-brand-red hover:bg-brand-red/5"
              >
                <div className="mb-4 text-4xl">{service.icon}</div>
                <h3 className="text-lg font-semibold text-brand-white group-hover:text-brand-red transition">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="about"
        className="bg-brand-white py-20 lg:py-32"
        aria-label="Why choose us"
      >
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-brand-red font-serif italic mb-2">
                Our Excellence
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold text-brand-black mb-8">
                The Standard Others <span className="text-brand-red italic">Aspire To</span>
              </h2>
              <ul className="space-y-6">
                {[
                  'Premium Hotel Quality Service',
                  'Professional Chauffeurs',
                  'Modern Fleet',
                  'Safety Guarantee',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="text-2xl font-bold text-brand-red min-w-8">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-lg text-brand-gray font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden bg-brand-black">
              <div className="w-full h-full flex items-center justify-center text-brand-gray">
                [Luxury Interior Image]
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-brand-black py-20 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {[
              {
                label: 'Mission',
                title: 'Redefining Premium Mobility in Dubai',
                description:
                  'We deliver uncompromising luxury and reliability, setting the standard for professional chauffeur services.',
              },
              {
                label: 'Vision',
                title: 'The UAE\'s Most Trusted Luxury Chauffeur Brand',
                description:
                  'To be the preferred choice for discerning clients seeking premium transportation experiences.',
              },
            ].map((item, idx) => (
              <div key={idx} className="rounded-lg bg-brand-black-soft p-8">
                <p className="text-brand-red font-serif italic mb-3 text-sm">
                  {item.label}
                </p>
                <h3 className="text-2xl font-bold text-brand-white mb-4">
                  {item.title}
                </h3>
                <p className="text-brand-gray">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="bg-brand-white py-20 lg:py-32">
        <Container>
          <div className="text-center mb-16">
            <p className="text-brand-red font-serif italic mb-2">
              Client Reviews
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-brand-black mb-4">
              Trusted by Dubai's <span className="text-brand-red italic">Finest</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                stars: 5,
                quote:
                  'Exceptional service! The professionalism and attention to detail is unmatched.',
                author: 'Sheikh Abdullah',
              },
              {
                stars: 5,
                quote:
                  'Best luxury chauffeur service in Dubai. Highly recommended for VIP events.',
                author: 'Sarah Mansell',
              },
              {
                stars: 5,
                quote:
                  'Professional, punctual, and absolutely reliable. Worth every penny.',
                author: 'James Thompson',
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="rounded-lg bg-brand-black p-8">
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <span key={i} className="text-brand-red">
                      ★
                    </span>
                  ))}
                </div>
                <p className="mb-6 text-brand-gray italic">
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold text-brand-white">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-brand-black py-20 lg:py-32"
        aria-label="Contact information"
      >
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-brand-red font-serif italic mb-2">
                Get in Touch
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold text-brand-white mb-8">
                We're Available <span className="text-brand-red italic">Around the Clock</span>
              </h2>

              <div className="mb-8 space-y-6">
                {[
                  { label: 'Phone', value: '+971 4 000 0000' },
                  { label: 'Email', value: 'concierge@luxridedxb.com' },
                  { label: 'Location', value: 'Downtown Dubai, UAE' },
                  { label: '24/7 Support', value: 'Available on WhatsApp' },
                ].map((item, idx) => (
                  <div key={idx}>
                    <p className="text-sm text-brand-gray mb-1">{item.label}</p>
                    <p className="text-lg text-brand-white font-semibold">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <Button className="w-full">Get in Touch</Button>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden bg-brand-black-soft">
              <div className="w-full h-full flex items-center justify-center text-brand-gray">
                [Dubai Skyline Image]
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
