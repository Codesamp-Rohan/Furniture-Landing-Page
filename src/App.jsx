import "./App.css";
import gsap from "gsap";
import { useLayoutEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ref = useRef(null);
  const textRef = useRef(null);
  const images = useRef(null);
  const image = useRef(null);
  const woodGrpImg = useRef(null);
  const woodGrpImages = useRef([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: images.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      tl.to(image.current, { y: -1000 }, 0);

      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current, // Matching the image element class
          start: "top 0%", // Start animation at the top
          end: "bottom -40%", // End animation at the bottom
          scrub: true,
        },
        top: 0,
        width: "98vw",
        height: "100vh",
      });

      gsap.to(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current, // Matching the image element class
          start: "top 0%", // Start animation at the top
          end: "bottom -40%", // End animation at the bottom
          scrub: true,
        },
      });
    });

    gsap.to(woodGrpImg.current, {
      scrollTrigger: {
        trigger: woodGrpImg.current, // Matching the image element class
        start: "top 0%", // Start animation at the top
        end: "bottom -40%", // End animation at the bottom
        scrub: true,
      },
      top: "50%",
      width: "100vw",
      height: "100vh",
      position: "absolute",
      left: "50%",
      transform: "translate(-50%, -50%)",
    });

    gsap.to([...woodGrpImages.current], {
      scrollTrigger: {
        trigger: woodGrpImg.current,
        start: "top 0%", // Start animation at the top
        end: "bottom -40%", // End animation at the bottom
        scrub: true,
      },
      opacity: 0,
      scale: 0,
    });

    return () => context.revert();
  }, [ref, textRef, images, image, woodGrpImg]);

  return (
    <>
      <div
        className={`menu w-screen fixed z-[900] duration-[1000ms] ease-in-out ${
          menuOpen
            ? `opacity-1 translate-y-[0] h-screen`
            : `opacity-0 translate-y-[-100vh] pointer-events-none h-0`
        }`}>
        <nav className="eep p-10 flex items-center justify-between z-[999] text-[#eee]">
          <h1 className="font-extrabold text-[2rem]">aww . wards</h1>
          <span className="flex items-center gap-[4rem] mr-4">
            <p className="eem">Close</p>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-[20px] h-[20px] bg-[#eee] rounded-full"></button>
          </span>
        </nav>
        <div className="flex h-[60vh] p-10 items-center justify-between text-[#eee]">
          <div>
            <span className="flex flex-col text-[10px] eem">
              <p className="w-[25%] text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci quis quaerat placeat enim reiciendis nostrum omnis
                atque dolores! Doloribus repellat eum assumenda perspiciatis
                officia ipsum quis ipsa tempore rem non.
              </p>
            </span>
          </div>
          <div>
            <span className="flex flex-col text-[30px] eem items-end">
              <a href="#">ABOUT</a>
              <a href="#">BRANDS</a>
              <a href="#">PROJECT</a>
              <a href="#">COMPANY</a>
              <a href="#">CONTACT</a>
            </span>
          </div>
        </div>
        <div className="text-[#eee] p-10 absolute bottom-0">
          <a href="https://instagram.com/aww.wards" target="_blank">
            @aww.wards
          </a>
        </div>
      </div>
      <nav className="eep p-10 flex items-center justify-between">
        <span className="flex items-center gap-[4rem]">
          <h1 className="font-extrabold text-[1rem] md:text-[2rem] whitespace-nowrap">
            aww . wards
          </h1>
          <span className="menu--span flex flex-col text-[10px] eem">
            <a href="#">ABOUT</a>
            <a href="#">BRANDS</a>
            <a href="#">PROJECT</a>
            <a href="#">COMPANY</a>
            <a href="#">CONTACT</a>
          </span>
        </span>
        <span className="flex items-center gap-[4rem]">
          <p className="eem">Menu</p>
          <button type="button" onClick={() => setMenuOpen(!menuOpen)}>
            <img className="w-[20px]" src="./Icons/menu.png"></img>
          </button>
        </span>
      </nav>
      <div className="relative">
        <h1 className="eep text-center leading-tight text-[4rem] md:text-[8rem] mt-[20vh] md:mt-0">
          To & for
          <br /> The Nature
        </h1>
        <div className="flex ring-0 mt-[20vh] h-[200vh] sticky top-0 justify-center">
          <img
            ref={ref}
            id="box--img"
            className="w-[70vw] h-[60vh] md:h-[90vh] bg-violet-400 sticky top-10 object-cover"
            src="https://wallpapercave.com/wp/wp9160759.jpg"></img>
        </div>
      </div>
      <div className="h-[40vh]"></div>
      <div className="relative flex flex-col w-screen h-[400vh] items-center">
        <div
          ref={textRef}
          id="Prosterity--content"
          className="eem w-[90%] md:w-[40%] h-fit sticky top-[40%] flex flex-col gap-6">
          <h1 className="text-[1.6rem]">We cultive for Prosterity</h1>
          <p className="text-justify md:text-balance">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium similique iure quis magnam illo eius atque dolorem natus
            aperiam corrupti quam earum culpa sed, veniam iusto officiis vero
            totam. Praesentium?
          </p>
        </div>
        <div ref={images} className="">
          <div
            ref={image}
            className="product--img--container absolute bg-[#fff] left-40 top-[20%] flex flex-col items-center justify-center w-[80vw] md:w-[40vw] md:h-[60vh]">
            <img
              className="product--img--main absolute object-cover"
              src="https://png.pngtree.com/png-vector/20230915/ourmid/pngtree-modern-white-chair-object-png-image_10076590.png"></img>
            <img
              className="product--img--main2 absolute object-cover"
              src="https://cdn.hswstatic.com/gif/wood-furniture-shop.jpg"></img>
          </div>
          <div
            ref={image}
            className="product--img--container absolute bg-[#fff] right-40 top-[20%] flex flex-col items-center justify-center w-[80vw] md:w-[40vw] md:h-[60vh]">
            <img
              className="product--img--main absolute object-cover"
              src="https://atlas-content-cdn.pixelsquid.com/stock-images/round-wooden-table-with-white-top-POddm74-600.jpg"></img>
          </div>
          <div className="product--img--container absolute bg-[#fff] top-[40%] flex flex-col items-center justify-center w-[80vw] md:w-[40vw] md:h-[60vh]">
            <img
              className="product--img--main absolute object-cover"
              src="https://atlas-content-cdn.pixelsquid.com/stock-images/white-chair-G9YGe2E-600.jpg"></img>
            <img
              className="product--img--main2 absolute object-cover"
              src="https://cdn.hswstatic.com/gif/wood-furniture-shop.jpg"></img>
          </div>
          <div className="product--img--container absolute bg-[#fff] left-40 top-[60%] flex flex-col items-center justify-center w-[80vw] md:w-[40vw] md:h-[60vh]">
            <img
              className="product--img--main absolute object-cover"
              src="https://static.vecteezy.com/system/resources/previews/021/950/175/original/white-table-isolated-on-a-transparent-background-png.png"></img>
            <img
              className="product--img--main2 absolute object-cover"
              src="https://cdn.hswstatic.com/gif/wood-furniture-shop.jpg"></img>
          </div>
          <div className="product--img--container absolute bg-[#fff] top-[80%] flex flex-col items-center justify-center w-[80vw] md:w-[40vw] md:h-[60vh]">
            <img
              className="product--img--main absolute object-cover"
              src="https://png.pngtree.com/png-vector/20240201/ourmid/pngtree-wooden-comfortable-chair-isolated-ai-generated-png-image_11581802.png"></img>
            <img
              className="product--img--main2 absolute object-cover"
              src="https://cdn.hswstatic.com/gif/wood-furniture-shop.jpg"></img>
          </div>
        </div>
      </div>
      <div className="h-[50vh] md:h-[140vh]"></div>
      <div className="relative">
        <div className="w-screen h-[200vh] relative bg-[#eee] z-[100]">
          <div className="sticky top-[50%] translate-y-[-50%] flex flex-col items-center gap-[1rem]">
            <div className="flex justify-between items-center gap-10">
              <img
                ref={(el) => woodGrpImages.current.push(el)}
                className="w-[60vw] md:w-[20vw] h-fit wood--grp--img"
                src="https://media.istockphoto.com/id/1199017962/photo/idyllic-forest-glade-mossy-woodland-golden-rays-of-sunbeams-panorama.webp?b=1&s=170667a&w=0&k=20&c=c6Zym01jfDtiTiPfBE-YYKttqN5TibwBbapPoNbTcVU="></img>
              <img
                ref={(el) => woodGrpImages.current.push(el)}
                className="w-[40vw] md:w-[22vw] h-fit wood--grp--img"
                src="https://petapixel.com/assets/uploads/2023/02/Jeroen_Schouten_Photographing_Sunrays_Speulderforest_Speulderbos-2-800x534.jpg"></img>
            </div>
            <div className="w-screen flex justify-around items-center relative">
              <img
                ref={(el) => woodGrpImages.current.push(el)}
                className="w-[40vw] md:w-[16vw] wood--grp--img h-fit"
                src="https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?cs=srgb&dl=pexels-hikaique-775201.jpg&fm=jpg"></img>
              <img
                ref={woodGrpImg}
                className="w-[30vw] object-cover absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                src="https://cdn.pixabay.com/photo/2017/02/12/17/35/sunbeam-2060662_1280.jpg"></img>
              <img
                ref={(el) => woodGrpImages.current.push(el)}
                className="w-[30vw] md:w-[16vw] wood--grp--img h-fit"
                src="https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?cs=srgb&dl=pexels-hikaique-775201.jpg&fm=jpg"></img>
            </div>
            <div className="scale-0 md:scale-1 flex justify-between items-center gap-10">
              <img
                ref={(el) => woodGrpImages.current.push(el)}
                className="w-[12vw] wood--grp--img h-fit"
                src="https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?cs=srgb&dl=pexels-hikaique-775201.jpg&fm=jpg"></img>
              <img
                ref={(el) => woodGrpImages.current.push(el)}
                className="w-[10vw] wood--grp--img"
                src="https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?cs=srgb&dl=pexels-hikaique-775201.jpg&fm=jpg"></img>
              <img
                ref={(el) => woodGrpImages.current.push(el)}
                className="w-[12vw] wood--grp--img h-fit"
                src="https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?cs=srgb&dl=pexels-hikaique-775201.jpg&fm=jpg"></img>
            </div>
          </div>
        </div>
        <footer className="w-screen h-[60vh] bg-[#fafafa] md:z-auto sticky bottom-0 text-[#000]">
          <nav className="eep p-10 flex items-center justify-between z-[999]">
            <h1 className="font-extrabold text-[1rem] whitespace-nowrap md:text-[2rem]">
              aww . wards
            </h1>
            <span className="flex items-center gap-[4rem] mr-4">
              <p className="eem scale-0 md: scale-1">menu</p>
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-[20px] h-[20px] bg-[#000] rounded-full"></button>
            </span>
          </nav>
          <div className="flex flex-col gap-[4rem] md:gap-0 md:flex-row p-10 items-end md:items-center justify-between ">
            <div>
              <span className="flex flex-col text-[10px] eem">
                <p className="w-[100%] md:w-[25%] text-justify">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Adipisci quis quaerat placeat enim reiciendis nostrum omnis
                  atque dolores! Doloribus repellat eum assumenda perspiciatis
                  officia ipsum quis ipsa tempore rem non.
                </p>
              </span>
            </div>
            <div>
              <span className="flex flex-col text-[14px] md:text-[30px] eem items-end">
                <a href="#">ABOUT</a>
                <a href="#">BRANDS</a>
                <a href="#">PROJECT</a>
                <a href="#">COMPANY</a>
                <a href="#">CONTACT</a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
