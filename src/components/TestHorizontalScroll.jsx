import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TestHorizontalScroll = () => {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !horizontalRef.current) return;

    // Get the total width of the horizontal content
    const totalWidth = horizontalRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = totalWidth - viewportWidth;

    console.log('Total width:', totalWidth);
    console.log('Viewport width:', viewportWidth);
    console.log('Scroll distance:', scrollDistance);

    // Create the horizontal scroll animation
    const horizontalScroll = gsap.to(horizontalRef.current, {
      x: -scrollDistance,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: `+=${scrollDistance}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        onUpdate: (self) => {
          console.log('Progress:', self.progress);
        },
        onEnter: () => console.log('Horizontal scroll started'),
        onLeave: () => console.log('Horizontal scroll ended'),
      },
    });

    // Cleanup function
    return () => {
      horizontalScroll.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Dummy cards data
  const dummyCards = [
    {
      id: 1,
      title: 'Card 1',
      description: 'This is the first dummy card for testing horizontal scroll functionality.',
      color: 'bg-red-500',
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'This is the second dummy card for testing horizontal scroll functionality.',
      color: 'bg-blue-500',
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'This is the third dummy card for testing horizontal scroll functionality.',
      color: 'bg-green-500',
    },
    {
      id: 4,
      title: 'Card 4',
      description: 'This is the fourth dummy card for testing horizontal scroll functionality.',
      color: 'bg-yellow-500',
    },
    {
      id: 5,
      title: 'Card 5',
      description: 'This is the fifth dummy card for testing horizontal scroll functionality.',
      color: 'bg-purple-500',
    },
    {
      id: 6,
      title: 'Card 6',
      description: 'This is the sixth dummy card for testing horizontal scroll functionality.',
      color: 'bg-pink-500',
    },
    {
      id: 7,
      title: 'Card 7',
      description: 'This is the seventh dummy card for testing horizontal scroll functionality.',
      color: 'bg-indigo-500',
    },
    {
      id: 8,
      title: 'Card 8',
      description: 'This is the eighth dummy card for testing horizontal scroll functionality.',
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Horizontal Scroll Test</h1>
          <p className="text-xl">Scroll down to test horizontal scrolling with dummy cards</p>
        </div>
      </div>

      {/* Horizontal Scroll Section */}
      <div ref={containerRef} className="h-screen bg-gray-200 flex items-center">
        <div ref={horizontalRef} className="flex gap-8 px-8">
          {dummyCards.map((card) => (
            <div
              key={card.id}
              className={`flex-shrink-0 w-80 h-96 ${card.color} rounded-2xl p-8 text-white shadow-2xl`}
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-4">{card.title}</h2>
                  <p className="text-lg opacity-90">{card.description}</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold opacity-50">{card.id}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="h-screen bg-gradient-to-tr from-green-600 to-blue-700 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-5xl font-bold mb-4">Scroll Test Complete!</h2>
          <p className="text-xl">If you can see this, the horizontal scroll worked correctly</p>
        </div>
      </div>
    </div>
  );
};

export default TestHorizontalScroll;
