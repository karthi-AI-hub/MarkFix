import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  structuredData?: object | object[];
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "MarkFix - Top Digital Marketing Agency India | Freelancing Jobs | Influencer Marketing",
  description = "MarkFix: India's leading digital marketing agency offering freelancing jobs, influencer marketing, social media automation tools, SEO services & personal branding. Connect with top freelancers & influencers.",
  keywords = "markfix, digital marketing agency India, freelancing jobs, influencer marketing platform, social media automation, Instagram automation, Facebook automation, LinkedIn automation, WhatsApp automation, SEO services India",
  canonicalUrl = "https://markfix.in",
  ogTitle,
  ogDescription,
  ogImage = "https://markfix.in/logo.png",
  structuredData
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', description);
    }
    
    // Update keywords
    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta) {
      keywordsMeta.setAttribute('content', keywords);
    }
    
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
    
    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);
    };
    
    updateOGTag('og:title', ogTitle || title);
    updateOGTag('og:description', ogDescription || description);
    updateOGTag('og:image', ogImage);
    updateOGTag('og:url', canonicalUrl);
    
    // Add structured data if provided
    if (structuredData) {
      // Remove existing structured data scripts
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"][data-seo-head]');
      existingScripts.forEach(script => script.remove());
      
      // Handle both single object and array of objects
      const dataArray = Array.isArray(structuredData) ? structuredData : [structuredData];
      
      // Add new structured data scripts
      dataArray.forEach((data, index) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo-head', `true-${index}`);
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      });
    }
  }, [title, description, keywords, canonicalUrl, ogTitle, ogDescription, ogImage, structuredData]);

  return null; // This component doesn't render anything
};

export default SEOHead;