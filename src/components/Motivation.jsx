import {
    Box
} from "@chakra-ui/react";
import { motion } from "framer-motion";


import useAnimateInView from "../UseAnimateHook";

const Motivation = () => {
    const animations = [];
    const animationSetup = {
        initial: { opacity: 0, y: 50 },
        desired: { opacity: 1, y: 0 },
        transition: { duration: 1, ease: "easeOut" },
    };

    for (let i = 0; i < 12; i++) {
        animations[i] = useAnimateInView(animationSetup);
    }

    return (
        <>
            <Box className="px-10 min-h-screen flex flex-col my-11 justify-center gap-12 backdrop-blur-md" id="ejc">
                <motion.h2
                    ref={ animations[0].ref }
                    animate={ animations[0].controls }
                    className="text-4xl font-bold mb-4 text-indigo-500"
                >
                    Початок, певно
                </motion.h2>
                <motion.div
                    ref={ animations[1].ref }
                    animate={ animations[1].controls }
                    className="text-lg mb-4"
                >
                    <p className="line-through"> Я довго думав як почати МЛ, бо перше враження це важливо. І придумав я мотивацію, бо все на світі можна навчитися робити і зробити. Було би бажання. Отже, МОТИВАЦІЯ ЗАРІШАЄ.</p>
                    <p>ІБЕЕЕЕЕЕЕК</p>
                    <p>Отако я хочу почати мотиваштку, а чо нє?</p>

                </motion.div>
                <motion.h2
                    ref={ animations[2].ref }
                    animate={ animations[2].controls }
                    className="text-4xl font-bold mb-4 text-blue-500"
                >
                    Чому іБеКК?
                </motion.h2>
                <motion.div
                    ref={ animations[3].ref }
                    animate={ animations[3].controls }
                    className="text-lg mb-4 flex flex-col gap-4"
                >
                    <p>Поки інші чекають влучну можливість, я використовую кожну</p>
                    <p>
                        Хтоооось, колись казав, що іБеКК - проект для "цікавих" людей. В мені є потрібний вогонь для роботи над проектом. А ібек - прекрасний спосіб куди злити мільйон енергії. ДАЛІ, цей проект є найдовшим і різноплановим (різні типи завдань)
                    </p>
                    <p>
                        Кортіма ібеку це щось цікаве, унікальне, комплементарне, і трохи йобнуте. Хочу побути в сім'ї, бо це спогади, які будуть зі мною завжди
                    </p>
                </motion.div>
                <motion.h2
                    ref={ animations[6].ref }
                    animate={ animations[6].controls }
                    className="text-4xl font-bold mb-4 text-gold"
                >
                    Чому саме цю посаду? Фо вот?
                </motion.h2>
                <motion.div
                    ref={ animations[7].ref }
                    animate={ animations[7].controls }
                    className="text-lg mb-4 flex flex-col gap-4"
                >
                    <p>
                        Існує лише 0 і 1. Все інше - відтінки.
                    </p>
                    <p>
                        Пишу код відколи я - це той самий Віктор, яким я себе усвідомлено знаю, з 14 років. Відтоді я займаюся фронтом🪖(отже, шишок і руку трохи вже набив). Це значить, що на цій посаді я зможу займатися тим, що вмію, і що дуже люблю. Також кльовим є те, що тут робота нешаблонна, тож за все відповідальний лише я. Основне, аби працювало, як має бути, і МО, команда і кінцеві користувачі були задоволені. Технологій, функціонал, графік роботи і про підхід в цілому залежать лише від мене.
                    </p>
                    <p>
                        А тако серйозно, то мені мені подобається в цій посаді ВСЕ. Пишу код, запускаю, не виходить, ще раз, і ще десять, поки намальований шаблон не буде реалізований в коді. МОЖНА ПОТИКАТИ)))
                    </p>
                    <p>
                        Також на цій посаді я зможу файно покомунікувати з МО Артемом, зрозуміти потік інфи проекту в EBEC, деталі організації ІБЕКу, і поки, це найкращий спосіб для мене залетіти в КОРТІМУ і викупити BEST ще краще)
                    </p>
                </motion.div >
            </Box >
            <Box className="px-10 my-12 min-h-screen flex flex-col justify-center gap-12 backdrop-blur-md" id="why_me">
                <motion.h2
                    ref={ animations[8].ref }
                    animate={ animations[8].controls }
                    className="text-4xl font-bold mb-4 text-green-500"
                >
                    Чому я?
                </motion.h2>
                <motion.div
                    ref={ animations[9].ref }
                    animate={ animations[9].controls }
                    className="text-lg mb-4 flex flex-col gap-4"
                >
                    <p>
                        Бо як я вже казав, усьому віддаю всього себе. Але й мультизадачність ніхто не відміняв. Це означає, що робота буде виконана настільки добре, як я тільки зможу.
                    </p>
                    <p>
                        Можу впевнено про це говорити, бо в мене є вже певний досвід у роботі. З командою розробки пет-проектів виробилася звичка ділитися досвідом на коротких зідзвонах, працювати за scrum методикою, трекати задачі в trello або ж notion, пушити код на git, ну і ефективно проводити ретроспективу зробленого й планувати роботу на наступний спринт (в тому числі й комунікація з дизайнером і фронтенд командою).
                    </p>

                    <p>
                        Серед хард скілів - розробка клієтської частини  web-застосунків (React, TS, Chakra UI👌, Tailwind, RTK), ще трохи пекельної кухні (Express, MongoDB, Next), ну і робота з API Телеграму (пробував писати своїх ботів, взяємодіяти з цим API з web-клієнту), поки на node js.
                    </p>
                </motion.div>
                <motion.h2
                    ref={ animations[10].ref }
                    animate={ animations[10].controls }
                    className="text-4xl font-bold mb-4 text-yellow-500"
                >
                    Що буду робив?
                </motion.h2>
                <motion.div
                    ref={ animations[11].ref }
                    animate={ animations[11].controls }
                    className="text-lg mb-4 flex flex-col gap-4"
                >
                    <p>
                        Спочатку - брошурка. Вмію, знаю, зроблю без проблем
                    </p>
                    <p>
                        Далі - сайт проекту. Тут все просто і зрозуміло, як нуль і один. Це буде цікаво, бо перший сайт ібеку львівського осередку. Придумаю там прикольні штуки із висвітленням завдань для команд і ще щось таке.
                    </p>
                    <p>
                        Щодо ботів в ТГ, певний досвід і розуміння є. Тому перший етап роботи команди (поки контент і дизайн не готові) теж буде плідним для мене. Планую навчитися робити все те ж, але на python. Дякую Ярославу за "спадок")))
                        Ну, пишу бота на курсач))
                    </p>
                    <p>
                        Паралельно (привіт, мультизадачність) - тг інфраструктура. Це взаємодія команди і учасників, розклад заходу, завдання, гайди для заліза та інша дотична інфа.
                    </p>
                    <p>
                        Крім того, спробую організувати Alternative Rreality Game (щось типу cicada 3301) в офлайні і аналог #WienerGame в офлайні. З блекджеком, qr-кодами, тасками і винагородами. Це непогано так підніме актив і допоможе в PR-і.

                        Так, не нова ідея, але пов'язавши це з духом ібеку, вийде щось концептуально нове
                    </p>
                    <p>
                        А поки чекаю на результат роботи дизайнера та контент команди, можна організувати якийсь шерінг для ІТ-відділу для того, щоб максимально використати час (піднімаєм АЙ-ТІ), зробити подальшу роботу в команді плідною, можливо дасть мені змогу потім делегувати якість таски на відділ.
                    </p>
                </motion.div>
            </Box>
        </>
    );
};

export default Motivation;