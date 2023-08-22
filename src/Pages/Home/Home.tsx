'use client'

import React from "react";
import Image from "next/image";
import { Button } from "../../Components/Button";
import { Component } from "../../Components/Component";
import { DownloadBadge } from "../../Components/DownloadBadge";
import { DownloadBadgeApp } from "../../Components/DownloadBadgeApp";
import { FeaturedIcon } from "../../Components/FeaturedIcon";
import { Group } from "../../Components/Group";
import { InputField } from "../../Components/InputField";
import { SectionHeading } from "../../Components/SectionHeading";
import { ArrowRight3 } from "../../assets/icons/ArrowRight3";
import { ChevronDown3 } from "../../assets/icons/ChevronDown3";
import { ZapFast } from "../../assets/icons/ZapFast";

import "./Home.styles.css";

const Home = (): JSX.Element => {
  return (
    <div className="screen">
      <div className="desktop">
        <div className="overlap-group-6">
          <Image width={50} height={50}
            className="mask-group"
            alt="Mask group"
            src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/mask-group.png"
          />
          <Image width={50} height={50}
            className="presentation-slide"
            alt="Presentation slide"
            src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/presentation-slide-template-design.svg"
          />
          <div className="frame-30">
            <div className="heading-and">
              <p className="heading">
                <span className="span">Secure Task </span>
                <span className="text-wrapper-19">Management</span>
                <span className="span"> for Teams</span>
              </p>
              <div className="supporting-text-2">
                Task management is the link between planning to do something and getting it done. Your task management
                software should provide an overview of work in progress that enables tracking from conception to
                completion.
              </div>
              <div className="frame-31">
                <div className="actions">
                  <button className="button-6">
                    <div className="text-17">Get Started</div>
                  </button>
                </div>
                <div className="text-18">Trusted by 4,000+ companies</div>
              </div>
            </div>
          </div>
          <Group
            arrowRight="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/arrow-right-4@2x.png"
            buttonIcon={<ChevronDown3 className="icon-instance-node" color="#475467" />}
            className="group-3"
            headerClassName="group-instance"
            override={<ChevronDown3 className="icon-instance-node" color="#475467" />}
            property1="variant-2"
          />
        </div>
      </div>
      <div className="logo-clouds">
        <div className="section-heading-2">
          <SectionHeading
            alignment="center-align"
            className="design-component-instance-node"
            column="twelve-col"
            text="Our Clients"
            type="title"
          />
          <p className="description-2">We have been working with some Fortune 500 clients</p>
        </div>
        <div className="logos">
          <div className="group-2">
            <div className="col">
              <div className="airbnb-logo">
                <Image width={50} height={50}
                  className="airbnb-logo-2"
                  alt="Airbnb logo"
                  src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/airbnb-logo.svg"
                />
              </div>
            </div>
            <div className="google-logo">
              <Image width={50} height={50}
                className="google-logo-2"
                alt="Google logo"
                src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/google-logo.svg"
              />
            </div>
            <div className="bookmyshow-logo">
              <Image width={50} height={50}
                className="bookmyshow-logo-2"
                alt="Bookmyshow logo"
                src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/bookmyshow-logo.svg"
              />
            </div>
            <div className="microsoft-logo">
              <Image width={50} height={50}
                className="microsoft-logo-2"
                alt="Microsoft logo"
                src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/microsoft-logo.svg"
              />
            </div>
            <div className="fedex-logo">
              <Image width={50} height={50}
                className="fedex-logo-2"
                alt="Fedex logo"
                src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/fedex-logo.svg"
              />
            </div>
            <div className="walmart-logo">
              <Image width={50} height={50}
                className="walmart-logo-2"
                alt="Walmart logo"
                src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/walmart-logo.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="desktop-2">
        <div className="frame-32">
          <div className="button-7">
            <p className="text-19">Task Management – Why and How?</p>
          </div>
          <p className="text-wrapper-20">Get Your Team On Track.</p>
          <p className="lorem-ipsum-is-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&#39;s standard dummy text ever since the 1500s
          </p>
          <button className="button-8">
            <div className="text-20">Get Started</div>
          </button>
        </div>
        <Image width={50} height={50}
          className="OBJECTS"
          alt="Objects"
          src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/objects.svg"
        />
      </div>
      <Component property1="desktop-1" />
      <div className="testimonial-section">
        <div className="content-wrapper">
          <div className="quote-and-wrapper">
            <div className="quote-and">
              <p className="quote">
                {"We've been using Five9 to kick start every new project and can't imagine working without it."}
              </p>
              <div className="avatar-and-text">
                <div className="avatar-3" />
                <div className="div-4">
                  <div className="text-21">Sarah John</div>
                  <div className="supporting-text-3">Manager</div>
                </div>
              </div>
              <div className="rectangle" />
            </div>
          </div>
        </div>
      </div>
      <div className="component-2">
        <div className="frame-33">
          <div className="button-7">
            <p className="text-19">Insights Into Your Team&#39;s Productivity</p>
          </div>
          <div className="text-wrapper-21">Reports</div>
          <p className="text-wrapper-22">
            Add a statistics-driven dimension to your project and task management. With insights into productivity,
            workload and much more, MeisterTask Reports provide a clear overview of project status and help you take
            action early.
          </p>
          <button className="actions-2">
            <button className="button-8">
              <div className="text-20">Get Started</div>
            </button>
          </button>
        </div>
        <Image width={50} height={50}
          className="frame-34"
          alt="Frame"
          src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/frame-1.svg"
        />
      </div>
      <div className="overlap-wrapper">
        <div className="overlap-2">
          <div className="header-copy-wrapper">
            <div className="header-copy">
              <div className="text-wrapper-23">Download App</div>
              <p className="text-wrapper-24">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
              </p>
              <div className="right-nav">
                <DownloadBadge
                  className="design-component-instance-node-2"
                  downloadBadge="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/download-badge---google-play-badge-1.svg"
                />
                <DownloadBadgeApp
                  className="design-component-instance-node-2"
                  downloadBadgeApp="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/download-badge---app-store-badge-1.svg"
                />
              </div>
            </div>
          </div>
          <div className="mock-creative">
            <div className="overlap-group-7">
              <Image width={50} height={50}
                className="mobile-mockup"
                alt="Mobile mockup"
                src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/mobile-mockup@2x.png"
              />
              <div className="card">
                <Image width={50} height={50}
                  className="Image-2"
                  alt="User"
                  src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/user-3@2x.png"
                />
                <div className="frame-35">
                  <div className="text-wrapper-25">Henery.</div>
                  <p className="text-wrapper-26">This was the best tasker app!</p>
                </div>
              </div>
              <div className="card-2">
                <Image width={50} height={50}
                  className="Image-2"
                  alt="User image"
                  src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/user-image@2x.png"
                />
                <div className="frame-35">
                  <div className="text-wrapper-25">Wick.</div>
                  <p className="text-wrapper-26">Very user friendly app i have ever seen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="component-3">
        <div className="group-4">
          <div className="overlap-3">
            <div className="overlap-4">
              <div className="OBJECTS-2">
                <div className="overlap-5">
                  <div className="overlap-group-8">
                    <Image width={50} height={50}
                      className="group-5"
                      alt="Group"
                      src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/group-3@2x.png"
                    />
                    <Image width={50} height={50}
                      className="group-6"
                      alt="Group"
                      src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/group-2@2x.png"
                    />
                    <Image width={50} height={50}
                      className="group-7"
                      alt="Group"
                      src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/group-1@2x.png"
                    />
                    <div className="text-wrapper-27">1</div>
                    <div className="text-wrapper-28">2</div>
                    <div className="text-wrapper-29">3</div>
                    <div className="work-flow">
                      Work
                      <br />
                      Flow
                    </div>
                  </div>
                  <Image width={50} height={50}
                    className="group-8"
                    alt="Group"
                    src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/group@2x.png"
                  />
                </div>
              </div>
              <div className="frame-36">
                <div className="text-wrapper-30">Automations</div>
                <p className="text-wrapper-31">
                  Let MeisterTask save you time — automate repeating steps in your task management workflow to increase
                  efficiency and consistency.
                </p>
                <div className="read-more">READ MORE →</div>
              </div>
              <div className="frame-37">
                <div className="text-wrapper-30">Recurring Tasks</div>
                <p className="text-wrapper-31">
                  {"Performing the same task regularly? Don't start from scratch each time! Instead, set up a template for a recurring task."}
                </p>
                <div className="read-more">READ MORE →</div>
              </div>
            </div>
            <div className="frame-38">
              <div className="text-wrapper-30">Time Tracking</div>
              <p className="text-wrapper-31">
                {"Keep productivity high and deadlines in sight with our built-in time tracker. Export data to assist with team calculations and projections."}
              </p>
              <div className="read-more">READ MORE →</div>
            </div>
          </div>
        </div>
        <div className="frame-39">
          <button className="button-9">
            <div className="text-19">Schedule. Synchronize. Streamline.</div>
          </button>
          <div className="text-wrapper-21">Timeline</div>
          <p className="lorem-ipsum-is-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&#39;s standard dummy text ever since the 1500s
          </p>
        </div>
      </div>
      <div className="metrics-section-wrapper">
        <div className="metrics-section">
          <div className="content-wrapper">
            <div className="heading-and-wrapper">
              <div className="heading-and-2">
                <div className="heading-and-icon">
                  <FeaturedIcon
                    className="featured-icon"
                    color="primary"
                    icon={<ZapFast className="zap-fast" color="white" />}
                    size="xl"
                    theme="light-circle"
                  />
                  <div className="heading-2">Build something great</div>
                </div>
                <p className="supporting-text-4">Everything you need to build modern UI and great products.</p>
              </div>
            </div>
          </div>
          <div className="container-2">
            <div className="content-7">
              <div className="metric-item">
                <div className="content-8">
                  <div className="div-4">
                    <div className="number">400+</div>
                    <div className="text-22">Projects completed</div>
                  </div>
                  <Button
                    className="design-component-instance-node"
                    destructive={false}
                    hierarchy="link-color"
                    icon="default"
                    iconLeading={false}
                    override={<ArrowRight3 className="icon-instance-node" />}
                    size="lg"
                    stateProp="default"
                    text="View projects"
                    textClassName="button-10"
                  />
                </div>
              </div>
              <div className="metric-item">
                <div className="content-8">
                  <div className="div-4">
                    <div className="number">600%</div>
                    <div className="text-22">Return on investment</div>
                  </div>
                  <Button
                    className="design-component-instance-node"
                    destructive={false}
                    hierarchy="link-color"
                    icon="default"
                    iconLeading={false}
                    override={<ArrowRight3 className="icon-instance-node" />}
                    size="lg"
                    stateProp="default"
                    text="Learn more"
                    textClassName="button-10"
                  />
                </div>
              </div>
              <div className="metric-item">
                <div className="content-8">
                  <div className="div-4">
                    <div className="number">10k</div>
                    <div className="text-22">Global downloads</div>
                  </div>
                  <Button
                    className="design-component-instance-node"
                    destructive={false}
                    hierarchy="link-color"
                    icon="default"
                    iconLeading={false}
                    override={<ArrowRight3 className="icon-instance-node" />}
                    size="lg"
                    stateProp="default"
                    text="Download now"
                    textClassName="button-10"
                  />
                </div>
              </div>
              <div className="metric-item">
                <div className="content-8">
                  <div className="div-4">
                    <div className="number">200+</div>
                    <div className="text-22">5-star reviews</div>
                  </div>
                  <Button
                    className="design-component-instance-node"
                    destructive={false}
                    hierarchy="link-color"
                    icon="default"
                    iconLeading={false}
                    override={<ArrowRight3 className="icon-instance-node" />}
                    size="lg"
                    stateProp="default"
                    text="View reviews"
                    textClassName="button-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="FAQ-section">
        <div className="content-wrapper">
          <div className="heading-and-wrapper">
            <div className="heading-and-2">
              <div className="heading-3">Frequently asked questions</div>
              <p className="supporting-text-4">Everything you need to know about the product and billing.</p>
            </div>
          </div>
        </div>
        <div className="container-2">
          <div className="content-7">
            <div className="feature-text">
              <div className="text-and-supporting">
                <p className="text-23">Is there a free trial available?</p>
                <p className="supporting-text-5">
                  Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and
                  running as soon as possible.
                </p>
              </div>
            </div>
            <div className="feature-text-2">
              <div className="text-and-supporting">
                <p className="text-23">Can I change my plan later?</p>
                <p className="supporting-text-5">
                  Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that
                  works for you.
                </p>
              </div>
            </div>
            <div className="feature-text-2">
              <div className="text-and-supporting">
                <p className="text-23">What is your cancellation policy?</p>
                <p className="supporting-text-5">
                  {"We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid."}
                </p>
              </div>
            </div>
          </div>
          <div className="content-7">
            <div className="feature-text-2">
              <div className="text-and-supporting">
                <p className="text-23">Can other info be added to an invoice?</p>
                <p className="supporting-text-5">
                  At the moment, the only way to add additional information to invoices is to add the information to the
                  workspace&#39;s name.
                </p>
              </div>
            </div>
            <div className="feature-text-2">
              <div className="text-and-supporting">
                <div className="text-23">How does billing work?</div>
                <p className="supporting-text-5">
                  Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of
                  free workspaces.
                </p>
              </div>
            </div>
            <div className="feature-text-2">
              <div className="text-and-supporting">
                <p className="text-23">How do I change my account email?</p>
                <p className="supporting-text-5">
                  You can change the email address associated with your account by going to untitled.com/account from a
                  laptop or desktop.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-3">
          <div className="content-9">
            <Image width={50} height={50}
              className="frame-40"
              alt="Frame"
              src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/frame.svg"
            />
            <div className="heading-and-3">
              <div className="heading-4">Still have questions?</div>
              <p className="supporting-text-6">
                {"Can't find the answer you're looking for? Please chat to our friendly team."}
              </p>
              <div className="actions-3">
                <button className="button-8">
                  <div className="text-20">Contact Now</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="newsletter-CTA">
        <div className="background-overlap" />
        <div className="content-wrapper">
          <div className="content-10">
            <div className="heading-and-4">
              <div className="heading-5">Join our newsletter</div>
              <p className="supporting-text-7">Sign up for the very best tutorials and the latest news.</p>
            </div>
            <div className="email-capture">
              <InputField
                className="input-field-instance"
                destructive={false}
                helpIcon={false}
                hintText={false}
                inputClassName="input-field-2"
                label={false}
                size="md"
                stateProp="placeholder"
                text="Enter your email"
                type="default"
              />
              <button className="button-8">
                <div className="text-20">Subscribe</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="component-4">
        <div className="download-badges">
          <div className="text-wrapper-32">Get the App</div>
          <DownloadBadgeApp
            className="design-component-instance-node-2"
            downloadBadgeApp="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/download-badge---app-store-badge.svg"
          />
          <DownloadBadge
            className="design-component-instance-node-2"
            downloadBadge="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/download-badge---google-play-badge.svg"
          />
        </div>
        <div className="left-section">
          <Image width={50} height={50}
            className="image-3"
            alt="Image"
            src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/image-2@2x.png"
          />
          <div className="links">
            <div className="links-row">
              <div className="text-wrapper-33">Download Now</div>
              <div className="text-wrapper-33">License</div>
            </div>
            <div className="links-row">
              <div className="navigation-2">
                <button className="button-11">
                  <div className="text-24">Home</div>
                </button>
                <div className="button-instance-wrapper">
                  <Button
                    className="design-component-instance-node"
                    destructive={false}
                    hierarchy="link-gray"
                    icon="default"
                    iconLeading={false}
                    iconTrailing={false}
                    size="lg"
                    stateProp="default"
                    text="Solutions"
                    textClassName="button-12" />
                </div>
                <div className="button-instance-wrapper">
                  <Button
                    className="design-component-instance-node"
                    destructive={false}
                    hierarchy="link-gray"
                    icon="default"
                    iconLeading={false}
                    iconTrailing={false}
                    size="lg"
                    stateProp="default"
                    text="Managed Services"
                    textClassName="button-12"
                  />
                </div>
                <div className="button-instance-wrapper">
                  <Button
                    className="design-component-instance-node"
                    destructive={false}
                    hierarchy="link-gray"
                    icon="default"
                    iconLeading={false}
                    iconTrailing={false}
                    size="lg"
                    stateProp="default"
                    text="US"
                    textClassName="button-12"
                  />
                </div>
                <button className="button-11">
                  <div className="text-24">Contact Sales</div>
                </button>
              </div>
            </div>
          </div>
          <p className="text-wrapper-34">© 2023 Five9. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Home;