export default function RSVP() {
  return (
    <section
      id="rsvp"
      className="flex items-center justify-center min-h-screen bg-[#F5DEB3] px-4 sm:px-8"
    >
      {/* White content box */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-8 sm:p-12 flex flex-col items-center text-center">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-rose-700">
          RSVP
        </h2>

        {/* Instruction Text */}
        <p className="mb-8 text-center max-w-md text-gray-700 text-base sm:text-lg">
          Sila sahkan kehadiran anda sebelum 23 Mac 2026. Terima kasih!
        </p>

        {/* Google Form Button */}
        <a
          href="https://forms.gle/4LEohL7hdnmAo9qY9"
          target="_blank"
          className="px-6 py-3 sm:px-8 sm:py-4 bg-emerald-500 text-white rounded-full shadow-lg hover:bg-emerald-600 transition text-base sm:text-lg"
        >
          Isi Borang Kehadiran
        </a>
      </div>
    </section>
  );
}
