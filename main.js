/* ---------------------------- LISTADO DE MANGA  ---------------------------- */

const manga = [
    {
        id: 1,
        title: "One Piece",
        description: "Un manga de aventuras piratas lleno de acción y comedia. Apto para adolescentes y adultos. Sigue las peripecias de Monkey D. Luffy en busca del tesoro One Piece.",
        img: "./images/comics/onepiece.webp",
        price: "$9.99"
    },
    {
        id: 2,
        title: "Naruto",
        description: "Una historia de ninjas, amistad y superación personal. Recomendado para adolescentes. Naruto Uzumaki busca convertirse en el Hokage de su aldea",
        img: "./images/comics/naruto.jpg",
        price: "$7.99"
    },
    {
        id: 3,
        title: "Bleach",
        description: "Un manga de acción y aventuras que mezcla lo sobrenatural. Apto para adolescentes. Ichigo Kurosaki obtiene poderes de un Shinigami y lucha contra los Hollows.",
        img: "./images/comics/bleach.webp",
        price: "$8.99"
    },
    {
        id: 4,
        title: "Attack on Titan",
        description: "Un manga de horror y acción. Recomendado para adultos. La humanidad lucha por sobrevivir ante gigantes humanoides llamados Titanes.",
        img: "./images/comics/attackontitan.png",
        price: "$10.99"
    },
    {
        id: 5,
        title: "DRAGON BALL",
        description: "Un manga de acción y aventuras. Apto para todas las edades. Goku busca las esferas del dragón y se enfrenta a poderosos enemigos.",
        img: "./images/comics/dragonBall.png",
        price: "$7.99"
    },
    {
        id: 6,
        title: "Death Note",
        description: "Un thriller psicológico. Recomendado para adolescentes y adultos. Un estudiante encuentra un cuaderno que permite matar a quienquiera que tenga su nombre escrito en él.",
        img: "./images/comics/deathnote.webp",
        price: "$7.99"
    },
    {
        id: 7,
        title: "One Punch Man",
        description: "Una sátira de los héroes de acción. Apto para adolescentes y adultos. Saitama, un héroe calvo, derrota a todos sus enemigos de un solo golpe.",
        img: "./images/comics/onepunchman.webp",
        price: "$9.99"
    },
    {
        id: 8,
        title: "Fairy Tail",
        description: "Un manga de aventuras con elementos de magia. Recomendado para adolescentes. Sigue las misiones y amistades del gremio Fairy Tail.",
        img: "./images/comics/fairytail.webp",
        price: "$12"
    },
    {
        id: 9,
        title: "Fullmetal Alchemist",
        description: " Un manga de aventuras y alquimia. Apto para adolescentes y adultos. Los hermanos Elric buscan la Piedra Filosofal para recuperar sus cuerpos.",
        img: "./images/comics/fullmetalalchemist.png",
        price: "$7.99"
    },
    {
        id: 10,
        title: "Hunter x Hunter",
        description: "Un manga de aventuras y caza de tesoros. Apto para adolescentes y adultos. Gon Freecss busca a su padre y se convierte en cazador.",
        img: "./images/comics/hunterxhunter.webp",
        price: "$9.99"
    },
    {
        id: 11,
        title: "Tokyo Ghoul",
        description: " Un manga de horror y acción. Recomendado para adultos. Kaneki se convierte en un Ghoul y lucha por sobrevivir en un mundo donde los humanos son su presa.",
        img: "./images/comics/tokyoghoul.jpg",
        price: "$9"
    },
    {
        id: 12,
        title: "Demon Slayer",
        description: "Un manga de acción y demonios. Apto para adolescentes. Tanjiro Kamado busca vengar la masacre de su familia y proteger a su hermana..",
        img: "./images/comics/demonslayer.webp",
        price: "$10"
    }
]
/* ---------------------------- LISTADO DE COMICS  ---------------------------- */
const comics = [
    {
        id: 1,
        title: "Batman - La broma asesina",
        description: "Este cómic es una obra maestra oscura y madura escrita por Alan Moore, que ahonda en la relación entre Batman y el Joker. La historia explora los orígenes y la locura del Joker, y plantea cuestiones éticas profundas. Recomendado para adultos.",
        img: "./images/comics/laBromaAsesina.png",
        price: "$9.99"
    },
    {
        id: 2,
        title: "Batman - Año Uno",
        description: "Año Uno es una historia icónica que reinicia la franquicia de Batman. Escrito por Frank Miller, muestra a un Bruce Wayne novato que se convierte en el Caballero de la Noche. Apto para adolescentes y adultos.",
        img: "./images/comics/batmanAñoUno.jpg",
        price: "$9.99"
    },
    {
        id: 3,
        title: "Batman - Una muerte en la familia",
        description: "En esta trágica historia, Jason Todd, el segundo Robin, se enfrenta a un destino cruel. Los lectores pueden decidir el destino de Jason en una votación única. Apto para adolescentes y adultos.",
        img: "./images/comics/batmanUnamuerte.jpg",
        price: "$9.99"
    },
    {
        id: 4,
        title: "Linterna Verde - Ocaso Esmeralda",
        description: " Un cómic de ciencia ficción que sigue las aventuras de Hal Jordan, el Linterna Verde. Esta historia destaca la exploración de otros mundos y desafíos cósmicos. Apto para adolescentes y adultos.",
        img: "./images/comics/glOcasoEsmeralda.jpg",
        price: "$9.99"
    },
    {
        id: 5,
        title: "Spiderman - Must have",
        description: "Una colección de cómics seleccionados de Spiderman que abarca diversas épocas y arcos argumentales. Adecuado para todas las edades.",
        img: "./images/comics/spidermanMustHave.png",
        price: "$9.99"
    },
    {
        id: 6,
        title: "Spiderman - Universo Araña",
        description: "Este cómic trae una emocionante historia que involucra a múltiples versiones de Spiderman de diferentes realidades. Apto para todas las edades.",
        img: "./images/comics/spidermanUniversoAraña.jpg",
        price: "$9.99"
    },
    {
        id: 7,
        title: "Deadpool - Mata el universo Marvel",
        description: "Un cómic irreverente y violento donde Deadpool rompe la cuarta pared y se enfrenta a otros personajes del universo Marvel de maneras inesperadas. Recomendado para adultos.",
        img: "./images/comics/deadpoolMUM.jpg",
        price: "$9.99"
    },
    {
        id: 8,
        title: "Daredevil",
        description: "Sigue las aventuras de Matt Murdock, un abogado ciego que se convierte en el justiciero de Hell's Kitchen. Explora temas legales y de superhéroes de manera única. Apto para adolescentes y adultos.",
        img: "./images/comics/daredevil.jpg",
        price: "$9.99"
    },
    {
        id: 9,
        title: "Aquaman - Deep Dives",
        description: "Este cómic se centra en las aventuras submarinas del superhéroe Aquaman. Explora el mundo de Atlantis y los desafíos que enfrenta como el rey de los océanos. Apto para adolescentes y adultos.",
        img: "./images/comics/aquaman.webp",
        price: "$9.99"
    },
    {
        id: 10,
        title: "Superman: Cursed by Magic",
        description: "En esta historia, Superman se enfrenta a amenazas mágicas que ponen a prueba sus poderes y su resistencia. La magia se convierte en un desafío formidable para el Hombre de Acero. Apto para adolescentes y adultos.",
        img: "./images/comics/superman.webp",
        price: "$9.99"
    },
    {
        id: 11,
        title: "Flash: Flashpoint",
        description: "Flashpoint es una narrativa alternativa en la que Flash se despierta en un mundo muy diferente al que conoce, un mundo donde no tiene sus poderes y los superhéroes son diferentes. La historia explora la alteración del tiempo y sus consecuencias. Apto para adolescentes y adultos.",
        img: "./images/comics/flashpoint.jpg",
        price: "$9.99"
    },
    {
        id: 12,
        title: "Civil War",
        description: "En Civil War, los superhéroes del Universo Marvel se dividen en dos bandos, uno liderado por Iron Man y otro por el Capitán América, debido a diferencias filosóficas sobre la regulación del poder sobrehumano. Esto conduce a un enfrentamiento épico entre los héroes. Apto para adolescentes y adultos.",
        img: "./images/comics/civilwar.webp",
        price: "$9.99"
    },
]

