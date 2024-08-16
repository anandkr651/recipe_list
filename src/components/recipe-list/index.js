import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RecipeList({ recipeList }) {
  return (
    <div className="p-4 mx-auto overflow-hidden ">
      <Link href={"/"}>
        {" "}
        <button className="outline-none border-none w-20 bg-blue-500 text-white mt-2 ml-2 rounded-sm shadow-xl  ">
          Go Back
        </button>{" "}
      </Link>
      <h1 className="font-extrabold text-7xl text-center text-orange-500">
        Recipes
      </h1>
      <h4 className="text-center font-semibold text-2xl text-gray-400">
        Eat breakfast like a king, lunch like a queen, and dinner like a pauper
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-4 px-4">
        {recipeList && recipeList.length > 0
          ? recipeList.map((recipe) => (
              <Link href={`/recipe-list/${recipe.id}`} key={recipe.id}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-slate-700">
                      {recipe.name}
                    </CardTitle>
                    <CardDescription>Rating {recipe.rating}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img src={recipe.image} className="rounded-3xl"></img>
                  </CardContent>
                  <CardFooter>
                    <p>{recipe.cuisine}</p>
                  </CardFooter>
                </Card>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
}
