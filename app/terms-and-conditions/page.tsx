"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/header";
import React, { useState } from "react";

const TermsAndConditions = () => {
  const [emailWaitlistOpen, setEmailWaitlistOpen] = useState(false);
  const [selectedPartName, setSelectedPartName] = useState("");

  const handleJoinWaitlist = () => {
    setSelectedPartName("General Waitlist");
    setEmailWaitlistOpen(true);
  };``

  return (
    <div className=" ">
      <Header
        // scrollToSection={scrollToSection}
        onJoinWaitlist={handleJoinWaitlist}
      />{" "}
      <div className="p-8 mt-20">
        {" "}
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            These Terms and Conditions ("Terms") govern your use of the
            **AutoParts Direct** website and services. By using our website, you
            agree to comply with these Terms. If you do not agree with these
            Terms, please do not use our services.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            2. Account Registration
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Eligibility:</strong> To use certain features of the
              website, you must create an account. You must be at least 18 years
              old or have the consent of a guardian to create an account.
            </li>
            <li>
              <strong>Account Responsibility:</strong> You are responsible for
              maintaining the confidentiality of your account credentials and
              for all activities under your account.
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            3. Product Availability and Pricing
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Product Listings:</strong> All product listings on the
              website are subject to availability. We reserve the right to
              modify or discontinue products without prior notice.
            </li>
            <li>
              <strong>Pricing:</strong> Prices are displayed in Nigerian Naira
              (₦) and are subject to change. The price at the time of checkout
              will be the final price for your order.
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            4. Order Processing and Payment
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Order Confirmation:</strong> After you place an order, you
              will receive an order confirmation email. This email does not
              constitute an acceptance of your order, which is only confirmed
              when we process and ship your order.
            </li>
            <li>
              <strong>Payment Methods:</strong> We accept various payment
              methods, including credit/debit cards, bank transfers, and mobile
              payments. By providing payment information, you authorize us to
              charge the applicable fees for your order.
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            5. Shipping and Delivery
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Shipping:</strong> We will make reasonable efforts to
              process and ship your order in a timely manner. Delivery times may
              vary depending on location and availability.
            </li>
            <li>
              <strong>Shipping Costs:</strong> Shipping charges will be
              displayed at checkout and are based on the delivery address and
              the weight of the order.
            </li>
            <li>
              <strong>Risk of Loss:</strong> Once the items are shipped, the
              risk of loss is transferred to you. We are not responsible for any
              delays caused by shipping carriers.
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            6. Returns and Refunds
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Returns:</strong> If you are not satisfied with your
              purchase, you can return it within 14 days of receipt, provided
              the product is unused and in its original packaging.
            </li>
            <li>
              <strong>Refunds:</strong> Refunds will be issued to the original
              payment method within 7 business days after we receive the
              returned product.
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">7. User Conduct</h2>
          <ul className="list-disc pl-6">
            <li>Violating any applicable laws.</li>
            <li>Using offensive, harmful, or abusive language.</li>
            <li>
              Attempting to gain unauthorized access to our website or systems.
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            8. Intellectual Property
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Content Ownership:</strong> All content on our website,
              including text, images, logos, and trademarks, is the property of
              **AutoParts Direct** or our licensors and is protected by
              intellectual property laws.
            </li>
            <li>
              <strong>License to Use Website:</strong> We grant you a limited,
              non-exclusive, and non-transferable license to access and use our
              website for personal, non-commercial purposes.
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            9. Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by law, **AutoParts Direct** is not
            liable for any damages arising from the use or inability to use our
            website, including direct, indirect, incidental, and consequential
            damages.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to our
            website if you violate these Terms or engage in unlawful behavior.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the
            laws of Nigeria. Any disputes will be resolved in the courts of
            Nigeria.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            12. Changes to These Terms
          </h2>
          <p>
            We may update these Terms from time to time. Any changes will be
            posted on this page with an updated effective date.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
          <p>
            For any questions or concerns regarding these Terms, please contact
            us at:
          </p>
          <p>
            <strong>Email:</strong> support@autopartsdirect.com
          </p>
          <p>
            <strong>Phone:</strong> +234 123 456 7890
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