/* ---------------------------- Load del HTML ---------------------------- */

window.onload = () => {

    /* HEADER */
    const header = document.querySelector("header")
    header.innerHTML = `
        <div class="menu">
            <a href="./index.html#top" class="logo">
                <img src="./images/logoRRRojoBlanco.png" alt="logo RedRibbon" >
            </a>

            <nav class="navbar">
            <ul>
                <li> <a href="./index.html#top">Inicio</a></li>
                <li> <a href="./contacto.html#top">Culto Freak</a></li>
                <li> <a href="./catalogo.html#top">Catálogo</a></li>
                <li> <a href="./contacto.html#contacto">Contacto</a></li>
                <li> <a href="./contacto.html#contacto">Nuestras Redes</a></li>
            </ul>
        </nav>

            <div class="icons"></div>
            <div class="burgerMenu1">
            <div class="burgerIcon" onclick="toggleMenu()">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul class="menuItems">
                <div>
                    <img src="./images/logoRRRojoBlanco.png" alt="logo Red Ribbon" >
                    <ul>
                        <li> <a onclick="toggleMenu()" href="./index.html#top">Inicio</a></li>
                        <li> <a onclick="toggleMenu()" href="./contacto.html#top">CultoFreak</a></li>
                        <li> <a onclick="toggleMenu()" href="./catalogo.html#top">Catálogo</a></li>
                        <li> <a onclick="toggleMenu()" href="./contacto.html#contacto">Contacto</a></li>
                        <li> <a onclick="toggleMenu()" href="./contacto.html#contacto">RedesSociales</a></li>
                    </ul>
                    <img class="imgTanku" src="./images/tankun2.png" alt="tankun mascota virtual">
                    <nav >
                    <ul class="burgerSocialMedia">
                        <li>
                            <a href="#">
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-brands fa-whatsapp"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-brands fa-telegram"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
                </div>
            </ul>
        </div>
        </div>`


    /* FOOTER */
    const footer = document.querySelector("footer")
    footer.insertAdjacentHTML("beforebegin", `    <section class="footerflex">
            <article class="footerCard logoRR">
                <a href="./index.html#top">
                    <img src="./images/logoRRRojo.png" alt="logo Red Ribbon">
                </a>
            </article>
            <!-- <h3>RED RIBBON</h3> -->
            <article class="footerCard comunidad">
                <h3>NUESTRA COMUNIDAD</h3>
                <a target="_blank" href="https://www.instagram.com/redribbonmza/">
                    <img src="./images/bannerCultoFreakNegro.jpeg" alt="banner">
                </a>
            </article>
            <article class="footerCard footerHorarios">
                <h3>HORARIOS</h3>
                <ul>
                    <li>
                        <h3>Lunes a Viernes</h3>
                        <h4>09:30 - 20:00</h4>
                    </li>
                    <li>
                        <h3>Sábado</h3>
                        <h3>09:30 - 13:30</h3>
                        <h4>16:30 - 20:00</h4>
                    </li>
                    <li>
                        <h3>Domingo</h3>
                        <h4>Cerrado</h4>
                    </li>
                </ul>
          </article>
            <article class="footerCard location">
                <h3>¿DÓNDE ESTAMOS?</h3>
                <section class="sectionCardMaps">
                    <article>
                        <a href="https://maps.app.goo.gl/5jQtxzrZ6wtHaKSNA">
                            <h4>Sede Central</h4>
                            <p>Garibaldi 69</p>
                            <p>Ciudad, Mendoza</p>
                        </a>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.271189875348!2d-68.84036092373027!3d-32.890997469081135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09e10f6934fb%3A0x2d686f736bf308c5!2sRed%20Ribbon%20Mendoza!5e0!3m2!1ses!2sar!4v1697252179023!5m2!1ses!2sar"
                             allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </article>
                    <article>
                        <a href="https://maps.app.goo.gl/R8qWiaMFHdAmoDrN9">
                            <h4>Sucursal en Mesa Jugona</h4>
                            <p>Av. San Martin Sur 2940</p>
                            <p>Godoy Cruz, Mendoza</p>
                        </a>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.792920430734!2d-68.86017572372772!3d-32.95647627238636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0b96fb21d0f1%3A0x2498e607d8fdc254!2sMesa%20Jugona!5e0!3m2!1ses!2sar!4v1697252297181!5m2!1ses!2sar"
                             allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </article>
                </section>
            </article>
        </section>`)
    footer.innerHTML = `
    <nav>
        <ul>
            <li>
                <a href="#">
                    <i class="fa-brands fa-facebook-f"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fa-brands fa-instagram"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fa-brands fa-whatsapp"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fa-brands fa-x-twitter"></i>
                </a>
            </li>
            <li>
            <a href="#">
                <i class="fa-brands fa-telegram"></i>
            </a>
        </li>
        </ul>
    </nav>

    <div class="copyright">
        <h4>© Copyright 2023 - <span class="text-bold">Cuchutech</span> </h4>
        <h5>Todos los derechos reservados</h5>
    </div>`

    /* WHATSAPP */
    footer.insertAdjacentHTML("beforebegin", `
    <a target="_blank" class="whatsapp" href="">
        <i class="fa-brands fa-whatsapp"></i>
    </a>`)
    
    /* TWITCH POPUP*/
    footer.insertAdjacentHTML("beforebegin", `
    <a target="" id="twitch-button" class="twitch-live hide" href="./index.html#video">
        <i class="fa-brands fa-twitch"></i>
    </a>`)
}

