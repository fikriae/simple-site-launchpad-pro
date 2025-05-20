
import React from 'react';
import { Button } from "@/components/ui/button";

const DownloadSection = () => {
  return (
    <section id="download" className="py-16 bg-gradient-to-r from-brand-yellow/20 to-brand-orange/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Download the App</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Available for iOS and Android. Download now and start organizing your notes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-black hover:bg-gray-800 text-white flex items-center gap-2 px-6 py-6">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-apple">
                  <path d="M12 20.94c1.5 0 2.75-.75 4-1.5 1.25-.74 1.5-1.5 2-1.5.5 0 1 .75 1 1.5v.5H5v-.5c0-.75.5-1.5 1-1.5.5 0 .75.76 2 1.5 1.25.75 2.5 1.5 4 1.5Z"></path>
                  <path d="M5 16.94c0-1.66 1.34-3 3-3h8c1.66 0 3 1.34 3 3v1H5v-1Z"></path>
                  <path d="M10 4.94c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3Z"></path>
                  <path d="M8 9.94h8"></path>
                  <path d="M13 4.94v14"></path>
                  <path d="M11 6.94v.5"></path>
                  <path d="M11 14.94v.5"></path>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </Button>
            <Button className="bg-black hover:bg-gray-800 text-white flex items-center gap-2 px-6 py-6">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
