'use client'

import CustomCursor from "./CustomCursor";
import PageTransition from "./PageTransition";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
import TextureOverlay from "./TextureOverlay";
import RenaissanceDecorator from "./RenaissanceDecorator";
import RenaissanceOverlay from "./RenaissanceOverlay";
import RenaissanceCollageBackground from "./RenaissanceCollageBackground";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Background elements (lowest z-index) */}
      <RenaissanceCollageBackground /> {/* z-index: -10 */}
      <RenaissanceOverlay /> {/* z-index: 2 */}
      <TextureOverlay /> {/* z-index: 1 */}
      
      {/* Interactive elements (middle z-index) */}
      <CustomCursor />
      <PageTransition />
      
      {/* Corner decorators for the page */}
      <div className="fixed top-0 left-0 z-[5] pointer-events-none">
        <RenaissanceDecorator type="corner" animationDelay={0.5} />
      </div>
      <div className="fixed top-0 right-0 z-[5] pointer-events-none" style={{ transform: 'scaleX(-1)' }}>
        <RenaissanceDecorator type="corner" animationDelay={0.7} />
      </div>
      <div className="fixed bottom-0 left-0 z-[5] pointer-events-none" style={{ transform: 'scaleY(-1)' }}>
        <RenaissanceDecorator type="corner" animationDelay={0.9} />
      </div>
      <div className="fixed bottom-0 right-0 z-[5] pointer-events-none" style={{ transform: 'scale(-1, -1)' }}>
        <RenaissanceDecorator type="corner" animationDelay={1.1} />
      </div>
      
      {/* Content elements (highest z-index) */}
      <Navbar />
      <div className="min-h-screen relative z-[20]">
        {children}
      </div>
      <ScrollToTop />
    </>
  );
} 