/*TWITCH FUNCIONES*/
var twitchState = {
    isOnline: false,
};

document.addEventListener("DOMContentLoaded", function () {
    var options = {
        width: 640,
        height: 480,
        channel: "magentic98",
    };
    var player = new Twitch.Player("twitch", options);

    player.addEventListener(Twitch.Player.READY, initiate);

    function initiate() {
        player.addEventListener(Twitch.Player.ONLINE, handleOnline);
        player.addEventListener(Twitch.Player.OFFLINE, handleOffline);
        player.removeEventListener(Twitch.Player.READY, initiate);
    }

    function handleOnline() {
        twitchState.isOnline = true;
        document.getElementById("twitch").classList.remove('hide');
        document.getElementById("twitch-button").classList.remove('hide');
        player.removeEventListener(Twitch.Player.ONLINE, handleOnline);
        player.addEventListener(Twitch.Player.OFFLINE, handleOffline);
        player.setMuted(false);
    }

    function handleOffline() {
        twitchState.isOnline = false;
        document.getElementById("twitch").classList.add('hide');
        document.getElementById("twitch-button").classList.add('hide');
        player.removeEventListener(Twitch.Player.OFFLINE, handleOffline);
        player.addEventListener(Twitch.Player.ONLINE, handleOnline);
        player.setMuted(true);
    }

});

