import Cart from "~/components/Cart";
import FindCity from "~/components/form/Form";

export default function HomePage() {
  return (
    <main className=" flex flex-col gap-4 w-full items-center justify-center  ">
      <FindCity />
      <Cart />
    </main>
  );
}
