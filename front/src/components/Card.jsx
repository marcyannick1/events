import { Link } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdPersonPin } from "react-icons/md";

export default function Card({event}) {
  return (
    <div
      key={event.id}
      className="bg-white rounded-sm shadow-sm overflow-hidden hover:shadow-lg transition duration-300 p-1 border border-gray-300"
    >
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="my-3 px-1">
        <Link to={`event/${event.id}`}>
          <h2 className="text-lg font-semibold text-gray-800 hover:text-teal-900 transition">
            {event.title}
          </h2>
        </Link>

        <div className="flex items-center justify-between mt-2 text-sm">
          <p className="text-gray-600  flex items-center">
            <MdPersonPin className="text-teal-700 text-lg" />
            <span>{event.places} Places</span>
          </p>

          <p className="text-gray-600 flex items-center">
            <FaRegCalendarAlt className="text-teal-700" />{" "}
            <span className="mx-1">
              {new Date(event.date).toLocaleDateString("fr-FR")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
