import RecipeCard from "../components/RecipeCard";

const AddToFac = () => {
  const favourite = JSON.parse(localStorage.getItem("fav") || []);

  const favRecipe = favourite.map((item) => (
    <RecipeCard key={item.id} item={item} />
  ));

  return (
    <div>
      {favourite.length > 0 ? (
        favRecipe
      ) : (
        <p className="flex justify-center mt-10 text-7xl font-semibold">
          No Favourite Found
        </p>
      )}
    </div>
  );
};

export default AddToFac;
