import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { X, Home, Tag, FileText, BarChart2, Settings } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsOpen]);

  // Close sidebar when pressing escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [setIsOpen]);

  const navItems = [
    { to: "/", icon: <Home size={20} />, text: "Dashboard" },
    { to: "/annotate", icon: <Tag size={20} />, text: "Annotation" },
    { to: "/documents", icon: <FileText size={20} />, text: "Documents" },
    { to: "/analytics", icon: <BarChart2 size={20} />, text: "Analytics" },
    { to: "/settings", icon: <Settings size={20} />, text: "Settings" },
  ];

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-gray-800 md:shadow-md transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="py-4 text-gray-500 dark:text-gray-400">
          <div className="flex items-center justify-between px-6 mb-6">
            <Link
              to="/"
              className="text-lg font-bold text-gray-800 dark:text-gray-200"
            >
              EntityExtract
            </Link>
            <button
              className="p-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <ul>
            {navItems.map((item) => (
              <li className="relative px-6 py-3" key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-600 dark:text-gray-400"
                    }`
                  }
                  end={item.to === "/"}
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <span
                          className="absolute inset-y-0 left-0 w-1 bg-blue-600 dark:bg-blue-400 rounded-tr-lg rounded-br-lg"
                          aria-hidden="true"
                        ></span>
                      )}
                      <span className="inline-flex items-center">
                        <span className="w-5 h-5 mr-3">{item.icon}</span>
                        <span>{item.text}</span>
                      </span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
