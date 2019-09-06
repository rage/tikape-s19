const courseSettings = {
  language: "fi",
  name: "Tietokantojen perusteet, syksy 2019",
  subtitle: "Digitalisaation kulmakivi tutuksi -- menetelmiä tiedon tallentamiseen ja hakemiseen",
  slug: "tikape-s19",
  tmcCourse: "tikape-syksy-19",
  tmcOrganization: "mooc",
  bannerPath: "banner.jpg",
  sidebarEntries: [
    {
      title: "Tietoa kurssista",
      path: "/",
    },
    { separator: true }
  ],
  sidebarFuturePages: [], // { title: "Osa 14", tba: "19.4.2019" },
  splitCourses: false,
}

module.exports = {
  default: courseSettings,
}
