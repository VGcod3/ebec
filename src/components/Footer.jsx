const Footer = () => {
    return (
        <footer className="flex flex-col p-12 bg-gold text-white">
            <div className=" w-100 flex justify-evenly">
                <div className="text-sm flex flex-col gap-4">

                    <p className="w-80">
                        Придумано, зроблено і задизанено Віктором не без допомоги нейронки  й інших старих штук
                    </p>

                </div>
                <div className="text-sm">
                    <p>Накоджено:</p>
                    <p>Chakra UI, Tailwind, React, Framer</p>
                </div>
            </div>
            <div className="text-center mt-7">
                &copy; 2023 Мої права точно захищено
            </div>
        </footer>
    );
};

export default Footer;