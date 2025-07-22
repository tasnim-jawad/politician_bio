<?php

namespace App\Modules\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Modules\Management\BannerManagement\Banner\Models\Model as BannerModel;

class FrontendController extends Controller
{
    // Home
    public function HomePage()
    {
        $banner = BannerModel::active()->latest()->first();
        return Inertia::render('HomePage/Index', [
            'event' => [
                'title' => 'Home Page',
            ],
            'data' => [
                'banner' => $banner,
            ]
        ]);
    }

    // About
    public function AboutUsPage()
    {
        return Inertia::render('AboutUs/Index', [
            'event' => [
                'title' => 'About Us',
            ]
        ]);
    }

    // Donation
    public function DonationPage()
    {
        return Inertia::render('Donation/Index', [
            'event' => [
                'title' => 'Donation',
            ]
        ]);
    }

    public function DonationDetailsPage()
    {
        return Inertia::render('Donation/Details', [
            'event' => [
                'title' => 'Donation Details',
            ]
        ]);
    }

    // Pages/History
    public function HistoryPage()
    {
        return Inertia::render('Pages/History/Index', [
            'event' => [
                'title' => 'History',
            ]
        ]);
    }

    public function HistoryDetailsPage()
    {
        return Inertia::render('Pages/History/Details', [
            'event' => [
                'title' => 'History Details',
            ]
        ]);
    }

    // Pages/Principles
    public function PrinciplesPage()
    {
        return Inertia::render('Pages/Principles/Index', [
            'event' => [
                'title' => 'Principles',
            ]
        ]);
    }

    // Pages/Team
    public function TeamPage()
    {
        return Inertia::render('Pages/Team/Index', [
            'event' => [
                'title' => 'Team',
            ]
        ]);
    }

    // Pages/Media
    public function MediaPage()
    {
        return Inertia::render('Pages/Media/Index', [
            'event' => [
                'title' => 'Media',
            ]
        ]);
    }

    // Pages/Issues
    public function IssuesPage()
    {
        return Inertia::render('Pages/Issues/Index', [
            'event' => [
                'title' => 'Issues',
            ]
        ]);
    }

    // Pages/Issues Details
    public function IssuesDetailsPage()
    {
        return Inertia::render('Pages/Issues/Details', [
            'event' => [
                'title' => 'Issues Details',
            ]
        ]);
    }

    // Pages/Volunteer
    public function VolunteerPage()
    {
        return Inertia::render('Pages/Volunteer/Index', [
            'event' => [
                'title' => 'Volunteer',
            ]
        ]);
    }

    // Pages/Services
    public function ServicesPage()
    {
        return Inertia::render('Pages/Services/Index', [
            'event' => [
                'title' => 'Services',
            ]
        ]);
    }

    // Pages/Services Details
    public function ServicesDetailsPage()
    {
        return Inertia::render('Pages/Services/Details', [
            'event' => [
                'title' => 'Service Details',
            ]
        ]);
    }

    // Pages/HelpFaq
    public function FaqPage()
    {
        return Inertia::render('Pages/Faq/Index', [
            'event' => [
                'title' => 'Help & Faq',
            ]
        ]);
    }

    // Events
    public function EventPage()
    {
        return Inertia::render('Events/Event/Index', [
            'event' => [
                'title' => 'Event',
            ]
        ]);
    }

    public function EventDetailsPage()
    {
        return Inertia::render('Events/Event/Details', [
            'event' => [
                'title' => 'Event Details',
            ]
        ]);
    }

    // News
    public function NewsPage()
    {
        return Inertia::render('News/Index', [
            'event' => [
                'title' => 'News',
            ]
        ]);
    }

    public function NewsDetailsPage()
    {
        return Inertia::render('News/Details', [
            'event' => [
                'title' => 'News Details',
            ]
        ]);
    }

    // Contact
    public function ContactUsPage()
    {
        return Inertia::render('Contacts/Index', [
            'event' => [
                'title' => 'Contact',
            ]
        ]);
    }

    // Single/Election
    public function ElectionPage()
    {
        return Inertia::render('Single/Election', [
            'event' => [
                'title' => 'Election',
            ]
        ]);
    }

    // Single/Privacy Policy
    public function PrivacyPolicyPage()
    {
        return Inertia::render('Single/PrivacyPolicy', [
            'event' => [
                'title' => 'Privacy Policy',
            ]
        ]);
    }

    // Single/Terms and Conditions
    public function TermsAndConditionsPage()
    {
        return Inertia::render('Single/TermsAndConditions', [
            'event' => [
                'title' => 'Terms and Conditions',
            ]
        ]);
    }
}
