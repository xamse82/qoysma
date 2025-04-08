import Head from 'next/head';
import Navbar from '@/components/Navbar';

import ServiceHero from '@/components/ServiceHero';
import ContactOptions from '@/components/ContactOptions';

import ProcessSteps from '@/components/ProcessSteps';
import PortfolioShowcase from '@/components/PortofoliaShowcase';
import PricingPlans from '@/components/pricingPlans';
import Testimonials from '@/components/Testominalsterps';
import Footer from '@/components/Footerlayer';


export default function Home() {
  return (
    <>
      <Head>
        <title>Order Your Custom Website | Professional Website Creation</title>
        <meta name="description" content="Order your custom website by contacting us via phone or email. Professional website creation services." />
      </Head>

      {/* Navbar at the top */}
      <Navbar />

      {/* Main content with all your sections */}
      <main>
        <ServiceHero />
        <ContactOptions />
        <PortfolioShowcase />
        <PricingPlans />
        <ProcessSteps />
        <Testimonials />
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </>
  );
}