import Link from "next/link";

async function fetchRecipeDetails(currentRecipeId) {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/recipes/${currentRecipeId}`
    );
    const data = await apiResponse.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
export default async function recipeDetail({ params }) {
  const getRecipeDetails = await fetchRecipeDetails(params.details);
  //   console.log(getRecipeDetails);

  return (
    <div className="overflow-hidden ">
      <Link href={"/recipe-list"}>
        {" "}
        <button className="outline-none border-none w-20 bg-blue-500 text-white mt-2 ml-2 rounded-sm shadow-xl  ">
          Go Back
        </button>{" "}
      </Link>
      <div className="md:flex items-center mx-auto">
        <div className="lg:w-2/5 md:w-3/5 sm:w-4/5 w-2/3 md:mx-10 sm:mx-auto mx-auto">
          <img src={getRecipeDetails.image} className="rounded-3xl"></img>
        </div>
        <div className=" sm:text-center lg:text-left md:text-left text-center">
          <h1 className="font-extrabold lg:text-7xl md:text-4xl text-4xl text-lime-400">
            {getRecipeDetails.name}
          </h1>
          <p className="text-3xl font-semibold my-2 text-gray-600">
            {getRecipeDetails.mealType}
          </p>
          <p className="text-3xl font-semibold my-2 text-gray-600">
            {getRecipeDetails.cuisine}
          </p>
          <h3 className="text-2xl font-bold">Ingredients</h3>
          <ul className="md:list-disc ml-3">
            {getRecipeDetails.ingredients.map((item) => (
              <li key={item.id}>{item}</li>
            ))}
          </ul>
          <h3 className="text-2xl font-bold">How to make this food</h3>
          <ul className="md:list-disc ml-3 ">
            {getRecipeDetails.instructions.map((item) => (
              <li key={item.id}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
