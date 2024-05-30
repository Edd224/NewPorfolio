import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";
import emailjs from "@emailjs/browser";
import { Highlight, themes } from "prism-react-renderer";
import { contactData, toastMessages } from "../assets/lib/data.tsx";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import { ToastContainer, toast } from "react-toastify";
import { useTheme } from "../context/theme-context";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
  const userId = import.meta.env.VITE_EMAILJS_USER_ID || "";

  // Log the environment variables to ensure they are being read correctly

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [cursor, setCursor] = useState<string>("");
  const [lastUpdatedField, setLastUpdatedField] = useState<string | null>(null);
  const { ref } = useSectionInView("Contact");
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [error, setError] = useState<string | any>(null);


  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // Initialize EmailJS with the User ID (Public Key)
  emailjs.init(userId);
  emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);

  // console.log('Service ID:', serviceId);
  // console.log('Template ID:', templateId);
  // console.log('User ID:', userId);



  const notifySentForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
    setError(null);
    e.preventDefault();
    const form = e.currentTarget;

    try {
      const response = await emailjs.sendForm(serviceId, templateId, form, userId);
      console.log(response);
      if (language === "SK") {
        toast.success(toastMessages.successEmailSent.sk);
      } else {
        toast.success(toastMessages.successEmailSent.en);
      }
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setError('An error occurred, try again later');
    }
  };
  const handleInputFocus = (fieldName: string) => {
    setCursor(`${fieldName}${cursor}`);
  };

  const wordWrap = (
    text: string,
    maxLineLength: number,
    indentation: string
  ) => {
    const words = text.split(" ");
    let lines: string[] = [];
    let currentLine = "";

    words.forEach((word) => {
      if (currentLine.length + word.length <= maxLineLength) {
        currentLine += word + " ";
      } else {
        lines.push(currentLine.trim());
        currentLine = `${indentation}${word} `;
      }
    });

    if (currentLine) {
      lines.push(currentLine.trim());
    }

    return lines.join("\n");
  };

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "subject") {
      setSubject(value);
    } else if (name === "message") {
      setMessage(value);
    }

    setLastUpdatedField(name);
  };

  const [cursorBlink, setCursorBlink] = useState<boolean>(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorBlink((prev) => !prev);
    }, 400);

    return () => {
      clearInterval(blinkInterval);
    };
  }, []);

  const codeSnippet = `
import  { useState } from "react";

// 🌈 Spreading Stardust: 
// Crafting Cosmic Email 🌌

const [sender, setSender] = "${name}${lastUpdatedField === "name" ? (cursorBlink ? "|" : " ") : ""
    }🚀";
const [recipient, setRecipient] = "${email}${lastUpdatedField === "email" ? (cursorBlink ? "|" : " ") : ""
    }📧";
const [subject, setSubject] = \n"${subject}${lastUpdatedField === "subject" ? (cursorBlink ? "|" : " ") : ""
    }✨";
const [message, setMessage] = 
\`Hello, intrepid traveler! 👋\n
Across the cosmos, a message for you:\n
"${wordWrap(message, 40, " ")}${lastUpdatedField === "message" ? (cursorBlink ? "|" : " ") : ""
    }"\n
Wishing you stardust dreams,\n
${name}${lastUpdatedField === "name" ? (cursorBlink ? "|" : " ") : ""}
\``;

  return (
    <React.Fragment>
      <section
        className="contact-container w-full min-[1921px]:px-[55rem] mt-16"
        id="contact"
      >
        <div
          className="title-container flex flex-col gap-6 justify-center items-center py-16  max-lg:p-16"
          ref={ref}
        >
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
              textAlign: "center",
            }}
          >
            <p className="text-[--black] mb-6">
              <span className="text-[--orange]">&lt;</span>
              {language === "SK" ? contactData.title.sk : contactData.title.en}
              <span className="text-[--orange]">/&gt;</span>
            </p>

            <h2 className="text-[--black] text-center">
              {language === "SK"
                ? contactData.description.sk
                : contactData.description.en}
            </h2>
          </motion.div>
        </div>
        <div className="flex flex-row justify-center items-start px-32 pt-32 mb-32 max-lg:flex-col max-lg:p-10">
          <div className="w-1/2  bg-[--darkblue] text-[--white] flex flex-col justify-center items-start gap-24 rounded-2xl p-20 border-solid border-[0.4rem] border-[--lightblue] hover:border-[#1a2238] duration-500 transition-all  quote-outer-container text-left max-lg:hidden cursor-progress">
            <Highlight
              code={codeSnippet}
              language="tsx"
              theme={themes.nightOwl}
            >
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={`${className} text-4xl `} style={style}>
                  {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
          <form
            className="flex flex-col gap-6 justify-center items-center  px-32 w-1/2 max-lg:w-full max-lg:p-10"
            onSubmit={notifySentForm}
            autoComplete="off"
          >
            {contactData.inputfields.map((input, index) => (
              <input
                key={index}
                type={input.type}
                placeholder={
                  language === "SK"
                    ? `${input.placeholder.sk}`
                    : `${input.placeholder.en}`
                }
                name={input.name}
                value={
                  input.name === "name"
                    ? name
                    : input.name === "email"
                      ? email
                      : input.name === "subject"
                        ? subject
                        : message
                }
                required
                onFocus={() => {
                  handleInputFocus(input.name);
                  setLastUpdatedField(input.name);
                }}
                onMouseEnter={() => {
                  handleInputFocus(input.name);
                  setLastUpdatedField(input.name);
                }}
                onChange={handleInputChange}
                className={`${theme === "dark"
                    ? "bg-[--blackblue] dark-mode-shadow  "
                    : "bg-[--white] dark-shadow  "
                  }`}
              />
            ))}
            <textarea
              rows={contactData.textarea.rows}
              placeholder={
                language === "SK"
                  ? `${contactData.textarea.placeholder.sk}`
                  : `${contactData.textarea.placeholder.en}`
              }
              name={contactData.textarea.name}
              onFocus={() => {
                handleInputFocus(contactData.textarea.name);
                setLastUpdatedField(contactData.textarea.name);
              }}
              onMouseEnter={() => {
                handleInputFocus(contactData.textarea.name);
                setLastUpdatedField(contactData.textarea.name);
              }}
              onChange={handleInputChange}
              className={`${theme === "dark"
                  ? "bg-[--blackblue] dark-mode-shadow"
                  : "bg-[--white] dark-shadow"
                }`}
            />
            <div className="privacy-checkbox flex gap-16">
              <label
                className="block w-2 h-2 cursor-pointer"
                htmlFor="checkbox-label"
              >
                <input
                  type="checkbox"
                  required
                  name="checkbox-label"
                  id="checkbox-label"
                />
                <span className="checkbox"></span>
              </label>
              <p>
                {language === "SK"
                  ? `${contactData.privacyOptIn.checkbox.sk}`
                  : `${contactData.privacyOptIn.checkbox.en}`}
              </p>
            </div>
            <p>
              {language === "SK"
                ? `${contactData.privacyOptIn.description.sk}`
                : `${contactData.privacyOptIn.description.en}`}
            </p>
            <Button
              value={
                language === "SK"
                  ? `${contactData.button.value.sk}`
                  : `${contactData.button.value.en}`
              }
              iconSVG={contactData.icon}
              buttoncolor={contactData.colors.main}
              iconcolor={contactData.colors.icon}
              type="submit"
              elementType="input"
            />
            <ToastContainer
              className="w-max text-3xl block p-3 max-lg:w-full "
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme={theme}
            />
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
