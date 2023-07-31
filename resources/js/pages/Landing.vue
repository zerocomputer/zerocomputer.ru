<template>
    <Layout>
        <div class="max-lg:flex">
            <Menu
                class="md:fixed md:top-[80px] md:left-[65px] max-lg:pt-8 max-lg:pl-4"
                :menu="menu"
            />

            <main class="md:pt-[80px] max-sm:pt-8 pb-8">
                <section
                    id="main"
                    class="container lg:flex xl:gap-[30px] lg:max-w-[1078px] md:mx-auto max-sm:flex max-sm:flex-col max-sm:p-4 max-lg:grid max-lg:grid-cols-2 max-lg:gap-4"
                >
                    <!-- Photo -->
                    <img
                        class="xl:pl-8 max-lg:w-full"
                        src="/face_photo.png"
                        alt="Face"
                    />

                    <!-- Main -->
                    <div class="flex flex-col gap-[8px]">
                        <span
                            class="font-semibold text-white tracking-widest text-2xl"
                            >@zerocomputer</span
                        >
                        <h1 class="font-bold text-white tracking-wide text-5xl">
                            Никита Сарычев
                        </h1>
                        <span
                            class="font-semibold text-white tracking-wide text-2xl"
                        >
                            Full-Stack разработчик
                        </span>
                        <p
                            class="font-regular text-body tracking-wide text-xl max-w-[445px]"
                        >
                            Занимаюсь полным циклом разработки различных
                            веб-приложений, начиная от дизайна и реализации
                            клиентской части, заканчивая серверной части и API.
                        </p>
                    </div>

                    <!-- About -->
                    <div
                        class="flex flex-col gap-[8px] max-lg:col-start-1 max-lg:col-end-3 max-lg:col-span-2"
                    >
                        <span
                            class="font-semibold text-white tracking-widest text-2xl max-lg:pl-8"
                            >Кратко о себе</span
                        >
                        <p
                            class="font-regular text-body tracking-wide text-xl xl:max-w-[350px]"
                        >
                            Вернемся в 2014 год, первое касание с IT - попытка
                            создания простеньких игр при помощи Unity3D. Было
                            <span class="text-white font-medium"
                                >интересно создавать что-то, осязаемое</span
                            >. По сей день этот интерес актуален, однако
                            <span class="text-white font-medium"
                                >нынешние проекты интегрированы в мою
                                жизнь</span
                            >.
                        </p>
                    </div>
                </section>

                <section
                    id="experience"
                    class="md:mt-20 max-sm:mt-8 container max-w-[1078px] mx-auto max-lg:container"
                >
                    <h2
                        class="text-white font-semibold text-2xl md:mb-4 md:pl-8 max-sm:p-4"
                    >
                        Опыт работы
                    </h2>

                    <CardExperience
                        v-for="experienceRow in experience.reverse()"
                        :key="experienceRow"
                        :time-interval="experienceRow.timeInterval"
                        :company="experienceRow.company"
                        :department="experienceRow.department"
                        :post="experienceRow.post"
                        :history="experienceRow.history"
                        :tags="experienceRow.tags"
                    />
                </section>
            </main>
        </div>
    </Layout>
</template>
<script setup>
import { onMounted } from "vue";
import Layout from "../components/Layout.vue";
import Menu from "../components/elements/Menu.vue";
import CardExperience from "../components/elements/cards/CardExperience.vue";
import IconorGithubContact from "../components/icons/contacts/IconorGithubContact.vue";
import IconorTelegramContact from "../components/icons/contacts/IconorTelegramContact.vue";

