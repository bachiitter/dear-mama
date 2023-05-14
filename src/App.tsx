import { motion } from "framer-motion";

const poem = [
  '"Mother" is such a simple word,',
  "But to me there’s meaning seldom heard.",
  "For everything I am today,",
  "My mother’s love showed me the way.",
  "I’ll love my mother all my days,",
  "For enriching my life in so many ways.",
  "She set me straight and then set me free,",
  'And that’s what the word "mother" means to me.',
];

function App() {
  return (
    <motion.main className="mx-auto flex w-full flex-col items-center">
      <motion.div className="px-4 py-24">
        <motion.h2
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mx-auto my-52 flex flex-col text-center font-serif text-4xl font-semibold text-rose-500 xs:text-5xl sm:my-60 md:my-72">
          Happy Mothers Day
          <span className="-mt-6 text-rose-500 opacity-50">
            <br />
          </span>
        </motion.h2>
        <motion.h1
          initial={{
            opacity: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 2,
            type: "spring",
          }}
          whileInView={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="mx-auto mt-64 text-center font-serif text-7xl font-semibold text-rose-500 xs:text-9xl">
          Dear Mama,
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="mx-auto my-16 text-center font-serif text-4xl text-rose-400 xs:text-6xl">
          I Miss You!
        </motion.p>
        <motion.ul className="flex flex-col gap-y-4">
          {poem.map((line) => {
            return (
              <motion.li
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: {
                    opacity: 0,
                  },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.08,
                      delay: 0.5,
                    },
                  },
                }}
                className="mx-auto text-center font-serif text-xl text-rose-500 xs:text-2xl sm:text-4xl"
                key={line}>
                {line.split("").map((char) => {
                  return (
                    <motion.span
                      variants={{
                        hidden: {
                          opacity: 0,
                          x: -20,
                          y: 0,
                          transition: {
                            type: "spring",
                            damping: 12,
                            stiffness: 100,
                          },
                        },
                        visible: {
                          opacity: 1,
                          x: 0,
                          y: 0,
                          transition: {
                            type: "spring",
                            damping: 12,
                            stiffness: 100,
                          },
                        },
                      }}
                      key={char}>
                      {char}
                    </motion.span>
                  );
                })}
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
      <motion.div className="w-full bg-rose-600 px-4 py-10">
        <motion.p className="mx-auto my-10 text-center font-serif text-4xl text-rose-50 xs:text-6xl">
          Thank You,
          <span className="text-2xl opacity-80">
            {" "}
            <br /> With Love!
          </span>
        </motion.p>
        <motion.p className="mx-auto my-10 text-center font-serif text-lg text-rose-100 xs:text-2xl">
          Mothers Day. <span className="opacity-80">May 14th, 2023</span>
        </motion.p>
        <motion.p className="mx-auto my-10 text-center font-serif text-lg text-rose-200 xs:text-xl">
          Poem by Karl Fuchs
        </motion.p>
        <audio autoPlay preload="auto">
          <source
            src="https://p.scdn.co/mp3-preview/55d3dac7bbfe504cf841d29e7a84be9d7381be91?cid=73acd9f9518b4769b4763892479ee34d"
            type="audio/mpeg"
          />
        </audio>
      </motion.div>
    </motion.main>
  );
}

export default App;
