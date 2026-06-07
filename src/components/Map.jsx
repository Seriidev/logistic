import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ─── Данные складов ───────────────────────────────────────────────────────────
// pdfFile → положи файл в /public/pricelists/china.pdf и т.д.
const WAREHOUSES = [
  {
    id: 1,
    country: "Китай",
    en: "China",
    flag: "🇨🇳",
    city: "Шанхай",
    address: "No.88 Longhua Rd, Xuhui District",
    price: "от $3/кг",
    delivery: "7–14 дней",
    stock: "1 240 ед.",
    color: "#1E40AF",
    lat: 31.23,
    lng: 121.47,
    pdfFile: "/pricelists/china.pdf",
  },
  {
    id: 2,
    country: "Турция",
    en: "Turkey",
    flag: "🇹🇷",
    city: "Стамбул",
    address: "Atatürk Mah. Ertuğrulgazi Sok.",
    price: "от $5/кг",
    delivery: "5–10 дней",
    stock: "820 ед.",
    color: "#DC2626",
    lat: 41.01,
    lng: 28.97,
    pdfFile: "/pricelists/turkey.pdf",
  },
  {
    id: 3,
    country: "ОАЭ",
    en: "UAE",
    flag: "🇦🇪",
    city: "Дубай",
    address: "Jebel Ali Free Zone, Gate 5",
    price: "от $4/кг",
    delivery: "4–8 дней",
    stock: "560 ед.",
    color: "#059669",
    lat: 25.2,
    lng: 55.27,
    pdfFile: "/pricelists/uae.pdf",
  },
  {
    id: 4,
    country: "Германия",
    en: "Germany",
    flag: "🇩🇪",
    city: "Гамбург",
    address: "Freihafen 12, 20457 Hamburg",
    price: "от $8/кг",
    delivery: "3–6 дней",
    stock: "430 ед.",
    color: "#D97706",
    lat: 53.55,
    lng: 9.99,
    pdfFile: "/pricelists/germany.pdf",
  },
  {
    id: 5,
    country: "Япония",
    en: "Japan",
    flag: "🇯🇵",
    city: "Токио",
    address: "2-1 Osanbashi, Naka-ku, Yokohama",
    price: "от $6/кг",
    delivery: "6–12 дней",
    stock: "310 ед.",
    color: "#6D28D9",
    lat: 35.68,
    lng: 139.69,
    pdfFile: "/pricelists/japan.pdf",
  },
  {
    id: 6,
    country: "Индия",
    en: "India",
    flag: "🇮🇳",
    city: "Мумбай",
    address: "Nhava Sheva, Navi Mumbai",
    price: "от $3/кг",
    delivery: "8–15 дней",
    stock: "740 ед.",
    color: "#EA580C",
    lat: 19.08,
    lng: 72.88,
    pdfFile: "/pricelists/india.pdf",
  },
];

