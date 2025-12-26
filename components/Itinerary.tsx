export default function Itinerary() {
  return (
    <section className="min-h-screen bg-[#F5DEB3] px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-rose-700">
        Atur Cara Majlis
      </h2>

      <div className="max-w-xl mx-auto space-y-6">
        <div className="flex justify-between border-b pb-2 font-semibold text-rose-800">
          <span>11:00 AM</span>
          <span>Kehadiran Tetamu</span>
        </div>

        <div className="flex justify-between border-b pb-2 font-semibold text-rose-800">
          <span>12:00 PM</span>
          <span>Majlis Bermula</span>
        </div>

        <div className="flex justify-between border-b pb-2 font-semibold text-rose-800">
          <span>1:30 PM</span>
          <span>Jamuan Makan</span>
        </div>

        <div className="flex justify-between border-b pb-2 font-semibold text-rose-800">
          <span>4:00 PM</span>
          <span>Majlis Bersurai</span>
        </div>
      </div>

      <div className="text-center mt-12 text-sm text-gray-600">
        <p>Dress Code: Sage Green (Pihak Lelaki) </p>
        <p>Hubungi: Aiman (017-5448767)</p>
      </div>
    </section>
  );
}
