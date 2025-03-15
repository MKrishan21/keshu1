import Image from "next/image";

const img = "https://thispersondoesnotexist.com";

export default function HeroSection() {
  return (
    <div className="bg-gray-100 py-16 px-6 text-center relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute top-10 left-10 w-6 h-6 bg-blue-400 rounded-full"></div>
      <div className="absolute top-40 left-20 w-10 h-10 bg-green-400 rounded-tr-lg"></div>
      <div className="absolute bottom-10 left-40 w-6 h-6 bg-red-400 rounded-md"></div>
      <div className="absolute bottom-20 right-10 w-6 h-6 bg-teal-400 rounded-full"></div>

      {/* Content */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Loopcv helps you get <br />
          <span className="text-black">3x more interviews</span> using AI
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Upload your CV, Select the type of Job You Want, and Press Start!
          Loopcv will Mass Apply on your behalf Every Single Day
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-lg">
          Get started
        </button>
        <p className="mt-2 text-gray-500">Start for free</p>

        {/* User Reviews */}
        <div className="mt-6 flex flex-col lg:flex-row items-center justify-center gap-2 ">
          <section className="flex -space-x-3">
            <Image
              src={img}
              alt="User 1"
              width={40}
              height={40}
              className="rounded-full"
              unoptimized
            />
            <Image
              src={img}
              alt="User 2"
              width={40}
              height={40}
              className="rounded-full"
              unoptimized
            />
            <Image
              src={img}
              alt="User 3"
              width={40}
              height={40}
              className="rounded-full"
              unoptimized
            />
          </section>

          <p className="text-sm text-gray-600">
            and 3000+ jobseekers found their dream job through Loopcv
          </p>
        </div>
        <section className="mt-20 flex flex-col items-center gap-10">
          <Image
            src="https://www.loopcv.pro/assets/images/screens/dashboard%20home%20with%20shapes.webp"
            alt="dash"
            width={1500}
            height={1500}
            unoptimized
          />
          <Image
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=327132&theme=light"
            alt="dash"
            width={250}
            height={200}
            unoptimized
          />
        </section>
      </div>
    </div>
  );
}
