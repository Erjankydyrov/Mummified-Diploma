import PrimarisTitle from "../assets/Categories/PrimarisTitle.svg"
import whlogo from "../assets/whLogo.svg"
import OrcsTitle from "../assets/Categories/OrksTitle.svg"

const categories = [
  {
    image: PrimarisTitle,
    categoryId: "Space-Marines",
    title: "Space Marines",
    categoryLogo: whlogo,
    boxTitle: "For the Emperor!",
    boxChildren: "Defend the Imperium with the Primaris Space Marines",
    description: `Space Marines are the Emperor's angels of death. They do not know fear, pity and regret. They are the defenders of the Imperium and the last line of defense against the hordes of Chaos that press upon the Imperium.`,
  },
  {
    image: OrcsTitle,
    categoryId: "Orks",
    title: "Orks",
    categoryLogo: whlogo,
    boxTitle: "Orks Is Best",
    boxChildren: "Browse the whole Orks range of brilliant units and bonkers war machines",
    description: `Waagh! We are Orcs! And we love shooters, ducks, fights and teeth! If there's any fun going on in the galaxy, we're always there!`,
  },
];

export function getCategories() {
  return categories;
}

// dark-roast 
export function getCategory(categoryId) {
  return categories[
    categories.findIndex(
      category =>  category.categoryId === categoryId
    )
  ];
}