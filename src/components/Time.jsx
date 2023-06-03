import {
    Box, Text
} from "@chakra-ui/react";
import { motion, } from "framer-motion";

import useAnimateInView from "../UseAnimateHook";

const Time = () => {
    const { ref: ref1, controls: controls1 } = useAnimateInView({
        initial: { opacity: 0, y: 50 },
        desired: { opacity: 1, y: 0 },
        transition: { duration: 1, ease: "easeOut" },
    });
    const { ref: ref2, controls: controls2 } = useAnimateInView({
        initial: { opacity: 0, y: 50 },
        desired: { opacity: 1, y: 0 },
        transition: { duration: 1, ease: "easeOut" },
    });

    return (
        <Box
            className="flex items-center justify-center py-12 min-h-screen bg-no-repeat bg-center bg-cover"
            bgImage="url(/time-bg.png)"
            id="time"
        >
            <motion.div
                initial={ { opacity: 0, y: 50 } }
                animate={ { opacity: 1, y: 0 } }
                transition={ { duration: 1, ease: "easeOut" } }
                className="flex flex-col items-center justify-center text-center"
            >
                <Text as="h2" className="text-4xl font-extrabold mb-6 text-gold">
                    Мій вІлЬнИй час 🕝
                </Text>
                <motion.div
                    ref={ ref1 }
                    animate={ controls1 }
                    initial={ { opacity: 0, y: 50 } }
                    transition={ { duration: 1, ease: "easeOut", delay: 0.3 } }
                >
                    <Text className="text-lg mb-4 text-white p-11 m-6 rounded-lg bg-gray-500 backdrop-filter backdrop-blur-md bg-opacity-70">
                        Я дуже багато чим люблю займатися. Все займає час і забирає людський ресурс і енергію, які треба вміти мудро розприділяти. ПРІОРИТЕТИ. Рішення одне, але, на мою думку правильне.

                        В БЕСТІ є все, чого мені треба, і чого я хочу, тому я можу із спокійною душею ставити завдання ІБЕК IT responsible на перше місце. Коду мені тут не бракуватиме, елементу волонтерства достатньо (лиш подумаю скільки ж то учасників користуватиметься довгий час до, під час, і після самого проекту інфрастуктурою, яка буде зроблена). Це певний челендж вивезти ВСЕ, аби рухати сюжет вперед і ВВЕРХ
                    </Text>

                    <Text className="text-lg mb-4 text-white p-11 m-6 rounded-lg bg-gray-500 backdrop-filter backdrop-blur-md bg-opacity-70">
                        В БЕСТІ є все, чого мені треба, і чого я хочу, тому я можу із спокійною душею ставити завдання ІБЕК IT responsible на перше місце. Коду мені тут не бракуватиме, елементу волонтерства достатньо (лиш подумаю скільки ж то учасників користуватиметься довгий час до, під час, і після самого проекту інфрастуктурою, яка буде зроблена). Це певний челендж вивезти ВСЕ, аби рухати сюжет вперед і ВВЕРХ
                    </Text>
                </motion.div>
                <motion.div
                    ref={ ref2 }
                    animate={ controls2 }
                    initial={ { opacity: 0, y: 50 } }
                    transition={ { duration: 1, ease: "easeOut", delay: 0.6 } }
                >
                    <Text className="text-lg mb-4 text-white p-11 m-6 rounded-lg bg-gray-500 backdrop-filter backdrop-blur-md bg-opacity-70">
                        Щодо вільного часу, то це десь 6-7 із 10. У Львові я 90% часу. Раз на 2-3 тижні їду до писанкової Коломиї аби батьки не забували як я виглядаю, і зустрітися з старими друзями (мафію покинути не вдалося ще нікому🎩).

                        Щодо роботи, то її поки немає. Тому я вільний, все ОК :)

                        Літом, певно, буду теж у Львові, бо мене тут тримає не один лиш політєх. Треба зробити багато чого тут. Звичайно, цей проект не на останньому місці в цьому списку
                    </Text>
                </motion.div>
            </motion.div>
        </Box>
    );
};

export default Time;