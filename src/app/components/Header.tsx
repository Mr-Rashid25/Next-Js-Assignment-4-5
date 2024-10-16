import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md p-4">
      <nav>
        <ul className="flex gap-8 justify-center mb-8">
          <li className="hover:text-green-300">
            <Link href="./Home.tsx">Home</Link>
          </li>
          <li className="hover:text-green-300">
            <Link href="./about.tsx">About Us</Link>
          </li>
          <li className="hover:text-green-300">
            <Link href="./contact.tsx">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
