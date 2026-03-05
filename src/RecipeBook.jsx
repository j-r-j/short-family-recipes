import { useState, useMemo } from "react";

const recipes = [
  {
    id: 1,
    name: "Creamy Chicken Tortilla Soup",
    source: "Half Baked Harvest",
    time: "50 min",
    tags: ["Soup", "Chicken", "Mexican"],
    url: "https://www.halfbakedharvest.com/creamy-chicken-tortilla-soup/",
    color: "#E8D5B7",
    accent: "#C4956A",
    initials: "CTS",
    rating: 4.5,
    image: "https://www.halfbakedharvest.com/wp-content/uploads/2023/11/Creamy-Chicken-Tortilla-Soup-1.jpg",
  },
  {
    id: 2,
    name: "Foolproof Cacio e Pepe",
    source: "Smitten Kitchen",
    time: "20 min",
    tags: ["Pasta", "Vegetarian", "Quick"],
    url: "https://smittenkitchen.com/2018/09/foolproof-cacio-e-pepe/",
    color: "#F5E6CC",
    accent: "#B8A080",
    initials: "CeP",
    rating: 4,
    image: "https://smittenkitchendotcom.files.wordpress.com/2018/09/foolproof-cacio-e-pepe.jpg?w=750",
  },
  {
    id: 3,
    name: "Skillet Corn and Chipotle Chicken Tortilla Bake",
    source: "Half Baked Harvest",
    time: "45 min",
    tags: ["Chicken", "Mexican", "Skillet"],
    url: "https://www.halfbakedharvest.com/corn-and-chipotle-chicken-tortilla-bake/",
    color: "#F0DFC8",
    accent: "#C89060",
    initials: "CTB",
    rating: 4.5,
    image: "https://www.halfbakedharvest.com/wp-content/uploads/2023/08/Skillet-Corn-and-Chipotle-Chicken-Tortilla-Bake-1.jpg",
  },
  {
    id: 4,
    name: "Sheet Pan Hot Honey Garlic Chicken and Zucchini",
    source: "Half Baked Harvest",
    time: "30 min",
    tags: ["Chicken", "Sheet Pan", "Quick"],
    url: "https://www.halfbakedharvest.com/hot-honey-garlic-chicken/",
    color: "#FBE8C8",
    accent: "#D4944C",
    initials: "HHC",
    rating: 4,
    image: "https://www.halfbakedharvest.com/wp-content/uploads/2023/08/Sheet-Pan-Hot-Honey-Garlic-Chicken-and-Zucchini-1.jpg",
  },
  {
    id: 5,
    name: "Ginger Sweet Potato Coconut Milk Stew w/ Lentils & Kale",
    source: "The First Mess",
    time: "1 hr",
    tags: ["Vegan", "Soup", "Sweet Potato"],
    url: "https://thefirstmess.com/2020/02/19/sweet-potato-coconut-milk-stew/",
    color: "#F4D9BE",
    accent: "#D08850",
    initials: "SPS",
    rating: 5,
    image: "https://thefirstmess.com/wp-content/uploads/2020/02/18-11996-post/ginger-sweet-potato-coconut-stew-w-kale-lentils-6.jpg",
  },
  {
    id: 6,
    name: "BBQ Chicken Bowls with Sweet Potatoes and Coleslaw (Whole30)",
    source: "40 Aprons",
    time: "1 hr 15 min",
    tags: ["Bowls", "Chicken", "Sweet Potato"],
    url: "https://40aprons.com/bbq-chicken-bowls-with-sweet-potatoes-and-coleslaw-whole30/",
    color: "#E5D4C0",
    accent: "#A88860",
    initials: "BBQ",
    rating: 5,
    image: "https://40aprons.com/wp-content/uploads/2020/01/bbq-chicken-bowls-whole30-5-1.jpg",
  },
  {
    id: 7,
    name: "Chicken + Bacon Ranch Bowls",
    source: "The Defined Dish",
    time: "35 min",
    tags: ["Bowls", "Chicken", "Quick"],
    url: "https://thedefineddish.com/chicken-bacon-ranch-bowls/",
    color: "#EDE0D0",
    accent: "#A09070",
    initials: "CBR",
    rating: 5,
    image: "https://thedefineddish.com/wp-content/uploads/2018/07/IMG_7406.jpg",
  },
  {
    id: 8,
    name: "Easy Rotisserie Chicken Greek Bowls",
    source: "The Defined Dish",
    time: "30 min",
    tags: ["Bowls", "Chicken", "Quick"],
    url: "https://thedefineddish.com/easy-greek-inspired-rotisserie-chicken-bowls/",
    color: "#D8E4D2",
    accent: "#7A9968",
    initials: "GCB",
    rating: 4.5,
    image: "https://thedefineddish.com/wp-content/uploads/2021/04/2021-04-15-01.12.12.jpg",
  },
  {
    id: 9,
    name: "Ground Turkey Skillet with Sweet Potatoes and Black Bean",
    source: "Skinnytaste",
    time: "30 min",
    tags: ["Skillet", "Turkey", "Sweet Potato", "Quick"],
    url: "https://www.skinnytaste.com/ground-turkey-skillet-with-sweet-potatoes-and-black-bean/",
    color: "#F0E0C8",
    accent: "#C09058",
    initials: "GTS",
    rating: 4,
    image: "https://www.skinnytaste.com/wp-content/uploads/2023/01/Ground-Turkey-Skillet-with-Sweet-Potatoes-and-Black-Beans-7.jpg",
  },
  {
    id: 10,
    name: "Mini Bell Pepper Loaded Turkey \"Nachos\"",
    source: "Skinnytaste",
    time: "40 min",
    tags: ["Turkey", "Mexican", "Quick"],
    url: "https://www.skinnytaste.com/mini-bell-pepper-loaded-turkey-nachos/",
    color: "#F5E0C0",
    accent: "#D49040",
    initials: "TN",
    rating: 4,
    image: "https://www.skinnytaste.com/wp-content/uploads/2017/02/Mini-Bell-Pepper-Loaded-Turkey-%E2%80%9CNachos-1-3.jpg",
  },
  {
    id: 11,
    name: "Chinese Chicken Salad",
    source: "Delish",
    time: "20 min",
    tags: ["Salad", "Chicken", "Quick"],
    url: "https://www.delish.com/cooking/recipe-ideas/a53792/chinese-chicken-salad-recipe/",
    color: "#D8E8D0",
    accent: "#6A9958",
    initials: "CCS",
    rating: 4,
    image: "https://hips.hearstapps.com/hmg-prod/images/crunchy-mandarin-orange-chicken-salad-index-66677b26de543.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
  },
  {
    id: 12,
    name: "Salmon Tacos with Mango Corn Salsa",
    source: "Pinch of Yum",
    time: "25 min",
    tags: ["Salmon", "Tacos", "Quick"],
    url: "https://pinchofyum.com/salmon-tacos",
    color: "#F8E4D0",
    accent: "#D48050",
    initials: "ST",
    rating: 4,
    image: "https://pinchofyum.com/tachyon/Salmon-Tacos-Square.png",
  },
  {
    id: 13,
    name: "Maple Soy Glazed Salmon",
    source: "Skinnytaste",
    time: "15 min",
    tags: ["Salmon", "Quick"],
    url: "https://www.skinnytaste.com/maple-soy-glazed-salmon/",
    color: "#E8D0C0",
    accent: "#B07050",
    initials: "MSS",
    rating: 4.5,
    image: "https://www.skinnytaste.com/wp-content/uploads/2016/11/Maple-Soy-Glazed-Salmon.jpg",
  },
  {
    id: 14,
    name: "Salmon Burgers with Kale Caesar Salad",
    source: "The Defined Dish",
    time: "40 min",
    tags: ["Salmon", "Salad"],
    url: "https://thedefineddish.com/salmon-burger-kale-caesar/",
    color: "#D4DEC8",
    accent: "#7A8E60",
    initials: "SB",
    rating: 4,
    image: "https://thedefineddish.com/wp-content/uploads/2019/09/2019-09-17-02.47.37-2.jpg",
  },
  {
    id: 15,
    name: "Bourbon Caramelized Bacon and Heirloom Tomato BLT w/Fried Eggs + Smoked Gouda",
    source: "Half Baked Harvest",
    time: "25 min",
    tags: ["Sandwich", "Quick"],
    url: "https://www.halfbakedharvest.com/bourbon-caramelized-bacon-heirloom-tomato-blt-wfried-eggs-smoked-gouda/",
    color: "#F0D8C4",
    accent: "#C87848",
    initials: "BLT",
    rating: 4,
    image: "https://www.halfbakedharvest.com/wp-content/uploads/2014/08/untitled-16.jpg",
  },
  {
    id: 16,
    name: "Crunchy Baked Turkey Tacos",
    source: "The Defined Dish",
    time: "40 min",
    tags: ["Turkey", "Tacos", "Mexican"],
    url: "https://thedefineddish.com/crunchy-baked-turkey-tacos/",
    color: "#F5E8D0",
    accent: "#C8A060",
    initials: "BTT",
    rating: 4.5,
    image: "https://thedefineddish.com/wp-content/uploads/2019/08/2019-08-06-02.02.41-2.jpg",
  },
  {
    id: 17,
    name: "Shaved Asparagus Pizza",
    source: "Smitten Kitchen",
    time: "15 min",
    tags: ["Pizza", "Vegetarian", "Quick"],
    url: "https://smittenkitchen.com/2010/05/shaved-asparagus-pizza/",
    color: "#DCE8CC",
    accent: "#8AAC60",
    initials: "SAP",
    rating: 5,
    image: "https://i0.wp.com/smittenkitchen.com/wp-content/uploads//2010/05/shaved-asparagus-pizza.jpg?fit=750%2C500&ssl=1",
  },
  {
    id: 18,
    name: "Honey Chipotle Chicken Rice Bowls",
    source: "Recipe Runner",
    time: "1 hr 45 min",
    tags: ["Bowls", "Chicken"],
    url: "https://reciperunner.com/honey-chipotle-chicken-rice-bowls/",
    color: "#F0D4C0",
    accent: "#C07040",
    initials: "HCC",
    rating: 4,
    image: "https://reciperunner.com/wp-content/uploads/2022/08/honey-chipotle-chicken-rice-bowls-4-scaled.jpg",
  },
  {
    id: 19,
    name: "6-Ingredient Mexican-Style Quinoa Salad",
    source: "Skinny Ms.",
    time: "30 min",
    tags: ["Salad", "Mexican", "Vegan", "Quick"],
    url: "https://skinnyms.com/6-ingredient-mexican-style-quinoa-salad-recipe/",
    color: "#E0E4C8",
    accent: "#9AA060",
    initials: "MQS",
    rating: 4,
    image: "https://skinnyms.com/wp-content/uploads/2016/04/6-Ingredient-Mexican-Style-Quinoa-Salad3.jpg",
  },
  {
    id: 20,
    name: "Original Baked Feta Pasta Recipe (Viral Tiktok Pasta)",
    source: "Grilled Cheese Social",
    time: "45 min",
    tags: ["Pasta", "Vegetarian"],
    url: "https://grilledcheesesocial.com/2019/06/27/baked-feta-pasta-with-tomatoes/",
    color: "#F5D0C0",
    accent: "#C86048",
    initials: "BFP",
    rating: 4,
    image: "https://grilledcheesesocial.com/wp-content/uploads/2019/06/baked-feta-pasta-tomatoes-grilled-cheese-social-6.jpg",
  },
  {
    id: 21,
    name: "5-Ingredient Chipotle-Lime Shrimp Lettuce Cups",
    source: "The Defined Dish",
    time: "20 min",
    tags: ["Shrimp", "Quick"],
    url: "https://thedefineddish.com/5-ingredient-chipotle-lime-shrimp-lettuce-cups/",
    color: "#D8E8D8",
    accent: "#6A9870",
    initials: "SLC",
    rating: 4,
    image: "https://thedefineddish.com/wp-content/uploads/2019/12/2019-12-16-00.00.04.jpg",
  },
  {
    id: 22,
    name: "Best Dutch Oven Carnitas (Mexican Pulled Pork)",
    source: "Well Fed Baker",
    time: "4 hr",
    tags: ["Pork", "Mexican"],
    url: "https://wellfedbaker.com/dutch-oven-carnitas/",
    color: "#E8D8C0",
    accent: "#A88050",
    initials: "DOC",
    rating: 5,
    image: "https://wellfedbaker.com/wp-content/uploads/2024/04/dutch-oven-carnitas-11.jpg",
  },
  {
    id: 23,
    name: "Honey Sesame Chicken Stir Fry",
    source: "Amanda Cooks & Styles",
    time: "30 min",
    tags: ["Chicken", "Stir Fry", "Quick"],
    url: "https://amandacooksandstyles.com/honey-sesame-chicken-stir-fry/",
    color: "#F0E0C4",
    accent: "#C09040",
    initials: "HSC",
    rating: 4,
    image: "https://amandacooksandstyles.com/wp-content/uploads/2021/05/20210504_172500-3.jpg",
  },
  {
    id: 24,
    name: "Baked Chicken Tenders",
    source: "Cooking Classy",
    time: "35 min",
    tags: ["Chicken", "Quick"],
    url: "https://www.cookingclassy.com/baked-chicken-tenders/",
    color: "#F5E4CC",
    accent: "#C8A060",
    initials: "BCT",
    rating: 4,
    image: "https://www.cookingclassy.com/wp-content/uploads/2021/10/baked-chicken-tenders-5.jpg",
  },
  {
    id: 25,
    name: "Whole30 Bang Bang Shrimp (Paleo, Grain Free, Nut Free)",
    source: "40 Aprons",
    time: "20 min",
    tags: ["Shrimp", "Quick"],
    url: "https://40aprons.com/whole30-bang-bang-shrimp-paleo/",
    color: "#F8E0D0",
    accent: "#D08858",
    initials: "BBS",
    rating: 4,
    image: "https://40aprons.com/wp-content/uploads/2018/03/whole30-bang-bang-shrimp-paleo-2.jpg",
  },
  {
    id: 26,
    name: "Spaghetti Squash Bolognese {Paleo, Whole30, Low FODMAP}",
    source: "Paleo Running Momma",
    time: "30 min",
    tags: ["Pasta", "Quick"],
    url: "https://www.paleorunningmomma.com/spaghetti-squash-bolognese-paleo-whole30/",
    color: "#E8D4C0",
    accent: "#B08050",
    initials: "SSB",
    rating: 4.5,
    image: "https://www.paleorunningmomma.com/wp-content/uploads/2020/01/bolognese6.jpg",
  },
  {
    id: 27,
    name: "Coconut Shrimp Curry",
    source: "Jo Cooks",
    time: "25 min",
    tags: ["Shrimp", "Quick"],
    url: "https://www.jocooks.com/recipes/coconut-shrimp-curry/",
    color: "#F0E4C8",
    accent: "#C8A450",
    initials: "CSC",
    rating: 4,
    image: "https://www.jocooks.com/wp-content/uploads/2019/07/coconut-shrimp-curry-1-3.jpg",
  },
  {
    id: 28,
    name: "Ginger and Peanut Butter Ground Turkey Stir-Fry",
    source: "The Defined Dish",
    time: "15 min",
    tags: ["Turkey", "Stir Fry", "Quick"],
    url: "https://thedefineddish.com/ginger-peanut-butter-ground-turkey-stir-fry/",
    color: "#E4D8C4",
    accent: "#A09060",
    initials: "GPT",
    rating: 4,
    image: "https://thedefineddish.com/wp-content/uploads/2021/04/Ginger-Peanut-Butter-Ground-Turkey-Stir-Fry-2.jpg",
  },
  {
    id: 29,
    name: "Make-Ahead Taco Bowls with Jalapeno Dressing",
    source: "The Defined Dish",
    time: "30 min",
    tags: ["Bowls", "Mexican", "Quick"],
    url: "https://thedefineddish.com/make-ahead-taco-bowls-with-jalapeno-dressing/",
    color: "#F0DCC4",
    accent: "#C89858",
    initials: "MTB",
    rating: 4,
    image: "https://thedefineddish.com/wp-content/uploads/2024/09/Make-Ahead-Taco-Bowls-5-scaled.jpg",
  },
  {
    id: 30,
    name: "Irresistible Crispy Parmesan Chicken with Rich Garlic Sauce",
    source: "ToRecipes",
    time: "40 min",
    tags: ["Chicken"],
    url: "https://torecipes.com/irresistible-crispy-parmesan-chicken-with-rich-garlic-sauce/",
    color: "#F5E8D4",
    accent: "#C0A468",
    initials: "CPC",
    rating: 4,
    image: "https://torecipes.com/wp-content/uploads/2025/04/crispy-parmesan-chicken-with-a-rich-garlic-sauce-featured.png",
  },
  {
    id: 31,
    name: "Greek Chicken Chopped Salad with Lemon Tahini Vinaigrette",
    source: "Half Baked Harvest",
    time: "45 min",
    tags: ["Salad", "Chicken"],
    url: "https://www.halfbakedharvest.com/greek-chicken-chopped-salad/",
    color: "#D4E0C8",
    accent: "#7A9460",
    initials: "GCS",
    rating: 4,
    image: "https://www.halfbakedharvest.com/wp-content/uploads/2020/05/Greek-Chicken-Chopped-Salad-with-Lemon-Tahini-Vinaigrette-1.jpg",
  },
  {
    id: 32,
    name: "Strawberry Pretzel Salad",
    source: "Natasha's Kitchen",
    time: "4 hr",
    tags: ["Dessert"],
    url: "https://natashaskitchen.com/strawberry-pretzel-salad/",
    color: "#F0C8C8",
    accent: "#C06060",
    initials: "SPS",
    rating: 5,
    image: "https://natashaskitchen.com/wp-content/uploads/2018/12/Strawberry-Pretzel-Jello.jpg",
  },
];