// ─── SVG-иконка пина ──────────────────────────────────────────────────────────
function makePinIcon(L, color, active) {
  const size = active ? 38 : 30;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size * 1.25}" viewBox="0 0 32 40">
      <filter id="s"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="rgba(0,0,0,0.3)"/></filter>
      <path d="M16,2 C9.4,2 4,7.4 4,14 C4,23 16,38 16,38 C16,38 28,23 28,14 C28,7.4 22.6,2 16,2Z"
        fill="${color}" stroke="white" stroke-width="2" filter="url(#s)"/>
      <circle cx="16" cy="14" r="6" fill="white" opacity="0.95"/>
    </svg>`;
  return L.divIcon({
    html: svg,
    className: "",
    iconSize: [size, size * 1.25],
    iconAnchor: [size / 2, size * 1.25],
    popupAnchor: [0, -(size * 1.25)],
  });
}

// ─── Основной компонент ───────────────────────────────────────────────────────
function StocksSidebar({
  selected,
  setSelected,
  query,
  handleSearch,
  dropdown,
  pickFromDropdown,
  clearSearch,
  downloading,
  handleDownload,
  searchRef,
}) {
  return (
    <aside className="map-layout__sidebar" aria-label="Our Stocks">
      <div>
        <p className="text-xs sm:text-xs font-bold tracking-widest uppercase text-gray-900">
          Our Stocks
        </p>
        <p className="text-xs text-gray-400 mt-1 leading-relaxed">
          Search and price lists by country
        </p>
      </div>

      <div className="relative">
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 md:py-2">
          <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            ref={searchRef}
            type="search"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search country..."
            className="map-search-input flex-1 text-sm md:text-xs text-gray-700 outline-none bg-transparent placeholder-gray-300 min-w-0"
          />
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="text-gray-400 hover:text-gray-600 text-sm px-2 py-1 rounded-full min-h-[44px] md:min-h-0 flex items-center"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {dropdown.length > 0 && (
          <div
            className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-100 rounded-lg overflow-hidden max-h-48 overflow-y-auto z-[2000]"
            style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.10)" }}
          >
            {dropdown.map((w) => (
              <button
                key={w.id}
                type="button"
                onClick={() => pickFromDropdown(w)}
                className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 px-4 py-3 md:py-2 text-left hover:bg-blue-50 transition-colors min-h-[44px] md:min-h-0"
              >
                <span className="text-sm md:text-xs text-gray-700">{w.flag} {w.country} — {w.city}</span>
                <span className="text-sm md:text-xs font-semibold text-blue-600 w-fit">{w.price}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1.5 overflow-y-auto max-h-[220px] md:max-h-[168px] -mx-0.5 px-0.5">
        {WAREHOUSES.map((w) => (
          <button
            key={w.id}
            type="button"
            onClick={() => setSelected(w)}
            className={`map-stock-item flex items-center gap-3 px-2.5 py-2 md:py-2 rounded-lg text-left transition-colors w-full ${
              selected?.id === w.id ? "bg-blue-50" : "hover:bg-gray-50"
            }`}
          >
            <span className="text-xl md:text-lg leading-none shrink-0">{w.flag}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm md:text-xs font-semibold text-gray-900 truncate">{w.country}</p>
              <p className="text-xs text-gray-400 truncate">{w.city}</p>
            </div>
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-full shrink-0"
              style={{ background: `${w.color}18`, color: w.color }}
            >
              {w.price}
            </span>
          </button>
        ))}
      </div>

      <div className="border-t border-gray-100" />

      {selected && (
        <div className="bg-gray-50 rounded-xl px-3 py-3 md:py-2.5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl md:text-xl">{selected.flag}</span>
            <div>
              <p className="text-sm md:text-xs font-bold text-gray-900">{selected.country}</p>
              <p className="text-xs text-gray-400">{selected.city}</p>
            </div>
          </div>
          <div className="text-sm md:text-xs text-gray-500 leading-relaxed space-y-1">
            <p><span className="text-gray-400">Address: </span>{selected.address}</p>
            <p>
              <span className="text-gray-400">Delivery: </span>
              <span className="text-green-600 font-semibold">{selected.delivery}</span>
            </p>
            <p><span className="text-gray-400">In stocks: </span>{selected.stock}</p>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={handleDownload}
        disabled={downloading}
        className="map-pdf-btn flex items-center justify-center gap-2 w-full py-3 md:py-2.5 rounded-full text-white text-sm md:text-xs font-bold tracking-wide transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-60 mt-auto"
        style={{ background: "#1a1a2e" }}
      >
        {downloading ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" />
            </svg>
            Open...
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            PDF price · {selected?.country}
          </>
        )}
      </button>
    </aside>
  );
}

export default function LogisticsMap() {
  const mapRef = useRef(null);
  const mapCanvasRef = useRef(null);
  const mapInstance = useRef(null);
  const markersRef = useRef({});
  const [selected, setSelected] = useState(WAREHOUSES[0]);
  const [query, setQuery] = useState("");
  const [dropdown, setDropdown] = useState([]);
  const [downloading, setDownloading] = useState(false);
  const searchRef = useRef(null);

  // ── Инициализация Leaflet ──────────────────────────────────────────────────
  useEffect(() => {
    const container = mapRef.current;
    if (!container || mapInstance.current) return;

    let cancelled = false;

    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });

    if (container._leaflet_id) {
      delete container._leaflet_id;
    }

    const map = L.map(container, {
      center: [35, 65],
      zoom: 3,
      zoomControl: false,
      attributionControl: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: "&copy; OpenStreetMap",
    }).addTo(map);

    L.control.zoom({ position: "bottomright" }).addTo(map);

    WAREHOUSES.forEach((w) => {
      const marker = L.marker([w.lat, w.lng], {
        icon: makePinIcon(L, w.color, w.id === WAREHOUSES[0].id),
      }).addTo(map);

      marker.bindPopup(
        `<div style="font-family:sans-serif;min-width:140px">
          <b style="font-size:13px">${w.flag} ${w.country}</b><br/>
          <span style="font-size:11px;color:#6b7280">${w.city} · ${w.price}</span>
        </div>`,
        { closeButton: false, offset: [0, -4] }
      );

      marker.on("click", () => {
        setSelected(w);
      });

      markersRef.current[w.id] = { marker, L };
    });

    if (cancelled) {
      map.remove();
      return;
    }

    mapInstance.current = { map, L };

    const fitMap = () => {
      if (cancelled || !mapInstance.current) return;
      map.invalidateSize({ animate: false });
    };

    requestAnimationFrame(fitMap);
    const t1 = setTimeout(fitMap, 100);
    const t2 = setTimeout(() => {
      fitMap();
      markersRef.current[1]?.marker.openPopup();
    }, 400);

    return () => {
      cancelled = true;
      clearTimeout(t1);
      clearTimeout(t2);
      map.remove();
      mapInstance.current = null;
      markersRef.current = {};
      if (container._leaflet_id) {
        delete container._leaflet_id;
      }
    };
  }, []);

  // Leaflet must recalculate size when layout switches (stack ↔ sidebar)
  useEffect(() => {
    const el = mapCanvasRef.current;
    if (!el) return;

    const invalidate = () => {
      requestAnimationFrame(() => {
        mapInstance.current?.map?.invalidateSize();
      });
    };

    invalidate();
    const ro = new ResizeObserver(invalidate);
    ro.observe(el);
    window.addEventListener("resize", invalidate);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", invalidate);
    };
  }, []);

  const selectedIdRef = useRef(selected.id);
  const isFirstSelectRef = useRef(true);

  // ── Реакция на смену выбранного склада ────────────────────────────────────
  useEffect(() => {
    if (!mapInstance.current) return;
    const { map, L } = mapInstance.current;

    WAREHOUSES.forEach((w) => {
      const ref = markersRef.current[w.id];
      if (ref) {
        ref.marker.setIcon(makePinIcon(L, w.color, w.id === selected.id));
      }
    });

    if (isFirstSelectRef.current) {
      isFirstSelectRef.current = false;
      selectedIdRef.current = selected.id;
      return;
    }

    if (selectedIdRef.current === selected.id) return;
    selectedIdRef.current = selected.id;

    map.flyTo([selected.lat, selected.lng], 5, { duration: 1.2 });

    const t = setTimeout(() => {
      markersRef.current[selected.id]?.marker.openPopup();
    }, 1300);

    return () => clearTimeout(t);
  }, [selected]);

  // ── Поиск ─────────────────────────────────────────────────────────────────
  const handleSearch = (val) => {
    setQuery(val);
    const q = val.toLowerCase().trim();
    if (!q) { setDropdown([]); return; }
    setDropdown(
      WAREHOUSES.filter(
        (w) =>
          w.country.toLowerCase().includes(q) ||
          w.en.toLowerCase().includes(q) ||
          w.city.toLowerCase().includes(q)
      )
    );
  };

  const pickFromDropdown = (w) => {
    setSelected(w);
    setQuery("");
    setDropdown([]);
  };

  const clearSearch = () => {
    setQuery("");
    setDropdown([]);
  };

  // ── Скачать PDF ───────────────────────────────────────────────────────────
  // PDF файлы лежат в /public/pricelists/*.pdf
  // Добавь свои файлы туда и они скачаются напрямую
  const handleDownload = () => {
    if (!selected || downloading) return;
    setDownloading(true);

    const a = document.createElement("a");
    a.href = selected.pdfFile;          // /public/pricelists/china.pdf
    a.download = `pricelist_${selected.en.toLowerCase()}.pdf`;
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setTimeout(() => setDownloading(false), 1000);
  };

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <section className="relative z-0 w-full flex items-center justify-center py-10 sm:py-16 px-4 min-w-0 overflow-hidden">
      <div className="w-full max-w-6xl min-w-0">

        <div className="text-center mb-6 sm:mb-8 px-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500 uppercase tracking-wide mb-3 sm:mb-4">
          Our warehouses are all over the world
          </h2>
          <p className="text-gray-400 text-sm mt-2">
          Select a country, find out the details, and download the price list
          </p>
        </div>

        <div className="map-layout">
          <div ref={mapCanvasRef} className="map-layout__canvas">
            <div ref={mapRef} className="map-layout__leaflet" />
          </div>

          <StocksSidebar
            selected={selected}
            setSelected={setSelected}
            query={query}
            handleSearch={handleSearch}
            dropdown={dropdown}
            pickFromDropdown={pickFromDropdown}
            clearSearch={clearSearch}
            downloading={downloading}
            handleDownload={handleDownload}
            searchRef={searchRef}
          />
        </div>
      </div>
    </section>
  );
}