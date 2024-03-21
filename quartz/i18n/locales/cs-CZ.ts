import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Nepojmenováno",
    description: "Bez popisu",
  },
  components: {
    callout: {
      note: "Poznámka",
      abstract: "Abstraktní",
      info: "Info",
      todo: "Úkoly",
      tip: "Tip",
      success: "Úspěch",
      question: "Otázka",
      warning: "Varování",
      failure: "Selhání",
      danger: "Nebezpečí",
      bug: "Vada",
      example: "Příklad",
      quote: "Citát",
    },
    backlinks: {
      title: "Zpětné odkazy",
      noBacklinksFound: "Zpětné odkazy nenalezeny",
    },
    themeToggle: {
      lightMode: "Světlý režim",
      darkMode: "Tmavý režim",
    },
    explorer: {
      title: "Průzkumník",
    },
    footer: {
      createdWith: "Vytvořeno pomocí",
    },
    graph: {
      title: "Grafické zobrazení",
    },
    recentNotes: {
      title: "Nedávné poznámky",
      seeRemainingMore: ({ remaining }) => `Zobrazit ${remaining} dalších →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Transclude of ${targetSlug}`,
      linkToOriginal: "Odkaz na původní",
    },
    search: {
      title: "Hledat",
      searchBarPlaceholder: "Hledat...",
    },
    tableOfContents: {
      title: "Obsah",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} minutové čtení`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Nedávné poznámky",
      lastFewNotes: ({ count }) => `Posledních ${count} poznámek`,
    },
    error: {
      title: "Nenalezeno",
      notFound: "Tato stránka je buď soukromá, nebo neexistuje.",
    },
    folderContent: {
      folder: "Složka",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 položka v této složce." : `${count} položek v této složce.`,
    },
    tagContent: {
      tag: "Tag",
      tagIndex: "Index tagů",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 položka s  tímto tagem." : `${count} položek s tímto tagem.`,
      showingFirst: ({ count }) => `Zobrazeno prvních ${count} tagů.`,
      totalTags: ({ count }) => `Celkem nalezeno ${count} tagů.`,
    },
  },
} as const satisfies Translation
