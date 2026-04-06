import Alarm from "../components/workflow/icons/alarm.svg?react";
import Analitics from "../components/workflow/icons/analitics.svg?react";
import Cloud from "../components/workflow/icons/cloud.svg?react";
import Sensor from "../components/workflow/icons/sensor.svg?react";
import Support from "../components/workflow/icons/support.svg?react";
import Worker from "../components/workflow/icons/worker.svg?react";

import AiAnalytics from "../components/future/icons/ai-analytics.svg?react";
import Bot from "../components/future/icons/bot.svg?react";
import Automatic from "../components/future/icons/automatic.svg?react";
import Twin from "../components/future/icons/twin.svg?react";

import Boiler from "../components/usage/icons/boiler.svg?react";
import Pump from "../components/usage/icons/pump.svg?react";
import Clear from "../components/usage/icons/clear.svg?react";
import Transformer from "../components/usage/icons/transformer.svg?react";
import Accum from "../components/usage/icons/accum.svg?react";
import DataCenter from "../components/usage/icons/data-center.svg?react";
import Cooler from "../components/usage/icons/cooler.svg?react";

const aboutProduct = {
  title: "О продукте",
  subtitle:
    "Автоматизированная система диспетчеризации объектов инженерной инфраструктуры — отечественная платформа для мониторинга и управления инженерными системами",
  list: [
    {
      id: "1",
      text: "собирает данные с оборудования в режиме реального времени",
    },
    { id: "2", text: "анализирует состояние объектов" },
    { id: "3", text: "прогнозирует риски" },
    { id: "4", text: "обеспечивает оперативное управление" },
  ],
};
const future = {
  title: "Будущее продукта",
  subtitle: "Развитие системы",
  list: [
    { id: "1", icon: <AiAnalytics />, text: "ИИ и предиктивная аналитика" },
    { id: "2", icon: <Bot />, text: "виртуальный диспетчер" },
    { id: "3", icon: <Automatic />, text: "автоматизация ТО" },
    { id: "4", icon: <Twin />, text: "цифровые двойники и эмуляторы" },
  ],
};

const functions = {
  title: "Основные функции системы",
  paragraphs: [
    {
      id: "1",
      subtitle: "Мониторинг",
      list: [
        { id: "1-1", text: "контроль параметров в реальном времени" },
        { id: "1-2", text: "визуализация и история данных" },
        { id: "1-3", text: "контроль всех объектов на карте" },
      ],
    },
    {
      id: "2",
      subtitle: "Анализ",
      list: [
        { id: "2-1", text: "выявление аномалий" },
        { id: "2-2", text: "прогноз отказов" },
        { id: "2-3", text: "оптимизация ресурсов" },
      ],
    },
    {
      id: "3",
      subtitle: "Управление",
      list: [
        { id: "3-1", text: "дистанционное управление оборудованием" },
        { id: "3-2", text: "изменение режимов работы" },
        { id: "3-3", text: "контроль действий" },
      ],
    },
    {
      id: "4",
      subtitle: "Реагирование",
      list: [
        { id: "4-1", text: "автоматические уведомления" },
        { id: "4-2", text: "постановка задач" },
        { id: "4-3", text: "контроль выполнения" },
      ],
    },
  ],
};

const tools = [
  { href: "kotlin", title: "Kotlin" },
  { href: "java", title: "Java" },
  { href: "spring", title: "Spring" },
  { href: "angular", title: "Angular" },
  { href: "reactjs", title: "ReactJS" },
  { href: "postgre", title: "PostgreSQL" },
  { href: "oracle", title: "Oracle" },
  { href: "kafka", title: "Kafka" },
  { href: "kubernetes", title: "Kubernetes" },
  { href: "elk", title: "ELK" },
  { href: "prometheus", title: "Prometheus" },
  { href: "grafana", title: "Grafana" },
  { href: "github", title: "GitHub" },
  { href: "jira", title: "Jira" },
  { href: "minio", title: "MinIO" },
  { href: "consul", title: "Consul" },
  { href: "jaeger", title: "Jaeger" },
  { href: "liquibase", title: "Liquibase" },
  { href: "hibernate", title: "Hibernate" },
  { href: "figma", title: "Figma" },
  { href: "swagger", title: "Swagger" },
];

const usage = {
  title: "Где применяется",
  subtitle: "Направления внедрения",
  list: [
    {
      id: "1",
      icon: <Boiler />,
      text: "Водогрейные котельные",
    },
    { id: "2", icon: <Pump />, text: "Водозаборные узлы" },
    { id: "3", icon: <Clear />, text: "Очистные сооружения" },
    { id: "4", icon: <Transformer />, text: "Электроподстанции" },
    { id: "5", icon: <Accum />, text: "Энергоцентры" },
    { id: "6", icon: <DataCenter />, text: "ЦОДы" },
    { id: "7", icon: <Cooler />, text: "Вентиляция и кондиционирование" },
  ],
};

const workflow = {
  title: "Как мы работаем",
  subtitle: "",
  list: [
    { id: "1", icon: <Sensor />, text: "Датчики" },
    { id: "2", icon: <Cloud />, text: "Облако / SCADA" },
    { id: "3", icon: <Analitics />, text: "Аналитика" },
    { id: "4", icon: <Alarm />, text: "Сигнал" },
    { id: "5", icon: <Support />, text: "Диспетчер" },
    { id: "6", icon: <Worker />, text: "Бригада" },
  ],
};

export { aboutProduct, functions, tools, usage, workflow, future };
