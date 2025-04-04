import NetworkGrid from "@/components/NetworkGrid";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col py-4 px-6 dark:text-white text-black">
      <h1 className="text-3xl font-medium w-full flex justify-center">
        My Network
      </h1>
      <NetworkGrid />
    </div>
  );
}
