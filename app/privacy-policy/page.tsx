"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/header";
import React, { useState } from "react";

const PrivacyPolicy = () => {
  const [emailWaitlistOpen, setEmailWaitlistOpen] = useState(false);
  const [selectedPartName, setSelectedPartName] = useState("");

  const handleJoinWaitlist = () => {
    setSelectedPartName("General Waitlist");
    setEmailWaitlistOpen(true);
  };

  return (
    <div className=" ">
      <Header
        // scrollToSection={scrollToSection}
        onJoinWaitlist={handleJoinWaitlist}
      />{" "}
      <div className="p-8 mt-20">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            At <strong>AutoParts Direct</strong>, we value the privacy and
            security of our customers. This Privacy Policy outlines how we
            collect, use, and protect your personal information when you use our
            services. By using our website or services, you agree to the
            collection and use of your information in accordance with this
            policy.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            2. Information We Collect
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Personal Information:</strong> Full Name, Email Address,
              Phone Number, Payment Information (for purchases), Shipping
              Address.
            </li>
            <li>
              <strong>Usage Data:</strong> IP Address, Browser Type, Device
              Information.
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies to enhance user
              experience and analyze website traffic.
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6">
            <li>To process and fulfill orders.</li>
            <li>To provide customer support and answer inquiries.</li>
            <li>To improve our services and website functionality.</li>
            <li>To send marketing communications (only with your consent).</li>
            <li>To monitor the usage of our website for analytics purposes.</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            4. Sharing Your Information
          </h2>
          <p>
            We do not sell or rent your personal information to third parties.
            However, we may share your information with trusted third parties
            who help us operate our website and business, such as payment
            processors and shipping partners. All third-party partners are
            obligated to keep your data confidential and secure.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
          <p>
            We implement a range of security measures to ensure the safety of
            your personal information, including SSL encryption during
            transactions. However, no method of transmission over the internet
            is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
          <ul className="list-disc pl-6">
            <li>Access your personal data.</li>
            <li>Correct or update your personal information.</li>
            <li>
              Request the deletion of your data, subject to applicable laws.
            </li>
            <li>Opt out of marketing communications at any time.</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            7. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated effective date.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or wish to
            exercise your rights, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> support@autopartsdirect.com
          </p>
          <p>
            <strong>Phone:</strong> +234 123 456 7890
          </p>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default PrivacyPolicy;
