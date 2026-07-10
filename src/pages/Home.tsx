import { useEffect, useState } from 'react';
import { FaCarSide } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import { Container } from '@/components/common/Container';
import { ContactSection } from '@/components/contact/ContactSection';
import { FleetSection } from '@/components/fleet/FleetSection';
import { MissionVisionSection } from '@/components/mission/MissionVisionSection';
import { ServicesSection } from '@/components/services/ServicesSection';
import { ClientVoicesSection } from '@/components/testimonials/ClientVoicesSection';
import { WhyLuxurySection } from '@/components/why/WhyLuxurySection';

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

      <FleetSection />

      <ServicesSection />

      <WhyLuxurySection />

      <MissionVisionSection />

      <ClientVoicesSection />

      <ContactSection />
    </main>
  );
}