const allTags = [...new Set(recipes.flatMap((r) => r.tags))].sort();

function parseTimeToMinutes(timeStr) {
  let minutes = 0;
  const hrMatch = timeStr.match(/(\d+)\s*hr/);
  const minMatch = timeStr.match(/(\d+)\s*min/);
  if (hrMatch) minutes += parseInt(hrMatch[1]) * 60;
  if (minMatch) minutes += parseInt(minMatch[1]);
  return minutes;
}

export default function RecipeBook() {
  const [search, setSearch] = useState("");
  const [activeTags, setActiveTags] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sortByTime, setSortByTime] = useState("none");

  const toggleTag = (tag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filtered = useMemo(() => {
    const result = recipes.filter((r) => {
      const matchesSearch =
        search === "" ||
        r.name.toLowerCase().includes(search.toLowerCase()) ||
        r.source.toLowerCase().includes(search.toLowerCase());
      const matchesTags =
        activeTags.length === 0 ||
        activeTags.some((tag) => r.tags.includes(tag));
      const matchesRating = minRating === 0 || (r.rating && r.rating >= minRating);
      return matchesSearch && matchesTags && matchesRating;
    });
    if (sortByTime !== "none") {
      result.sort((a, b) => {
        const diff = parseTimeToMinutes(a.time) - parseTimeToMinutes(b.time);
        return sortByTime === "asc" ? diff : -diff;
      });
    }
    return result;
  }, [search, activeTags, minRating, sortByTime]);

  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        ::selection {
          background: #C8B08C;
          color: white;
        }
        
        .recipe-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          cursor: pointer;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          border: 1px solid #F0EBE3;
        }
        
        .recipe-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(120, 100, 70, 0.12);
        }
        
        .tag-btn {
          padding: 6px 14px;
          border-radius: 100px;
          border: 1.5px solid #E0D8CC;
          background: transparent;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #8A7D6B;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        
        .tag-btn:hover {
          border-color: #C8B08C;
          color: #6B5D4D;
        }
        
        .tag-btn.active {
          background: #3D3225;
          border-color: #3D3225;
          color: white;
        }
        
        .search-input {
          width: 100%;
          padding: 12px 16px 12px 44px;
          border: 1.5px solid #E0D8CC;
          border-radius: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: #3D3225;
          background: white;
          outline: none;
          transition: border-color 0.2s ease;
        }
        
        .search-input:focus {
          border-color: #C8B08C;
        }
        
        .search-input::placeholder {
          color: #B8AE9E;
        }
        
        .img-placeholder {
          width: 100%;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .recipe-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }
        
        @media (max-width: 680px) {
          .recipe-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
            <h1 style={styles.title}>B&B's Favorite Recipes</h1>
            <span style={styles.count}>{recipes.length}</span>
          </div>
          <p style={styles.subtitle}>
            Britt and Brendan's go-to meals that we keep coming back to (Britt does the cooking, 99% of the time).
            <br />
            Put the screens away and enjoy a meal with friends, family, or solo! 🤍
          </p>
        </div>
      </header>

      {/* Controls */}
      <div style={styles.controls}>
        {/* Search */}
        <div style={{ position: "relative", maxWidth: 400 }}>
          <svg
            style={{
              position: "absolute",
              left: 14,
              top: "50%",
              transform: "translateY(-50%)",
              width: 18,
              height: 18,
              color: "#B8AE9E",
            }}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <circle cx={11} cy={11} r={8} />
            <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
          </svg>
          <input
            className="search-input"
            type="text"
            placeholder="Search recipes or sources..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginTop: 12,
          }}
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`tag-btn ${activeTags.includes(tag) ? "active" : ""}`}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </button>
          ))}
          {(activeTags.length > 0 || minRating > 0 || sortByTime !== "none") && (
            <button
              className="tag-btn"
              onClick={() => { setActiveTags([]); setMinRating(0); setSortByTime("none"); }}
              style={{ color: "#C8846B", borderColor: "#C8846B" }}
            >
              Clear all
            </button>
          )}
        </div>

        {/* Star Rating Filter */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 12 }}>
          <span style={{ fontSize: 13, fontWeight: 500, color: "#8A7D6B", marginRight: 4 }}>Min rating:</span>
          {[4, 4.5, 5].map((val) => (
            <button
              key={val}
              className={`tag-btn ${minRating === val ? "active" : ""}`}
              onClick={() => setMinRating(minRating === val ? 0 : val)}
              style={{ display: "flex", alignItems: "center", gap: 4 }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24">
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  fill={minRating === val ? "white" : "#C8A060"}
                  stroke={minRating === val ? "white" : "#C8A060"}
                  strokeWidth="1.5"
                />
              </svg>
              {val}+
            </button>
          ))}
        </div>

        {/* Sort by Cook Time */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 12 }}>
          <span style={{ fontSize: 13, fontWeight: 500, color: "#8A7D6B", marginRight: 4 }}>Sort by time:</span>
          {[
            { value: "asc", label: "Quickest first" },
            { value: "desc", label: "Longest first" },
          ].map(({ value, label }) => (
            <button
              key={value}
              className={`tag-btn ${sortByTime === value ? "active" : ""}`}
              onClick={() => setSortByTime(sortByTime === value ? "none" : value)}
              style={{ display: "flex", alignItems: "center", gap: 4 }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={sortByTime === value ? "white" : "#8A7D6B"} strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" strokeLinecap="round" />
              </svg>
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Recipe Grid */}
      <div style={styles.content}>
        {filtered.length === 0 ? (
          <div style={styles.empty}>
            <span style={{ fontSize: 40 }}>🍽️</span>
            <p style={{ color: "#8A7D6B", fontFamily: "'DM Sans', sans-serif", marginTop: 12 }}>
              No recipes match your filters.
            </p>
          </div>
        ) : (
          <div className="recipe-grid">
            {filtered.map((recipe) => (
              <a
                key={recipe.id}
                className="recipe-card"
                href={recipe.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="img-placeholder"
                  style={{ backgroundColor: recipe.color }}
                >
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "absolute",
                      top: 0,
                      left: 0,
                    }}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div style={{
                    display: "none",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: 4,
                  }}>
                    <span style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: 36,
                      fontWeight: 400,
                      color: recipe.accent,
                      opacity: 0.6,
                      letterSpacing: "0.05em",
                    }}>{recipe.initials}</span>
                    <span style={{
                      fontSize: 10,
                      fontWeight: 600,
                      color: recipe.accent,
                      opacity: 0.4,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontFamily: "'DM Sans', sans-serif",
                    }}>view recipe →</span>
                  </div>
                </div>
                <div style={styles.cardBody}>
                  <div style={styles.cardMeta}>
                    <span style={styles.sourceLabel}>{recipe.source}</span>
                    <span style={styles.timeLabel}>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        style={{ marginRight: 4, flexShrink: 0 }}
                      >
                        <circle cx={12} cy={12} r={10} />
                        <path d="M12 6v6l4 2" strokeLinecap="round" />
                      </svg>
                      {recipe.time}
                    </span>
                  </div>
                  <h3 style={styles.cardTitle}>{recipe.name}</h3>
                  {recipe.rating && (
                    <div style={styles.ratingRow}>
                      {[1, 2, 3, 4, 5].map((star) => {
                        const fill = recipe.rating >= star ? 1 : recipe.rating >= star - 0.5 ? 0.5 : 0;
                        return (
                          <svg key={star} width="14" height="14" viewBox="0 0 24 24" style={{ marginRight: 1 }}>
                            {fill === 0.5 && (
                              <defs>
                                <linearGradient id={`half-${recipe.id}`}>
                                  <stop offset="50%" stopColor="#C8A060" />
                                  <stop offset="50%" stopColor="#C8A060" stopOpacity="0" />
                                </linearGradient>
                              </defs>
                            )}
                            <path
                              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                              fill={fill === 1 ? "#C8A060" : fill === 0.5 ? `url(#half-${recipe.id})` : "none"}
                              stroke="#C8A060"
                              strokeWidth="1.5"
                            />
                          </svg>
                        );
                      })}
                      <span style={styles.ratingText}>{recipe.rating}</span>
                    </div>
                  )}
                  <div style={styles.cardTags}>
                    {recipe.tags.map((tag) => (
                      <span key={tag} style={styles.cardTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>Made with 🤍 From our family's table in Austin, to wherever yours is</p>
      </footer>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#FAF7F2",
    fontFamily: "'DM Sans', sans-serif",
  },
  header: {
    padding: "48px 24px 32px",
    borderBottom: "1px solid #EDE6D9",
  },
  headerInner: {
    maxWidth: 1100,
    margin: "0 auto",
  },
  title: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 36,
    fontWeight: 400,
    color: "#2A2118",
    letterSpacing: "-0.02em",
  },
  count: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    fontWeight: 500,
    color: "#B8AE9E",
    background: "#EDE6D9",
    padding: "2px 10px",
    borderRadius: 100,
  },
  subtitle: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    color: "#8A7D6B",
    marginTop: 4,
    lineHeight: 1.5,
  },
  controls: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "24px 24px 0",
  },
  content: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "24px 24px 48px",
  },
  empty: {
    textAlign: "center",
    padding: "60px 20px",
  },
  cardBody: {
    padding: "16px 20px 20px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  cardMeta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  sourceLabel: {
    fontSize: 12,
    fontWeight: 600,
    color: "#B8AE9E",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  },
  timeLabel: {
    fontSize: 13,
    color: "#8A7D6B",
    display: "flex",
    alignItems: "center",
  },
  cardTitle: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 19,
    fontWeight: 400,
    color: "#2A2118",
    lineHeight: 1.3,
    marginBottom: 12,
  },
  ratingRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: 500,
    color: "#B8AE9E",
    marginLeft: 4,
  },
  cardTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
    marginTop: "auto",
  },
  cardTag: {
    fontSize: 11,
    fontWeight: 500,
    color: "#8A7D6B",
    background: "#F5F0E8",
    padding: "3px 10px",
    borderRadius: 100,
  },
  footer: {
    textAlign: "center",
    padding: "24px",
    borderTop: "1px solid #EDE6D9",
    fontSize: 13,
    color: "#B8AE9E",
    fontFamily: "'DM Sans', sans-serif",
  },
};
