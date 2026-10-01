export interface ExperienceEntry {
  period: string;
  company: string;
  role: string;
  description: string;
}

export const experience: readonly ExperienceEntry[] = [
  {
    period: "May. 2026 – Actualidad",
    company: "Globant",
    role: "Android Mobile Developer Ssr",
    description:
      "Desarrollo y mantengo funcionalidades Android nativas con Kotlin y Jetpack Compose, aplicando MVI y Clean Architecture. Integré Google Pay y lideré la migración del flujo de aprovisionamiento de tarjetas a Unified Push Provisioning (UPP).",
  },
  {
    period: "Dic. 2025 – Mar. 2026",
    company: "Jooycar",
    role: "Mobile Developer",
    description:
      "Desarrollé y mantuve aplicaciones móviles con personalizaciones específicas por cliente, implementando funcionalidades y resolviendo incidencias en Android. También contribuí en iOS con Swift y SwiftUI y participé en procesos de release.",
  },
  {
    period: "Abr. 2025 – Dic. 2025",
    company: "Encora — Interbank",
    role: "iOS Developer",
    description:
      "Participé en el mantenimiento y evolución de la aplicación iOS de Interbank, incorporando mejoras funcionales y correcciones de incidencias. También contribuí a optimizar los tiempos de carga iniciales de la aplicación.",
  },
  {
    period: "Dic. 2024 – Mar. 2025",
    company: "Jooycar",
    role: "Mobile Developer",
    description:
      "Contribuí a la migración de una aplicación nativa a Flutter y diseñé e implementé un framework interno para la gestión desacoplada de servicios con Clean Architecture. También participé en mejoras de rendimiento y estabilidad.",
  },
  {
    period: "Oct. 2023 – Dic. 2024",
    company: "HIPER S.A",
    role: "Android Developer",
    description:
      "Mantuve y evolucioné aplicaciones Android transaccionales para dispositivos POS con Java y Android SDK. Optimicé actualizaciones de interfaz y descargas en entornos de baja conectividad y apoyé despliegues productivos.",
  },
];
