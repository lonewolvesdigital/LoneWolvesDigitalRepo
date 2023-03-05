// eslint-disable @next/next/no-img-element 
import React from "react";
import Image from 'next/image';
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                < Image ref={lr} src={appData.darkLogo} alt="logo" layout="responsive" width={500} height={500} />
              ) : (
                <Image ref={lr} src={appData.lightLogo} alt="logo" layout="responsive" width={500} height={500} />
              )
            ) : (
              <Image ref={lr} src={appData.lightLogo} alt="logo" layout="responsive" width={500} height={500} />
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            
                
                <li className="nav-item">
              <Link href={`/lonewolvesdigital/home-dark`}>
                <a className="nav-link">Home</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={`/lonewolvesdigital/team-dark`}>
                <a className="nav-link">Team</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={`/catalog/catalog-dark`}>
                <a className="nav-link">Catalog</a>
              </Link>
            </li>


            <li className="nav-item">
              <Link href={`/lonewolvesdigital/process-dark`}>
                <a className="nav-link">Process </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={`/about/about-dark`}>
                <a className="nav-link">About</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={`/contact/contact-dark`}>
                <a className="nav-link">Contact</a>
              </Link>
            </li>

            <li className="nav-item">
                <Link href="/blog/blog-dark">
                <a className="nav-link">Blog</a>
              </Link>
            </li>

            <li className="nav-item">
                <Link href="/lonewolvesdigital/faq">
                <a className="nav-link">FAQ</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={`/t&c-list/t&c-list-dark`}>
                <a className="nav-link">T&C </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link  href={`/price/price-details-dark`}>
                <a className="nav-link">Price</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
