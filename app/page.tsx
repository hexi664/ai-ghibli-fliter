import React from 'react';
import ImageUploader from '@/components/ImageUploader';
import ExamplesSection from '@/components/ExamplesSection';
import { Metadata } from 'next';

// Define page metadata
export const metadata: Metadata = {
  title: 'AI Ghibli Filter | Transform Photos into Ghibli-Style Art',
  description: 'Transform your photos into stunning Ghibli-style art with our AI Ghibli Filter. Upload your image and instantly get a high-quality Ghibli-style artwork, completely free.',
  keywords: 'ai ghibli filter, ghibli ai filter, ai ghibli art filter, ghibli style ai, ai ghibli style filter, ghibli inspired ai filter, ai art ghibli effect, ghibli filter for photos',
};

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  'name': 'AI Ghibli Filter',
  'description': 'Transform your photos into stunning Ghibli-style art with our AI Ghibli Filter.',
  'url': 'https://aighiblifilter.org',
  'applicationCategory': 'Image Processing',
  'offers': {
    '@type': 'Offer',
    'price': '0',
    'priceCurrency': 'USD'
  },
  'operatingSystem': 'All',
  'author': {
    '@type': 'Organization',
    'name': 'AI Ghibli Filter Team',
    'url': 'https://aighiblifilter.org'
  }
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Inject JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Ghibli Filter</h1>
          <p className="text-xl text-gray-600 mb-4">Transform your photos into stunning Ghibli-style art</p>
          <p className="text-lg text-gray-500">Free Online Tool | High-Quality Conversion | Easy to Use</p>
        </header>

        <ImageUploader />
        
        <ExamplesSection />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-8">About Ghibli Style</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg leading-relaxed mb-4">
                Studio Ghibli, founded by Hayao Miyazaki and Isao Takahata, is a Japanese animation studio renowned for its unique artistic style and deeply moving stories.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                The Ghibli style is characterized by meticulous hand-drawn quality, soft color palettes, detailed depictions of natural landscapes, and imaginative character designs. This style is perfectly showcased in classics like "Spirited Away," "My Neighbor Totoro," and "Howl's Moving Castle."
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>AI Ghibli Filter</strong> uses advanced artificial intelligence to identify key elements in images and apply Ghibli-style characteristics, including color processing, line style, and texture details. Our algorithm has been trained on numerous Ghibli animation works to accurately capture the artistic essence of Miyazaki's creations.
              </p>
              <p className="text-lg leading-relaxed">
                With our conversion tool, you can transform your photos into Ghibli-style artwork and experience the magic of Miyazaki's animation. Whether it's landscapes, portraits, or pet pictures, all can be converted into beautiful Ghibli-style illustrations.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50 rounded-lg my-8">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-8">Why Choose AI Ghibli Filter?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-3">High-Quality Conversion</h3>
                <p>Our AI algorithm is optimized for Ghibli style, capable of generating high-quality conversion effects, preserving original details while adding Ghibli animation's artistic beauty.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-3">Completely Free</h3>
                <p>We provide a completely free service with no account registration required. No software downloads needed - simply upload your image in your browser to get the conversion effect.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-3">Easy to Use</h3>
                <p>User-friendly interface design, just a few simple steps to complete the conversion. Upload an image, wait for processing, download the result - it's that simple!</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600 mb-4">
            <p className="mb-2">© 2025 AI Ghibli Filter | aighiblifilter.org</p>
            <p>Transform your photos into stunning Ghibli-style art with our advanced AI technology</p>
          </div>
          <div className="text-center">
            <a href="/privacy" className="text-blue-600 hover:underline mx-2">Privacy Policy</a>
            <a href="/terms" className="text-blue-600 hover:underline mx-2">Terms of Use</a>
            <a href="/contact" className="text-blue-600 hover:underline mx-2">Contact Us</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