//--- / Variables
const menu = [
    {
        link: "https://github.com/zerocomputer/",
        icon: IconorGithubContact,
    },
    {
        link: "https://t.me/zerocomputer",
        icon: IconorTelegramContact,
    },
];
const experience = [
    {
        timeInterval: "СЕНТ. 2019 - НАСТ. ВРЕМЯ",
        company: "Freelance",
        department: "workzilla.com",
        post: "Дизайнер UI/UX, Full-Stack разработчик (Node JS: Nest, React, Vue; PHP: Laravel)",
        history: `Реализовывал самые различные проекты, от простых дизайна сайтов-визиток и их вертски, до веб-приложений, API и дизайна мобильных приложений.`,
        tags: [
            "Backend",
            "TypeScript",
            "Nest",
            "PHP",
            "Laravel",
            "Frontend",
            "JavaScript",
            "React",
            "Vue 3",
            "Design",
            "Adobe XD",
            "Figma",
            "Adobe Photoshop",
            "Adobe Illustrator",
            "Video Editor",
            "Adobe Premiere Pro",
            "Sony Vegas Pro",
        ],
    },
    {
        timeInterval: "НОЯБ. 2020 - ИЮЛЬ 2023",
        company: 'ГАПОУ "Оренбургский колледж экономики и информатики"',
        department: "Индивидуальный учебный план",
        post: "Студент, обучавшийся по индивидуальному учебному плану в качестве веб-разработчика",
        history: `Будучи студентом второго курса, я был переведен на индивидуальный учебный план, а в качестве осн. задачи, помимо учебы, для меня была разработка коммерческих проектов для нужд министерства образования Оренбурга и Оренбургской обл, а также для прочих организаций, обращавшихся в колледж за технической помощью в разработке веб-сервисов и т.д. Одними из последних стали НКО "Хочу помочь 56" и ООО "Сладковско-Заречное". Выполнял роль fullstack разработчика, пробовал разный стек, например, React и Vue, PHP и Javascript, после Typescript с Nest и PHP с Laravel.`,
        tags: [
            "Backend",
            "PHP",
            "Laravel",
            "TypeScript",
            "JavaScript",
            "MySQL",
            "PostgreSQL",
            "MongoDB",
            "Nest",
            "Frontend",
            "Vue 3",
            "React",
            "Angular",
            "Nginx",
        ],
    },
    {
        timeInterval: "МАРТ 2021 - ОКТ. 2021",
        company: "ГТРК Оренбург: IActivePro",
        department: "Отдел разработки",
        post: "PHP/Javascript разработчик",
        history: `Занимался разработкой веб-сервиса "Ателье титров" на базе PHP (собственная CRM), кроме того, принимал ключевое участие в создании теле-титров (для меня открылась правда, что все современные телевизионные виджеты - это HTML-страницы, интегрированные в OBS, т.е. фактически все анимации, функциональные возможности реализуются с помощью Web).`,
        tags: ["Backend", "Frontend", "Javascript", "PHP", "MySQL"],
    },
    {
        timeInterval: "ФЕВ. 2022 - ДЕК. 2022",
        company: "ProgramTactics: ИП Салтанюк Никита Андреевич",
        department: "Отдел разработки",
        post: "Full Stack/Dev Ops",
        history: `Разработка серверной части проектов различной сложности, например, для моб. приложения под кодовым названием "Раскрутка", для моб. приложения Фонда Ветеранов Спорта, для моб. приложения MoveToPlay, произведение deploy frontend и backend частей, а также формирование отчетности по вып. задачам за спринт (1 спринт длился 1 неделю).`,
        tags: [
            "Backend",
            "Nest",
            "Typescript",
            "Javascript",
            "MySQL",
            "PostgreSQL",
            "MongoDB",
            "Frontend",
            "Vue 3",
            "Elements Plus",
            "Nginx",
        ],
    },
    {
        timeInterval: "МАРТ 2021 - ОКТ. 2021",
        company: "ITProfi: АйТи Профи",
        department: "Отдел разработки",
        post: "Веб-мастер, стажер",
        history: `Проходил недолгую стажировку, в качестве первого проекта занимался разработкой веб-сайта на Wordpress. После завершения, и согласования с директором, не захотел продолжать работу в качестве веб-мастера на Wordpress и прочих подобных "фреймворов".`,
        tags: ["Frontend", "Backend", "Wordpress", "PHP", "JavaScript"],
    },
    {
        timeInterval: "ИЮЛЬ 2023 - НАСТ. ВРЕМЯ",
        company: "RedPoint: Двор24",
        department: "Отдел разработки",
        post: "Frontend разработчик Vue 3",
        history: `Занимаюсь разработкой новых функциональных возможностей сервиса Двор24 на клиентской стороне. Вся работа происходит по четко сформированным ТЗ с приложенными прототипами. Vue 3 используется в монолитном Laravel приложении и на базе уже обширных собственных референсов в системе.`,
        tags: ["Frontend", "Vue 3", "JavaScript", "TypeScript", "Docker"],
    },
];
//--- Variables /

//--- / Events
onMounted(() => {
    document.title = "Никита Сарычев @ zerocomputer";
});
//--- Events /
</script>
