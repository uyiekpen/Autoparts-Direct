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
      />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your information.
            </p>
          </div>

          {/* Privacy Policy Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-card border border-border rounded-lg p-8 mb-8">
              <p className="text-muted-foreground mb-4">
                This privacy notice for{" "}
                <strong className="text-foreground">AutoParts Direct</strong>{" "}
                ("we," "us," or "our"), describes how and why we might collect,
                store, use, and/or share ("process") your information when you
                use our services ("Services"), such as when you use our website,
                portal, or platform.
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">
                  Questions or concerns?
                </strong>{" "}
                Reading this privacy notice will help you understand your
                privacy rights and choices. If you do not agree with our
                policies and practices, please do not use our Services.
              </p>
            </div>

            {/* Summary Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <div className="w-1 h-8 bg-accent mr-4"></div>
                Summary of Key Points
              </h2>
              <div className="bg-muted/30 border border-border rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    What personal information do we process?
                  </h3>
                  <p className="text-muted-foreground">
                    When you visit, use, or navigate our Services, we may
                    process personal information depending on how you interact
                    with us and the Services, the choices you make, and the
                    products and features you use. Learn more about the personal
                    information you disclose to us.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Do we process any sensitive personal information?
                  </h3>
                  <p className="text-muted-foreground">
                    We do not process sensitive personal information.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Do we receive any information from third parties?
                  </h3>
                  <p className="text-muted-foreground">
                    We may receive information from public databases, marketing
                    partners, social media platforms, and other outside sources.
                    Learn more about information collected from other sources.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    How do we process your information?
                  </h3>
                  <p className="text-muted-foreground">
                    We process your information to provide, improve, and
                    administer our services, communicate with you for security
                    and fraud prevention, and comply with law. We may also
                    process your information for other purposes with your
                    consent. We process your information only when we have a
                    valid legal reason. Learn more about how we process your
                    information.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    In what situations and with which parties do we share
                    personal information?
                  </h3>
                  <p className="text-muted-foreground">
                    We may share information in specific situations and with
                    specific third parties. Learn more about when and with whom
                    we share your personal information.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    What are your rights?
                  </h3>
                  <p className="text-muted-foreground">
                    Depending on where you are located geographically, the
                    applicable privacy law may mean you have certain rights
                    regarding your personal information. Learn more about your
                    privacy rights.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    How do you exercise your rights?
                  </h3>
                  <p className="text-muted-foreground">
                    The easiest way to exercise your rights is by submitting a
                    data subject access request or contacting us. We will
                    consider and act upon any request in accordance with
                    applicable data protection laws.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Want to learn more about what we do with any information we
                    collect?
                  </h3>
                  <p className="text-muted-foreground">
                    Review the privacy notice in full.
                  </p>
                </div>
              </div>
            </section>

            {/* Table of Contents */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <div className="w-1 h-8 bg-accent mr-4"></div>
                Table of Contents
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "What Information Do We Collect?",
                  "How Do We Process Your Information?",
                  "When and With Whom Do We Share Your Personal Information?",
                  "Do We Use Cookies and Other Tracking Technologies?",
                  "How Do We Handle Your Social Logins?",
                  "Is Your Information Transferred Internationally?",
                  "How Long Do We Keep Your Information?",
                  "Do We Collect Information From Minors?",
                  "What Are Your Privacy Rights?",
                  "Controls for Do-Not-Track Features",
                  "Do We Make Updates to This Notice?",
                  "How Can You Contact Us About This Notice?",
                  "How Can You Review, Update, or Delete Data?",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-card border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-sm font-medium text-secondary bg-secondary/10 px-2 py-1 rounded mr-3">
                      {index + 1}
                    </span>
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Main Sections */}
            <section className="space-y-12">
              {/* Section 1 */}
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    1
                  </span>
                  What Information Do We Collect?
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Personal information you disclose to us
                    </h3>
                    <p className="mb-2">
                      <strong>In Short:</strong> We collect personal information
                      that you provide to us.
                    </p>
                    <p className="mb-4">
                      We collect personal information that you voluntarily
                      provide to us when you register on the Services, express
                      an interest in obtaining information about us or our
                      products and Services, when you participate in activities
                      on the Services, or otherwise when you contact us.
                    </p>
                    <p className="mb-4">
                      <strong className="text-foreground">
                        Sensitive Information.
                      </strong>{" "}
                      We do not process sensitive information.
                    </p>
                    <p>
                      All personal information that you provide to us must be
                      true, complete, and accurate, and you must notify us of
                      any changes to such personal information.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Information automatically collected
                    </h3>
                    <p className="mb-2">
                      <strong>In Short:</strong> Some information — such as your
                      Internet Protocol (IP) address and/or browser and device
                      characteristics — is collected automatically when you
                      visit our Services.
                    </p>
                    <p className="mb-4">
                      We automatically collect certain information when you
                      visit, use, or navigate the Services. This information
                      does not reveal your specific identity (like your name or
                      contact information) but may include device and usage
                      information, such as your IP address, browser and device
                      characteristics, operating system, language preferences,
                      referring URLs, device name, country, location,
                      information about how and when you use our Services, and
                      other technical information. This information is primarily
                      needed to maintain the security and operation of our
                      Services, and for our internal analytics and reporting
                      purposes.
                    </p>
                    <p>
                      Like many businesses, we also collect information through
                      cookies and similar technologies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    2
                  </span>
                  How Do We Process Your Information?
                </h2>
                <p className="text-muted-foreground mb-2">
                  <strong>In Short:</strong> We process your information to
                  provide, improve, and administer our Services, communicate
                  with you, for security and fraud prevention, and to comply
                  with law. We may also process your information for other
                  purposes with your consent.
                </p>
                <p className="text-muted-foreground">
                  We process your personal information for a variety of reasons,
                  depending on how you interact with our Services, including:
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    3
                  </span>
                  When and With Whom Do We Share Your Personal Information?
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="mb-2">
                    <strong>In Short:</strong> We may share information in
                    specific situations described in this section and/or with
                    the following third parties.
                  </p>
                  <p className="mb-4">
                    We may need to share your personal information in the
                    following situations:
                  </p>
                  <ul className="space-y-3 list-disc list-inside">
                    <li>
                      <strong className="text-foreground">
                        Business Transfers.
                      </strong>{" "}
                      We may share or transfer your information in connection
                      with, or during negotiations of, any merger, sale of
                      company assets, financing, or acquisition of all or a
                      portion of our business to another company.
                    </li>
                    <li>
                      <strong className="text-foreground">Affiliates.</strong>{" "}
                      We may share your information with our affiliates, in
                      which case we will require those affiliates to honor this
                      privacy notice. Affiliates include our parent company and
                      any subsidiaries, joint venture partners, or other
                      companies that we control or that are under common control
                      with us.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Business Partners.
                      </strong>{" "}
                      We may share your information with our business partners
                      to offer you certain products, services, or promotions.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    4
                  </span>
                  Do We Use Cookies and Other Tracking Technologies?
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="mb-2">
                    <strong>In Short:</strong> We may use cookies and other
                    tracking technologies to collect and store your information.
                  </p>
                  <p>
                    We may use cookies and similar tracking technologies (like
                    web beacons and pixels) to access or store information.
                    Specific information about how we use such technologies and
                    how you can refuse certain cookies is set out in our Cookie
                    Notice.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    5
                  </span>
                  How Do We Handle Your Social Logins?
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="mb-2">
                    <strong>In Short:</strong> If you choose to register or log
                    in to our Services using a social media account, we may have
                    access to certain information about you.
                  </p>
                  <p className="mb-4">
                    Our Services offer you the ability to register and log in
                    using your third-party social media account details (like
                    your Facebook or Twitter logins). Where you choose to do
                    this, we will receive certain profile information about you
                    from your social media provider. The profile information we
                    receive may vary depending on the social media provider
                    concerned, but will often include your name, email address,
                    friends list, and profile picture, as well as other
                    information you choose to make public on such a social media
                    platform.
                  </p>
                  <p>
                    We will use the information we receive only for the purposes
                    that are described in this privacy notice or that are
                    otherwise made clear to you on the relevant Services. Please
                    note that we do not control, and are not responsible for,
                    other uses of your personal information by your third-party
                    social media provider. We recommend that you review their
                    privacy notice to understand how they collect, use, and
                    share your personal information, and how you can set your
                    privacy preferences on their sites and apps.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    6
                  </span>
                  Is Your Information Transferred Internationally?
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="mb-2">
                    <strong>In Short:</strong> We may transfer, store, and
                    process your information in countries other than your own.
                  </p>
                  <p className="mb-4">
                    Our servers are located in. If you are accessing our
                    Services from outside, please be aware that your information
                    may be transferred to, stored, and processed by us in our
                    facilities and by those third parties with whom we may share
                    your personal information (see "WHEN AND WITH WHOM DO WE
                    SHARE YOUR PERSONAL INFORMATION?" above), in and other
                    countries.
                  </p>
                  <p>
                    If you are a resident in the European Economic Area (EEA),
                    United Kingdom (UK), or Switzerland, then these countries
                    may not necessarily have data protection laws or other
                    similar laws as comprehensive as those in your country.
                    However, we will take all necessary measures to protect your
                    personal information in accordance with this privacy notice
                    and applicable law.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    7
                  </span>
                  How Long Do We Keep Your Information?
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="mb-2">
                    <strong>In Short:</strong> We keep your information for as
                    long as necessary to fulfill the purposes outlined in this
                    privacy notice unless otherwise required by law.
                  </p>
                  <p className="mb-4">
                    We will only keep your personal information for as long as
                    it is necessary for the purposes set out in this privacy
                    notice, unless a longer retention period is required or
                    permitted by law (such as tax, accounting, or other legal
                    requirements).
                  </p>
                  <p>
                    When we have no ongoing legitimate business need to process
                    your personal information, we will either delete or
                    anonymize such information, or, if this is not possible (for
                    example, because your personal information has been stored
                    in backup archives), then we will securely store your
                    personal information and isolate it from any further
                    processing until deletion is possible.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    8
                  </span>
                  Do We Collect Information From Minors?
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="mb-2">
                    <strong>In Short:</strong> We do not knowingly collect data
                    from or market to children under 18 years of age.
                  </p>
                  <p className="mb-4">
                    We do not knowingly solicit data from or market to children
                    under 18 years of age. By using the Services, you represent
                    that you are at least 18 or that you are the parent or
                    guardian of such a minor and consent to such minor
                    dependent's use of the Services. If we learn that personal
                    information from users less than 18 years of age has been
                    collected, we will deactivate the account and take
                    reasonable measures to promptly delete such data from our
                    records.
                  </p>
                  <p>
                    If you become aware of any data we may have collected from
                    children under age 18, please contact us at{" "}
                    <a
                      href="mailto:privacy@autopartsdirect.com"
                      className="text-accent hover:text-accent/80 font-medium transition-colors"
                    >
                      privacy@autopartsdirect.com
                    </a>
                    .
                  </p>
                </div>
              </div>

              {/* Section 9 - Privacy Rights */}
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    9
                  </span>
                  What Are Your Privacy Rights?
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="mb-2">
                    <strong>In Short:</strong> You may review, change, or
                    terminate your account at any time.
                  </p>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Withdrawing your consent
                    </h3>
                    <p className="mb-4">
                      If we are relying on your consent to process your personal
                      information, which may be express and/or implied consent
                      depending on the applicable law, you have the right to
                      withdraw your consent at any time. You can withdraw your
                      consent at any time by contacting us by using the contact
                      details provided in the section "HOW CAN YOU CONTACT US
                      ABOUT THIS NOTICE?" below.
                    </p>
                    <p className="mb-4">
                      However, please note that this will not affect the
                      lawfulness of the processing before its withdrawal nor,
                      when applicable law allows, will it affect the processing
                      of your personal information conducted in reliance on
                      lawful processing grounds other than consent.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Account Information
                    </h3>
                    <p className="mb-4">
                      If you would at any time like to review or change the
                      information in your account or terminate your account, you
                      can:
                    </p>
                    <p>
                      Upon your request to terminate your account, we will
                      deactivate or delete your account and information from our
                      active databases. However, we may retain some information
                      in our files to prevent fraud, troubleshoot problems,
                      assist with any investigations, enforce our legal terms
                      and/or comply with applicable legal requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    10
                  </span>
                  Controls for Do-Not-Track Features
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Most web browsers and some mobile operating systems and
                    mobile applications include a Do-Not-Track ("DNT") feature
                    or setting you can activate to signal your privacy
                    preference not to have data about your online browsing
                    activities monitored and collected. At this stage no uniform
                    technology standard for recognizing and implementing DNT
                    signals has been finalized. As such, we do not currently
                    respond to DNT browser signals or any other mechanism that
                    automatically communicates your choice not to be tracked
                    online. If a standard for online tracking is adopted that we
                    must follow in the future, we will inform you about that
                    practice in a revised version of this privacy notice.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    11
                  </span>
                  Do We Make Updates to This Notice?
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="mb-2">
                    <strong>In Short:</strong> Yes, we will update this notice
                    as necessary to stay compliant with relevant laws.
                  </p>
                  <p>
                    We may update this privacy notice from time to time. The
                    updated version will be indicated by an updated "Revised"
                    date and the updated version will be effective as soon as it
                    is accessible. If we make material changes to this privacy
                    notice, we may notify you either by prominently posting a
                    notice of such changes or by directly sending you a
                    notification. We encourage you to review this privacy notice
                    frequently to be informed of how we are protecting your
                    information.
                  </p>
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-border rounded-lg p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <span className="bg-secondary text-secondary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    📧
                  </span>
                  How Can You Contact Us About This Notice?
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you have questions or comments about this notice, you may
                  contact us at:
                </p>
                <div className="bg-card border border-border rounded-lg p-4 inline-block">
                  <a
                    href="mailto:privacy@autopartsdirect.com"
                    className="text-accent hover:text-accent/80 font-medium transition-colors"
                  >
                    privacy@autopartsdirect.com
                  </a>
                </div>
              </div>

              {/* Data Rights Section */}
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  How Can You Review, Update, or Delete Data?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Based on the applicable laws of your country, you may have the
                  right to request access to the personal information we collect
                  from you, change that information, or delete it.
                </p>
                <p className="text-muted-foreground">
                  To request to review, update, or delete your personal
                  information, please send an email request to{" "}
                  <a
                    href="mailto:privacy@autopartsdirect.com"
                    className="text-accent hover:text-accent/80 font-medium transition-colors"
                  >
                    privacy@autopartsdirect.com
                  </a>{" "}
                  with the kind of request you have.
                </p>
              </div>
            </section>

            {/* Last Updated */}
            <div className="text-center mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
