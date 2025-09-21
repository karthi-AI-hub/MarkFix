export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MarkFix Digital Marketing Agency",
  "alternateName": ["MarkFix", "MarkFix Agency"],
  "url": "https://markfix.in",
  "logo": "https://markfix.in/logo.png",
  "description": "India's leading digital marketing agency offering freelancing jobs, influencer marketing, social media automation tools, SEO services & personal branding.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jalakandapuram",
    "addressLocality": "Salem",
    "addressRegion": "Tamil Nadu",
    "postalCode": "636116",
    "addressCountry": "IN"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-63749-95530",
      "contactType": "customer service",
      "email": "markfixofficial@gmail.com",
      "availableLanguage": ["English", "Tamil", "Hindi"]
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/markfix",
    "https://www.facebook.com/markfix",
    "https://www.instagram.com/markfix",
    "https://twitter.com/markfix"
  ]
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "MarkFix Digital Marketing Services",
  "description": "Comprehensive digital marketing services including freelancing platform, influencer marketing, social media automation, and SEO services",
  "provider": organizationSchema,
  "serviceType": [
    "Digital Marketing Agency",
    "Freelancing Platform",
    "Influencer Marketing",
    "Social Media Automation",
    "SEO Services"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "India"
  }
};

export const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "MarkFix Social Media Automation Tools",
  "description": "Professional social media automation tools for Instagram, Facebook, LinkedIn, and WhatsApp",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web-based",
  "offers": {
    "@type": "Offer",
    "price": "Custom",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock"
  },
  "provider": organizationSchema
};

export const freelancingJobSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "Digital Marketing Freelancers - Join MarkFix Network",
  "description": "Join India's leading digital marketing freelancing platform. Connect with top brands and grow your freelancing career.",
  "hiringOrganization": organizationSchema,
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    }
  },
  "employmentType": ["CONTRACTOR", "PART_TIME", "FULL_TIME"],
  "skills": [
    "Digital Marketing",
    "SEO",
    "Social Media Marketing",
    "Content Marketing",
    "Influencer Marketing"
  ]
};

export const faqSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});