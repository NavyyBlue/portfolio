export interface SkillGroup {
  name: string;
  items: readonly string[];
}

export const skillGroups: readonly SkillGroup[] = [
  {
    name: "Languages",
    items: ["Kotlin", "Java", "Swift", "Dart", "TypeScript"],
  },
  {
    name: "Mobile",
    items: ["Android SDK", "Jetpack Compose", "XML", "SwiftUI", "Flutter"],
  },
  {
    name: "Architecture",
    items: ["MVI", "MVVM", "Clean Architecture"],
  },
  {
    name: "Backend & Data",
    items: ["NestJS", "MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    name: "Tools & Platforms",
    items: ["Git", "Linux", "Google Play Console", "App Store Connect", "Cloudflare"],
  },
  {
    name: "Ways of Working",
    items: [
      "Agile",
      "Scrum",
      "Dependency management",
      "REST API integration",
      "Mobile app release process",
    ],
  },
];
