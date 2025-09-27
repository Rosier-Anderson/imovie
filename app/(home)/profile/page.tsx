import Link from "next/link";

export default function ProfilePages() {
  return (
    <>
      <main className="w-full h-full ">
        <div className="h-full flex justify-center items-center my-auto rounded-sm p-2 m-px  ">
          {/* image goes here  */}
          <span className="border rounded-sm py-2 px-4  ">
            <Link href="/login">Sign in to continue</Link>
          </span>
        </div>
      </main>
    </>
  );
}
