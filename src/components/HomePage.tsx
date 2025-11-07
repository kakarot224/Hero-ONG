import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      avatar: 'FD',
      name: 'Fatoumata Diallo',
      quote: '"Grâce à Hero National, notre quartier est plus propre et nous sommes fiers de participer !"',
      role: 'Volontaire, Kaloum',
    },
    {
      avatar: 'K',
      name: 'Kakarot',
      quote: '"Les sessions d\'éducation ont changé ma vision de l\'assainissement."',
      role: 'Bénéficiaire, Matam',
    },
    {
      avatar: 'MS',
      name: 'Mariam Sylla',
      quote: '"Travailler avec Hero National m\'a donné un sens d\'appartenance."',
      role: 'Jeune mobilisée, Ratoma',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Optionnel : Auto-slide toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-20 bg-muted animate-fade relative z-20" id="temoinages">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary mb-4">Nos Témoignages</h2>
        <p className="text-lg text-muted-foreground">Découvrez ce que nos volontaires et bénéficiaires disent de notre mission.</p>
      </div>
      <div className="relative overflow-hidden w-full my-10 h-[300px] flex justify-center items-center">
        <div
          className="flex transition-transform duration-500 ease-in-out w-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full">
              <div className="bg-card p-6 rounded-lg shadow-md text-center transition duration-300 ease-in-out h-full w-4/5 mx-auto hover:-translate-y-[5px] hover:shadow-lg">
                <div className="w-20 h-20 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center text-secondary text-2xl font-bold transition duration-300 ease-in-out hover:scale-110">
                  {slide.avatar}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{slide.name}</h3>
                <p className="text-base italic my-4 text-foreground">{slide.quote}</p>
                <p className="text-sm text-muted-foreground">{slide.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-2.5 top-1/2 -translate-y-1/2 bg-destructive text-destructive-foreground p-2.5 cursor-pointer rounded-full transition duration-300 ease-in-out z-30 w-10 h-10 hover:bg-destructive/80 hover:scale-110"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-destructive text-destructive-foreground p-2.5 cursor-pointer rounded-full transition duration-300 ease-in-out z-30 w-10 h-10 hover:bg-destructive/80 hover:scale-110"
      >
        ❯
      </button>
    </div>
  );
};

export default HomePage;