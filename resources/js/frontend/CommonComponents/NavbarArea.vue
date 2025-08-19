<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

</script>

<template>
  <nav class="navbar navbar-area navbar-expand-lg nav-style-03">
    <div class="container nav-container home-five">
      <div class="responsive-mobile-menu">
        <div class="logo-wrapper">
          <a href="/" class="logo">
            <img src="/frontend/assets/img/Home-five/logo-white.png" alt="" />
          </a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#bizcoxx_main_menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="bizcoxx_main_menu">
        <ul class="navbar-nav">
          <li class="menu-item-has-children">
            <Link href="/">Home</Link>
          </li>
          <li class="menu-item-has-children">
            <Link href="/about-us">About Us</Link>
          </li>
          <li class="menu-item-has-children">
           <Link href="/donation">Donation</Link>
          </li>
          <li class="menu-item-has-children">
            <a href="#">Pages</a>
            <ul class="sub-menu ">
              <li><Link href="/pages/history">History</Link></li>
              <li><Link href="/pages/principles">Principles</Link></li>
              <li><Link href="/pages/team">Team</Link></li>
              <li><Link href="/pages/media">Media</Link></li>
              <li><Link href="/pages/issues">Issues</Link></li>
              <!-- <li><Link href="/pages/issues/details">Issues details</Link></li> -->
              <li><Link href="/pages/volunteer">Volunteer</Link></li>
              <li><Link href="/pages/services">Services</Link></li>
              <!-- <li><Link href="/pages/services/details">Services Single</Link></li> -->
              <li><Link href="/pages/faq">Help & Faq</Link></li>
              <!-- <li><Link href="/pages/comming-soon">Comming Soon</Link></li> -->
            </ul>
          </li>
          <li class="menu-item-has-children">
            <Link href="/events/event">Events</Link>
          </li>
          <!-- <li class="menu-item-has-children">
            <a href="#">Events</a>
            <ul class="sub-menu ">
              <li><Link href="/events/event">Events</Link></li>
              <li><Link href="/events/event/details">Event Details</Link></li>
            </ul>
          </li> -->
          <li class="menu-item-has-children">
            <Link href="/news">News</Link>
          </li>
          <li class="menu-item-has-children">
            <Link href="/contact-us">Contact</Link>
          </li>
        </ul>
      </div>
      <div class="nav-right-content">
        <div class="btn-wrapper">
          <Link href="/about-us" class="boxed-btn btn-sanatory style-04"
            >join now<i class="icon-paper-plan"></i
          ></Link>
        </div>
      </div>
    </div>
  </nav>
</template>