/*Validacion Captcha*/
const validarRecaptcha = () => {
    const response = grecaptcha.getResponse();
    const captchaError = document.getElementById("captcha-error");

    if (response.length === 0) {
        // Si no se ha completado el reCAPTCHA, muestra el mensaje de error y detén el envío del formulario.
        captchaError.textContent = 'Por favor, completa el reCAPTCHA.';
        captchaError.style.visibility = 'visible';
        return false;
    } else {
        // Si el reCAPTCHA se ha completado, oculta el mensaje de error.
        captchaError.style.visibility = 'hidden';
    }

    return true;
};

/* Validadiones Formulario */

document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.endsWith("contacto.html")) {
    const form = document.getElementById("form");

    const validarCampo = (input, regex, errorMessage, errorElement, minLength, maxLength) => {
        if (!regex.test(input.value) || input.value.length < minLength || input.value.length > maxLength) {
            errorElement.textContent = errorMessage;
            errorElement.style.visibility = "visible";
            input.classList.add("invalid-input");
            return false;
        }
        errorElement.style.visibility = "hidden";
        input.classList.remove("invalid-input");
        return true;
    };

    const nombreInput = document.getElementById("nombre");
    const correoInput = document.getElementById("correo");
    const telefonoInput = document.getElementById("telefono");
    const informacionInput = document.getElementById("informacion");
    const consultaInput = document.getElementById("consulta");

    const nombreError = document.getElementById("nombre-error");
    const correoError = document.getElementById("correo-error");
    const telefonoError = document.getElementById("telefono-error");
    const informacionError = document.getElementById("informacion-error");
    const consultaError = document.getElementById("consulta-error");

    const validarNombreInput = () => {
        return validarCampo(nombreInput, /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "Campo obligatorio,deben contener entre 6 y 40 caracteres.", nombreError, 6, 40);
    };

    const validarCorreoInput = () => {
        return validarCampo(
            correoInput,
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
            "El formato del correo electrónico es incorrecto.",
            correoError
        );
    };

    const validarTelefonoInput = () => {
        return validarCampo(telefonoInput, /^\d{10}$/, "El número debe contener 10 dígitos.", telefonoError);
    };

    const validarInformacionInput = () => {
        if (informacionInput.value === "Seleccionar") {
            informacionError.textContent = "Por favor, selecciona una opción de información.";
            informacionError.style.visibility = "visible";
            informacionInput.classList.add("invalid-input");
            return false;
        }
        informacionError.style.visibility = "hidden";
        informacionInput.classList.remove("invalid-input");
        return true;
    };


    const validarConsultaInput = () => {
        return validarCampo(consultaInput, /^[\s\S]+$/, "El campo de consulta es obligatorio, estamos para resolver sus dudas.", consultaError);
    };

    const validarFormulario = () => {
        const nombreValido = validarNombreInput();
        const correoValido = validarCorreoInput();
        const telefonoValido = validarTelefonoInput();
        const consultaValida = validarConsultaInput();
        const recaptchaValido = validarRecaptcha();
        return nombreValido && correoValido && telefonoValido && consultaValida && recaptchaValido;
    };

    nombreInput.addEventListener("input", validarNombreInput);
    correoInput.addEventListener("input", validarCorreoInput);
    telefonoInput.addEventListener("input", validarTelefonoInput);
    informacionInput.addEventListener("input", validarInformacionInput);
    consultaInput.addEventListener("input", validarConsultaInput);

    nombreInput.addEventListener("blur", validarNombreInput);
    correoInput.addEventListener("blur", validarCorreoInput);
    telefonoInput.addEventListener("blur", validarTelefonoInput);
    informacionInput.addEventListener("blur", validarInformacionInput);
    consultaInput.addEventListener("blur", validarConsultaInput);

    const alerta = () => {
        Swal.fire({
            html: `
            <div style="padding: 16px">
                <img src="./images/tankun2.png" alt="logo Red Ribbon">
                <h1>Mensaje enviado con éxito!</h1>
            </div>
            `,
            focusConfirm: false,
            width: 'auto'
        });
    };


    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita el envío del formulario si hay errores por defecto

        if (validarFormulario()) {
            alerta(); // Muestra el SweetAlert
            form.reset();
        }
    });
}
});

/* INTENTO DE FUNCION PARA EXTENDER CONTENIDO EN CATALOGO*/

document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.endsWith("/catalogo.html")) {
        const buttons = document.querySelectorAll(".card-btn");
        const subtitle = document.querySelectorAll(".card-subtitle");
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const card = button.closest(".card");
                const isExpanded = card.classList.contains("expanded");

                if (isExpanded) {
                    card.classList.remove("expanded");
                    button.innerHTML = '<i class="fa-solid fa-arrow-down"></i>';
                } else {
                    card.classList.add("expanded");
                    button.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
                }
            });
        });
    }
});