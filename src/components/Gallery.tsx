import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import galleryData from "../assets/galleryData.json";
import { Image } from "./Image";
import { Text } from "./Text";
import ButtonGallery from "./ButtonGallery";
import { useLanguage } from "../context/language-context";
import { IoCloseCircleOutline } from "react-icons/io5"
import { useTheme } from "../context/theme-context";

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState<string>("all");
    const [modalImage, setModalImage] = useState<string | null>(null);
    const { theme } = useTheme();

    const buttonCaptions = ["all", "nature", "cars", "people"];

    const handleFilterClick = (filter: string) => {
        setActiveFilter(filter);
    };

    const handleImageClick = (src: string) => {
        setModalImage(src);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    const { language } = useLanguage();
    const animationReference = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: animationReference,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <section id="gallery" className="w-full flex flex-col gap-12 contact-container min-[1921px]:px-[55rem] mt-16">
            <div className="title-container flex flex-col justify-center items-center w-1/3 max-lg:w-full max-lg:p-16 max-lg:items-start">
                <motion.div
                    ref={animationReference}
                    style={{
                        scale: scaleProgess,
                        opacity: opacityProgess,
                        textAlign: "left",
                    }}
                >
                    <p className="text-[--black] mb-6">
                        <span className="text-orange">&lt;</span>
                        {language === "SK" ? galleryData.title : galleryData.title_EN}
                        <span className="text-orange">/&gt;</span>
                    </p>

                    <h2 className="text-[--black] text-center max-lg:text-left break-words">
                        {language === "SK"
                            ? galleryData.description
                            : galleryData.description_EN}
                    </h2>
                </motion.div>
            </div>

            <div className="flex w-full md:justify-center items-start px-16 sm:px-32 md:gap-6 gap-3 flex-wrap">
                {buttonCaptions.map((filter) => (
                    <ButtonGallery
                        key={filter}
                        onClick={() => handleFilterClick(filter)}
                        type="button"
                        className={`focus:outline-none border-2 border-[--orange] hover:bg-[--orange] font-medium rounded-lg text-xl px-5 text-white py-2.5 mb-2 capitalize ${
                            activeFilter === filter ? "bg-[--orange]" : ""
                        }`}
                    >
                        {filter === "all" ? "Show all" : filter}
                    </ButtonGallery>
                ))}
                <main className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-8 md:mt-8">
                    {galleryData.items.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleImageClick(item.src)}
                            className={`w-full cursor-zoom-in transition-all duration-200 rounded-lg shadow bg-transparent ${
                                activeFilter === "all" || activeFilter === item.name ? "block" : "hidden"
                            }`}
                        >
                            <Image className="rounded-t-lg w-full h-[200px] overflow-hidden" image={item.src} alt={item.name} objectCover="object-cover" />
                            <div className="p-5">
                                <Text as="h5" className={`  mb-2 text-4xl  tracking-tight  
                                    ${ theme === "dark" ? "text-white" : "text-black}"} `}>
                                    {item.title}
                                </Text>
                                <div className="font-[Mauline]  mb-3 text-3xl text-[--orange] ">
                                    {item.text}
                                </div>
                            </div>
                        </div>
                    ))}
                </main>
            </div>

            {/* Animated Modal */}
            <AnimatePresence>
                {modalImage && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center p-4 sm:p-0 justify-center bg-black bg-opacity-80"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.4, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-5 right-5"
                            >
                                <IoCloseCircleOutline className="text-black text-6xl" />
                            </button>
                            <img
                                src={modalImage}
                                alt="Modal"
                                className="max-w-full max-h-screen rounded-lg"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
