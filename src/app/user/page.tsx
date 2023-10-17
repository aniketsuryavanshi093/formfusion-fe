import ButtonComp from "../../Components/Button";
import Link from "next/link";

const UserPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Link href="user/quiz">
          <ButtonComp text="Click here for Quiz" />
        </Link>
        <Link href="user/survey">
          <ButtonComp text="Click here for Survey" />
        </Link>
      </div>
    </main>
  );
};

export default UserPage;
