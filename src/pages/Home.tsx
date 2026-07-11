import { useEffect, useState } from 'react';
import { FiCalendar, FiClock, FiMapPin, FiPhone } from 'react-icons/fi';
import { Container } from '@/components/common/Container';
import { ContactSection } from '@/components/contact/ContactSection';
import { FleetSection } from '@/components/fleet/FleetSection';
import { MissionVisionSection } from '@/components/mission/MissionVisionSection';
import { ServicesSection } from '@/components/services/ServicesSection';
import { ClientVoicesSection } from '@/components/testimonials/ClientVoicesSection';
import { WhyLuxurySection } from '@/components/why/WhyLuxurySection';

interface BookingForm {
  fullName: string;
  pickupLocation: string;
  dropoffLocation: string;
  date: string;
  time: string;
  phone: string;
}

export function Home() {
  const [formData, setFormData] = useState<BookingForm>({
    fullName: '',
    pickupLocation: '',
    dropoffLocation: '',
    date: '',
    time: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const responseText = await response.text();
      let result: {
        success?: boolean;
        message?: string;
      } = {};

      if (responseText) {
        try {
          result = JSON.parse(responseText) as typeof result;
        } catch {
          result = {};
        }
      }

      if (!response.ok) {
        throw new Error(
          result.message ||
            'Enquiry API is unavailable. Please run the project with Vercel Dev.',
        );
      }

      setSubmitStatus({
        type: 'success',
        message: result.message || 'Your enquiry has been sent.',
      });
      setFormData({
        fullName: '',
        pickupLocation: '',
        dropoffLocation: '',
        date: '',
        time: '',
        phone: '',
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Unable to send your enquiry.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const travelSteps = [
    {
      number: '01',
      title: 'Book Online or Call',
      desc: (
        <>
          Reserve instantly via our
          <br />
          platform or speak
          <br />
          directly with a concierge.
        </>
      ),
    },
    {
      number: '02',
      title: 'Chauffeur Assigned',
      desc: (
        <>
          A dedicated professional
          <br />
          is confirmed and briefed
          <br />
          on your itinerary.
        </>
      ),
    },
    {
      number: '03',
      title: 'Tracked & On Time',
      desc: (
        <>
          Live tracking and flight
          <br />
          monitoring ensure
          <br />
          pinpoint punctuality.
        </>
      ),
    },
    {
      number: '04',
      title: 'Arrive in Elegance',
      desc: (
        <>
          Step out composed,
          <br />
          refreshed, and ready for
          <br />
          what matters most.
        </>
      ),
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen w-full overflow-hidden bg-brand-black py-10 lg:h-[540px] lg:min-h-0 lg:py-0"
        aria-label="LuxRideDXB hero"
      >
        {/* Background image boundary */}
        <div className="absolute top-0 right-0 left-0 h-full bg-[url('/hero.jpeg')] bg-cover bg-[position:center_72%] bg-no-repeat [image-rendering:auto]" />

        {/* Dark overlay */}
        <div className="absolute top-0 right-0 left-0 h-full bg-[rgba(22,21,21,0.72)]" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center px-[18px] text-center lg:h-full">
          <h1 className="font-serif text-[42px] leading-[0.96] font-bold tracking-[-0.02em] text-[#e75041] lg:mt-[18px] lg:text-[54px]">
            LuxRideDXB
          </h1>
          <p className="mt-[6px] font-body text-[14px] leading-none font-bold text-brand-white lg:text-[15px]">
            Arrive Like You Mean It.
          </p>
          <div className="mt-[16px] max-w-[960px] text-center">
            <p className="font-body text-[15px] leading-none font-medium text-brand-gray-light lg:text-[16px]">
              Where Are You Headed Today?
            </p>
            <p className="mt-[5px] font-body text-[14px] leading-[1.35] font-normal text-brand-gray-light lg:text-[15px]">
              We'll get you there in comfort, style, and on time, with a
              professional chauffeur and a luxury vehicle waiting for you.
            </p>
          </div>

          {/* Booking Form */}
          <div className="mt-[24px] w-full max-w-[1120px] rounded-[6px] border border-[#e75041]/80 bg-[rgba(22,21,21,0.28)] px-[16px] pt-[18px] pb-[24px] backdrop-blur-[1px]">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-x-[12px] gap-y-4 md:grid-cols-2 lg:grid-cols-3">
                {/* Full Name */}
                <label className="block text-left">
                  <span className="mb-[8px] block font-figma-nav text-[14px] leading-none font-medium text-brand-gray-light uppercase">
                    Full Name *
                  </span>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="h-[50px] w-full border border-transparent bg-brand-black-soft px-[18px] font-body text-[15px] leading-none font-semibold text-brand-white placeholder:text-brand-gray transition focus:border-[#e75041] focus:outline-none"
                  />
                </label>

                {/* Pickup Location */}
                <label className="block text-left">
                  <span className="mb-[8px] block font-figma-nav text-[14px] leading-none font-medium text-brand-gray-light uppercase">
                    Pickup Location *
                  </span>
                  <span className="relative block">
                    <FiMapPin className="pointer-events-none absolute top-1/2 left-[18px] -translate-y-1/2 text-[#e75041]" size={18} />
                    <input
                      type="text"
                      name="pickupLocation"
                      placeholder="Dubai Airport"
                      value={formData.pickupLocation}
                      onChange={handleInputChange}
                      required
                      className="h-[50px] w-full border border-transparent bg-brand-black-soft pr-[18px] pl-[46px] font-body text-[15px] leading-none font-semibold text-brand-white placeholder:text-brand-gray transition focus:border-[#e75041] focus:outline-none"
                    />
                  </span>
                </label>

                {/* Dropoff Location */}
                <label className="block text-left">
                  <span className="mb-[8px] block font-figma-nav text-[14px] leading-none font-medium text-brand-gray-light uppercase">
                    Dropoff Location *
                  </span>
                  <span className="relative block">
                    <FiMapPin className="pointer-events-none absolute top-1/2 left-[18px] -translate-y-1/2 text-[#e75041]" size={18} />
                    <input
                      type="text"
                      name="dropoffLocation"
                      placeholder="Burj Al Arab, Dubai"
                      value={formData.dropoffLocation}
                      onChange={handleInputChange}
                      required
                      className="h-[50px] w-full border border-transparent bg-brand-black-soft pr-[18px] pl-[46px] font-body text-[15px] leading-none font-semibold text-brand-white placeholder:text-brand-gray transition focus:border-[#e75041] focus:outline-none"
                    />
                  </span>
                </label>

                {/* Date */}
                <label className="block text-left">
                  <span className="mb-[8px] block font-figma-nav text-[14px] leading-none font-medium text-brand-gray-light uppercase">
                    Date *
                  </span>
                  <span className="relative block">
                    <FiCalendar className="pointer-events-none absolute top-1/2 left-[18px] -translate-y-1/2 text-[#e75041]" size={18} />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="h-[50px] w-full border border-transparent bg-brand-black-soft pr-[18px] pl-[46px] font-body text-[15px] leading-none font-semibold text-brand-white transition focus:border-[#e75041] focus:outline-none"
                    />
                  </span>
                </label>

                {/* Time */}
                <label className="block text-left">
                  <span className="mb-[8px] block font-figma-nav text-[14px] leading-none font-medium text-brand-gray-light uppercase">
                    Time *
                  </span>
                  <span className="relative block">
                    <FiClock className="pointer-events-none absolute top-1/2 left-[18px] -translate-y-1/2 text-[#e75041]" size={18} />
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="h-[50px] w-full border border-transparent bg-brand-black-soft pr-[18px] pl-[46px] font-body text-[15px] leading-none font-semibold text-brand-white transition focus:border-[#e75041] focus:outline-none"
                    />
                  </span>
                </label>

                {/* Phone */}
                <label className="block text-left">
                  <span className="mb-[8px] block font-figma-nav text-[14px] leading-none font-medium text-brand-gray-light uppercase">
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
                      className="h-[50px] w-full border border-transparent bg-brand-black-soft pr-[18px] pl-[46px] font-body text-[15px] leading-none font-semibold text-brand-white placeholder:text-brand-gray transition focus:border-[#e75041] focus:outline-none"
                    />
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mx-auto mt-[28px] flex h-[48px] w-full max-w-[200px] items-center justify-center bg-[#e75041] font-figma-nav text-[15px] leading-none font-bold tracking-[0.08em] text-white uppercase transition duration-200 hover:bg-[#f26354] disabled:cursor-not-allowed disabled:opacity-65"
              >
                {isSubmitting ? 'Sending...' : 'Enquire Now'}
              </button>
              {submitStatus && (
                <p
                  role="status"
                  className={`mt-[14px] text-center font-body text-[14px] font-medium ${
                    submitStatus.type === 'success'
                      ? 'text-green-400'
                      : 'text-[#ff7b6e]'
                  }`}
                >
                  {submitStatus.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Four Steps Section */}
      <section
        id="steps"
        className="bg-brand-black py-16 lg:pt-[34px] lg:pb-[46px]"
        aria-label="Four steps to effortless travel"
      >
        <Container className="max-w-none px-[14px] lg:px-[14px]">
          <div className="mb-16 text-center">
            <p className="mb-2 font-serif text-sm text-[#e75041] italic">
              How it Works
            </p>
            <h2 className="mb-4 font-serif text-3xl font-bold text-brand-white lg:text-[42px]">
              Four Steps to <span className="text-[#e75041] italic">Effortless Travel</span>
            </h2>
          </div>

          {/* Steps container with connecting lines */}
          <div>
            <div className="grid gap-10 md:hidden">
              {travelSteps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center border border-[#e75041] bg-brand-black">
                    <span className="font-body text-[28px] leading-none font-bold text-[#e75041]">
                      {step.number}
                    </span>
                  </div>
                  <div className="mx-auto mt-[18px] w-full max-w-[260px]">
                    <h3 className="mb-[10px] font-serif text-[19px] leading-none font-bold tracking-[-0.01em] text-brand-white">
                      {step.title}
                    </h3>
                    <p className="font-body text-[14px] leading-[1.35] font-normal tracking-[-0.01em] text-brand-gray">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden space-y-[40px] md:block">
              <div className="relative grid grid-cols-4">
                <div className="absolute top-1/2 right-[12.5%] left-[12.5%] h-[2px] -translate-y-1/2 bg-[repeating-linear-gradient(to_right,#e75041_0_3px,transparent_3px_10px)]" />

                {travelSteps.map((step) => (
                  <div
                    key={step.number}
                    className="relative z-10 flex justify-center"
                  >
                    <div className="flex h-[88px] w-[88px] items-center justify-center border border-[#e75041] bg-brand-black">
                      <span className="font-body text-[34px] leading-none font-bold text-[#e75041]">
                        {step.number}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-4 gap-x-0">
                {travelSteps.map((step) => (
                  <div
                    key={step.number}
                    className="mx-auto w-full max-w-[240px] text-center"
                  >
                    <h3 className="mb-[10px] font-serif text-[19px] leading-none font-bold tracking-[-0.01em] text-brand-white">
                      {step.title}
                    </h3>
                    <p className="mx-auto max-w-[220px] font-body text-[14px] leading-[1.35] font-normal tracking-[-0.01em] text-brand-gray">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
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
