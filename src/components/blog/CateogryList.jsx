import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";
async function CateogryList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/list`);
  // await new Promise((resolve) => setTimeout(() => resolve(), 2000));
  const {
    data: { categories },
  } = await res.json();

  return (
    <div className="bg-secondary-0 shadow-lg rounded-lg p-4 w-64">
      <ul className="space-y-2">
        <li>
          <Link 
            href={`/blogs/`} 
            className="block text-lg font-semibold text-white hover:text-blue-500 transition-all duration-300"
          >
            همه مقالات
          </Link>
        </li>
        {categories.map((category) => (
          <li key={category._id}>
            <Link 
              href={`/blogs/category/${category.slug}`}
              className="flex items-center justify-between text-white hover:text-blue-500 p-2 rounded-md transition-all duration-300 hover:bg-blue-100"
            >
              <span>{category.title}</span>
              <FaAngleLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CateogryList;
