"use client";
import React from "react";
import SocialIconLink from "../SocialIconLink";
import { SOCIALTYPE, SocialLinkProps } from "@/types";
import ZeroswapLogo from "@/public/assets/icons/zeroswap-logo.svg";
import ZeroswapText from "@/public/assets/icons/zeroswap-text.svg";
import { socialLinks } from "@/constants";

const navigation = {
  product: [
    { name: "Launch Project", href: "#" },
    { name: "Invest", href: "#" },
    { name: "DEX", href: "#" },
    { name: "Staking", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Press and Media", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Disclaimer", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="bg-dark-900 pt-16 px-4 pb-12 lg:px-20 mt-10"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8 mb-20">
          <div className="space-y-8 ">
            <p className="h2-bold text-dark-text-950">ZenPad</p>
            <p className="small-regular text-dark-text-950 flex items-center !m-0">
              by <ZeroswapLogo className="w-4 h4 ml-1" />{" "}
              <ZeroswapText className="w-12 h-3 relative top-0.5 left-0.5" />
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <SocialIconLink
                  key={item.name}
                  name={item.name as SOCIALTYPE}
                  url={item.url}
                />
              ))}
            </div>
          </div>
          <div className="grid xl:col-span-2 mt-10 xl:mt-0 ">
            <div className="grid grid-cols-2 md:grid md:grid-cols-3 md:gap-8">
              <div className="md:mt-0">
                <h3 className="text-bold text-dark-text-400 uppercase">
                  Product
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-dark-text-700 small-medium hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:mt-0">
                <h3 className="text-bold text-dark-text-400 uppercase ">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-dark-text-700 small-medium hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-bold text-dark-text-400  uppercase">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-dark-text-700 small-medium hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-xs leading-5 text-gray-400">
            &copy; 2024 ZenPad, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
